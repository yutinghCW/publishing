<template>
  <main>
    <div class="container container-summary px-md-30">
      <Breadcrumb 
        :emit-category="'author'"
        :emit-breadcrumb="authors.group"
      />
      <div class="col-img-placeholder"></div>
      <div class="col-master ps-md-20 pe-md-30">
        <div class="subtitle fw-bold px-md-10">
          <!-- <div class="label fs-5">活動中</div> -->
          <div class="text fs-2 serif">
            {{ authors.name }} <span v-if="authors.english_name" class="d-md-inline d-block">{{ authors.english_name }}</span>
          </div>
        </div>
        <div class="col-img mt-md-0 mt-20">
          <img :src="authors.photo_url" :alt="`作者圖 - ${authors.name}`">
        </div>
        <div
          class="author-intro"
          :class="{
            'ellipsis-block': detectContent('introduction', 144),
            'expand-block': !detectContent('introduction', 144),
          }"
        >
          <div class="mt-md-10 mt-20 px-md-10" v-html="authors.introduction"></div>
          <More
            class="mt-20"
            v-if="!$device.isDesktop && detectContent('introduction', 144)"
            @emitMoreTrigged="onOpenTrigged('introduction')"
          />
        </div>
        <hr v-if="$is_not_empty_array(authors.social_media)" class="my-20">
        <div class="social-group" v-html="expendSocial(authors.social_media)"></div>
      </div>
    </div>
    <div class="container container-detail px-md-0 pb-40">
      <article>
        <section v-if="$is_not_empty_array(books.items)" data-id="channel" class="unit-section">
          <a class="anchor" id="channel"></a>
          <div class="reading position-relative py-40 mb-40">
            <svg class="reading-top" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="white"></path>
            </svg>        
            <div class="px-md-30">
              <Title class="mb-40">著作</Title>
              <Series emit-number="5" :emit-series="books" />
            </div>
            <svg class="reading-bottom" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="#F5F5F5"></path>
            </svg>
          </div>
        </section>
        <section v-if="$is_not_empty_array(articles.items)" data-id="digest" class="unit-section">
          <a class="anchor" id="digest"></a>
          <Title class="mb-40">文章</Title>
          <AuthorDigest 
            :emit-digest="articles.items"
            :class="{
              'ellipsis-block': articlesToggle
            }"
            class="px-md-30"
          />
          <More
            v-if="articlesToggle"
            @emitMoreTrigged="articlesToggle = !articlesToggle"
          />
          <hr class="mt-20 mb-30">
        </section>
        <section v-if="$is_not_empty_array(videos.items)" data-id="video" class="unit-section">
          <a class="anchor" id="video"></a>
          <Title class="mb-40">相關影音</Title>
          <Video
            :emit-video="videos.items"
            @emit-modal="onOpenModal"
            :class="{
              'author-ellipsis-block': videosToggle
            }"
          />
          <More
            v-if="videosToggle"
            @emitMoreTrigged="videosToggle = !videosToggle"
          />
        </section>
      </article>
      <aside class="px-md-30">
        <nav>
          <ol class="d-md-block d-none">
            <li><a v-if="$is_not_empty_array(books.items)" href="#channel" class="btn btn-text smooth-scroll">著作</a></li>
            <li><a v-if="$is_not_empty_array(articles.items)" href="#digest" class="btn btn-text smooth-scroll">文章</a></li>
            <li><a v-if="$is_not_empty_array(videos.items)" href="#video" class="btn btn-text smooth-scroll">相關影音</a></li>
          </ol>
          <ol>
            <li><a href="#top" class="btn btn-top smooth-scroll"><i class="icon icon-arrow-up"></i></a></li>
          </ol>
        </nav>
      </aside>
    </div>
    <transition name="fade">
      <Modal
        v-if="modal.status"
        :emit-modal="modal"
        @emit-close="onCloseModal"
      />
    </transition>
  </main>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        authors: {},
        books: {
          "pagination": {},
          "items": []
        },
        articles: {
          "pagination": {},
          "items": []
        },
        videos: {
          "pagination": {},
          "items": []
        },
        modal: this.layoutModal,
        introduction: null,
        articlesToggle: false,
        videosToggle: false,
      }
    },
    inject: ['layoutModal'],
    async asyncData ({ params, error, query }) {
      try {
        const authorApi = await axios.get(`${process.env.books_api}/authors/${params.id}`);
        const authorBookApi = await axios.get(`${process.env.books_api}/authors/${params.id}/books?page=1&per_page=15&sort_publish_date=desc`);
        const authorArticlesApi = await axios.get(`${process.env.books_api}/authors/${params.id}/articles?page=1&per_page=15&sort_publish_date=desc`);
        const authorVideoApi = await axios.get(`${process.env.books_api}/authors/${params.id}/videos?page=1&per_page=15&sort_publish_date=desc`);
        return {
          authors: authorApi.data.items[0],
          books: {
            pagination: authorBookApi.data.pagination,
            items: authorBookApi.data.items
          },
          articles: {
            pagination: authorArticlesApi.data.pagination,
            items: authorArticlesApi.data.items
          },
          videos: {
            pagination: authorVideoApi.data.pagination,
            items: authorVideoApi.data.items
          },
        };
      } catch (e) {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    methods: {
      onOpenModal(type, source, title) {
        this.modal.status = true;
        this.modal.type = type;
        if ( type === 'video' ) {
          this.modal.title = title;
        }
        this.modal.source = source;
      },
      onCloseModal() {
        this.modal.status = false;
        this.modal.type = null;
        this.modal.title = null;
        this.modal.source = null;
      },
      onOpenTrigged(variant) {
        this[variant] = null;
      },
      detectContent(variant, height) {
        if ( this[variant] > height ) {
          return true
        }
      },
      expendSocial(array) {
        let str = '';
        array.forEach(item => {
          str += `<a href="${item.url}" title="${item.title}" target="_blank" rel="noopener noreferrer" class="social-item">`;
          switch (item.type) {
            case 1:
              str += `<i class="icon icon-link"></i>
                      <span class="text">個人網站</span>`;
              break;
            case 2:
              str += `<i class="icon icon-facebook"></i>
                      <span class="text">Facebook</span>`;
              break;
            case 3:
              str += `<i class="icon icon-instagram"></i>
                      <span class="text">Instagram</span>`;
              break;
            case 4:
              str += `<i class="icon icon-twitter"></i>
                      <span class="text">Twitter</span>`;
              break;
            case 5:
              str += `<i class="icon icon-youtube"></i>
                      <span class="text">Youtube</span>`;
              break;
          }
          str += `</a>`;
        });
        return str;
      },
    },
    mounted () {
      this.introduction = document.querySelector('.author-intro').clientHeight;

      if ( this.$device.isDesktop ) {
        if ( this.articles.items.length > 4 ) {
          this.articlesToggle = true;
        }

        if ( this.videos.items.length > 3 ) {
          this.videosToggle = true;
        }
      } else {
        if ( this.articles.items.length > 3 ) {
          this.articlesToggle = true;
        }

        if ( this.videos.items.length > 2 ) {
          this.videosToggle = true;
        }
      }

      const _document = document.querySelector.bind(document);
      const _documents = document.querySelectorAll.bind(document);
      let activeLink = null;
      window.addEventListener("scroll", () => {
        _documents(".unit-section").forEach(section => {
          const { y } = section.getBoundingClientRect();
          if ((y - 220) <= 0) {
            if (activeLink != null) {
              activeLink.classList.remove("active");
            }
            activeLink = _document(`nav > ol > li > a[href~="#${section.dataset.id}"]`);
            activeLink.classList.add("active");
          }
        });
      });
    },
    head () {
      return {
        bodyAttrs: {
          class: [
            'author-page inner-page',
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .col-img {
    display: flex;
    justify-content: flex-end;
    background-color: $gray-100;
    overflow: hidden;
    @include media-breakpoint-up(md) {
      position: absolute;
      top: 0;
      right: 100%;
      width: 300px;
      height: 300px;
    }
    img {
      @include media-breakpoint-up(md) {
        position: absolute;
        top: 0;
        right: 0;
        height: 300px;
      }
      @include media-breakpoint-down(md) {
        height: 220px;
      }
    }
  }
  .col-master {
    min-height: 300px;
  }
  .anchor {
    top: -171px;
    @at-root .scroll #{&} {
      top: -106px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
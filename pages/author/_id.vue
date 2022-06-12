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
          <div class="label fs-5">活動中</div>
          <div class="text fs-2 serif">
            {{ authors.name }} <span v-if="authors.english_name" class="d-md-inline d-block">{{ authors.english_name }}</span>
          </div>
        </div>
        <div class="col-img mt-md-0 mt-20">
          <img :src="authors.photo_url" alt="賽門．西奈克 Simon Sinek">
        </div>
        <div
          class="author-intro"
          :class="{
            'ellipsis-block': detectContent('introduction', 144),
            'expand-block': !detectContent('introduction', 144),
          }"
        >
          <p class="mt-md-10 mt-20 mb-0 px-md-10">
            {{ authors.introduction }}
          </p>
          <More
            class="mt-20"
            v-if="!$device.isDesktop && detectContent('introduction', 144)"
            @emitMoreTrigged="onOpenTrigged('introduction')"
          />
        </div>
        <hr class="my-20">
        <div class="social-group" v-html="expendSocial(authors.social_media)"></div>
      </div>
    </div>
    <div class="container container-detail px-md-0 pb-40">
      <article>
        <section data-id="channel" class="unit-section">
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
        <section data-id="digest" class="unit-section">
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
        <section data-id="video" class="unit-section">
          <a class="anchor" id="video"></a>
          <Title class="mb-40">相關影音</Title>
          <Video
            :emit-video="videos.items"
            @emit-modal="onOpenModal"
          />
        </section>
      </article>
      <aside class="px-md-30">
        <nav>
          <ol class="d-md-block d-none">
            <li><a href="#channel" class="btn btn-text smooth-scroll">著作</a></li>
            <li><a href="#digest" class="btn btn-text smooth-scroll">文章</a></li>
            <li><a href="#video" class="btn btn-text smooth-scroll">相關影音</a></li>
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
  export default {
    data() {
      return {
        authors: {
          "id": 1,
          "name": "里德‧海斯汀",
          "english_name": "Reed Hastings",
          "photo_url": "https://fakeimg.pl/253x193/",
          "introduction": "里德．海斯汀（Reed Hastings）是創業家，1997 年與友人共同創立 Netflix，並自 1999 年起擔任董事長兼執行長，在娛樂產業掀起革命。他的第一家公司 Pure Software 創立於 1991 年，在 Netflix 成立前夕被收購。里德在 2000 年到 2004 年曾任加州教育委員會委員，至今活躍於教育慈善事業，是 Dreambox Learning、KIPP 和 Pahara 等多個教育組織的董事成員。1983 年，他在鮑登學院取得學士學位，1988 年於史丹佛大學取得人工智能碩士學位。大學畢業到研究所入學之間，里德參與和平工作團在南非擔任志願教師。",
          "group": 2,
          "social_media": [
            {
              "id": 1,
              "title": "@cw",
              "url": "https://www.cw.com.tw/",
              "type": 1,
              "sort": 1
            },
            {
              "id": 3,
              "title": "@天下讀者俱樂部",
              "url": "https://www.facebook.com/cwbookclub",
              "type": 3,
              "sort": 2
            },
            {
              "id": 4,
              "title": "@bookcw1",
              "url": "https://www.instagram.com/bookcw1/",
              "type": 4,
              "sort": 3
            }
          ]
        },
        books: [
          {
            "id": 899,
            "title": "療癒孤寂",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              },
              {
                "id": 2,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 2
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 898,
            "title": "零規則",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              },
              {
                "id": 2,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 2
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 897,
            "title": "零規則",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              },
              {
                "id": 2,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 2
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 896,
            "title": "零規則",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              },
              {
                "id": 2,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 2
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 895,
            "title": "零規則",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              },
              {
                "id": 2,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 2
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 894,
            "title": "零規則",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              },
              {
                "id": 2,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 2
              }
            ],
            "publish_date": "2022-02-22"
          }
        ],
        articles: {
          "pagination": {
            "current_page": 1,
            "last_page": 1,
            "per_page": 10,
            "from": 1,
            "to": 2,
            "total": 2
          },
          "items": [
            {
              "id": 235,
              "title": "追求創新，別再組交響樂團，改玩爵士樂吧",
              "photo_url": "https://fakeimg.pl/253x193/",
              "url": "https://csr.cw.com.tw/",
              "sort": 1
            },
            {
              "id": 234,
              "title": "沒有花費上限，只有「是否符合公司最大利益？」",
              "photo_url": "https://fakeimg.pl/253x193/",
              "url": "https://www.cw.com.tw/",
              "sort": 2
            }
          ]
        },
        videos: {
          "pagination": {
            "current_page": 1,
            "last_page": 1,
            "per_page": 10,
            "from": 1,
            "to": 2,
            "total": 2
          },
          "items": [
            {
              "id": 1,
              "url": "https://youtu.be/qWNoJJNS8bY",
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 1
            },
            {
              "id": 2,
              "url": "https://youtu.be/E-n-VD4gF4M",
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 2
            }
          ]
        },
        modal: this.layoutModal,
        introduction: null,
        articlesToggle: false,
      }
    },
    inject: ['layoutModal'],
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
        console.log(this[variant], height);
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
            this.modal.status ? 'opened' : '',
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
<template>
  <main>
    <div class="container px-md-30">
      <Breadcrumb 
        :emit-category="'author'"
      />
    </div>
    <section class="container position-sticky pt-md-0 p-20">
      <div class="button-group">
        <NuxtLink :to="{path: '/authors', hash: 'chinese'}" class="btn btn-contained btn-dark">華文作者</NuxtLink>
        <NuxtLink :to="{path: '/authors', hash: 'foreign'}" class="btn btn-contained btn-dark">外文作者</NuxtLink>
      </div>
    </section>
    <section class="container px-md-30 mt-md-30 mt-10">
      <a class="anchor" id="chinese"></a>
      <Title class="mb-0">華文作者</Title>
      <div
        class="cards cards-authors"
        :class="{'expand-block': chinese.pagination.current_page === chinese.pagination.last_page}"
      >
        <div
          class="card-author"
          v-for="item in chinese.items"
          :key="`華文作者-${item.id}`"
        >
          <NuxtLink :to="{path: `/author/${item.id}`}">
            <span class="card-image">
              <img :src="item.photo_url" :alt="item.name">
            </span>
            <span class="card-body pt-10 text-center">
              <span class="card-title h4 serif fw-bold my-0">
                {{ item.name }}
              </span>
            </span>
          </NuxtLink>
        </div>
      </div>
      <More
        class="mt-20"
        v-if="chinese.pagination.current_page !== chinese.pagination.last_page"
        @emitMoreTrigged="getAuthorApi('chinese', 'next', chinese.pagination.current_page+1)"
      />
    </section>
    <div class="container px-md-0">
      <hr class="mt-20 mb-30">
    </div>
    <section class="container px-md-30 pb-40 mb-20">
      <a class="anchor" id="foreign"></a>
      <Title class="mb-0">外文作者</Title>
      <div
        class="cards cards-authors"
        :class="{'expand-block': foreign.pagination.current_page === foreign.pagination.last_page}"
      >
        <div
          class="card-author"
          v-for="item in foreign.items"
          :key="`外文作者-${item.id}`"
        >
          <NuxtLink :to="{path: `/author/${item.id}`}">
            <span class="card-image">
              <img :src="item.photo_url" :alt="item.name">
            </span>
            <span class="card-body pt-10 text-center">
              <span class="card-title h4 serif fw-bold my-0">
                {{ item.name }}
              </span>
            </span>
          </NuxtLink>
        </div>
      </div>
      <More
        class="mt-20"
        v-if="foreign.pagination.current_page !== foreign.pagination.last_page"
        @emitMoreTrigged="getAuthorApi('foreign', 'next', foreign.pagination.current_page+1)"
      />
    </section>
  </main>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        articles: null,
        chinese: {
          pagination: {
            "current_page": null,
            "per_page": null,
            "last_page": null,
            "total": null,
            "from": null,
            "to": null
          },
          items: [],
        },
        foreign: {
          pagination: {
            "current_page": null,
            "per_page": null,
            "last_page": null,
            "total": null,
            "from": null,
            "to": null
          },
          items: [],
        },
      }
    },
    async asyncData ({ params, error, query }) {
      try {
        const chineseApi = await axios.get(`${process.env.books_api}/authors/?group=1&per_page=15&page=1`);
        const foreignApi = await axios.get(`${process.env.books_api}/authors/?group=2&per_page=15&page=1`);
        return {
          chinese: {
            pagination: chineseApi.data.pagination,
            items: chineseApi.data.items,
          },
          foreign: {
            pagination: foreignApi.data.pagination,
            items: foreignApi.data.items,
          }
        };
      } catch (e) {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    methods: {
      getAuthorApi(type, method='init', page=1) {
        let group = null;
        switch (type) {
          case 'chinese':
            group = 1;
            break;
          case 'foreign':
            group = 2;
            break;
        }
        let perPageAmount = null;
        if ( this.$device.isDesktop ) {
          perPageAmount = 15;
        } else {
          perPageAmount = 6
        }
        axios.get(`${process.env.books_api}/authors/?group=${group}&per_page=${perPageAmount}&page=${page}`)
          .then(response => {
            switch (type) {
              case 'chinese':
                this.chinese.pagination = response.data.pagination;
                if ( method === 'next' ) {
                  this.appendAuthor('chinese', response.data.items)
                } else {
                  this.chinese.items = response.data.items;
                }
                break;
              case 'foreign':
                this.foreign.pagination = response.data.pagination;
                if ( method === 'next' ) {
                  this.appendAuthor('foreign', response.data.items)
                } else {
                  this.foreign.items = response.data.items;
                }
                break;
            }
          })
      },
      appendAuthor(type, array) {
        array.forEach(item => {
          if ( type === 'chinese' ) {
            this.chinese.items.push(item);
          } else {
            this.foreign.items.push(item);
          }
        });
      },
    },
    mounted () {
      axios.defaults.headers.common['authorization'] = localStorage.getItem('cw_publishing_token');
      // this.getAuthorApi('chinese');
      // this.getAuthorApi('foreign');
    },
    head () {
      return {
        bodyAttrs: {
          class: [
            'authors-page inner-page'
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .anchor {
    top: -171px;
    @at-root .scroll #{&} {
      top: -106px;
    }
  }
  section {
    position: relative;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  .position-sticky {
    @include media-breakpoint-down(md) {
      top: 71px;
      margin-top: -20px;
      background-color: #fff;
      z-index: 2;
    }
  }
  .button-group {
    justify-content: center;
    > * {
      margin-bottom: 0;
    }
  }
  .cards-authors {
    display: flex;
    flex-wrap: wrap;
    &.ellipsis-block {
      .card-author {
        @include media-breakpoint-up(md) {
          &:nth-child(15) ~ .card-author {
            display: none;
          }
        }
        @include media-breakpoint-down(md) {
          &:nth-child(6) ~ .card-author {
            display: none;
          }
        }
      }
      .more {
        display: flex;
      }
    }
    &.expand-block {
      padding-bottom: 40px;
    }
    > .card-author {
      margin-top: 40px;
      @include media-breakpoint-up(md) {
        width: calc((100% - 120px) / 5);
        margin-left: 30px;
        &:nth-child(5n+1) {
          margin-left: 0;
        }
      }
      @include media-breakpoint-down(md) {
        width: calc((100% - 20px) / 2);
        margin-left: 20px;
        &:nth-child(2n+1) {
          margin-left: 0;
        }
      }
      .card-image {
        max-width: 70px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
</style>

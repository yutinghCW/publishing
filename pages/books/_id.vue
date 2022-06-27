<template>
  <main class="pb-20">
    <div class="container">
      <Breadcrumb 
        :emit-category="'books'"
        :emit-breadcrumb="'所有主題'"
      />
      <article class="px-10">
        <Title class="mb-40">{{ title }}</Title>
        <div class="cards cards-books">
          <div
            v-for="book in books"
            :key="`書籍列表-${title}-${book.id}`"
            class="card-books"
            :class="{
              'hot': book.selling_status === 2, 
              'soldout': book.selling_status === 3, 
              'new': book.selling_status === 4
            }"
          >
            <NuxtLink :to="`/book/${book.id}`">
              <span class="card-head">
                <span class="card-label" v-if="book.selling_status == 2">熱銷</span>
                <span class="card-label" v-else-if="book.selling_status == 3">絕版</span>
                <span class="card-label" v-else-if="book.selling_status == 4">新發行</span>
                <span class="card-image">
                  <img :src="book.covers[0].photo_url" :alt="book.title">
                </span>
              </span>
              <span class="card-body">
                <h4 class="serif fw-bold mt-10 mb-5">{{ book.title }}</h4>
                <span class="fs-5" v-if="book.subtitle">{{ book.subtitle }}</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </article>
      <hr class="my-30">
      <article class="px-10">
        <Title class="mb-40">其他主題</Title>
        <div class="button-group pb-40">
          <NuxtLink
            v-for="channel in restChannels"
            :key="`閱讀-${title}-${channel.id}`"
            :to="`/articles/${channel.id}`"
            class="btn btn-contained btn-dark"
          >
            {{ channel.title }}
          </NuxtLink>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        title: '',
        books: [],
        restChannels: [],
      }
    },
    async asyncData ({ params, error, query }) {
      try {
        const booksApi = await axios.get(
          `${process.env.books_api}/books?category=${params.id}&sort_publish_date=desc&sort_id=desc`
        );
        const categoriesApi = await axios.get(`${process.env.books_api}/categories/?sort=asc`);

        let getTitle = '';
        let getRestChannels = [];
        categoriesApi.data.items.some(item => {
          if (parseInt(item.id) === parseInt(params.id)) {
            getTitle = item.title;
          } else {
            getRestChannels.push(item);
          }
        });

        return {
          title: getTitle,
          restChannels: getRestChannels,
          books: booksApi.data.items
        };
      } catch (e) {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    head () {
      return {
        bodyAttrs: {
          class: [
            'books-page inner-page',
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .cards-books {
    display: flex;
    flex-wrap: wrap;
    > * {
      margin-left: 20px;
      @include media-breakpoint-up(md) {
        width: calc((100% - 80px) / 5);
        &:nth-child(5n+1) {
          margin-left: 0;
        }
      }
      @include media-breakpoint-up(sm) {
        @include media-breakpoint-down(md) {
          width: calc((100% - 40px) / 3);
          &:nth-child(3n+1) {
            margin-left: 0;
          }
        }
      }
      @include media-breakpoint-down(sm) {
        width: calc((100% - 20px) / 2);
        &:nth-child(2n+1) {
          margin-left: 0;
        }
      }
    }
  }
  .card-books {
    margin-bottom: 40px;
    .card-head {
      position: relative;
      padding: 20px;
      background-color: $gray-100;
    }
    .card-body {
      line-height: 1.35;
      h4 {
        color: $gray-400;
      }
      span {
        color: $gray-300;
        i {
          color: $blue-200;
          font-style: normal;
        }
      }
    }
    .card-label {
      position: absolute;
      top: 15px;
      left: 0;
      padding: 3px 15px 2px 10px;
      color: $white;
      font-size: $h5;
      font-weight: bold;
      border-radius: 0 1em 1em 0;
      z-index: 2;
    }
    .card-image {
      position: relative;
      // overflow: hidden;
      &::before {
        @include beforeafter('', block);
        position: relative;
        width: 100%;
        padding-top: 105%;
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 100%;
        max-height: 100%;
        box-shadow: 0 1px 6px rgba($gray-400, 0.1);
        transform: translate(-50%, -50%);
        transition: max-width 0.2s $timing-function, max-height 0.2s $timing-function;
      }
    }
    &:hover {
      .card-image img {
        max-width: 105%;
        max-height: 105%;
      }
    }
    &.hot {
      .card-label {
        background-color: $orange-200;
      }
    }
    &.new {
      .card-label {
        background-color: $blue-200;
      }
    }
    &.soldout {
      .card-label {
        background-color: $gray-300;
      }
    }
  }
</style>

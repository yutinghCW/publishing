<template>
  <main class="pb-20">
    <div class="container">
      <Breadcrumb 
        :emit-category="'books'"
      />
      <article class="px-10 pb-40">
        <Title class="mb-40">所有主題</Title>
        <div class="cards cards-topic">
          <div
            v-for="book in books"
            :key="book.id"
            class="card-topic"
          >
            <NuxtLink :to="`/books/${book.id}`">
              <span class="card-image px-15 pt-15">
                <img :src="book.photo_url" :alt="book.title">
              </span>
              <span class="card-body">
                <span class="card-title fs-4 py-10">{{ book.title }}</span>
              </span>
            </NuxtLink>
          </div>
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
        books: null,
      }
    },
    async asyncData ({ params, error, query }) {
      try {
        const categoriesApi = await axios.get(`${process.env.books_api}/categories/?sort=asc`);
        return {
          books: categoriesApi.data.items
        };
      } catch (e) {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .cards-topic {
    display: flex;
    flex-wrap: wrap;
    > * {
      margin-left: 20px;
      margin-bottom: 20px;
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
      a {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .card-body {
        margin-top: auto;
      }
    }
  }
</style>

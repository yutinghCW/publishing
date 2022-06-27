<template>
  <main class="pb-20">
    <div class="container">
      <Breadcrumb 
        :emit-category="'articles'"
      />
      <article class="px-10 pb-40">
        <Title class="mb-40">所有主題</Title>
        <div class="button-group pb-40">
          <NuxtLink
            v-for="article in articles"
            :key="`閱讀列表-${article.id}`"
            :to="`/articles/${article.id}`"
            class="btn btn-contained btn-dark"
          >
            {{ article.title }}
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
        articles: null,
      }
    },
    async asyncData ({ params, error, query }) {
      try {
        const categoriesApi = await axios.get(`${process.env.books_api}/categories/?sort=asc`);
        return {
          articles: categoriesApi.data.items
        };
      } catch (e) {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  article {
    position: relative;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

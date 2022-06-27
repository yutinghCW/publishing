<template>
  <main class="pb-20">
    <div class="container">
      <Breadcrumb 
        :emit-category="'articles'"
        :emit-breadcrumb="'所有主題'"
      />
      <article class="px-10">
        <Title class="mb-40">{{ title }}</Title>
        <ArticleDigest 
          :emit-digest="articles.items"
          :class="{
            'ellipsis-block': articlesToggle
          }"
        />
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
        articles: {},
        articlesToggle: false,
        restChannels: [],
      }
    },
    async asyncData ({ params, error, query }) {
      try {
        const articlesApi = await axios.get(
          `${process.env.books_api}/articles?category=${params.id}&sort_publish_date=desc&sort_id=desc`
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
          articles: {
            pagination: articlesApi.data.pagination,
            items: articlesApi.data.items,
          }
        };
      } catch (e) {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    mounted () {
      if ( this.$device.isDesktop && this.articles.items.length > 4 ) {
        this.articlesToggle = true;
      } else if ( this.articles.items.length > 3 ) {
        this.articlesToggle = true;
      }
    },
    head () {
      return {
        bodyAttrs: {
          class: [
            'articles-page inner-page',
          ]
        }
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

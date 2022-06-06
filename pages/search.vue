<template>
  <main class="pt-30">
    <div class="container">
      <Title class="mb-30">搜尋結果</Title>
      <div class="result-text fs-3 text-md-center my-md-30 my-20">“<h1 class="fs-3 my-0">新人生</h1>”，共有 21 個結果</div>
      <hr class="my-md-30 my-20">
      <article class="pb-40 mb-20">
        <section>
          <div class="section-title fs-4">書籍</div>
          <SearchBook v-if="$device.isDesktop" />
          <SearchBookSwiper v-else />
        </section>
        <section>
          <div class="section-title fs-4">作者</div>
          <SearchAuthor v-if="$device.isDesktop" />
          <SearchAuthorSwiper v-else />
        </section>
      </article>
    </div>
  </main>
</template>

<script>
  export default {
    head () {
      return {
        bodyAttrs: {
          class: 'search-page inner-page'
        }
      }
    },
  }
</script>

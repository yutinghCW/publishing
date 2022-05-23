<template>
  <div>
    <Header />
    <Menu />
    <main>
      <IndexSwiper />
      <Belt />
      <section class="latest py-40">
        <a class="anchor" id="latest"></a>
        <div class="container px-md-30 py-10">
          <Title class="mb-30">新書出版</Title>
          <div class="row">
            <IndexLatest />
          </div>
        </div>
      </section>
      <section class="reading-background position-relative py-40">
        <svg class="reading-top" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="white"/>
        </svg>        
        <div class="container px-md-30 pt-40 pb-10">
          <Title class="mb-40">精選閱讀</Title>
          <IndexReading />
        </div>
        <svg class="reading-bottom" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="#F5F5F5"/>
        </svg>
      </section>
      <section class="author py-40">
        <div class="container px-md-30 pt-40 pb-10">
          <Title class="mb-40">本月名家</Title>
          <IndexAuthor />
        </div>
      </section>
      <section class="video py-40">
        <div class="container px-md-30 py-10">
          <Title class="mb-40">影音推薦</Title>
          <IndexVideo />
        </div>
      </section>
      <Newsletter />
    </main>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        bodyAttrs: {
          class: 'index-page'
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  main {
    overflow: hidden;
  }
</style>

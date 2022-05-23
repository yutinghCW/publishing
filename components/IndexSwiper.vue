<template>
  <section class="opening">
    <div class="container px-0">
      <swiper class="swiper swiper-opening" :options="swiperOption">
        <swiper-slide v-for="(order, idx) in 4" :key="idx">
          <NuxtLink to="/">
            <img :src="`images/common/banner-${order}.jpg`" width="100%" alt="">
          </NuxtLink>
        </swiper-slide>
        <div class="swiper-opening-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-opening-pagination",
            clickable: true,
          },
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    overflow: visible;
  }
</style>

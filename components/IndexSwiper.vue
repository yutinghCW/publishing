<template>
  <section class="opening">
    <div class="container px-0">
      <swiper class="swiper swiper-opening" :options="swiperOption">
        <swiper-slide v-for="slider in sliders" :key="`首頁-slider-${slider.id}`">
          <a :href="slider.url">
            <img :src="slider.photo_url.large" class="d-md-block d-none" width="100%" :alt="slider.title">
            <img :src="slider.photo_url.medium" class="d-md-none" width="100%" :alt="slider.title">
          </a>
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
        sliders: [
          {
            "id": 1,
            "title": "企業如何找到第二成長曲線？",
            "url": "https://books.cw.com.tw/",
            "photo_url": {
              large: "https://dummyimage.com/1280x360/",
              medium: "https://dummyimage.com/750x400/"
            },
            "target": 1,
            "sort": 1
          },
          {
            "id": 2,
            "title": "搖滾經濟學",
            "url": "https://books.cw.com.tw/",
            "photo_url": {
              large: "https://dummyimage.com/1280x360/",
              medium: "https://dummyimage.com/750x400/"
            },
            "target": 2,
            "sort": 2
          }
        ],
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

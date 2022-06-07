<template>
  <swiper
    class="swiper swiper-authors cards cards-author"
    :options="swiperOption"
  >
    <swiper-slide
      class="card-author"
      v-for="(item, index) in emitDatas"
      :key="index"
    >
      <NuxtLink :to="`/author/${item.id}`">
        <span class="card-image">
          <img :src="item.photo_url" :alt="item.name">
        </span>
        <span class="card-body pt-10 text-center">
          <span class="card-title h4 serif fw-bold my-0">
            {{ item.name }}<br/>{{ item.english_name }}
          </span>
        </span>
      </NuxtLink>
    </swiper-slide>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-latest-pagination",
            clickable: true,
          },
          navigation: {
            prevEl: '.swiper-latest-button-prev',
            nextEl: '.swiper-latest-button-next',
          },
          breakpoints: {
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            540: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
          },
        }
      }
    },
    props: ['emit-datas'],
  };
</script>

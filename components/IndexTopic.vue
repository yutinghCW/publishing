<template>
  <div class="col-12 px-md-40 pb-md-40">
    <div class="row px-md-30">
      <div class="position-relative px-md-40 px-0">
        <swiper class="swiper swiper-topic cards cards-topic" :options="swiperOption">
          <swiper-slide v-for="(topic, index) in topics" class="card-topic" :key="index">
            <NuxtLink :to="`/books/${topic.id}`">
              <span class="card-image px-15 pt-15">
                <img :src="topic.photo_url" :alt="topic.category.title">
              </span>
              <span class="card-body">
                <span class="card-title fs-4 py-10">{{ topic.category.title }}</span>
              </span>
            </NuxtLink>
          </swiper-slide>
        </swiper>
        <div class="swiper-topic-button-prev d-md-block d-none">
          <i class="icon icon-arrow-left"></i>
        </div>
        <div class="swiper-topic-button-next d-md-block d-none">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        topics: [
          {
            "id": 2,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-1.png",
            "category": {
              "id": 1,
              "title": "財經管理"
            },
            "sort": 1
          },
          {
            "id": 1,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-2.png",
            "category": {
              "id": 2,
              "title": "心靈成長"
            },
            "sort": 2
          },
          {
            "id": 1,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-3.png",
            "category": {
              "id": 2,
              "title": "心靈成長"
            },
            "sort": 2
          },
          {
            "id": 1,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-4.png",
            "category": {
              "id": 2,
              "title": "心靈成長"
            },
            "sort": 2
          },
          {
            "id": 1,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-5.png",
            "category": {
              "id": 2,
              "title": "心靈成長"
            },
            "sort": 2
          },
          {
            "id": 1,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-6.png",
            "category": {
              "id": 2,
              "title": "心靈成長"
            },
            "sort": 2
          },
          {
            "id": 1,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-1.png",
            "category": {
              "id": 2,
              "title": "心靈成長"
            },
            "sort": 2
          },
          {
            "id": 1,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-2.png",
            "category": {
              "id": 2,
              "title": "心靈成長"
            },
            "sort": 2
          },
          {
            "id": 1,
            "photo_url": "https://yutinghcw.github.io/publishing/assets/images/index/books-3.png",
            "category": {
              "id": 2,
              "title": "心靈成長"
            },
            "sort": 2
          }
        ],
        swiperOption: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-topic-pagination",
            clickable: true,
          },
          navigation: {
            prevEl: '.swiper-topic-button-prev',
            nextEl: '.swiper-topic-button-next',
          },
        }
      }
    },
  };
</script>

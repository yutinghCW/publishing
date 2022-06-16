<template>
  <div class="row px-md-40">
    <swiper class="swiper swiper-author cards cards-authors pt-5" :options="swiperOption">
      <swiper-slide v-for="author in authors" :key="author.name" class="card-author">
        <NuxtLink :to="`/author/${author.id}`">
          <span class="card-image">
            <img :src="author.photo_url" :alt="author.name">
          </span>
          <span class="card-body pt-10 text-center">
            <span class="card-title h4 serif fw-bold my-0">
              {{author.name}}<br/>{{author.english_name}}
            </span>
          </span>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        authors: [
          {
            "id": 2,
            "author_id": 1,
            "name": "凱莉‧紐金特",
            "english_name": "Carrie Nugent",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_author/201806/author_1529942327_2.png",
            "sort": 1
          },
          {
            "id": 1,
            "author_id": null,
            "name": "史考特‧蓋洛威",
            "english_name": "Scott Galloway",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_author/201808/author_1535021899_2.jpg",
            "sort": 2
          },
          {
            "id": 1,
            "author_id": null,
            "name": "安琪拉‧達克沃斯",
            "english_name": "Angela Duckworth",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_author/201701/author_704_1483954408_2.jpg",
            "sort": 2
          },
          {
            "id": 1,
            "author_id": null,
            "name": "吳修銘",
            "english_name": "Tim Wu",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_author/202007/author_1595700762_2.jpg",
            "sort": 2
          },
          {
            "id": 1,
            "author_id": null,
            "name": "丁菱娟",
            "english_name": "",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://www.aamataipei.com.tw/wp-content/uploads/2019/10/%E4%B8%81%E8%8F%B1%E5%A8%9F-1.png",
            "sort": 2
          }
        ],
        swiperOption: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 25,
          breakpoints: {
            1023: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 25,
            },
            767: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 0,
            },
          },
        }
      }
    },
  };
</script>

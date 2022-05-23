<template>
  <div class="col-12 px-md-40">
    <div class="cards cards-video px-lg-30">
      <div
        class="card-video"
        v-for="video in videos"
        :key="video.title"
        :data-title="video.title"
        :data-video="video.url"
      >
        <div class="card-image">
          <img :src="video.photo_url" :alt="video.title">
          <i class="icon icon-play"></i>
        </div>
        <div class="card-body">
          <div class="card-title h4 mt-10 mb-0">
            {{ video.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        videos: [
          {
            "id": 2,
            "title": "【痛恨競爭者？可敬的對手也是進步的推手 | 無限思維#3：可敬的對手】",
            "url": "https://www.youtube.com/embed/M9L0HlVrimE",
            "photo_url": "https://i.ytimg.com/vi/M9L0HlVrimE/maxresdefault.jpg",
            "type": 1,
            "sort": 1
          },
          {
            "id": 1,
            "title": "2022的經濟，老闆們關心什麼？《＃孫主任的經濟筆記》",
            "url": "https://www.youtube.com/embed/bD5pQi4GYXI",
            "photo_url": "https://i.ytimg.com/vi/bD5pQi4GYXI/maxresdefault.jpg",
            "type": 2,
            "sort": 2
          },
          {
            "id": 1,
            "title": "老是愛拖延？「#2分鐘法則」有效改善拖延人生！",
            "url": "https://www.youtube.com/embed/InfghH3vFaY",
            "photo_url": "https://i.ytimg.com/vi/InfghH3vFaY/maxresdefault.jpg",
            "type": 2,
            "sort": 2
          },
        ],
      }
    },
  };
</script>

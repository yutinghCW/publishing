<template>
  <main>
    <Announcement />
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
      <a class="anchor" id="reading"></a>   
      <div class="container px-md-30 pt-40 pb-10">
        <Title class="mb-40">精選閱讀</Title>
        <IndexReading />
      </div>
      <svg class="reading-bottom" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="#F5F5F5"/>
      </svg>
    </section>
    <section class="author py-md-40 py-30">
      <div class="container px-md-30 pt-md-40 pt-10 pb-md-10">
        <Title class="mb-40">本月名家</Title>
        <IndexAuthor />
      </div>
    </section>
    <section class="video py-md-40 py-30">
      <div class="container px-md-30 py-md-10">
        <Title class="mb-40">影音推薦</Title>
        <IndexVideo
          :emit-video="videos"
          @emit-modal="onOpenModal"
        />
      </div>
    </section>
    <section class="topic py-md-40 pt-30 pb-40">
      <div class="container px-md-30 py-md-10">
        <Title class="mb-40">主題推薦</Title>
        <IndexTopic />
      </div>
    </section>
    <Newsletter />
    <transition name="fade">
      <Modal
        v-if="modal.status"
        :emit-modal="modal"
        @emit-close="onCloseModal"
      />
    </transition>
  </main>
</template>

<script>
  export default {
    data () {
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
        modal: this.layoutModal,
      }
    },
    inject: ['layoutModal'],
    methods: {
      onOpenModal(type, source, title) {
        this.modal.status = true;
        this.modal.type = type;
        if ( type === 'video' ) {
          this.modal.title = title;
        }
        this.modal.source = source;
      },
      onCloseModal() {
        this.modal.status = false;
        this.modal.type = null;
        this.modal.title = null;
        this.modal.source = null;
      },
    },
    head () {
      return {
        bodyAttrs: {
          class: [
            'index-page',
          ]
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

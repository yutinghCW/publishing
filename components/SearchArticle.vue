<template>
  <div class="cards cards-digest cards-digest-type3">
    <div
      class="card-digest"
      v-for="(item, index) in emitDatas"
      :key="index"
    >
      <NuxtLink :to="`/article/${item.id}`">
        <span class="card-title h4 serif fw-bold mt-0 mb-md-0 mb-5 d-md-none">{{ item.title }}</span>
        <span class="card-body pe-md-30 pe-10">
          <span class="card-title h4 serif fw-bold mt-0 mb-10 d-md-block d-none">{{ item.title }}</span>
          <span class="card-phrase h4 mt-md-0 mt-5 mb-0">{{ item.content }}</span>
        </span>
        <span class="card-image">
          <img :src="item.photo_url" :alt="item.title">
        </span>
      </NuxtLink>
    </div>
    <More
      class="mx-auto"
      v-if="isLastPage"
      @emitMoreTrigged="onMoreTrigged"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLastPage: this.emitCursor
      }
    },
    props: ['emit-datas', 'emit-cursor'],
    methods: {
      onMoreTrigged() {
        console.log('這裡呼叫下一頁 Api');
        let fakeResponseLists = [
          {
            "id": 1,
            "title": "沒有未收到的訊息，只有他不想回的你",
            "photo_url": "https://books.cw.com.tw/upload_article/202201/article_1642156717_1.jpeg",
            "content": "穿心是什麼樣的感覺，就是你看見這句話的滋味，我們都一樣，誰都體會過這種他不夠愛你的為難。當他沒回訊息給你的時候你不要想太多，不回訊息的他可能是死了。哦！當然也可能是在忙，萬事皆有可能。我知道我知道我知道，你常常看著對話視窗，他連已讀都沒有，你從LINE跑到IG，看見他明明在線上，然後你又在IG裡傳訊息給他。他依然沒有回。"
          },
        ];
        let fakeResponseCursorId = null;
        fakeResponseLists.forEach(item => {
          this.emitDatas.push(item);
        });
        this.isLastPage = fakeResponseCursorId;
      },
    },
    watch: {
      emitCursor() {
        this.isLastPage = this.emitCursor
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .cards-digest {
    .card-digest {
      width: 100%;
      padding: 20px;
      margin-bottom: 20px;
      line-height: 1.25;
      border: 1px solid $gray-100;
      border-radius: 0.25rem;
      a {
        display: flex;
        flex-wrap: wrap;
      }
      .card-image {
        @include media-breakpoint-up(md) {
          width: 136px;
        }
        @include media-breakpoint-down(md) {
          width: 80px;
        }
      }
      .card-body {
        @include media-breakpoint-up(md) {
          width: calc(100% - 136px);
        }
        @include media-breakpoint-down(md) {
          width: calc(100% - 80px);
        }
      }
    }
  }
</style>

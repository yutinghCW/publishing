<template>
  <div class="cards cards-author">
    <div
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
            "name": "丹‧艾瑞利",
            "english_name": "Dan Ariely",
            "photo_url": "https://books.cw.com.tw/upload_author/201711/author_1511927821_2.jpeg"
          },
          {
            "id": 1,
            "name": "丹娜．卡斯佩森",
            "english_name": "Dana Caspersen",
            "photo_url": "https://books.cw.com.tw/upload_author/201706/author_1496909720_2.jpg"
          },
          {
            "id": 1,
            "name": "丹尼爾．高曼",
            "english_name": "Daniel Goleman",
            "photo_url": "https://books.cw.com.tw/upload_author/201702/author_1486975324_2.jpg"
          },
          {
            "id": 1,
            "name": "丹．羅姆",
            "english_name": "Dan Roam",
            "photo_url": "https://books.cw.com.tw/upload_author/201701/author_452_1484823810_1.jpg"
          },
          {
            "id": 1,
            "name": "亞歷山大．奧斯瓦爾德",
            "english_name": "Alex Osterwalder",
            "photo_url": "https://books.cw.com.tw/upload_author/201701/author_421_1484823809_1.jpg"
          },
          {
            "id": 1,
            "name": "亞當‧卡漢",
            "english_name": "Adam Kahane",
            "photo_url": "https://books.cw.com.tw/upload_author/201710/author_1508827081_2.jpg"
          },
          {
            "id": 1,
            "name": "亨利‧明茲柏格",
            "english_name": "Henry Mintzberg",
            "photo_url": "https://books.cw.com.tw/upload_author/201701/author_462_1484823810_1.jpg"
          },
          {
            "id": 1,
            "name": "伊森‧克洛斯",
            "english_name": "Ethan Kross",
            "photo_url": "https://books.cw.com.tw/upload_author/202105/author_1621422365_2.jpg"
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

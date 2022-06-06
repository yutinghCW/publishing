<template>
  <div class="col-12 px-md-40">
    <swiper class="swiper swiper-reading cards cards-reading" :options="swiperOption">
      <swiper-slide v-for="(choice, index) in splitChoices" :key="index">
        <div class="slide-group">
          <div v-for="item in choice" :key="item.title" class="card-reading">
            <NuxtLink :to="`/article/${item.id}`">
              <span class="card-image">
                <img :src="item.photo_url" :alt="item.title">
              </span>
              <span class="card-body mt-md-10 py-md-15 py-10 px-15">
                <span class="card-label fs-5 mb-5">快樂實現自主富有</span>
                <span class="card-title h4 serif fw-bold my-0">{{ item.title }}</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-reading-pagination d-md-none mt-10" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        choices: [
          {
            "id": 2,
            "title": "加薪時代來了，但高薪不會讓你變有錢？ 新富階級都靠一個祕密致富",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_article/202203/article_1648627089_1.jpg",
            "sort": 1
          },
          {
            "id": 1,
            "title": "小心「管他的效應」——設定具野心但有彈性的目標，打造不被一次失敗打倒的強韌心態",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_article/202205/article_1652251449_1.png",
            "sort": 2
          },
          {
            "id": 1,
            "title": "找出孩子天生的光采，才是最好的教養",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_article/202205/article_1652255938_1.jpg",
            "sort": 2
          },
          {
            "id": 1,
            "title": "貧民區出身的小歌女，回歸正常小學生的復學之路",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_article/202203/article_1647934350_1.jpg",
            "sort": 2
          },
          {
            "id": 1,
            "title": "不用死背、反覆抄寫，文轉圖深化記憶法讓你擁有冠軍級的記憶力",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_article/202205/article_1652257636_1.jpg",
            "sort": 2
          },
          {
            "id": 1,
            "title": "99%的努力都不會有結果？ 不要小看那有用1%帶來的龐大複利",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_article/202203/article_1648631256_1.jpg",
            "sort": 2
          },
          {
            "id": 1,
            "title": "熬夜讀書還是一直忘？懂得把資料變成知識，大腦這樣記憶才靈光！",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_article/202108/article_1629962204_1.jpg",
            "sort": 2
          },
          {
            "id": 1,
            "title": "沒有未收到的訊息，只有他不想回的你",
            "url": "https://books.cw.com.tw/",
            "photo_url": "https://books.cw.com.tw/upload_article/202201/article_1642156717_1.jpeg",
            "sort": 2
          }
        ],
        splitChoices: [],
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-reading-pagination",
            clickable: true,
          },
          breakpoints: {
            1024: {
              slidesPerView: 1,
            },
          },
        }
      }
    },
		mounted () {
      this.splitArray(4);
		},
		methods: {
      splitArray(amount) {
        Object.defineProperty(Array.prototype, 'chunk', {
          value: function(chunkSize) {
            var R = [];
            for (var i = 0; i < this.length; i += chunkSize)
              R.push(this.slice(i, i + chunkSize));
            return R;
          }
        });
        this.splitChoices = this.choices.chunk(amount);
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .slide-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px;
    .card-reading {
      @include media-breakpoint-up(md) {
        width: calc(50% - 10px);
      }
    }
  }
</style>

<style lang="scss">
  // @import "@/assets/sass/import";
  // .cards-reading {
  //   .swiper-wrapper {
  //     @include media-breakpoint-up(md) {
  //       flex-wrap: wrap;
  //       flex-direction: column;
  //     }
  //   }
  // }
</style>
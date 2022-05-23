<template>
  <div class="position-relative px-md-40 px-0">
    <swiper
      class="swiper swiper-latest cards"
      :options="swiperOption"
    >
      <swiper-slide class="card-book" v-for="(list, index) in lists" :key="index">
        <NuxtLink :to="`/book/${list.id}`">
          <span class="card-image">
            <img :src="list.covers[0].photo_url" :alt="list.title">
          </span>
          <span class="card-body pt-10">
            <span class="card-title h4 mb-5">{{ list.subtitle }}</span>
            <span class="card-author h5">
              <span v-for="(author, index) in list.authors" :key="`${author}-${index}`">{{ author.name }}</span>
            </span>
          </span>
        </NuxtLink>
      </swiper-slide>
    </swiper>
    <div class="swiper-latest-pagination d-md-block d-none"></div>
    <div class="swiper-latest-button-prev d-md-block d-none">
      <i class="icon icon-arrow-left"></i>
    </div>
    <div class="swiper-latest-button-next d-md-block d-none">
      <i class="icon icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lists: [
          {
            "id": 2,
            "title": "零規則",
            "subtitle": "高人才密度x完全透明x最低管控，首度完整直擊Netflix圈粉全球的關鍵祕密",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/001/087/39/0010873975.jpg",
                "sort": 1
              },
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/087/39/0010873975_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 2,
                "name": "里德‧海斯汀",
                "sort": 1
              },
              {
                "id": 1,
                "name": "艾琳‧梅爾",
                "sort": 2
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "價值主張年代",
            "subtitle": "設計思考X顧客不可或缺的需求=成功商業模式的獲利核心",
            "covers": [
              {
                "id": 2,
                "photo_url": " https://www.books.com.tw/img/001/074/52/0010745245.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": " https://www.books.com.tw/img/001/074/52/0010745245_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "亞歷山大‧奧斯瓦爾德",
                "sort": 1
              },
              {
                "id": 1,
                "name": "伊夫‧比紐赫",
                "sort": 1
              },
              {
                "id": 1,
                "name": "葛瑞格‧柏納達",
                "sort": 1
              },
              {
                "id": 1,
                "name": "亞倫‧史密斯",
                "sort": 1
              },
              {
                "id": 1,
                "name": "翠西‧帕帕達拉斯",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "高層次閱讀與思考",
            "subtitle": "建中名師親授，克服閱讀萬字長文的障礙，快速抓到重點，學會了比補習更有效",
            "covers": [
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/090/01/0010900135.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/001/090/01/0010900135_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "黃春木",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "牧路",
            "subtitle": "75年，守護島嶼的路行者",
            "covers": [
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/089/83/0010898303.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/001/089/83/0010898303_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "張雅琳",
                "sort": 1
              },
              {
                "id": 1,
                "name": "王宣喬",
                "sort": 1
              },
              {
                "id": 1,
                "name": "曹憶雯",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "提問力",
            "subtitle": "啟動探究思考的關鍵",
            "covers": [
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/090/91/0010909171.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/E05/011/46/E050114628.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "藍偉瑩",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "生態系競爭策略",
            "subtitle": "重新定義價值結構，在轉型中辨識正確的賽局，掌握策略工具，贏得先機",
            "covers": [
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/092/32/0010923267.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/001/092/32/0010923267_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "隆．艾德納",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "零阻力改變",
            "subtitle": "華頓商學院爆紅行為科學課，直擊內在弱點，高效自我成長",
            "covers": [
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/092/24/0010922454.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/001/092/24/0010922454_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "凱蒂‧米爾克曼",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "過目不忘的文轉圖深化記憶法",
            "subtitle": "跟著世界記憶權威用大腦最節能的學習途徑，讓你的輸出有觀點，學習力、企劃力、專注力全面升級",
            "covers": [
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/092/24/0010922452.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/001/092/24/0010922452_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "藍偉瑩",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "你以為的偶然，都是人生的必然",
            "subtitle": "通透好命的本質，解生活的憂，排人生的苦",
            "covers": [
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/092/25/0010922512.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/001/092/25/0010922512_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "千里淳風",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
          {
            "id": 1,
            "title": "商業模式轉型",
            "subtitle": "獲利世代2 價值創新的6大途徑",
            "covers": [
              {
                "id": 2,
                "photo_url": "https://www.books.com.tw/img/001/092/03/0010920359.jpg",
                "sort": 1
              },
              {
                "id": 1,
                "photo_url": "https://www.books.com.tw/img/001/092/03/0010920359_bc_01.jpg",
                "sort": 2
              }
            ],
            "authors": [
              {
                "id": 1,
                "name": "派翠克．范德皮爾",
                "sort": 1
              },
              {
                "id": 1,
                "name": "賈斯汀．羅奇茲",
                "sort": 1
              },
              {
                "id": 1,
                "name": "羅蘭．凡能",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-22"
          },
        ],
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
  };
</script>

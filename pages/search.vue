<template>
  <main class="pt-30">
    <div class="container">
      <Title class="mb-30">搜尋結果</Title>
      <div class="result-text fs-3 text-md-center my-md-30 my-20">“<h1 class="fs-3 my-0">{{ search.key }}</h1>”，共有 21 個結果</div>
      <hr class="my-md-30 my-20">
      <article class="pb-40 mb-20">
        <section v-if="isDisplay(search.books)">
          <div class="section-title fs-4">書籍</div>
          <SearchBook
            v-if="$device.isDesktop"
            :emit-datas="search.books"
            :emit-cursor="search.cursor"
          />
          <SearchBookSwiper v-else />
        </section>
        <section v-if="isDisplay(search.authors)">
          <div class="section-title fs-4">作者</div>
          <SearchAuthor
            v-if="$device.isDesktop"
            :emit-datas="search.authors"
            :emit-cursor="search.cursor"
          />
          <SearchAuthorSwiper
            v-else
            :emit-datas="search.authors"
          />
        </section>
        <section v-if="isDisplay(search.articles)">
          <div class="section-title fs-4">閱讀</div>
          <SearchArticle
            :emit-datas="search.articles"
            :emit-cursor="search.cursor"
          />
        </section>
      </article>
    </div>
  </main>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        search: {
          key: '',
          cursor: '',
          books: [
            {
              "id": 1,
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
                  "id": 1,
                  "name": "里德‧海斯汀",
                  "status": 1,
                  "sort": 1
                }
              ],
              "selling_status": 2,
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
              "selling_status": 1,
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
              "selling_status": 1,
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
              "selling_status": 1,
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
              "selling_status": 1,
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
              "selling_status": 3,
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
              "selling_status": 1,
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
              "selling_status": 1,
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
              "selling_status": 1,
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
              "selling_status": 4,
              "publish_date": "2022-02-22"
            },
            {
              "id": 1,
              "title": "男孩、鼴鼠、狐狸與馬",
              "subtitle": "",
              "covers": [
                {
                  "id": 2,
                  "photo_url": "https://www.books.com.tw/img/001/091/48/0010914874.jpg",
                  "sort": 1
                },
                {
                  "id": 1,
                  "photo_url": "https://www.books.com.tw/img/001/091/48/0010914874_bc_01.jpg",
                  "sort": 2
                }
              ],
              "authors": [
                {
                  "id": 1,
                  "name": "查理．麥克斯",
                  "sort": 1
                }
              ],
              "selling_status": 1,
              "publish_date": "2022-02-22"
            },
            {
              "id": 1,
              "title": "我的孩子要在這裡讀書",
              "subtitle": "黃建興建築師經典校園走讀",
              "covers": [
                {
                  "id": 2,
                  "photo_url": "https://www.books.com.tw/img/001/091/22/0010912286.jpg",
                  "sort": 1
                },
                {
                  "id": 1,
                  "photo_url": "https://www.books.com.tw/img/001/091/22/0010912286_bc_01.jpg",
                  "sort": 2
                }
              ],
              "authors": [
                {
                  "id": 1,
                  "name": "游苔",
                  "sort": 1
                }
              ],
              "selling_status": 1,
              "publish_date": "2022-02-22"
            },
          ],
          authors: [
            {
              "id": 1,
              "name": "凱莉‧紐金特",
              "english_name": "Carrie Nugent",
              "photo_url": "https://books.cw.com.tw/upload_author/201806/author_1529942327_2.png"
            },
            {
              "id": 1,
              "name": "史考特‧蓋洛威",
              "english_name": "",
              "photo_url": "https://books.cw.com.tw/upload_author/201808/author_1535021899_2.jpg"
            },
            {
              "id": 1,
              "name": "安琪拉‧達克沃斯",
              "english_name": "Angela Duckworth",
              "photo_url": "https://books.cw.com.tw/upload_author/201701/author_704_1483954408_2.jpg"
            },
            {
              "id": 1,
              "name": "吳修銘",
              "english_name": "Tim Wu",
              "photo_url": "https://books.cw.com.tw/upload_author/202007/author_1595700762_2.jpg"
            },
            {
              "id": 1,
              "name": "丁菱娟",
              "english_name": "",
              "photo_url": "https://www.aamataipei.com.tw/wp-content/uploads/2019/10/%E4%B8%81%E8%8F%B1%E5%A8%9F-1.png"
            },
            {
              "id": 1,
              "name": "Kimiko",
              "english_name": "",
              "photo_url": "https://books.cw.com.tw/upload_author/201806/author_1529047412_2.jpg"
            },
            {
              "id": 1,
              "name": "何榮幸",
              "english_name": "",
              "photo_url": "https://books.cw.com.tw/upload_author/201701/author_295_1484823807_1.jpg"
            },
            {
              "id": 1,
              "name": "余廣亮",
              "english_name": "",
              "photo_url": "https://books.cw.com.tw/upload_author/201701/author_353_1484823808_1.jpg"
            },
            {
              "id": 1,
              "name": "劉燦宏",
              "english_name": "",
              "photo_url": "https://shh.tmu.edu.tw/upload_files/doc/08055.jpg"
            },
            {
              "id": 1,
              "name": "俞昊",
              "english_name": "",
              "photo_url": "https://books.cw.com.tw/upload_author/201904/author_1555927676_2.jpg"
            },
          ],
          articles: [],
        },
      };
    },
    mounted () {
      this.search.key = this.$route.query.key;

      axios.defaults.headers.common['authorization'] = localStorage.getItem('cw_publishing_token');
      console.log(`${process.env.books_api}/search/articles/${this.search.key}?per_page=10`);
      axios.get(`${process.env.books_api}/search/articles/${this.search.key}?per_page=10`)
        .then(response => {
          console.log(response);
          this.cursor = response.data.cursor_id;
          this.articles = response.data.items;
        })
        .catch(error => {
          console.dir(error);
        })
    },
    computed: {
      isDisplay: function() {
        return function (data) {
          if ( data.length ) {
            return true;
          } else {
            return false;
          }
        }
      }
    },
    head () {
      return {
        bodyAttrs: {
          class: [
            'search-page inner-page'
          ]
        }
      }
    },
  }
</script>

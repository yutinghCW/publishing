<template>
  <main>
    <div class="container">
      <article>
        <Breadcrumb 
          :emit-category="'article'"
          :emit-breadcrumb="article.keywords[0]"
        />
        <div class="label-author fs-3">
          <div class="label">{{ book.title }}</div>
          <div class="author">
            <template v-for="(author, index) in book.authors"><template v-if="index !== 0">、</template>{{ author.name }}</template>
          </div>
        </div>
        <h1 class="serif fw-bold">{{ article.title }}</h1>
        <div class="master-img-group">
          <img :src="article.photo.url" :alt="article.title">
          <span v-if="article.photo.photographer" class="fs-6">圖片來源：{{ article.photo.photographer }}</span>
        </div>
        <div class="update-info">
          <time>{{ article.publish_time }}</time>
          <span class="author">責任編輯：{{ article.editor_name }}</span>
        </div>
        <div class="preface serif">
          {{ article.introduction }}
        </div>
        <div class="content" v-html="article.content"></div>
        <div class="keywords mb-40">
          關鍵詞：<template v-for="(keyword, index) in article.keywords"><template v-if="index > 0">｜</template><NuxtLink :to="`/search?key=${keyword.title}`" :key="`關鍵詞-書摘-${keyword.title}`" class="btn btn-text btn-blue btn-decoration">{{ keyword.title }}</NuxtLink></template>
        </div>
      </article>
      <section id="book" class="book-intro">
        <div class="intro-head">
          <NuxtLink :to="`/book/${book.id}`" class="intro-img">
            <img :src="book.covers[0].photo_url" :alt="`${book.title}-封面圖`">
          </NuxtLink>
          <NuxtLink :to="`/book/${book.id}`" class="btn btn-sm btn-contained btn-gray fw-bold">詳細資訊</NuxtLink>
        </div>
        <div class="intro-txt">
          <NuxtLink :to="`/book/${book.id}`" class="intro-title serif fw-bold">{{ book.title }}</NuxtLink>
          <NuxtLink :to="`/book/${book.id}`" v-if="book.subtitle" class="intro-description mt-5">{{ book.subtitle }}</NuxtLink>
          <div class="author mt-md-10 mt-20">作者：亞倫．克魯格 (Alan B. Krueger)</div>
          <ul class="relative-link d-md-block d-none mt-20">
            <li v-for="recommend in recommends" :key="`書籍相關書摘-電腦-${recommend.id}`">
              <NuxtLink :to="`/article/${recommend.id}`" class="btn btn-decoration btn-text btn-black">
                {{ recommend.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <ul class="relative-link d-md-none mt-10">
          <li v-for="recommend in recommends" :key="`書籍相關書摘-手機-${recommend.id}`">
            <NuxtLink :to="`/article/${recommend.id}`" class="btn btn-decoration btn-text btn-black">
              {{ recommend.title }}
            </NuxtLink>
          </li>
        </ul>
      </section>
      <section v-if="$is_not_empty_array(books)">
        <a class="anchor" id="channel"></a>
        <div class="reading position-relative py-md-40 py-30 mb-md-40 mb-30">
          <svg class="reading-top" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="white"></path>
          </svg>        
          <div class="px-md-30">
            <Title class="mb-40">同類書籍</Title>
            <Series emit-number="4" :emit-series="books" />
          </div>
          <svg class="reading-bottom" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="#F5F5F5"></path>
          </svg>
        </div>
      </section>
      <section v-if="$is_not_empty_array(links)">
        <a class="anchor" id="extended"></a>
        <Title class="mb-40">延伸內容</Title>
        <Extended class="mb-40" :emit-extend="links" />
      </section>
    </div>
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
    data() {
      return {
        article: {
          "id": 1638,
          "book_id": 12,
          "title": "比80/20法則更省力的成功法則？7大搖滾經濟學原理學起來！",
          "introduction": "經濟學里程碑之作！名列世界前50大經濟學家、普林斯頓大學教授克魯格揭開全新成功法則，他發現當今市場的變化與音樂產業的發展趨勢非常相似，正走向超級巨星主導一切。《搖滾經濟學》採訪上百個天團、巨星，將滿足樂迷們的崇拜癮頭，精闢解讀既酷且殘酷的巨星市場與暢銷商品背後的真實邏輯，並從中領悟全新的生存與成功之道。",
          "content": "<p><span style=\"font-size:16px\"><span style=\"color:#B22222\"><strong>編按：</strong></span>經濟學里程碑之作！名列世界前50大經濟學家、普林斯頓大學教授克魯格揭開全新成功法則，他發現當今市場的變化與音樂產業的發展趨勢非常相似，正走向超級巨星主導一切。<u><a href=\"https://shop.cwbook.com.tw/SalePage/Index/7017885\"><span style=\"color:#0000CD\">《搖滾經濟學》</span></a></u>採訪上百個天團、巨星，將滿足樂迷們的崇拜癮頭，精闢解讀既酷且殘酷的巨星市場與暢銷商品背後的真實邏輯，並從中領悟全新的生存與成功之道。</span></p>",
          "editor_name": "許湘",
          "photo": {
            "url": "https://fakeimg.pl/253x193/",
            "photographer": "shutterstock"
          },
          "layout": 1,
          "publish_time": "2022-03-01",
          "featured_book": null,
          "keywords": [
            {
              "id": 1,
              "title": "恆毅力"
            },
            {
              "id": 2,
              "title": "自我成長"
            }
          ]
        },
        book: {
          "id": 513,
          "ebook_id": 12,
          "title": "零規則",
          "subtitle": "高人才密度x完全透明x最低管控，首度完整直擊Netflix圈粉全球的關鍵祕密",
          "covers": [
            {
              "id": 1,
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 1
            },
            {
              "id": 3,
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 2
            },
            {
              "id": 6,
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 3
            }
          ],
          "authors": [
            {
              "id": 1,
              "name": "里德‧海斯汀",
              "english_name": "Reed Hastings",
              "introduction": "里德‧海斯汀（Reed Hastings）是創業家，1997年與友人共同創立Netflix，並自1999年起擔任董事長兼執行長，在娛樂產業掀起革命。",
              "photo_url": "https://fakeimg.pl/253x193/",
              "status": 1,
              "sort": 1
            },
            {
              "id": 2,
              "name": "艾琳‧梅爾",
              "english_name": "Erin Meyer",
              "introduction": "艾琳‧梅爾（Erin Meyer）是《文化地圖》作者，也是全球頂尖商學院INSEAD歐洲工商管理學院教授。她的文章見於《哈佛商業評論》《紐約時報》及《富比士》。2019年，艾琳獲Thinkers50評選為全球五十大最具影響力的商業思想家。",
              "photo_url": "https://fakeimg.pl/253x193/",
              "status": 1,
              "sort": 2
            }
          ],
        },
        books: [
          {
            "id": 898,
            "title": "零規則",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              }
            ],
            "publish_date": "2022-03-01"
          },
          {
            "id": 899,
            "title": "零規則",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              }
            ],
            "publish_date": "2022-03-01"
          },
          {
            "id": 988,
            "title": "零規則",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              }
            ],
            "publish_date": "2022-03-01"
          },
          {
            "id": 916,
            "title": "如何在贏者全拿的職場中生存",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              }
            ],
            "publish_date": "2022-02-28"
          }
        ],
        recommends: [
          {
            "id": 1640,
            "title": "厄運看不到盡頭？在悲觀情緒中，掌握絕地重生的3大槓桿！",
            "publish_time": "2022-03-01"
          },
          {
            "id": 1639,
            "title": "貝佐斯與天后泰勒絲都在做！對顧客差別待遇為何反而掀起搶購潮？",
            "publish_time": "2022-02-28"
          }
        ],
        links: [
          {
            "id": 1,
            "title": "大企業進不去，小企業沒前景？找工作就像投資，這樣看待工作機會，獲取高報酬",
            "url": "https://books.cw.com.tw/blog/article/1603",
            "type": 1,
            "sort": 1
          },
          {
            "id": 2,
            "title": "《木曜4》最紅阿公 邰智源：把自己粉碎，懂得欣賞年輕人",
            "url": "https://www.youtube.com/watch?v=iVkW8xNTAUM",
            "type": 2,
            "sort": 2
          }
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
    mounted () {
      const _document = document.querySelector.bind(document);
      const _documents = document.querySelectorAll.bind(document);
      let activeLink = null;
      window.addEventListener("scroll", () => {
        _documents(".unit-section").forEach(section => {
          const { y } = section.getBoundingClientRect();
          if ((y - 220) <= 0) {
            if (activeLink != null) {
              activeLink.classList.remove("active");
            }
            activeLink = _document(`nav > ol > li > a[href~="#${section.dataset.id}"]`);
            activeLink.classList.add("active");
          }
        });
      });
    },
    head () {
      return {
        bodyAttrs: {
          class: [
            'article-page inner-page',
            this.modal.status ? 'opened' : '',
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .anchor {
    top: -171px;
    @at-root .scroll #{&} {
      top: -106px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
<template>
  <main>
    <div class="container container-summary px-md-30">
      <Breadcrumb 
        :emit-category="'books'"
        :emit-breadcrumb="items.keywords[0].category"
      />
      <BookSlider
        :emit-cover="items.covers"
        @emit-modal="onOpenModal"
      />
      <div class="col-master ps-md-30 pe-md-0">
        <div class="subtitle fw-bold">
          <div v-if="selling" class="label fs-5 d-md-block d-none">
            {{ selling }}
          </div>
          <div class="text fs-2 serif">{{ items.title }}</div>
        </div>
        <h1 class="h3 mt-10 mb-md-0 mb-20 fw-normal">{{ items.subtitle }}<br/>{{ items.original_title }}</h1>
        <hr class="d-md-block d-none my-20">
        <dl>
          <dt class="mb-5">作者：
            <template v-for="(author, index) in items.authors"><template v-if="index !== 0">、</template><NuxtLink :to="`author/${author.id}`" :key="`作者-中文-${author.id}`" class="btn btn-text btn-decoration btn-black">{{ author.name }}</NuxtLink><NuxtLink :to="`author/${author.id}`" :key="`作者-英文-${author.id}`" class="btn btn-text btn-black">（{{ author.english_name }}）</NuxtLink></template>
          </dt>
          <dt v-if="$is_not_empty_array(items.translators)" class="mb-5">譯者：
            <template v-for="(translator, index) in items.translators"><template v-if="index !== 0">、</template>{{ translator.name }}</template>
          </dt>
          <dt v-if="$is_not_empty_array(items.illustrators)" class="mb-5">繪者：
            <template v-for="(illustrator, index) in items.illustrators">
              <template v-if="index !== 0">、</template>
              {{ illustrator.name }}
            </template>
          </dt>
          <dt class="mb-5">出版日期：{{ items.publish_date }}</dt>
          <dt class="mb-5">主題：
            <template v-for="(keyword, index) in items.keywords"><template v-if="index !== 0">｜</template><NuxtLink :to="`books/${keyword.category.id}`" :key="`主題-${keyword.category.title}`" class="btn btn-text btn-blue btn-decoration">{{ keyword.category.title }}</NuxtLink></template>
          </dt>
        </dl>
      </div>
    </div>
    <div class="container px-0">
      <hr class="mt-30 mb-0">
    </div>
    <div class="container container-detail px-md-0">
      <article>
        <section data-id="intro" class="intro unit-section">
          <a class="anchor" id="intro"></a>
          <Title class="mb-40">書籍介紹</Title>
          <div
            class="edit-block px-md-30"
            :class="{
              'ellipsis-block': detectContent('content', 365),
              'expand-block': !detectContent('content', 365),
            }"
          >
            <div class="content" v-html="items.content"></div>
            <More
              class="py-20 mb-20 mx-auto"
              v-if="detectContent('content', 365)"
              @emitMoreTrigged="onOpenTrigged('content')"
            />
          </div>
        </section>
        <section v-if="$is_not_empty_array(related)" data-id="series" class="unit-section">
          <a class="anchor" id="series"></a>
          <div class="reading position-relative py-md-40 py-30 mb-40">
            <svg class="reading-top" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="white"></path>
            </svg>        
            <div class="px-md-30">
              <Title class="mb-40">系列書籍</Title>
              <Series emit-number="5" :emit-series="related" />
            </div>
            <svg class="reading-bottom" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="#F5F5F5"></path>
            </svg>
          </div>
        </section>
        <section data-id="author" class="unit-section">
          <a class="anchor" id="author"></a>
          <Title class="mb-40">作者介紹</Title>
          <BookAuthor :emit-author="items" />
        </section>
        <section data-id="table-of-content" class="catalog unit-section">
          <a class="anchor" id="table-of-content"></a>
          <Title class="mb-md-20 mb-30">目錄</Title>
          <div
            class="edit-block px-md-30"
            :class="{
              'ellipsis-block': detectContent('catalog', 240),
              'expand-block': !detectContent('catalog', 240),
            }"
          >
            <div class="table-of-content" v-html="items.catalog"></div>
            <More
              class="py-20 mb-20 mx-auto"
              v-if="detectContent('catalog', 240)"
              @emitMoreTrigged="onOpenTrigged('catalog')"
            />
          </div>
        </section>
        <section v-if="$is_not_empty_array(articles)" data-id="digest" class="unit-section">
          <a class="anchor" id="digest"></a>
          <div class="reading position-relative pt-40 pb-20 mb-md-40 mb-30">
            <svg class="reading-top" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="white"></path>
            </svg>
            <div class="px-md-30 px-20">
              <Title class="mb-40">相關書摘</Title>
              <BookDigest 
                :emit-digest="articles"
                :class="{
                  'ellipsis-block': articlesToggle
                }"
              />
              <More
                v-if="articlesToggle"
                @emitMoreTrigged="articlesToggle = !articlesToggle"
              />
            </div>
            <svg class="reading-bottom" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="#F5F5F5"></path>
            </svg>
          </div>
        </section>
        <section data-id="detail" class="unit-section">
          <a class="anchor" id="detail"></a>
          <Title class="mb-40">詳細資訊</Title>
          <div class="edit-block px-md-30">
            <span class="h4 my-0">版本：</span><template v-for="(type, index) in items.format"><template v-if="index > 0"> / </template>{{ convertFormat(type) }}</template>
            <br/>
            <span class="h4 my-0">定價：</span>{{ items.price }}元<br/>
            <span class="h4 my-0">ISBN：</span>{{ items.isbn }}<br/>
            <span class="h4 my-0">eISBN：</span>{{ ebooks.isbn }}<br/>
            <span class="h4 my-0">規格：</span>{{ items.specification.pages }}頁 / {{ items.specification.dimensions.w }} x {{ items.specification.dimensions.h }} x {{ items.specification.dimensions.d }} cm / {{ items.specification.printing }} / {{ items.specification.edition }}<br/>
            <span class="h4 my-0">關鍵詞：</span>
            <template v-for="(keyword, index) in items.keywords"><template v-if="index > 0">｜</template><NuxtLink :to="`/search?key=${keyword.title}`" :key="`關鍵詞-主題-${keyword.title}`" class="btn btn-text btn-blue btn-decoration">{{ keyword.title }}</NuxtLink></template><template v-for="keyword in items.custom_keywords"><template v-if="$is_not_empty_array(items.keywords)">｜</template><NuxtLink :to="`/search?key=${keyword.title}`" :key="`關鍵詞-手動-${keyword.title}`" class="btn btn-text btn-blue btn-decoration">{{ keyword.title }}</NuxtLink></template>
          </div>
          <hr class="my-30">
        </section>
        <section data-id="video" class="unit-section">
          <a class="anchor" id="video"></a>
          <Title class="mb-40">相關影音</Title>
          <Video
            :emit-video="videos"
            @emit-modal="onOpenModal"
          />
        </section>
        <section data-id="eshop" class="unit-section">
          <a class="anchor" id="eshop"></a>
          <Title class="mb-40">線上購買</Title>
          <BookSell :emit-sales="sales" :emit-ebooks="ebooks.sales" />
        </section>
        <section v-if="$is_not_empty_array(recommends)" data-id="channel" class="unit-section">
          <a class="anchor" id="channel"></a>
          <div class="reading position-relative py-md-40 py-30 mb-md-40 mb-30">
            <svg class="reading-top" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="white"></path>
            </svg>        
            <div class="px-md-30">
              <Title class="mb-40">同類書籍</Title>
              <Series emit-number="5" :emit-series="recommends" />
            </div>
            <svg class="reading-bottom" width="600" height="25" viewBox="0 0 600 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 0C455.5 0.5 334.78 1.67 300 25C265.22 1.67 144.5 0.5 0 0H600Z" fill="#F5F5F5"></path>
            </svg>
          </div>
        </section>
        <section data-id="extended" class="unit-section">
          <a class="anchor" id="extended"></a>
          <Title class="mb-40">延伸內容</Title>
          <Extended class="px-md-30 mb-md-40 mb-10" :emit-extend="links" />
        </section>
      </article>
      <aside class="px-md-30">
        <nav>
          <ol class="d-md-block d-none">
            <li>
              <a href="#intro" class="btn btn-text smooth-scroll">書籍介紹</a>
            </li>
            <li v-if="$is_not_empty_array(related)">
              <a href="#series" class="btn btn-text smooth-scroll">系列書籍</a>
            </li>
            <li>
              <a href="#author" class="btn btn-text smooth-scroll">作者介紹</a>
            </li>
            <li>
              <a href="#table-of-content" class="btn btn-text smooth-scroll">目錄</a>
            </li>
            <li v-if="$is_not_empty_array(articles)">
              <a href="#digest" class="btn btn-text smooth-scroll">相關書摘</a>
            </li>
            <li>
              <a href="#detail" class="btn btn-text smooth-scroll">詳細資訊</a>
            </li>
            <li v-if="$is_not_empty_array(videos)">
              <a href="#video" class="btn btn-text smooth-scroll">相關影音</a>
            </li>
            <li v-if="$is_not_empty_array(sales) || $is_not_empty_array(ebooks)">
              <a href="#eshop" class="btn btn-text smooth-scroll">線上購買</a>
            </li>
            <li v-if="$is_not_empty_array(recommends)">
              <a href="#channel" class="btn btn-text smooth-scroll">同主題書籍</a>
            </li>
            <li v-if="$is_not_empty_array(links)">
              <a href="#extended" class="btn btn-text smooth-scroll">延伸內容</a>
            </li>
          </ol>
          <ol>
            <li class="d-md-none">
              <a href="#eshop" class="btn btn-eshop smooth-scroll">線上購買</a>
            </li>
            <li><a href="#top" class="btn btn-top smooth-scroll"><i class="icon icon-arrow-up"></i></a></li>
          </ol>
        </nav>
      </aside>
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
        items: {
          "id": 513,
          "ebook_id": 12,
          "title": "零規則",
          "subtitle": "高人才密度x完全透明x最低管控，首度完整直擊Netflix圈粉全球的關鍵祕密",
          "original_title": "NO RULES RULES",
          "content": "<p> ★全新收錄〈給台灣讀者的信〉與〈日常養成恆毅力的方法〉<br/> ★出版至今長踞紐約時報暢銷書榜超過三年<br/> ★亞馬遜最佳商管書｜TED超人氣演說觀看突破兩千萬<br/> ★《華盛頓郵報》《富比士》《華爾街日報》《經濟學人》選書報導<br/></p><p> 天分或努力，都不是成就的唯一條件，<br/> 持久熱情X堅持毅力，才是更重要的致勝關鍵。</p><p> 首度完整揭露成就背後的科學實證，<br/> 解開人類恆久探索的高成就之謎</p><p> 為什麼最聰明不見得最優秀？最有才華不見得最成功？<br/> 如果不是天分、不是埋頭努力、不是運氣，什麼才是人生成功最重要的關鍵？<br/> 作者達克沃斯博士是美國研究成就與人格特質的新生代心理學家，曾任麥肯錫顧問、小學教師，也是兩個女兒的母親。她長期研究成就的科學，發現創造卓越成就的關鍵不是天賦，而是「恆毅力」（Grit）──對目標長期的熱情與堅持。更重要的是，恆毅力不像天分無法改變，是可以由自己掌控、刻意練習得來的特質，達克沃斯因此獲得被譽為「天才獎」的麥克阿瑟獎。</p><p> 本書完整說明具體方法，每個人都能培養、強化恆毅力</p><p> 書中除了呈現心理學實證研究與發現，達克沃斯更分享她訪談全球各領域恆毅力典範的故事，包括西點軍校訓練的祕密、拼字冠軍的自我練習，還有業務、運動明星、成功企業人士如何設定目標、找到人生熱情，以及如何堅持下去。這項發現顛覆了教育界培養能力的觀點，全球愈來愈多學校將恆毅力納入學生評量項目。</p><p> 成功，是因為灌注熱情；卓越，是因為堅持不懈。<br/> 是你的恆毅力，而非運氣，讓你發揮極致，成就精彩人生。</p><p> 本書精華：<br/> •為什麼比起天分，努力加倍重要？<br/> •如何測量恆毅力的高低？<br/> •無論智商高低或環境如何，如何培養恆毅力？<br/> •如何打造戰勝逆境的超強大腦？<br/> •如何找到終生的興趣與熱情？<br/> •如何設定正確目標？哪些目標必須堅持哪些必須放棄？<br/> •究竟是溫暖的陪伴，還是設定嚴格高標能協助孩子發展潛力？<br/> •教養小孩「困難任務」的神奇力量<br/> •如何建立不斷增強恆毅力的環境，打造超級團隊？<br/> •如何挑選具有高度恆毅力的人才？</p>",
          "catalog": "<p> 給台灣讀者的信<br/> 各界推薦<br/> 推薦序　堅持到底，勿忘初心　江振誠<br/> 推薦序　剝蒜頭專家──媽媽教會我恆毅力 劉安婷</p><p> 前言 我不是天才</p><p> Part I　恆毅力 被低估的成就必要條件<br/> 第1章 拼到底的祕密　有潛力不等於發揮潛力<br/> 第2章 我們的天賦迷思　聚焦聰明才智，是給自己一個藉口<br/> 第3章 努力 雙倍重要　那些成就者沒說出口但習以為常的事<br/> 第4章 你的恆毅力有多高　評量你的熱情X毅力分數<br/> 第5章 可以後天養成的特質　基因X經驗 同時影響人類每項特質</p><p> Part II　培養恆毅力 1──由內而外的四大驅動力<br/> 第6章 興趣 必須再三的重新觸發　追隨夢想是空話，熱情不會從天而降<br/> 第7章 練習 專家的刻意練習法　重複操作 vs 有目標的持續進步<br/> 第8章 目的 造福他人的意念　持久的熱情 需要興趣與目的兩個支柱<br/> 第9章 希望 努力可以改變未來的信念　跌倒七次，爬起來八次的力量</p><p> Part III　培養恆毅力 2──由外而內的三大環境力<br/> 第10章 家庭教養 榜樣的力量　明智家長的科學解答<br/> 第11章 課外活動 練習對困難事務的堅持　比成績更嚴重的貧富差距<br/> 第12章 組織文化 周圍夥伴的驚人鞭策力　身分認同對恆毅力有強大影響</p><p> 結語 讓我們重新定義天賦</p><p> 附錄 日常養成恆毅力的方法致謝推薦閱讀</p>",
          "article_books": [],
          "custom_keywords": [
            {
              "title": "Netflix",
              "sort": 1
            },
            {
              "title": "Reed Hastings",
              "sort": 2
            },
            {
              "title": "人才",
              "sort": 3
            }
          ],
          "price": 450,
          "isbn": "978-986-398-610-2",
          "format": [
            1,
            3,
            2
          ],
          "specification": {
            "pages": 390,
            "edition": "第4版",
            "printing": "彩色印刷",
            "dimensions": {
              "d": 18.3,
              "h": 18.89,
              "w": 48.34
            }
          },
          "selling_status": 3,
          "publish_date": "2020-10-28",
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
            },
            {
              "id": 3,
              "photo_url": "https://www.books.com.tw/img/001/087/39/0010873975_bi_01.jpg",
              "sort": 2
            },
            {
              "id": 4,
              "photo_url": "https://www.books.com.tw/img/001/087/39/0010873975_b_01.jpg",
              "sort": 3
            },
            {
              "id": 5,
              "photo_url": "https://www.books.com.tw/img/001/087/39/0010873975_b_02.jpg",
              "sort": 3
            },
            {
              "id": 6,
              "photo_url": "https://www.books.com.tw/img/001/087/39/0010873975_b_03.jpg",
              "sort": 3
            }
          ],
          "keywords": [
            {
              "id": 1,
              "title": "管理學",
              "sort": 1,
              "category": {
                "id": 1,
                "title": "經營管理"
              }
            },
            {
              "id": 2,
              "title": "職涯規劃",
              "sort": 2,
              "category": {
                "id": 1,
                "title": "職場工作"
              }
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
          "translators": [
            {
              "id": 3,
              "name": "韓絜光",
              "english_name": "",
              "introduction": "臺大外文系畢業，專職人文科普書籍與字幕翻譯。",
              "photo_url": "https://fakeimg.pl/253x193/",
              "status": 1,
              "sort": 1
            }
          ],
          "illustrators": []
        },
        related: [ // 系列書籍
          {
            "id": 100,
            "title": "大數據的關鍵思考",
            "subtitle": "行動╳多螢╳碎片化時代的商業智慧",
            "original_title": "",
            "selling_status": 2,
            "publish_date": "2020-03-04",
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
              }
            ],
            "sort": 1
          },
          {
            "id": 101,
            "title": "數據的商戰策略",
            "subtitle": "",
            "original_title": "",
            "selling_status": 1,
            "publish_date": "2020-03-04",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              }
            ],
            "sort": 2
          }
        ],
        recommends: [ // 同類書籍
          {
            "id": 100,
            "title": "大數據的關鍵思考",
            "subtitle": "行動╳多螢╳碎片化時代的商業智慧",
            "original_title": "",
            "selling_status": 2,
            "publish_date": "2020-03-04",
            "covers": [
              {
                "id": 3,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              },
              {
                "id": 7,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 2
              }
            ],
            "sort": 1
          },
          {
            "id": 101,
            "title": "數據的商戰策略",
            "subtitle": "",
            "original_title": "",
            "selling_status": 1,
            "publish_date": "2020-03-04",
            "covers": [
              {
                "id": 1,
                "photo_url": "https://fakeimg.pl/253x193/",
                "sort": 1
              }
            ],
            "sort": 2
          }
        ],
        articles: [ // 相關書摘
          {
            "id": 1,
            "name": "零規則",
            "photo_url": "https://books.cw.com.tw/upload_article/202011/article_1605497392_1.jpg",
            "title": "追求創新，別再組交響樂團，改玩爵士樂吧",
          },
          {
            "id": 2,
            "name": "零規則",
            "photo_url": "https://books.cw.com.tw/upload_article/202011/article_1605861650_1.jpg",
            "title": "沒有花費上限，只有「是否符合公司最大利益？」",
          },
          {
            "id": 3,
            "name": "零規則",
            "photo_url": "https://books.cw.com.tw/upload_article/202010/article_1604039012_1.jpg",
            "title": "優秀的同事就是最好的福利",
          },
          {
            "id": 4,
            "name": "零規則",
            "photo_url": "https://books.cw.com.tw/upload_article/202010/article_1604039152_1.jpg",
            "title": "你的職責不是「討好主管」，而是做「對公司最好的決定」",
          },
          {
            "id": 5,
            "name": "零規則",
            "photo_url": "https://books.cw.com.tw/upload_article/202010/article_1603424542_1.jpg",
            "title": "在Netflix，我們小聲慶祝勝利，大聲承認犯錯",
          },
          {
            "id": 6,
            "name": "零規則",
            "photo_url": "https://books.cw.com.tw/upload_article/202010/article_1603424703_1.jpg",
            "title": "在Netflix，我們不是家人，是隊友",
          },
          {
            "id": 7,
            "name": "教練",
            "photo_url": "https://books.cw.com.tw/upload_article/202008/article_1596544754_1.jpg",
            "title": "團隊優先，品德至上",
          },
          {
            "id": 8,
            "name": "教練",
            "photo_url": "https://books.cw.com.tw/upload_article/202005/article_1590379407_1.jpg",
            "title": "職稱讓你成為管理者，部屬讓你成為領導者：孕育矽谷風雲人物的傳奇教練的高績效管理心法",
          },
        ],
        videos: [ // 相關影音
          {
            "id": 1,
            "title": "【SDGs兒童永續書房@天下】用閱讀，培養新一代世界公民",
            "photo_url": "https://fakeimg.pl/253x193/",
            "url": "https://youtu.be/9ppN5nJEbgQ",
            "sort": 1
          }
        ],
        sales: [ // 紙本書
          {
            "id": 1,
            "channel": 1,
            "channel_name": "天下網路書店",
            "url": "https://shop.cwbook.com.tw/SalePage/index/6621022",
            "sort": 1
          },
          {
            "id": 2,
            "channel": 2,
            "channel_name": "博客來",
            "url": "https://www.books.com.tw/products/0010873975",
            "sort": 2
          },
          {
            "id": 3,
            "channel": 255,
            "channel_name": "PChome線上購物",
            "url": "https://24h.pchome.com.tw/books/prod/DJAD3J-A900AXPEP",
            "sort": 3
          }
        ],
        ebooks: { // 電子書
          "id": 1,
          "isbn": "978-986-398-610-2",
          "sales": [
            {
              "id": 4,
              "channel": 7,
              "channel_name": "Readmoo讀墨",
              "url": "https://readmoo.com/book/210159178000101",
              "sort": 1
            },
            {
              "id": 2,
              "channel": 2,
              "channel_name": "Amazon Kindle",
              "url": "https://www.amazon.com/dp/ASIN/B08LKDZH99",
              "sort": 2
            }
          ]
        },
        links: [ // 延伸內容
          {
            "id": 1,
            "title": "追求創新，別再組交響樂團，改玩爵士樂吧",
            "url": "https://books.cw.com.tw/blog/article/1539",
            "type": 1,
            "sort": 1
          },
          {
            "id": 2,
            "title": "【SDGs兒童永續書房@天下】用閱讀，培養新一代世界公民",
            "url": "https://youtu.be/9ppN5nJEbgQ",
            "type": 2,
            "sort": 1
          }
        ],
        modal: this.layoutModal,
        content: null,
        catalog: null,
        selling: null,
        articlesToggle: false,
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
      convertSelling(state) {
        switch (state) {
          case 2:
            this.selling = '熱銷';
            break;
          case 3:
            this.selling = '絕版';
            break;
        }
      },
      convertFormat(value) {
        switch (value) {
          case 1:
            return '精裝';
            break;
          case 2:
            return '平裝';
            break;
          case 3:
            return '電子書';
            break;
          case 4:
            return '有聲書';
            break;
        }
      },
      onOpenTrigged(variant) {
        this[variant] = null;
      },
      detectContent(variant, height) {
        if ( this[variant] > height ) {
          return true
        }
      },
    },
    mounted () {
      this.convertSelling(this.items.selling_status);
      this.content = document.querySelector('.intro').children[2].children[0].clientHeight;
      this.catalog = document.querySelector('.catalog').children[2].children[0].clientHeight;

      if ( this.articles.length > 4 ) {
        this.articlesToggle = true;
      }

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
            'book-page inner-page',
            this.modal.status ? 'opened' : '',
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
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
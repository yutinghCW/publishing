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
  export default {
    data () {
      return {
        search: {
          key: '',
          cursor: 'DnF1ZXJ5VGhlbkZldGNoBQAAAAANiNDiFkg2aTEtX3J3UXNtd0lIOHZSYkd1WncAAAAADYsSshZDMnI2MWVtZFJydUkza01kdlZsY3FnAAAAAA2LErEWQzJyNjFlbWRScnVJM2tNZHZWbGNxZwAAAAANiNDjFkg2aTEtX3J3UXNtd0lIOHZSYkd1WncAAAAADYsSsBZDMnI2MWVtZFJydUkza01kdlZsY3Fn',
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
          articles: [
            {
              "id": 1,
              "title": "加薪時代來了，但高薪不會讓你變有錢？",
              "photo_url": "https://books.cw.com.tw/upload_article/202203/article_1648627089_1.jpg",
              "content": "關於致富，最大的誤解應該是多數人都以為可以靠薪水變有錢，但這是行不通的。即使是律師、醫生這樣的高薪工作，如果不能成為合夥人或自己開業，而是拿寶貴的時間去換錢，也難以致富，因為時間是有限的。一個老上司曾經提醒我：「太聰明的人反而無法致富，因為永遠會有人給你一份足夠好的工作。」"
            },
            {
              "id": 1,
              "title": "不用死背、反覆抄寫，文轉圖深化記憶法讓你擁有冠軍級的記憶力",
              "photo_url": "https://books.cw.com.tw/upload_article/202205/article_1652257636_1.jpg",
              "content": "編按：「想不起來」、「說不出重點」種種失常表現與智商無關，也不是冒失粗心，而是因為多數人努力的途徑：逐字讀、反覆抄、拚命背，反而讓大腦更費力，於是怎麼記就怎麼忘。《過目不忘的文轉圖深化記憶法》作者池田義博45歲為了挑戰記憶力冠軍，開始研究如何「深化記憶」。他發現比起文字，大腦更擅長圖像記憶，但轉成圖像只能加深印象，若要達到過目不忘的境界，關鍵在吸收資訊時於腦中「連結」影像，大腦會自動將存在關聯的「完整情境」轉化成長期記憶，讓思緒不凌亂，關鍵時刻能立刻想起。這就是大腦最原始、最有效率的學習途徑。"
            },
            {
              "id": 1,
              "title": "熬夜讀書還是一直忘？懂得把資料變成知識，大腦這樣記憶才靈光！",
              "photo_url": "https://books.cw.com.tw/upload_article/202108/article_1629962204_1.jpg",
              "content": "「108課綱」全面上路，大學學測、國中會考型態都已經翻轉，超過萬字的多文字、長文章，跨領域、圖表與文字混合的題目大幅增加，「背多分」已經不靈光。沒有閱讀理解與批判思考的能力，各科學習就容易落後，跑去補習也不見得救得來。在建中教書超過25年的黃春木老師，是教學生思考的專家，多年擔任建中「人文社會科學資賦優異班」的召集人。在最新著作《高層次閱讀與思考》中，帶領讀者拆解有效閱讀與思考的必要元素，漸漸具備處理多文字、長篇章、跨領域、混合文本等資訊形式的能力，從理解到批判，並且能進行合乎邏輯的論證寫作，打穩獨立思考、自主學習的素養基礎。"
            },
            {
              "id": 1,
              "title": "小心「管他的效應」——設定具野心但有彈性的目標，打造不被一次失敗打倒的強韌心態",
              "photo_url": "https://books.cw.com.tw/upload_article/202205/article_1652251449_1.png",
              "content": "追求目標的途中，很容易會感到灰心，這種心態被巧妙地命名為「管他的效應」（what-the-hell effect）。相關研究顯示，即使只是微小的失敗，比如每天的飲食只超出目標幾卡路里，也可能導致我們的行為陷入惡性循環，像是乾脆一口氣吃掉整個蘋果派。對於曾嘗試減重的人，我舉的例子應該聽來很熟悉，假如你一早抵擋不了誘惑，忍不住拿了會議桌上的甜甜圈，接下來你很容易覺得「管他的，我都已經破戒，乾脆豁出去大吃」。小錯誤可能打擊你的信心，讓你認定自己永遠不會成功。而且不幸的是，目標愈遠大，小挫敗最終導致大崩壞的風險愈高。"
            },
            {
              "id": 1,
              "title": "貧民區出身的小歌女，回歸正常小學生的復學之路",
              "photo_url": "https://books.cw.com.tw/upload_article/202203/article_1647934350_1.jpg",
              "content": "吳惠瑜，頭銜多得數不清：台灣英特爾史上第一位女性總經理、威盛電子副總經理、必陞科技總經理兼任研碩電腦副總經理，現為公信電子總經理。她37歲就在當時任職的全球第一大半導體廠英特爾台灣分公司，締造出任最年輕總經理、首位女性總經理的雙紀錄。曾被《天下雜誌》選為台灣企業界最有影響力的女人，數十年在不同崗位都有優異的職涯表現。但風光的頭銜下，卻是她從底層一路爬升，力克逆境不畏命運：成長於淹水時得把豬推開才有床睡的家庭，5歲就為了家計去學藝，後來走唱那卡西直到小學五年級；害怕因家貧不能繼續升學，少女的她在書桌上刻「女工」二字砥礪自己；入社會經歷職場大起大落，小小業務助理主動向主管提出要轉職當業務工程師，下班後從零開始苦學電機、工程等知識，啟動職涯起飛的扉頁，接掌的職務曾重要到可影響台灣三大主機板廠股價；風光之際卻意外突遭解職，一度飽嘗人走茶涼的苦澀。"
            },
            {
              "id": 1,
              "title": "99%的努力都不會有結果？ 不要小看那有用1%帶來的龐大複利",
              "photo_url": "https://books.cw.com.tw/upload_article/202203/article_1648631256_1.jpg",
              "content": "生命中的所有回報，無論是財富、關係或知識，都來自複利。人生99%的努力都可能是白費的。雖然許多事都不會有結果，但也沒有什麼事情是完全白費力氣的，不要小看那僅有的1%。當你找到對的事可以追求、找到對的人可以合作時，就要專心投入其中，然後堅持十年、二十年，你就會在人際關係和財富累積上大豐收。了解複利的意義，對你的人生至關緊要。"
            },
          ],
        },
      };
    },
		mounted () {
      this.search.key = this.$route.query.key;
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

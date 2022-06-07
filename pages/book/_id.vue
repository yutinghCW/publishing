<template>
  <main>
    <div class="container container-summary px-md-30">
      <Breadcrumb :emit-category="'book'" :emit-breadcrumb="category" />
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        category: {
          "id": 1,
          "title": "經營管理"
        },
        items: [
          {
            "id": 513,
            "ebook_id": 12,
            "title": "零規則",
            "subtitle": "高人才密度x完全透明x最低管控，首度完整直擊Netflix圈粉全球的關鍵祕密",
            "original_title": "NO RULES RULES",
            "content": "<p>混屯失序成新常態，什麼是勝出的新路徑？搶先掌握未來十年的競爭法則</p>",
            "catalog": "<ul><li>第一部 開始邁向自由與責任的文化</li><li>1.累積人才密度──有頂尖的同事，才有一流的工作環境</li><li>2.鼓勵誠實敢言──以正面動機，說出你的真心話</li></ul>",
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
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

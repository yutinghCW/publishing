<template>
  <nav class="menu">
    <ul class="master">
      <li>
        <NuxtLink :to="{path: '/', hash: '#latest'}">最新動態</NuxtLink>
      </li>
      <li>
        <span>書籍</span>
        <button
          type="button"
          class="open-block"
          @click="onToggleBlock('books')"
        >
          <i class="icon icon-arrow-down"></i>
        </button>
        <VueSlideToggle :open="books.toggle" tag="div" class="block" :duration="500">
          <div class="container py-30">
            <div class="anchor">
              <NuxtLink :to="{path: '/', hash: '#latest'}" class="btn btn-outlined btn-primary">最新出版</NuxtLink>
            </div>
            <div class="recommend">
              <ul>
                <li v-for="category in books.categories" :key="`選單-書籍-${category.id}`">
                  <NuxtLink :to="`/books/${category.id}`" class="btn btn-contained btn-white">{{ category.title }}</NuxtLink>
                </li>
              </ul>
              <div class="spec-button mt-md-auto mt-20">
                <NuxtLink to="/books" class="btn btn-text btn-black btn-decoration mx-auto">瀏覽所有主題</NuxtLink>
              </div>
            </div>
            <div class="banner">
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-1.jpg" alt="banner">
              </a>
            </div>
          </div>
        </VueSlideToggle>
      </li>
      <li>
        <span>作者</span>
        <button
          type="button"
          class="open-block"
          @click="onToggleBlock('authors')"
        >
          <i class="icon icon-arrow-down"></i>
        </button>
        <VueSlideToggle :open="authors.toggle" tag="div" class="block" :duration="500">
          <div class="container py-30">
            <div class="anchor">
              <NuxtLink :to="{path: '/authors', hash: '#chinese'}" class="btn btn-outlined btn-primary">華文作者</NuxtLink>
              <NuxtLink :to="{path: '/authors', hash: '#foreign'}" class="btn btn-outlined btn-primary">外文作者</NuxtLink>
            </div>
            <div class="recommend">
              <ul>
                <li v-for="author in authors.lists" :key="`選單-作者-${author.id}`">
                  <NuxtLink :to="`/author/${author.id}`" class="btn btn-contained btn-white">{{ author.name }}</NuxtLink>
                </li>
              </ul>
              <div class="spec-button mt-md-auto mt-20">
                <NuxtLink to="/authors" class="btn btn-text btn-black btn-decoration mx-auto">瀏覽所有作者</NuxtLink>
              </div>
            </div>
            <div class="banner">
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-2.jpg" alt="banner">
              </a>
            </div>
          </div>
        </VueSlideToggle>
      </li>
      <li>
        <span>閱讀</span>
        <button
          type="button"
          class="open-block"
          @click="onToggleBlock('articles')"
        >
          <i class="icon icon-arrow-down"></i>
        </button>
        <VueSlideToggle :open="articles.toggle" tag="div" class="block" :duration="500">
          <div class="container py-30">
            <div class="anchor">
              <NuxtLink :to="{path: '/', hash: '#reading'}" class="btn btn-outlined btn-primary">精選閱讀</NuxtLink>
            </div>
            <div class="recommend">
              <ul>
                <li v-for="category in articles.categories" :key="`選單-閱讀-${category.id}`">
                  <NuxtLink :to="`/articles/${category.id}`" class="btn btn-contained btn-white">{{ category.title }}</NuxtLink>
                </li>
              </ul>
              <div class="spec-button mt-md-auto mt-20">
                <NuxtLink to="/articles" class="btn btn-text btn-black btn-decoration mx-auto">瀏覽所有閱讀</NuxtLink>
              </div>
            </div>
            <div class="banner">
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-3.jpg" alt="banner">
              </a>
            </div>
          </div>
        </VueSlideToggle>
      </li>
      <li>
        <NuxtLink to="/about">關於我們</NuxtLink>
      </li>
      <li>
        <span>追蹤我們</span>
        <button
          type="button"
          class="open-block"
          @click="onToggleBlock('follows')"
        >
          <i class="icon icon-arrow-down"></i>
        </button>
        <VueSlideToggle :open="follows.toggle" tag="div" class="block" :duration="500">
          <div class="container py-30">
            <div class="anchor">
              <a class="btn btn-outlined btn-primary" href="https://www.cwbook.com.tw/member/mcntr/EditEprEdm!redirect.shtml">訂閱電子報</a>
              <a class="btn btn-outlined btn-primary" href="https://www.facebook.com/cwbookec/">加入讀者俱樂部</a>
              <a class="btn btn-outlined btn-primary" href="https://www.instagram.com/bookcw1/">追蹤 Instagram</a>
            </div>
            <div class="banner">
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-4.jpg" alt="banner">
              </a>
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-5.jpg" alt="banner">
              </a>
            </div>
          </div>
        </VueSlideToggle>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        books: {
          toggle: false,
          categories: [
            {
              "id": 1,
              "title": "財經管理",
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 1
            },
            {
              "id": 3,
              "title": "心靈成長",
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 2
            }
          ]
        },
        articles: {
          toggle: false,
          categories: [
            {
              "id": 1,
              "title": "財經管理",
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 1
            },
            {
              "id": 3,
              "title": "心靈成長",
              "photo_url": "https://fakeimg.pl/253x193/",
              "sort": 2
            }
          ]
        },
        authors: {
          toggle: false,
          lists: [
            {
              "id": 1,
              "name": "賽門・西奈克",
            },
            {
              "id": 2,
              "name": "彼得・杜拉克",
            },
            {
              "id": 3,
              "name": "克雷頓．克里斯汀生",
            },
            {
              "id": 4,
              "name": "稻盛和夫",
            },
            {
              "id": 5,
              "name": "蔡壁名",
            },
            {
              "id": 6,
              "name": "蔡壁名",
            }
          ]
        },
        follows: {
          toggle: false
        },
      }
    },
    methods: {
      onToggleBlock(variant) {
        switch (variant) {
          case 'books':
            this.articles.toggle = false;
            this.authors.toggle = false;
            this.follows.toggle = false;
            break;
          case 'articles':
            this.books.toggle = false;
            this.authors.toggle = false;
            this.follows.toggle = false;
            break;
          case 'authors':
            this.books.toggle = false;
            this.articles.toggle = false;
            this.follows.toggle = false;
            break;
          case 'follows':
            this.books.toggle = false;
            this.articles.toggle = false;
            this.authors.toggle = false;
            break;
        }
        this[variant].toggle = !this[variant].toggle;
      }
    },
  }
</script>

<template>
  <header>
    <div class="container px-md-30">
      <button
        type="button"
        class="hamburger"
        :class="{
          'opened': emitHamburger
        }"
        @click="$emit('emitToggleMenu')"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 class="sr-only">天下雜誌出版</h1>
      <NuxtLink to="/" class="brand">
        <img src="/images/logo.svg" height="50" alt="天下雜誌出版 Logo">
      </NuxtLink>
      <slot name="menu"></slot>
      <div
        class="collapse-nav"
        :class="{
          'opened': emitSearch
        }"
      >
        <ul class="keywords">
          <li v-for="topic in topics" :key="`熱門議題-${topic.id}`">
            <a :href="topic.url">{{ topic.title }}</a>
          </li>
        </ul>
        <slot name="search"></slot>
      </div>
      <button
        type="submit"
        class="open-search px-10 ms-auto"
        @click="$emit('emitToggleSearch')"
      >
        <i
          class="icon icon-search"
          :class="{
            'icon-close': emitSearch
          }"
        ></i>
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        hamburger: false,
        search: false,
        topics: [
          {
            "id": 1,
            "title": "大師帶你讀",
            "url": "https://books.cw.com.tw/",
            "sort": 1
          },
          {
            "id": 3,
            "title": "如何避開地雷股",
            "url": "https://books.cw.com.tw/",
            "sort": 2
          },
          {
            "id": 2,
            "title": "行銷5.0",
            "url": "https://books.cw.com.tw/",
            "sort": 3
          }
        ],
      }
    },
    props: ['emit-hamburger', 'emitSearch'],
    emits: ['emitToggleMenu', 'emitToggleSearch'],
    watch: {
      emitHamburger() {
        this.hamburger = this.emitHamburger;
      },
      emitSearch() {
        this.search = this.emitSearch;
      }
    }
  };
</script>

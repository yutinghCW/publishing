<template>
  <div class="cards cards-author-intro">
    <div
      class="card-item"
      v-for="item in emitAuthor.authors"
      :key="item.id"
    >
      <div class="card-img">
        <img :src="item.photo_url" :alt="item.name">
      </div>
      <div class="card-author">
        <div class="author-name">
          <h4 class="serif fw-bold my-0">{{ item.name }}</h4>
          <div v-if="item.english_name" class="h4 serif fw-bold my-0">{{ item.english_name }}</div>
        </div>
         <NuxtLink :to="`/author/${item.id}`" class="btn btn-sm btn-contained btn-gray fw-bold">
          詳細資訊
         </NuxtLink>
      </div>
      <div class="card-txt mt-md-10 mt-20 px-md-0 px-10">
        {{ item.introduction }}
      </div>
    </div>
    <div
      class="card-item"
      v-for="item in emitAuthor.translators"
      :key="item.id"
    >
      <div class="card-img">
        <img :src="item.photo_url" :alt="item.name">
      </div>
      <div class="card-author">
        <div class="author-name">
          <h4 class="serif fw-bold my-0">{{ item.name }}</h4>
          <div v-if="item.english_name" class="h4 serif fw-bold my-0">{{ item.english_name }}</div>
        </div>
      </div>
      <div class="card-txt mt-md-10 mt-20 px-md-0 px-10">
        {{ item.introduction }}
      </div>
    </div>
    <div
      class="card-item"
      v-for="item in emitAuthor.illustrators"
      :key="item.id"
    >
      <div class="card-img">
        <img :src="item.photo_url" :alt="item.name">
      </div>
      <div class="card-author">
        <div class="author-name">
          <h4 class="serif fw-bold my-0">{{ item.name }}</h4>
          <div v-if="item.english_name" class="h4 serif fw-bold my-0">{{ item.english_name }}</div>
        </div>
      </div>
      <div class="card-txt mt-md-10 mt-20 px-md-0 px-10">
        {{ item.introduction }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['emit-author'],
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .cards-author-intro {
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid $gray-200;
    @include media-breakpoint-up(md) {
      padding-left: 30px;
      padding-right: 30px;
    }
    .card-item {
      display: grid;
      align-items: center;
      grid-template-columns: 105px auto;
      padding-bottom: 30px;
      color: $gray-400;
      @include media-breakpoint-up(md) {
        grid-template-columns: 135px auto;
      }
      + .card-item {
        padding-top: 40px;
        border-top: 1px solid $gray-200;
      }
    }
    .card-img {
      width: 90px;
      @include media-breakpoint-up(md) {
        width: 110px;
        grid-row-start: 0;
        grid-row-end: span 2;
      }
      img {
        width: 100%;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .card-author {
      @include media-breakpoint-up(md) {
        display: flex;
        align-items: center;
      }
    }
    .btn {
      @include media-breakpoint-up(md) {
        margin-left: 25px;
      }
      @include media-breakpoint-down(md) {
        margin-top: 15px;
      }
    }
    .card-txt {
      @include lineclamp(6);
      @include media-breakpoint-down(md) {
        grid-column-start: 0;
        grid-column-end: span 2;
      }
    }
  }
</style>
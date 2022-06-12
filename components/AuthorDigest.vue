<template>
  <div class="cards cards-digest">
    <div
      class="card-digest"
      v-for="article in emitDigest"
      :key="article.id"
    >
      <NuxtLink :to="`/article/${article.id}`">
        <span class="card-image">
          <img :src="article.photo_url" :alt="article.title">
        </span>
        <span class="card-body py-md-15 py-10 px-15">
          <span class="card-label h5 mt-0 mb-5">{{ article.name }}</span>
          <span class="card-title h4 serif fw-bold my-0">{{ article.title }}</span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['emit-digest'],
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .cards-digest.ellipsis-block {
    .card-digest {
      &:nth-child(4) ~ .card-digest {
        display: none;
      }
    }
  }
  .card-digest {
    margin-bottom: 20px;
    width: 100%;
    @include media-breakpoint-up(md) {
      width: calc((100% - 60px) / 4);
      margin-right: 20px;
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
    a {
      @include media-breakpoint-down(md) {
        display: flex;
      }
    }
    .card-image {
      border: 5px solid $gray-200;
      @include media-breakpoint-down(md) {
        width: 130px;
      }
    }
    .card-body {
      @include media-breakpoint-down(md) {
        width: calc(100% - 130px);
      }
    }
    .card-title {
      @include lineclamp(2);
      min-height: 1.5 * 2 * 1rem;
    }
  }
</style>
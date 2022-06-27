<template>
  <div class="cards cards-digest">
    <div
      class="card-digest"
      v-for="article in emitDigest"
      :key="article.id"
    >
      <NuxtLink :to="`/article/${article.id}`">
        <span class="card-image">
          <img v-if="article.photo_url" :src="article.photo_url" :alt="article.title">
          <img v-else src="https://dummyimage.com/420x310/aaa/fff" :alt="article.title">
        </span>
        <span class="card-body py-md-15 py-10 px-15">
          <span v-if="article.book" class="card-label fs-5 mb-5">{{ article.book.title }}</span>
          <span class="card-title fs-4 serif fw-bold my-0">{{ article.title }}</span>
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
      @include media-breakpoint-up(md) {
        &:nth-child(15) ~ .card-digest {
          display: none;
        }
      }
      @include media-breakpoint-down(md) {
        &:nth-child(12) ~ .card-digest {
          display: none;
        }
      }
    }
  }
  .card-digest {
    margin-bottom: 20px;
    @include media-breakpoint-up(md) {
      width: calc((100% - 80px) / 5);
      margin-right: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
    @include media-breakpoint-down(md) {
      width: calc((100% - 20px) / 2);
      margin-right: 20px;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
    .card-label {
      @include ellipsis;
    }
    .card-title {
      @include lineclamp(3);
      min-height: 1.5 * 3 * 1rem;
    }
  }
</style>
<template>
  <div class="cards cards-extended">
    <div
      v-for="extend in emitExtend"
      :key="extend.id"
      class="card-item"
    >
      <div class="card-label fw-bold">{{ convertLink(extend.type) }}</div>
      <a
        :href="extend.url"
        class="card-title btn btn-text btn-black btn-decoration"
      >{{ extend.title }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['emit-extend'],
    methods: {
      convertLink(state) {
        switch (state) {
          case 1:
            return '文章';
            break;
          case 2:
            return '影音';
            break;
        }
      },
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .cards-extended {
    @include media-breakpoint-down(md) {
      font-size: $h5;
    }
    .card-item {
      display: flex;
      align-items: center;
      + .card-item {
        margin-top: 20px;
      }
    }
    .card-label {
      margin-right: 15px;
      color: $white;
      background-color: $orange-200;
      border-radius: 2em;
      @include media-breakpoint-up(md) {
        padding: 2px 15px;
      }
      @include media-breakpoint-down(md) {
        padding: 2px 10px;
      }
    }
    .card-title {
      @include media-breakpoint-up(md) {
        width: calc(100% - 80px);
      }
      @include media-breakpoint-down(md) {
        width: calc(100% - 65px);
      }
    }
  }
</style>

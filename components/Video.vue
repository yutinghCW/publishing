<template>
  <div class="cards cards-video px-md-30">
    <button
      type="button"
      v-for="video in emitVideo"
      :key="video.id"
      class="card-video pb-20"
      @click="$emit('emit-modal', 'video', `https://www.youtube.com/embed/${getVideoId(video.url)}`, video.title)"
    >
      <span class="card-image">
        <img :src="video.photo_url" :alt="video.title">
        <i class="icon icon-play"></i>
      </span>
      <span class="card-body">
        <span class="card-title fs-4 mt-10">{{ video.title }}</span>
      </span>
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['emit-video'],
    emits: ['emit-modal'],
    methods: {
      getVideoId(link) {
        return link.substring(link.lastIndexOf('/') + 1);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .book-ellipsis-block, .author-ellipsis-block {
    @include media-breakpoint-up(md) {
      .card-video:nth-child(3) ~ .card-video {
        display: none;
      }
    }
    @include media-breakpoint-down(md) {
      .card-video:nth-child(2) ~ .card-video {
        display: none;
      }
    }
  }
</style>

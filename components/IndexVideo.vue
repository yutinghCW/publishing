<template>
  <div class="col-12 px-md-40">
    <div class="cards cards-video px-lg-30">
      <button
        type="button"
        v-for="video in emitVideo"
        :key="video.id"
        class="card-video"
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
  </div>
</template>

<script>
  export default {
    props: ['emit-video'],
    emits: ['emit-modal'],
    methods: {
      getVideoId(link) {
        return link.substring(link.lastIndexOf('/') + 1);
      },
    },
  };
</script>

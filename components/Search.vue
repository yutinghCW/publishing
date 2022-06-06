<template>
  <form class="search-group" @submit.prevent="submit">
    <input type="text" class="px-15 py-md-10 py-15" placeholder="請輸入關鍵字" ref="search" name="search" v-model="search">
    <button type="submit" class="px-15 py-md-10 py-15">
      <i class="icon icon-search"></i>
    </button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        search: '',
      };
    },
    methods: {
      submit() {
        this.$router.push("/search?key=" + this.search);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
</style>

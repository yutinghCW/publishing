<template>
  <div>
    <Header :class="{ 'scroll': scrollToggle }">
      <template #menu>
        <Menu />
      </template>
      <template #search>
        <Search />
      </template>
    </Header>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollToggle: false,
    }
  },
  mounted() {
    const height = window.innerHeight;
    window.onscroll = () => {
      let scrollTop = document.scrollingElement.scrollTop;
      if (scrollTop > (height / 2)) {
        this.scrollToggle = true;
      } else {
        this.scrollToggle = false;
      }
    }
  },
}
</script>

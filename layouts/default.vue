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
    <Black
      :class="{
        'opened': modal.status,
        'modal-black': modal.status,
      }"
    />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollToggle: false,
      modal: {
        status: false,
        type: null,
        title: null,
        source: null,
      },
    }
  },
  provide: function () {
    return {
      "layoutModal": this.modal
    };
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

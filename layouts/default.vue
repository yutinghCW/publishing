<template>
  <div>
    <Header
      :class="{
        'scroll': scrollToggle,
        'opened': menu,
      }"
      :emitHamburger="menu"
      :emitSearch="search"
      @emitToggleMenu="onToggleMenu"
      @emitToggleSearch="onToggleSearch"
    >
      <template #menu>
        <Menu
          :class="{
            'opened': menu,
          }"
        />
      </template>
      <template #search>
        <Search />
      </template>
    </Header>
    <Black
      :class="{
        'opened': modal.status || search,
        'modal-black': modal.status,
      }"
      @emitFunction="onCloseDiv"
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
      menu: false,
      search: false,
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
  methods: {
    onToggleMenu () {
      this.menu = !this.menu;
    },
    onToggleSearch () {
      this.search = !this.search;
    },
    onCloseDiv () {
      this.modal.status = false;
      this.menu = false;
      this.search = false;
    },
  },
  head () {
    return {
      bodyAttrs: {
        class: [
          (this.modal.status || this.menu || this.search) ? 'opened' : '',
        ]
      }
    }
  },
}
</script>

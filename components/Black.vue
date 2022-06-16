<template>
  <button
    type="button"
    class="black"
    @click="$emit('emitFunction')"
  ></button>
</template>

<script>
export default {
  emits: ['emitFunction'],
}
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .black {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    background-color: darken($black, 5%);
    border: 0;
    appearance: none;
    opacity: 0.5;
    z-index: 1;
    &.opened {
      width: 100%;
      height: 100%;
    }
    &.modal-black {
      z-index: 5;
    }
  }
</style>

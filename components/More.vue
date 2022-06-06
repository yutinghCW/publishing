<template>
  <button
    type="button"
    class="more"
    @click="$emit('emitMoreTrigged')"
  >
    展開更多
    <i class="icon icon-arrow-down"></i>
  </button>
</template>

<script>
export default {
  emits: ['emitMoreTrigged'],
}
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  button.more,
  button.collapse {
      position: relative;
      width: 100%;
      padding: 10px;
      color: $gray-300;
      background-color: transparent;
      border: 0;
      appearance: none;
      cursor: pointer;
      &:hover {
          color: $gray-400;
      }
      > * {
        display: block;
      }
      i.icon {
          margin-top: 5px;
      }
  }
</style>

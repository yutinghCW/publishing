<template>
  <div
    class="modal"
    :class="{
      'modal-book': emitModal.type === 'cover',
      'modal-video': emitModal.type === 'video',
    }"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div
          class="modal-head"
          :class="{
            'mb-20': emitModal.type === 'cover',
            'mt-20': emitModal.type === 'video',
          }"
        >
          <div v-if="emitModal.type === 'video'" class="embed-title fs-4">{{ emitModal.title }}</div>
          <button
            type="button"
            class="modal-close ms-auto"
            @click="$emit('emit-close')"
          >
            <i class="icon icon-close fs-2"></i>
          </button>
        </div>
        <div v-if="emitModal.type === 'cover'" class="modal-body">
          <div class="card-img">
            <img :src="emitModal.source" alt="">
          </div>
        </div>
        <div v-if="emitModal.type === 'video'" class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="`${emitModal.source}?rel=0&autoplay=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['emit-modal'],
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .modal {
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    transform: translateX(-50%);
    outline: 0;
    z-index: 1060;
    .modal-close {
      padding: 0;
      background-color: transparent;
      border: 0;
      appearance: none;
    }
    .modal-dialog {
      position: relative;
      display: flex;
      align-items: center;
      width: auto;
      height: calc(100% - 3.5rem);
      min-height: calc(100% - 3.5rem);
      margin: 1.75rem 20px;
      @include media-breakpoint-up(md) {
        margin: 1.75rem auto;
      }
    }
    .modal-content {
      position: relative;
      display: flex;
      width: 100%;
      max-height: 100%;
      padding: 20px;
      background-color: $white;
      border-radius: 0.25rem;
      outline: 0;
      overflow: hidden;
    }
    &.modal-video {
      max-width: 640px;
      .modal-dialog {
        .modal-content {
          flex-direction: column-reverse;
        }
        .modal-head {
          display: flex;
          justify-content: space-between;
          .embed-title {
            width: calc(100% - 42px);
          }
          .icon-close {
            display: block;
            padding: 2px 0;
            cursor: pointer;
          }
        }
      }
      .embed-responsive {
        position: relative;
        display: block;
        width: 100%;
        padding: 0;
        overflow: hidden;
        &::before {
          @include beforeafter('', block);
        }
        &-16by9::before {
          padding-top: 56.25%;
        }
        .embed-responsive-item, embed, iframe, object, video {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      }
    }
    &.modal-book {
      max-width: 840px;
      .modal-dialog {
        .modal-content {
          flex-direction: column;
        }
        .modal-head {
          display: flex;
          justify-content: space-between;
          .icon-close {
            display: block;
            padding: 2px 0;
            cursor: pointer;
          }
        }
        .modal-body {
          position: relative;
          flex: 1 1 auto;
          overflow-y: auto;
        }
        .card-img {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: $gray-100;
          @include media-breakpoint-up(md) {
            width: 800px;
            padding: 40px;
          }
          img {
            max-width: 100%;
            width: auto;
            height: auto;
          }
        }
      }
    }
  }
</style>

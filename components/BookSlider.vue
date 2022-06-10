<template>
  <div class="col-swiper">
    <div class="position-relative px-md-0 px-30 mb-md-10 mb-20">
      <div class="cards-book-master">
        <swiper
          class="swiper swiper-book-master cards"
          :options="swiperOption.master"
          ref="swiperMaster"
        >
          <swiper-slide
            v-for="cover in emitCover"
            :key="cover.id"
            class="card-book-master"
          >
            <button
              type="button"
              class="card-image"
              @click="$emit('emit-modal', 'cover', cover.photo_url)"
            >
              <img :src="cover.photo_url" alt="">
            </button>
          </swiper-slide>
        </swiper>
        <div class="swiper-book-master-button-prev d-md-none d-block">
          <i class="icon icon-arrow-left"></i>
        </div>
        <div class="swiper-book-master-button-next d-md-none d-block">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="cards-book-thumbnail position-relative d-md-block d-none px-20">
      <swiper
        class="swiper swiper-book-thumbnail cards"
        :options="swiperOption.thumbnail"
        ref="swiperThumbnail"
      >
        <swiper-slide
          v-for="cover in emitCover"
          :key="cover.id"
          :data-img="cover.photo_url"
          class="card-book-master"
        >
          <div class="card-image">
            <img :src="cover.photo_url" alt="">
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-book-thumbnail-button-prev d-md-block d-none">
        <i class="icon icon-arrow-left"></i>
      </div>
      <div class="swiper-book-thumbnail-button-next d-md-block d-none">
        <i class="icon icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          master: {
            slidesPerView: 1,
            navigation: {
              prevEl: '.swiper-book-master-button-prev',
              nextEl: '.swiper-book-master-button-next',
            },
            thumbs:{
              swiper: {
                el:'.swiper-book-thumbnail',
                slidesPerView: 4,
                watchSlidesVisibility: true
              }
            }
          },
          thumbnail: {
            slidesPerView: 4,
            spaceBetween: 10,
            freeMode: true,
            watchSlidesProgress: true,
            navigation: {
              prevEl: '.swiper-book-thumbnail-button-prev',
              nextEl: '.swiper-book-thumbnail-button-next',
            },
          },
        },
      }
    },
    props: ['emit-cover'],
    emits: ['emit-modal'],
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .cards-book-master {
    background-color: $gray-100;
  }
  .card-book-master {
    @at-root .swiper-book-master #{&} {
        padding: 35px;
    }
    @at-root .swiper-book-thumbnail #{&} {
      padding: 0.5rem;
      background-color: $gray-100;
    }
    .card-image {
      position: relative;
      overflow: hidden;
      &::before {
        @include beforeafter('', block);
        position: relative;
        width: 100%;
        padding-top: 105%;
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100.1%;
        height: 100.1%;
        object-fit: contain;
        transform: translate(-50%, -50%);
        transition: width 0.2s $timing-function, height 0.2s $timing-function;
      }
      @at-root .swiper-book-master #{&} {
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: transparent;
        border: 0;
        appearance: none;
        cursor: pointer;
      }
    }
  }
</style>

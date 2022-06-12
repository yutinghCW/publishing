<template>
  <div class="position-relative px-md-40 Spx-0">
    <swiper class="swiper swiper-series cards px-md-20" :options="swiperOption">
      <swiper-slide
        v-for="book in emitSeries"
        :key="book.id"
        class="card-series"
        :class="{
          'hot': book.selling_status === 2, 
          'soldout': book.selling_status === 3, 
          'new': book.selling_status === 4
        }"
      >
        <NuxtLink :to="`/book/${book.id}`">
          <span class="card-label" v-if="book.selling_status == 2">熱銷</span>
          <span class="card-label" v-else-if="book.selling_status == 3">絕版</span>
          <span class="card-label" v-else-if="book.selling_status == 4">新發行</span>
          <span class="card-image">
            <img
              v-for="cover in book.covers"
              :key="cover.id"
              :src="cover.photo_url"
              :alt="book.title"
            />
          </span>
        </NuxtLink>
      </swiper-slide>
    </swiper>
    <div class="swiper-series-button-prev d-md-block d-none">
      <i class="icon icon-arrow-left"></i>
    </div>
    <div class="swiper-series-button-next d-md-block d-none">
      <i class="icon icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: this.emitNumber,
          slidesPerGroup: this.emitNumber,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-series-pagination",
            clickable: true,
          },
          navigation: {
            prevEl: '.swiper-series-button-prev',
            nextEl: '.swiper-series-button-next',
          },
          breakpoints: {
            1280: {
              slidesPerView: this.emitNumber - 1,
              slidesPerGroup: this.emitNumber - 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: this.emitNumber - 2,
              slidesPerGroup: this.emitNumber - 2,
            },
            540: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
          },
        }
      }
    },
    props: ['emit-series', 'emit-number'],
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .card-series {
    padding: 5px;
    a {
      position: relative;
    }
    .card-image {
      &::before,
      &::after {
        @include beforeafter('', block);
      }
      &::after {
        width: 100%;
        padding-top: 133.8028169014085%;
        margin-left: auto;
        margin-right: auto;
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 100%;
        max-height: 100%;
        transition: transform 0.2s $timing-function;
        box-shadow: 2px 2px 6px rgba($black, 0.2);
        transform: translate(-50%, -50%);
      }
    }
    .card-label {
      position: absolute;
      bottom: 15px;
      left: -5px;
      padding: 5px 15px 5px 10px;
      color: $white;
      font-size: $h5;
      @include font-weight-500;
      line-height: 1.143;
      border-radius: 0 25px 25px 0;
      z-index: 2;
    }
    &.hot {
      .card-label {
        background-color: $orange-200;
      }
    }
    &.new {
      .card-label {
        background-color: $blue-200;
      }
    }
    &.soldout {
      .card-label {
        background-color: $gray-300;
      }
    }
  }
</style>
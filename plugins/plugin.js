import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueSlideToggle from 'vue-slide-toggle'

import swiper, { Navigation, Pagination, Thumbs } from 'swiper'

swiper.use([Navigation, Pagination, Thumbs])

export default () => {
  Vue.use(VueAwesomeSwiper)
  Vue.use(VueSlideToggle)
}

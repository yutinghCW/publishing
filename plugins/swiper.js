import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import swiper, { Navigation, Pagination } from 'swiper'

swiper.use([Navigation, Pagination])

export default () => {
  Vue.use(VueAwesomeSwiper)
}

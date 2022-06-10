import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import swiper, { Navigation, Pagination, Thumbs } from 'swiper'

swiper.use([Navigation, Pagination, Thumbs])

export default () => {
  Vue.use(VueAwesomeSwiper)
}

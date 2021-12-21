import Vue from 'vue'
import App from './App.vue'
import './plugins/app.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import { CarouselPlugin } from 'bootstrap-vue'
import { BCarousel } from 'bootstrap-vue'
Vue.component('b-carousel', BCarousel)
Vue.use(CarouselPlugin)
import { DropdownPlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)

import { NavbarPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)
import { FormGroupPlugin } from 'bootstrap-vue'
Vue.use(FormGroupPlugin)

import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

import { BListGroup } from 'bootstrap-vue'
Vue.component('b-list-group', BListGroup)

import { ListGroupPlugin } from 'bootstrap-vue'
Vue.use(ListGroupPlugin)

import { ButtonGroupPlugin } from 'bootstrap-vue'
Vue.use(ButtonGroupPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import map from '../views/map.vue'
import D3 from '../views/D3.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/map'
    },
    {
      path: '/map',
      component: map
    },
    {
      path: '/d3',
      component: D3
    }
  ]
})
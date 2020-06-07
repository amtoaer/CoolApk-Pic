import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/index').default
    },
    {
      path: '/detail',
      name: 'detail',
      component: require('@/components/detail').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

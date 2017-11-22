import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import NotFound from '@/components/layout/PageNotFound'
import Home from '@/components/PageIntro'
import About from '@/components/about/PageAbout'
import Works from '@/components/works/PageWorkList'
import Contact from '@/components/contact/PageContactInfo'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [{
    name: 'error',
    path: '*',
    component: NotFound
  }, {
    name: 'home',
    path: '/',
    component: Home
  }, {
    name: 'about',
    path: '/about',
    component: About
  }, {
    name: 'works',
    path: '/works',
    component: Works
  }, {
    name: 'contact',
    path: '/contact',
    component: Contact
  }]
})

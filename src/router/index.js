import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import NotFound from '@/components/template/PageNotFound'
import HomeVideo from '@/components/PageIntroVideo'
import AboutContent from '@/components/about/PageProfileContent'
import WorksList from '@/components/works/PageWorkList'
import ContactInfo from '@/components/PageContactInfo'

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
    component: HomeVideo
  }, {
    name: 'about',
    path: '/about',
    component: AboutContent
  }, {
    name: 'works',
    path: '/works',
    component: WorksList
  }, {
    name: 'contact',
    path: '/contact',
    component: ContactInfo
  }]
})

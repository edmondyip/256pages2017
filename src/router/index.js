import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import NotFound from '@/components/layout/PageNotFound'
import Home from '@/components/PageIndex'
import About from '@/components/PageAbout'
import Project from '@/components/projects/ProjectList'
import Contact from '@/components/PageContact'
import Comments from '@/components/contact/ContactComments'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  fallback: false,
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
    name: 'projects',
    path: '/projects',
    redirect: '/projects/eventor'
  }, {    
    name: 'project',
    path: '/projects/:url',
    component: Project
  }, {
    name: 'contact',
    path: '/contact',
    component: Contact
  }, {
    name: 'comments',
    path: '/comments',
    component: Comments
  }]
})

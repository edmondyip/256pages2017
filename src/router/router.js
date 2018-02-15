// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Error from '../components/Error'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '*',
        component: Error
      }
    ]
  });
}

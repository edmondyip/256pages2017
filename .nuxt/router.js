import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _98b5aed0 = () => import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */).then(m => m.default || m)
const _40223372 = () => import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _d93eca42 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _99cf14b8 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/projects",
			component: _98b5aed0,
			name: "projects"
		},
		{
			path: "/contact",
			component: _40223372,
			name: "contact"
		},
		{
			path: "/about",
			component: _d93eca42,
			name: "about"
		},
		{
			path: "/",
			component: _99cf14b8,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}

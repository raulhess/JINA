
const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('pages/Landing.vue'),
  },
  {
    path: '/Home',
    name: 'home',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

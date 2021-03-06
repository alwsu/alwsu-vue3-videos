import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
   
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: () => import('../views/home.vue')
  },
  {
    path: '/teleplay',
    name: 'Teleplay',
    meta: {
      title: '电视剧'
    },
    component: () => import('../views/teleplay/index.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    meta: {
      title: '电影'
    },
    component: () => import('../views/movie/index.vue')
  },
  {
    path: '/videos/:id',
    name: 'Videos',
    meta: {
      title: '视频详情'
    },
    component: () => import('../views/videos/index.vue')
  },
  {
    path: '/play/:id',
    name: 'Play',
    meta: {
      title: '视频播放'
    },
    component: () => import('../views/play/index.vue')
  },
  {
    path: '/scenario/:id',
    name: 'Scenario',
    meta: {
      title: '视频剧情'
    },
    component: () => import('../views/videos/index.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    meta: {
      title: 'echarts'
    },
    component: () => import('../views/demo.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

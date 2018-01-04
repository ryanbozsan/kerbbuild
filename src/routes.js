import LosAngeles from './pages/LosAngeles.vue'
import Pittsburgh from './pages/Pittsburgh.vue'
import SouthBay from './pages/SouthBay.vue'
import InlandEmpire from './pages/InlandEmpire.vue'

import VueRouter from 'vue-router'

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'losangeles',
      component: LosAngeles
    },
    {
      path: '/pittsburgh',
      name: 'pittsburgh',
      component: Pittsburgh
    },
    {
      path: '/southbay',
      name: 'southbay',
      component: SouthBay
    },
    {
      path: '/inlandempire',
      name: 'inlandempire',
      component: InlandEmpire
    }
  ]
})

export default router

import LosAngeles from './pages/LosAngeles.vue'
import Pittsburgh from './pages/Pittsburgh.vue'
import SouthBay from './pages/SouthBay.vue'
import InlandEmpire from './pages/InlandEmpire.vue'
import Privacypolicy from './pages/Privacy-policy.vue'
import Portland from './pages/Portland.vue'

import VueRouter from 'vue-router'

let router = new VueRouter({
  // mode: 'history',
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
      path: '/portland',
      name: 'portland',
      component: Portland
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
    },
    {
      path: '/Privacy-policy',
      name: 'privacypolicy',
      component: Privacypolicy
    }
  ]
})

export default router

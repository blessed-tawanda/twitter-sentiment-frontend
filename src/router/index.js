import Twitter from '../components/Twitter.vue'
import HelloWorld from '../components/HelloWorld.vue'


const routes = [
  {
    path: '/twitter',
    name: 'twitter',
    component: Twitter
  },
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  }
]

export default routes


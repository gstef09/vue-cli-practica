import About from './components/About.vue'
import Hello from './components/HelloWorld.vue'
import VueRouter from 'vue-router'

const routes = [
    {path: '/', component:Hello},
    {path: '/About', component:About},
]
const router = new VueRouter({
    routes
})

export default router
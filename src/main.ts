import { createApp } from 'vue'
import Root from './Root.vue'
import router from './router'
import "./assets/main.scss"
import SideBar from "@/components/Layout/Sidebar.vue"

const app = createApp(Root)
app.use(router)
router.isReady().then(() => {
app.component("side-bar", SideBar)
app.mount('#root')


})
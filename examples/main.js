import { createApp } from 'vue'
import App from './App.vue'
// import stylePlusUi from "../es/index.js";
import { SButton, STheme, SLoading } from '../es/index.js'

const components = [SButton, STheme, SLoading]



function installStylePlusUi() {
    components.forEach(component => {
        app.use(component)
    })
}


const app = createApp(App)
installStylePlusUi()
app.mount('#app')


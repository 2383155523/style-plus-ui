# style-plus-ui

## Install

```
# Install stylePlus for vue 3 project

npm i style-plus-ui -S
```

## Use

### Use All (完整引入)

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import stylePlusUi from "style-plus-ui";
import "style-plus-ui/lib/style-plus-ui.css";

createApp(App)
  .use(stylePlusUi)
  .mount("#app");
```

### Use Part (按需引入)

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { SButton, STheme,SLoading,... } from 'style-plus-ui'
import 'style-plus-ui/lib/style-plus-ui.css'

const components = [SButton, STheme,SLoading,...];

function installStylePlusUi() {
    components.forEach(component => {
        app.use(component);
    })
}

const app = createApp(App);
installStylePlusUi();
app.mount('#app');
```

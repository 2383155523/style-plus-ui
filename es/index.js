import components from './components';

export const { SButton, STheme, SLoading } = components;

export default {
    version: "1.0.0",
    install(App) {
        Object.keys(components).forEach(component => {
            App.component(components[component].name, components[component]);
        })
    }
}

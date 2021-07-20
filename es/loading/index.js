import SLoading from './loading.vue'
SLoading.name = "s-loading";
SLoading.install = function (App) {
    App.component(SLoading.name, SLoading);
}

export default SLoading;
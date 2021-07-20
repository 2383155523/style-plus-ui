import STheme from './theme.vue';

STheme.name = 's-theme';

STheme.install = function (App) {
    App.component(STheme.name, STheme);
}

export default STheme;
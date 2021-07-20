import SButton from './button.vue'
SButton.name = "s-button";
SButton.install = function (App) {
    App.component(SButton.name, SButton);
}

export default SButton;
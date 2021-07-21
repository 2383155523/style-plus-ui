<template>
  <h1 style="text-align:center; margin:5px;">theme组件演示</h1>
  <s-theme :name="theme" class="theme">
    <s-button type="primary" @click="changeTheme">change theme</s-button>
  </s-theme>
</template>
<script setup>
import { ref } from "vue";
const theme = ref("light");
let themeFlag = true;
const changeTheme = () => {
  themeFlag = !themeFlag;
  theme.value = themeFlag ? "light" : "dark";
};
</script>
<style scoped>
.theme {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

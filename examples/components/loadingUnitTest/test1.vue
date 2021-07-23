<template>
  <h1 style="text-align:center; margin:5px; color:#000;">
    loading组件演示
    <s-button type="primary" @click="changeTheme">change theme</s-button>
    <s-button
      type="warn"
      @click="globalLoading"
      dashed
      style="margin-left:20px;"
      >全局加载</s-button
    >
    <s-button type="warn" @click="partLoading" dashed style="margin-left:20px;"
      >局部加载</s-button
    >
  </h1>
  <s-theme :name="theme" class="theme">
    <h3>
      切换loading组件的主题色-->
      <input type="color" v-model="loadingColor" />
    </h3>
    <s-loading :isShow="globalLoadingIshow"></s-loading>
    <div class="loadingBox">
      <div class="loadingItem" v-for="(item, index) in 9" :key="index">
        content
        <s-loading
          text="拼命加载中..."
          :isShow="partLoadingIshow"
          auto
          :stylePlus="{
            color: loadingColor,
          }"
        ></s-loading>
      </div>
    </div>
  </s-theme>
</template>
<script setup>
import { ref } from "vue";
const theme = ref("light");
const loadingColor = ref("");
let themeFlag = true;
const changeTheme = () => {
  themeFlag = !themeFlag;
  theme.value = themeFlag ? "light" : "dark";
};

const globalLoadingIshow = ref(false);
const partLoadingIshow = ref(false);
const globalLoading = () => {
  globalLoadingIshow.value = true;
  setTimeout(() => {
    globalLoadingIshow.value = false;
  }, 4000);
};
const partLoading = () => {
  partLoadingIshow.value = true;
  setTimeout(() => {
    partLoadingIshow.value = false;
  }, 6000);
};
</script>
<style scoped>
.theme {
  width: 100vw;
  min-height: 100vh;
  text-align: center;
}
.loadingBox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  margin: 0 auto;
}
.loadingItem {
  position: relative;
  width: 300px;
  height: 200px;
  line-height: 200px;
  border: 3px solid skyblue;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  color: coral;
}
</style>

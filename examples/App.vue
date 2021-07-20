<template>
  <s-theme :name="theme">
    <div class="box">
      <s-button
        :type="item.type"
        v-for="item in buttonArr"
        class="myBtn"
        dashed
        :stylePlus="btnStyle"
        round
        @click="btnClick"
        >{{ item.text }}</s-button
      >
    </div>
    <div class="box">
      <s-button
        :type="item.type"
        plain
        dashed
        class="myBtn"
        v-for="item in buttonArr"
        :stylePlus="btnStyle"
        @click="btnClick"
        >{{ item.text }}</s-button
      >
    </div>
    <div class="box">
      <s-button
        class="myBtn"
        v-for="item in buttonArr"
        @click="btnClick"
        :delay="2000"
        dashed
        :beautiful="beautifulConfig"
        >{{ item.text }}</s-button
      >
    </div>
    <s-button type="primary" pain @click="changeTheme" style="margin-top:50px;"
      >改变主题</s-button
    >

    <div class="loadingBox">
      <s-loading
        :isShow="loadingIsShow"
        :stylePlus="loadingStyle"
        text="拼命加载中"
      ></s-loading>
    </div>
    <s-button
      dashed
      :stylePlus="{ display: 'block', 'margin-top': '30px' }"
      @click="openLoading"
      type="warn"
      plain
      >loading</s-button
    >
  </s-theme>
</template>

<script setup>
import { reactive, ref } from "vue";
//------------------ My  component Style  Start------------------
const beautifulConfig = reactive({
  //button beautiful prop
  "margin-top": "50px",
  "margin-left": "30px",
});

const loadingStyle = reactive({
  //loading
  // width: "40px",
  // height: "40px",
  // background: "rgba(255, 230, 230,0.8)",
});

const btnStyle = reactive({
  //button public style
  "margin-top": "50px",
  "margin-left": "30px",
});
//------------------ My  component Style End------------------

const buttonArr = [
  {
    type: "default",
    text: "默认按钮",
  },
  {
    type: "info",
    text: "信息按钮",
  },
  {
    type: "warn",
    text: "警告按钮",
  },
  {
    type: "danger",
    text: "危险按钮",
  },
  {
    type: "success",
    text: "成功按钮",
  },
  {
    type: "primary",
    text: "主要按钮",
  },
];
let theme = ref("light");
let themeFlag = true;
const changeTheme = () => {
  themeFlag = !themeFlag;
  theme.value = themeFlag ? "light" : "dark";
};

const loadingIsShow = ref(false);

const btnClick = () => {
  console.log("btnClick！！！");
};
const openLoading = () => {
  loadingIsShow.value = true;
  setTimeout(() => {
    loadingIsShow.value = false;
  }, 3000);
};
</script>
<style lang="scss">
body {
  // background: ;
}
// .myBtn {
//   margin-left: 50px;
//   margin-top: 50px;
//   margin-bottom: 40px;
//   // width: 300px !important;
// }
// .box {
//   display: flex;
//   justify-content: center;
// }
.loadingBox {
  width: 200px;
  height: 50px;
  border: 1px solid;
  margin: 0 auto;
  position: relative;
  background: #ccc;
}
</style>

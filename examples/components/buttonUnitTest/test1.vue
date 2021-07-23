<template>
  <h1 style="text-align:center; margin:5px;margin-bottom:20px; color:#000;">
    button组件演示
    <s-button type="primary" plain @click="changeTheme">改变主题</s-button>
  </h1>
  <s-theme :name="theme" class="theme">
    <div class="btn-box">
      <h3>默认按钮</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>默认按钮----被禁用的</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        disabled
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>圆润的默认按钮</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        round
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>圆润的默认按钮----被禁用的</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        round
        disabled
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>朴素的按钮</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        plain
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>朴素的按钮----被禁用的</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        plain
        disabled
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>圆润的朴素按钮</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        plain
        round
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>
    <div class="btn-box">
      <h3>圆润的朴素按钮----被禁用的</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        plain
        round
        disabled
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>带虚线的朴素按钮</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        plain
        dashed
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>带虚线的朴素按钮----被禁用的</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        disabled
        plain
        dashed
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>特别的动画按钮</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        beautiful
        class="button"
      >
        {{ btn.text }}
      </s-button>
    </div>

    <div class="btn-box">
      <h3>特别的动画按钮----被禁用的</h3>
      <s-button
        v-for="(btn, index) in buttonArr"
        :type="btn.type"
        :key="index"
        beautiful
        class="button"
        disabled
      >
        {{ btn.text }}
      </s-button>
    </div>
  </s-theme>
</template>
<script setup>
import { ref } from "vue";
const theme = ref("light");
const buttonArr = [
  {
    type: "info",
    text: "信息按钮",
  },
  {
    type: "primary",
    text: "主要按钮",
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
    type: "default",
    text: "默认按钮",
  },
  {
    type: "success",
    text: "成功按钮",
  },
];
let themeFlag = true;
const changeTheme = () => {
  themeFlag = !themeFlag;
  theme.value = themeFlag ? "light" : "dark";
};
</script>
<style scoped>
.theme {
  width: 100vw;
  min-height: 100vh;
}
.button {
  margin-left: 20px;
}
.btn-box {
  text-align: center;
  margin-top: 30px;
}
</style>

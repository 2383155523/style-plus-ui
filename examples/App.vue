<template>
  <s-theme name="light">
    <s-button
      type="primary"
      v-for="(item, index) in unitTestProjectArr"
      :key="index"
      @click="changeTab(index)"
      class="tab"
    >
      {{ item.tag }}
    </s-button>

    <div class="dynamicShowComponents">
      <stheme v-if="unitTestProjectArr[0].isShow"></stheme>
      <sbutton v-if="unitTestProjectArr[1].isShow"></sbutton>
      <sloading v-if="unitTestProjectArr[2].isShow"></sloading>
    </div>
  </s-theme>
</template>
<script setup>
//引入方法
import { ref, reactive } from "vue";
//引入单元测试组件
import stheme from "./components/themeUnitTest/test1.vue";
import sbutton from "./components/buttonUnitTest/test1.vue";
import sloading from "./components/loadingUnitTest/test1.vue";

//   --- ---------------- 准备工作   开始  ---------------------  //
const unitTestProjectArr = reactive([
  {
    tag: "theme",
    isShow: false,
  },
  {
    tag: "button",
    isShow: false,
  },
  {
    tag: "loading",
    isShow: false,
  },
]);
let prvTabIndex = null;
const changeTab = (index) => {
  if (prvTabIndex !== null) {
    unitTestProjectArr[prvTabIndex].isShow = false;
  }
  unitTestProjectArr[index].isShow = true;
  prvTabIndex = index;
};
//   --- ---------------- 准备工作   结束  ---------------------  //
</script>
<style scoped>
body {
  overflow-x: hidden;
}
.tab {
  margin-left: 20px;
}
.dynamicShowComponents {
  margin-top: 20px;
  width: 100%;
  border: 1px solid lightsalmon;
}
</style>

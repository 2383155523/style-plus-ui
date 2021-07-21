<template>
  <transition name="zoom">
    <div
      :class="{
        's-loading': true,
        [`s-loading-${theme}`]: true,
        's-loading-auto': auto,
      }"
      v-if="isShow"
      :style="{
        background: stylePlus.background,
      }"
    >
      <div class="s-loading-box">
        <svg
          class="s-loading-icon"
          :style="stylePlus"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 100 100;270 100 100"
              begin="0s"
              dur="1.6s"
              fill="freeze"
              repeatCount="indefinite"
            ></animateTransform>
            <circle
              fill="none"
              stroke="currentColor"
              stroke-width="16"
              stroke-linecap="round"
              cx="100"
              cy="100"
              r="92"
              stroke-dasharray="567"
              stroke-dashoffset="1848"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 100 100;135 100 100;450 100 100"
                begin="0s"
                dur="1.6s"
                fill="freeze"
                repeatCount="indefinite"
              ></animateTransform>
              <animate
                attributeName="stroke-dashoffset"
                values="567;142;567"
                begin="0s"
                dur="1.6s"
                fill="freeze"
                repeatCount="indefinite"
              ></animate>
            </circle>
          </g>
        </svg>
        <p class="s-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { ref, defineProps, inject } from "vue";

let theme = inject("theme") || ref("light");
const props = defineProps({
  stylePlus: {
    type: Object,
    default: {
      background: "",
    },
  },
  isShow: Boolean,
  text: {
    type: String,
    default: "快马加鞭中...",
  },
  auto: Boolean,
});
</script>
<style lang="scss" scoped>
@import "./loading.scss";
</style>

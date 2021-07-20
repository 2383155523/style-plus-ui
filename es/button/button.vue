<template>
  <div
    class="s-button-group"
    @click="SButtonClickHandle"
    :style="{
      display: stylePlus.display,
    }"
  >
    <button
      :class="{
        [`s-button-${type}-${theme}`]: true,
        [`s-button-plain-${type}-${theme}`]: plain,
        's-button-round': round,
        's-button-dashed': dashed,
      }"
      :style="stylePlus"
      :disabled="disabled"
      class="s-button"
      v-if="!beautiful"
    >
      <slot></slot>
    </button>
    <div class="s-button-beautiful" v-if="beautiful" :style="beautiful">
      <div
        class="s-button-beautiful-font"
        :style="{
          color: beautiful.color,
          'margin-top': disabled ? '6px' : '0px',
        }"
      >
        <slot></slot>
        <div
          class="s-button-beautiful-bg"
          :style="{
            background: beautiful.background,
          }"
        ></div>
      </div>
    </div>

    <div :class="'disabled-' + theme" v-if="disabled"></div>
  </div>
</template>
<script setup>
import { defineProps, toRefs, inject, ref, defineEmit } from "vue";

let theme = inject("theme") || ref("light");
const emit = defineEmit(["click"]);

let timer;
let flag = false;
const SButtonClickHandle = () => {
  if (disabled.value) return;

  if (debounce.value) {
    //防抖处理
    clearTimeout(timer);
    timer = setTimeout(() => {
      emit("click");
    }, delay.value);
    return;
  }

  if (throttle.value) {
    //节流处理
    if (flag) {
      return;
    }
    emit("click");
    flag = true;
    timer = setTimeout(() => {
      flag = false;
      clearTimeout(timer);
    }, delay.value);

    return;
  }
  emit("click");
};

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  plain: Boolean,
  round: Boolean,
  dashed: Boolean,
  disabled: Boolean,
  beautiful: [Boolean, Object],
  debounce: Boolean,
  throttle: Boolean,
  delay: {
    type: Number,
    default: 1000,
  },
  stylePlus: {
    type: Object,
    default: {
      backgroundColor: "",
    },
  },
});

let {
  type,
  plain,
  round,
  disabled,
  beautiful,
  stylePlus,
  debounce,
  throttle,
  delay,
} = toRefs(props);
</script>
<style lang="scss" scoped>
@import "./button.scss";
</style>

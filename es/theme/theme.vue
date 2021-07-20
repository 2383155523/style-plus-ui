<template>
  <div class="theme-container">
    <slot></slot>
  </div>
</template>

<script setup>
import {
  defineProps,
  toRefs,
  reactive,
  provide,
  defineEmit,
  ref,
  watch,
} from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "light",
  },
});

let { name, themeColor } = toRefs(props);

let background = ref(name.value);
watch(name, (newVal) => {
  background.value = newVal == "light" ? "#fff" : "#101014";
});

provide("theme", name);
</script>

<style lang="scss">
.theme-container {
  width: 100%;
  box-sizing: border-box;
  background: v-bind(background);
}
</style>

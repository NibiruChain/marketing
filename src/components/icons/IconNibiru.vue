<template>
  <span class="icon-wrapper">
    <i class="icon"></i>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "IconNibiru",
});
</script>

<style scoped lang="scss">
.icon {
  &-wrapper {
    display: flex;
  }
  width: 32px;
  height: 32px;
  background: {
    color: inherit;
    image: url("../../assets/icons/nibiru-mark.png");
    position: center;
    size: contain;
  }
}
</style>

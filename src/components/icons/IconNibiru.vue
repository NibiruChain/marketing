<template>
  <span class="icon-wrapper">
    <i class="icon"></i>
  </span>
</template>

<script>
export default {
  name: "IconNibiru",
};
</script>

<style scoped lang="scss">
.icon {
  &-wrapper {
    display: flex;
  }
  width: 35px;
  height: 35px;
  background: {
    color: inherit;
    image: url("../../assets/icons/nibiru-mark.png");
    position: center;
    size: contain;
  }
}
</style>

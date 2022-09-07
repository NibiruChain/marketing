<template>
  <button class="button">
    <i id="bell" class="icon"></i>
    <span class="text --small">Stay tuned</span>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .button {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 16px;
    margin-top: 16px;
    border: none;
    border-radius: 25px;
    outline: none;
    background: var(--nibiru-bg-light);
  }

  .icon {
    width: 18px;
    height: 18px;
    padding: 2px;
    background: {
      color: var(--nibiru-bg-transparent);
      size: contain;
      repeat: no-repeat;
      position: center;
    };

    &#bell {
      background-image: url("@/assets/icons/bell-dark.png");
    }
  }

  .text {
    margin-left: 8px;
    color: var(--nibiru-text-dark);
    font-size: 1rem;

    &.--small {
      font-size: 0.8rem;
    }
  }
</style>
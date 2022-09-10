<template>
  <ul class="socials-list">
    <li class="socials-list-item">
      <a href="https://discord.gg/sgPw8ZYfpQ" target="_blank">
        <img src="../../assets/img/social/discord.svg" width="20" />
      </a>
    </li>
    <li class="socials-list-item">
      <a href="https://twitter.com/NibiruChain" target="_blank">
        <img src="../../assets/img/social/twitter.svg" width="20" />
      </a>
    </li>
    <li class="socials-list-item">
      <a href="https://www.linkedin.com/company/nibiruchain" target="_blank">
        <img src="../../assets/img/social/linkedin.svg" width="20" />
      </a>
    </li>
    <li class="socials-list-item">
      <a href="https://nibiruchain.medium.com/" target="_blank">
        <img src="../../assets/img/social/medium.svg" width="20" />
      </a>
    </li>
    <li class="socials-list-item">
      <a href="https://github.com/NibiruChain" target="_blank">
        <img src="../../assets/img/social/github.svg" width="20" />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.socials {
  &-list {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 16px;

    &-item {
      font-family: URW Geometric Extended, sans-serif;
      font-size: 16px;
      font-weight: 400;
      text-align: start;
      padding: 0px 8px;
      color: var(--nibiru-text-light);

      > a {
        text-decoration: none;
        color: var(--nibiru-text-light);
      }
    }
  }

  &-nav {
    margin-left: 24px;
  }

  &-list-social {
    margin-left: auto;
  }

  .--stealth {
    color: var(--n-c-stealth);
  }
}
</style>

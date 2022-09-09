<template>
  <FooterLanding class="footer">
    <div class="footer-line __first">
      <div class="logo-gray"></div>
      <ul class="footer-nav">
        <li class="footer-nav-item">
          <a href="https://docs.nibiru.fi/concepts/readme">Terms</a>
        </li>
        <li class="footer-nav-item">
          <a href="https://docs.nibiru.fi/concepts/readme">Privacy</a>
        </li>
      </ul>

      <ul class="footer-list-social">
        <li class="footer-list-social-item">
          <a href="https://discord.gg/sgPw8ZYfpQ" target="_blank">
            <img src="../../assets/img/social/discord.svg" width="20" />
          </a>
        </li>
        <li class="footer-list-social-item">
          <a href="https://twitter.com/NibiruChain" target="_blank">
            <img src="../../assets/img/social/twitter.svg" width="20" />
          </a>
        </li>
        <li class="footer-list-social-item">
          <a
            href="https://www.linkedin.com/company/nibiruchain"
            target="_blank"
          >
            <img src="../../assets/img/social/linkedin.svg" width="20" />
          </a>
        </li>
        <li class="footer-list-social-item">
          <a href="https://nibiruchain.medium.com/" target="_blank">
            <img src="../../assets/img/social/medium.svg" width="20" />
          </a>
        </li>
        <li class="footer-list-social-item">
          <a href="https://github.com/NibiruChain" target="_blank">
            <img src="../../assets/img/social/github.svg" width="20" />
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-line __second">
      <p class="text --stealth">© 2022 Nibiru Overlords</p>
    </div>
  </FooterLanding>
</template>

<script>
// export default {
//   name: "FooterLanding",
// };
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: fit-content;
  padding: 0px 24px; // vertical horizontal

  &-line {
    &.__first {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &.__second {
      .text {
        font-family: URW Geometric Extended, sans-serif;
        font-size: 12px;
        line-height: 1.4;
        letter-spacing: 0em;
      }
    }
  }

  .logo-gray {
    width: 70px;
    height: 20px;
    background: {
      color: var(--nibiru-bg-transparent);
      size: contain;
      repeat: no-repeat;
      position: center;
      image: url("@/assets/icons/nibiru-full-gray.png");
    }
  }

  &-nav,
  &-list-social {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 16px;

    &-item {
      font-family: URW Geometric Extended, sans-serif;
      font-size: min(1.1rem, 1.2vw);
      font-weight: 400;
      text-align: start;
      padding: 4px 8px;
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

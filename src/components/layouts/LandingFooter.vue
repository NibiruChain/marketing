<template>
  <footer class="footer">
    <div class="footer-line __first">
      <div class="logo-gray"></div>
      <ul class="footer-nav">
        <li class="footer-nav-item">
          <a href="terms-and-conditions-nibiru.pdf">Terms</a>
        </li>
        <li class="footer-nav-item">
          <a href="privacy-policy-nibiru.pdf">Privacy</a>
        </li>
      </ul>

      <SocialIcons class="footer-list-social" />
    </div>
    <div class="footer-line __second">
      <p class="text --stealth">© 2022, Nibiru Chain</p>
    </div>
  </footer>
</template>

<script>
import SocialIcons from "@/components/layouts/SocialIcons.vue";
export default {
  components: {
    SocialIcons,
  },
};
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
    padding: 8px 8px;

    &-item {
      font-family: URW Geometric Extended, sans-serif;
      font-size: 12px;
      font-weight: 400;
      overflow-wrap: break-word;
      text-align: start;
      padding: 4px 8px;
      color: var(--nibiru-text-light);

      > a {
        text-decoration: none;
        color: var(--nibiru-text-light);
      }
    }
  }

  @media (max-width: 325px) {
    .footer-nav {
      display: none;
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

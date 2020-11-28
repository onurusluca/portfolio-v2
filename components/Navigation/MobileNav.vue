<template>
  <div
    id="mobile-nav"
    :class="{ 'hidden-mnav': !showOnScroll, 'scroll-mnav': scrollNav }"
  >
    <div class="mobile-logo">
      <nuxt-link
        :to="localePath('/')"
        :class="{ 'scroll-nav': scrollNav }"
        ><img src="~assets/images/logo.png" alt="Mobile Logo" />
      </nuxt-link>
    </div>
    <div :class="{ 'hide-ham-btn': !showOnScroll }"  @click="openHam = !openHam"
 class="hamburger-btn">
      <div
        class="ham-lines"
        :class="{ change: openHam }"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
          </div>

      <div v-show="openHam" class="blurred-back"></div>
      <transition name="translateX">
        <div v-click-outside="hide" class="ham-menu" v-show="openHam">
          <ul class="mobile-nav-list">
            <li class="nav-links">
              <a href="#about">{{ $t("about") }}</a>
            </li>
            <li class="nav-links">
              <a href="#experience">{{ $t("experience") }}</a>
            </li>
            <li class="nav-links">
              <a href="#works">{{ $t("works") }}</a>
            </li>
            <li class="nav-links">
              <a href="#contact">{{ $t("contact") }}</a>
            </li>
           <div class="resumes">
            <a
              v-show="$i18n.locale === 'en'"
              target="_blank"
              rel="”noreferrer”"
              class="resume"
              href="https://drive.google.com/file/d/1qZ8b4Y0TAsaTYAopKmZWh71GFJ_ZuOcS/view?usp=sharing"
              download="Usluca_Onur_Web_Developer_Resume"
            >
              {{ $t("resume") }}
            </a>
            <a
              v-show="$i18n.locale === 'tr'"
              target="_blank"
              rel="”noreferrer”"
              class="resume"
              href="https://drive.google.com/file/d/1qZ8b4Y0TAsaTYAopKmZWh71GFJ_ZuOcS/view?usp=sharing"
              download="Usluca_Onur_Web_Developer_Resume"
            >
              {{ $t("resume") }}
            </a>
            <a
              v-show="$i18n.locale === 'ja'"
              target="_blank"
              rel="”noreferrer”"
              class="resume"
              href="https://drive.google.com/file/d/1rzJ99MpnL4gFB_wxvy3V7Hcbrl7FnA75/view?usp=sharing"
              download="Usluca_Onur_日本語履歴書"
            >
              {{ $t("resume") }}
            </a>
          </div>
          </ul>
          <div class="show-lang-btn">
            <div
              class="lang-btn"
              v-show="$i18n.locale === 'en'"
              @click="showLangList = !showLangList"
            >
              <p>ENG</p>
            </div>
            <div
              class="lang-btn"
              v-show="$i18n.locale === 'ja'"
              @click="showLangList = !showLangList"
            >
              <p>言語</p>
            </div>
            <div
              class="lang-btn"
              v-show="$i18n.locale === 'tr'"
              @click="showLangList = !showLangList"
            >
              <p>TR</p>
            </div>
          </div>

          <transition name="fade">
            <ul
              v-click-outside="hide"
              class="lang-changer"
              v-show="showLangList"
            >
              <nuxt-link
                tag="li"
                hi
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                s
              >
                {{ locale.name }}
              </nuxt-link>
            </ul>
          </transition>
        </div>
      </transition>
  </div>
</template>
<i18n>
{
  "en": {
    "about": "About",
    "experience": "Experience",
    "works": "Work",
    "contact": "Contact",
    "resume": "Resume",
    "language": "Language"
  },
  "ja": {
    "about": "私について",
    "experience": "経験",
    "works": "作品",
    "contact": "問い合わせ",
    "resume": "経歴書",
        "language": "言語"

  },
  "tr": {
    "about":"Hakkımda",
    "experience": "Tecrübem",
    "works":"Projelerim",
    "contact":"Bana Ulaşın",
    "resume":"Özgeçmişim",
        "language": "Dil"

  }
}
</i18n>

<script>
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      openHam: false,
      showLangList: false,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code);
    },
  },

  methods: {
    hide() {
      this.openHam = false;
      this.showLangList = false;
    },
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  // do not forget this section
  directives: {
    ClickOutside,
  },
};
</script>


<style lang="scss" scoped>
#mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0%, 0);
  transition: 0.1s all ease-out;
  width: 100%;
  height: 10vh;
  z-index: 99;
  transition: all 400ms;

  &.hidden-mnav {
    box-shadow: none;
    transform: translate3d(0, -120%, 0);
  }
  &.scroll-mnav {
    .mobile-logo {
      top: 2vh;
    }
    .hamburger-btn {
      top: 2vh;
    }
    background-color: rgba(34, 34, 34, 0.807);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }

  .mobile-logo {
    position: absolute;
    left: 4vh;
    top: 3.5vh;
    z-index: 3;
    width: 8vh;
  }

  .hamburger-btn {
    cursor: pointer;
    z-index: 99;
    background-color: transparent;
    padding: 0.5vh 1vh;
    border-radius: 1vh;
    border: none;
    position: fixed;
    top: 4vh;
    right: 5vh;
    border: none;
    outline: none;
    width: max-content;
    height: max-content;
    padding: 1vh;
    svg {
      width: 8vh;
    }
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 3px;
    background-color: white;
    margin: 1vh 0;
    transition: 0.2s;
  }

  .bar2 {
    width: 25px;
  }
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-10px, 3px);
    will-change: transform;
  }
  .change .bar2 {
    opacity: 0;
  }
  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-10px, -5px);
    will-change: transform;
  }

  .ham-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: max-content;
    height: 100vh;
    display: block;
    background: rgb(27, 27, 27);
    appearance: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 0 15vh;
    padding-top: 10vh;
    margin: 0;
    z-index: -77;
    ul {
      text-align: center;
      list-style: none;
      padding: 0;

      .nav-links {
        padding: 0;
        margin: 6vh 0;

        a {
          font-weight: bold;
          text-align: center;
          font-size: 2.5vh;
          color: $t-color;
          transition: all 200ms ease-out;
          &:hover {
            color: $p-color;
          }
        }
      }
      .resume {
        color: white;
        padding: 0.3vh 0.8vh;
        border-radius: 1vh;
        border: 2px solid white;
        cursor: pointer;
        transition: all 200ms;
        font-weight: bold;
        &:hover {
          background: $p-color;
          color: $b-color;
        }
      }
      .show-lang-btn {
        margin-left: 5vh;
        margin-right: -5vh;
      }
    }
    .lang-btn {
      background: none;
      text-transform: uppercase;
      cursor: default;
      padding: 0vh 0.5vh;
      margin-top: 8vh;
      -webkit-tap-highlight-color: transparent;
          user-select: none;
      p {
        transition: all 100ms;
        font-weight: bold;
        font-size: 2.5vh;
      }
      &:hover {
        p {
          color: $p-color;
        }
      }
    }
  }
  .lang-changer {
    position: absolute;
    bottom: 12vh;
    list-style: none;
    margin-top: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    align-items: center;
    background: white;
    border-radius: 0.5vh;
    padding: 0;
    z-index: 5;
    li {
      border-radius: 0.5vh;
      text-align: center;
      width: 100%;
      height: max-content;
      margin: 0 auto;
      color: #222;
      padding: 0.6vh 1.5vh;
      font-size: 2.4vh;
      cursor: pointer;
      &:hover {
        background: $p-color;
      }
    }
  }

  .translateX-enter {
    transform: translateX(50px);
    opacity: 0;
    will-change: transform;
  }

  .translateX-enter-active,
  .translateX-leave-active {
    transform-origin: top left 0;
    transition: 0.4s ease;
    will-change: transform;
  }

  .translateX-leave-to {
    transform: translateX(50px);
    opacity: 0;
    will-change: transform;
  }
  .hide-ham-btn {
    display: none;
  }

  @media #{$xs-mobile, $s-tablets} {
    display: block;

    .hamburger-btn {
      display: inline;
    }
  }
}
</style>
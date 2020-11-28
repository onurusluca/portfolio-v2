<template>
  <div id="navbar">
    <div class="desktop-nav">
      <div
        id="navbar"
        class="navbar"
        :class="{ 'hidden-navbar': !showOnScroll, 'scroll-nav': scrollNav }"
      >
        <ul
          class="nav-list slide-in-blurred-top"
          :class="{ 'scroll-nav': scrollNav }"
        >
          <nuxt-link
            :to="localePath('/')"
            id="logo"
            :class="{ 'scroll-nav': scrollNav }"
            ><img src="~assets/images/logo.png" alt="Logo Image" />
          </nuxt-link>
          <li class="nav-links">
            <a href="#about-me">{{ $t("about") }}</a>
          </li>
          <!--   <li class="nav-links">
            <a href="#experience">{{ $t("experience") }}</a>
          </li> -->
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
          <div class="show-lang-btn" :class="{ 'scroll-nav': scrollNav }">
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
              >
                {{ locale.name }}
              </nuxt-link>
            </ul>
          </transition>
        </ul>
      </div>
    </div>
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
.navbar {
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  width: 100%;
  background-color: $b-color;
  z-index: 99;
  padding-right: 5vh;
  transition: all 200ms;
  &.hidden-navbar {
    box-shadow: none;
    transform: translate3d(0, -120%, 0);
  }
  &.scroll-nav {
    background-color: rgba(34, 34, 34, 0.807);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    #logo {
      img {
        position: absolute;
        top: 0;
        width: 7vh;
      }
    }
  }
}

.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#navbar {
  .slide-in-blurred-top {
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    @-webkit-keyframes slide-in-blurred-top {
      0% {
        -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        -webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
        transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-blurred-top {
      0% {
        -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        -webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
        transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
    }
  }
  #logo {
    width: 10vh;
    position: absolute;
    left: 5vh;
    top: 2vh;
    transition: all 300ms;
    &:hover {
      transform: scale(1.1);
    }
    &.scroll-nav {
      width: 8vh;
    }
  }

  .nav-list {
    padding: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
    text-align: center;
    &.scroll-nav {
      padding: 2vh;
    }
    .nav-links {
      margin: 0 2vh;
      cursor: pointer;
      padding-bottom: 0.5vh;
      transition: border 200ms ease-out;
      border: 2px solid transparent;
      width: max-content;

      a {
        color: $t-color;
        font-family: $s-font;
        font-weight: bold;
        font-size: 2vh;
      }
      &:hover {
        border-bottom: 2px solid $p-color;
      }
    }
    .resume {
      color: white;
      padding: 0.3vh 0.8vh;
      border-radius: 1vh;
      border: 2px solid white;
      cursor: pointer;
      margin-left: 2vh;
      transition: all 200ms;
      font-weight: bold;
      &:hover {
        background: $p-color;
        color: $b-color;
        border-color: transparent;
      }
    }
  }

  .show-lang-btn {
    margin-left: 5vh;
    margin-right: -5vh;
    &.scroll-nav {
      margin-right: -2.5vh;
    }
    .lang-btn {
      outline: none;
      border: none;
      background: none;
      color: $t-color;
      text-transform: uppercase;
      cursor: pointer;
      padding: 0vh 0.5vh;
      font-weight: bold;

      p {
        transition: all 200ms;
      }
      &:hover {
        p {
          color: $p-color;
          transform: scale(1.1);
        }
      }
    }
  }

  .lang-changer {
    list-style: none;
    margin: 0;
    position: absolute;
    right: -3.5vh;
    top: 9vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    align-items: center;
    background: white;
    border-radius: 0.5vh;
    padding: 0;
    z-index: 5;
    user-select: none;
    li {
      border-radius: 0.5vh;
      text-align: center;
      width: 100%;
      height: max-content;
      margin: 0 auto;
      color: #222;
      padding: 0.6vh 1.5vh;
      cursor: pointer;
      &:hover {
        background: $p-color;
      }
    }
  }

  @media #{$xs-mobile, $s-tablets} {
    .mobile-logo {
      display: block;
    }
    .desktop-nav {
      display: none;
    }
  }
}
</style>
<template>
  <div id="about-me" data-aos="fade-in" data-aos-duration="500">
    <div class="left-about">
      <h2>
        {{ $t("about-me") }}

        <hr />
      </h2>
      <p>
        {{ $t("about-text.about-2") }}
      </p>

      <p>{{ $t("about-text.about-3") }}</p>
      <p>{{ $t("about-text.about-4") }}</p>

      <p>
        {{ $t("about-list") }}
      </p>

      <div class="list">
        <ul>
          <li>HTML & CCS (SCSS)</li>
          <li>JavaScript (ES+)</li>
          <li>Vue.js(Vuex) & Nuxt.js</li>
          <li>Node.js & Express.js</li>
          <li>Browser Extensions</li>
        </ul>
        <ul>
          <li>AdobeXD & Figma</li>
          <li>UI/UX Design</li>
          <li>Photoshop & Adobe Premiere</li>
          <li>Wordpress & Templates</li>
          <li>Version Control(Git)</li>
        </ul>
      </div>
    </div>
    <div class="right-about">
      <img src="../assets/images/auhor-pic.jpg" alt="Author Picture" />
    </div>
  </div>
</template>
<i18n>
{
  "en": {
    "about-me": "About Me",
    "about-text": {
      "about-2": "Hi! How are you? I am Onur.",
      "about-3": "I am a self-taught web developer / designer. I studied Japanese Language and Literature in Ankara University in Turkey.",
      "about-4": "I have over 2 years of work experience in web development. I speak Japanese, English and Turkish"
    },
    "about-list": "These are some of the things I know:"
  },
 "ja": {
    "about-me": "私について",
    "about-text": {
      "about-2": "こんにちは。はじめまして、 オヌルと言います。",
      "about-3": "トルコのアンカラ大学で日本語日本文学科を卒業しました。日本語、英語、トルコ語を話します。",
      "about-4": "私は独学のWeb開発者 & デザイナーです。Web開発で2年以上の実務経験があります。"
    },
    "about-list": "こちらは私が知っていることのいくつかです："
  },
  "tr": {
    "about-me": "Hakkımda",
    "about-text": {
      "about-2": "Merhaba. Nasılsınız? Ben Onur",
      "about-3": "Ben otodidakt bir web geliştiricisi & tasarımcısıyım. Türkiye'de Ankara Üniversitesi'nde Japon Dili ve Edebiyatı okudum.",
      "about-4": "Web geliştirme alanında 2 yıldan fazla iş deneyimim var. Japonca, İngilizce ve Türkçe biliyorum."
    },
    "about-list": "Bunlar bildiğim şeylerden bazıları:"
  }
}

</i18n>

<script>
export default {};
</script>

<style lang="scss" scoped>
#about-me {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: left;
  height: auto;
  padding: 15vh;
  .left-about {
    width: 70vh;
    margin-right: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
      width: 50%;
      margin-top: -15vh;
      color: $p-color;
    }
    p {
      margin-bottom: 2vh;
    }

    .list {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      ul {
        margin-right: 6vh;
        padding: 0;
        padding-left: 1vh;
      }
    }
    ul {
      height: 4vh;
      li {
        margin: 1vh 0;
        &::before {
          content: "\25ca";
          color: $p-color;
          font-weight: bold;
          display: inline-block;
          margin-left: -1vh;
          width: 2vh;
          font-size: 1.4vh;
        }
      }
    }
  }

  .space {
    margin: 2vh 0;
  }

  .right-about {
    box-shadow: 8px 8px 0px 0px $p-color;
    border-radius: 0.5vh;

    img {
      z-index: 2;
      width: 38vh;
      height: 38vh;
      object-fit: cover;
      border-radius: 0.5vh;
      transition: all 400ms;
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media #{ $ls-tablets, $sm-tablets, $s-tablets, $m-laptop} {
    padding: 5vh;
    margin: 5vh;
    .right-about {
      margin-top: 20vh;
    }
  }
  @media #{$xs-mobile, $s-tablets} {
    margin: 0;
    padding: 6vh 2vh;

    .left-about {
      width: 99%;
      padding: 0;
      margin: 0;

      ul li {
        padding: 0.1vh 0;
        font-size: 2vh;
        width: max-content;
      }
    }
    .right-about {
      margin-top: 20vh;
    }
    .list {
      justify-content: center;
      align-items: center;
      width: 99%;

      ul {
        margin: 0;
        padding: 0;
        &:last-child {
          margin-left: -2.5vh;
        }
      }
    }
  }
}
</style>

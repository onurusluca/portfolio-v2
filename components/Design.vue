<template>
  <div id="works">
    <h2>
      {{ $t("mydesigns") }}
      <hr />
    </h2>
    <div class="projects">
      <div class="project left" data-aos="fade-in">
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://www.figma.com/file/EZLvdvFgHZ7O7mXPaeUJfD/Ennka-Japanese-Enka-Music-Platform-Concept-演歌音楽プラットフォーム-Spotify-Clone?node-id=4%3A385"
          >
            <img
              src="../assets/images/ennka.webp"
              alt="Denmou image"
              class="showcase"
            />
          </a>
        </div>
        <div class="texts">
          <h3 class="title">Ennka</h3>
          <p class="text">
            {{ $t("p-detail-ennka") }}
          </p>
          <div class="tags">
            <p>Design</p>
            <p>Figma</p>
            <p>Website Design</p>
            <p>Congested Design</p>
          </div>
          <div class="links">
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://www.figma.com/file/EZLvdvFgHZ7O7mXPaeUJfD/Ennka-Japanese-Enka-Music-Platform-Concept-演歌音楽プラットフォーム-Spotify-Clone?node-id=4%3A385"
            >
              <outlink-svg />
            </a>
          </div>
        </div>
      </div>

      <div class="project right" data-aos="fade-in">
        <div class="texts">
          <h3 class="title">OhBento!</h3>
          <p class="text">
            {{ $t("p-detail-ohbento") }}
          </p>
          <div class="tags">
            <p>Design</p>
            <p>Figma</p>
            <p>App Design</p>
            <p>Clean Design</p>
          </div>
          <div class="links">
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://www.figma.com/file/Ltj16yqUVXDgjXWlzeAhWC/OhBento-Japanese-Bentou-Shopping-Concept-App-お弁当ショッピングコンセプトアプリ?node-id=1%3A8"
            >
              <outlink-svg />
            </a>
          </div>
        </div>
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://www.figma.com/file/Ltj16yqUVXDgjXWlzeAhWC/OhBento-Japanese-Bentou-Shopping-Concept-App-お弁当ショッピングコンセプトアプリ?node-id=1%3A8"
          >
            <img
              src="../assets/images/ohbento.webp"
              alt="KaidanFit image"
              class="showcase"
            />
          </a>
        </div>
      </div>

      <div class="project left" data-aos="fade-in">
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://www.figma.com/file/4Oihnv3HYx5UEEOGAWGIbr/Social-Media-Clones-ソーシャルメディアのクローン?node-id=0%3A1"
          >
            <img
              src="../assets/images/sosyal.webp"
              alt="KaidanFit image"
              class="showcase"
            />
          </a>
        </div>
        <div class="texts">
          <h3 class="title">Sosyal</h3>
          <p class="text">
            {{ $t("p-detail-social") }}
          </p>
          <div class="tags">
            <p>Design</p>
            <p>Figma</p>
            <p>App Design</p>
            <p>Website Design</p>
          </div>
          <div class="links">
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://www.figma.com/file/4Oihnv3HYx5UEEOGAWGIbr/Social-Media-Clones-ソーシャルメディアのクローン?node-id=0%3A1"
            >
              <outlink-svg />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<i18n>
{
  "en": {
    "mydesigns": "My Designs",
    "p-detail-ennka": "Spotify clone Enka music concept web app design. Aim was to design a Spotify clone with a unique taste.",
    "p-detail-ohbento": "Obento shop app. Made to be simple and beautiful. Glas blur, clean design and filters are used.",
    "p-detail-social": "Clones of popular apps and websites. Made for practice and fun. Inclued brands like Instagram, Netfix, WhatsApp..."
  },

  "ja": {
    "myworks": "デザイン",
    "p-detail-denmou": "ウェブサイト作成、デジタルマーケティング、ソーシャルメディア管理などのサービスを提供する架空の日本のSaaS会社のウェブサイト。 Nuxt.jsで作成しました。",
    "p-detail-ennka": "Spotify clone Enka music concept web app design.",
    "p-detail-ohbento": "Obento shop app. That's it!",
    "p-detail-social": "Clones of popular apps and websites. Made for practice and fun."

 },
    "tr": {
    "myworks": "Tasarım Çalışmalarım",
    "p-detail-denmou": "Web sitesi yapımı, dijital pazarlama, sosyal medya yönetimi gibi hizmetler sunan kurgusal bir Japon SaaS şirketi web sitesi ... Nuxt.js ile yapılmıştır",
    "p-detail-ennka": "Spotify clone Enka music concept web app design.",
    "p-detail-ohbento": "Obento shop app. That's it!",
    "p-detail-social": "Clones of popular apps and websites. Made for practice and fun."

 }
}
</i18n>

<script>
import OutlinkSvg from "./Svg/OutLink.vue";

export default {
  components: {
    OutlinkSvg,
  },
};
</script>

<style lang="scss" scoped>
#works {
  width: 100%;
  height: max-content;
  padding: 5vh 0 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    margin-bottom: 5vh;
    color: $p-color;
    width: 40vh;
  }
  .projects {
    .project {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 5vh 10vh 20vh 10vh;
      .image-container {
        position: relative;

        img {
          position: relative;
          width: 60vw;
          border-radius: 0.8vh;
          box-shadow: 0 12px 10px rgba(0, 0, 0, 0.5);
          transition: all 200ms;
          filter: grayscale(100%);
          &:hover {
            transform: scale(1.03);
            filter: grayscale(0);
          }
        }
      }

      .texts {
        width: 65vh;
        z-index: 44;
        margin: 0;
        padding: 0;
        h3 {
          margin-bottom: 3vh;
          color: $text-color;
          font-size: 3.5vh;
        }
        .text {
          margin-bottom: 5vh;
          font-size: 2vh;
          border-radius: 0.8vh;
          background: rgba(41, 41, 41, 0.95);
          padding: 3vh;
          box-shadow: 0 12px 10px rgba(0, 0, 0, 0.5);
          opacity: 1;
        }
        .tags {
          margin-bottom: 3vh;
          display: flex;
          flex-direction: row;
          p {
            border-radius: 0.5vh;
            font-size: 1.6vh;
          }
        }
        .links {
          clear: both;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          float: right;
          flex-direction: row;
          svg {
            padding: 0;
            width: 3vh;
            height: 3vh;
            transition: all 400ms;
            fill: $text-color;
            &:hover {
              fill: $p-color;
            }
          }
        }
      }
    }
    .right {
      text-align: left;
      .texts {
        margin-right: -10vh;
        .tags {
          float: left;
          p {
            margin-right: 2vh;
          }
        }
        .links {
          float: left;
          svg {
            margin-right: 2.5vh;
          }
        }
      }
    }
    .left {
      text-align: right;
      .texts {
        margin-left: -10vh;
        .tags {
          float: right;
          p {
            margin-left: 2vh;
          }
        }
        .links {
          float: right;
          svg {
            margin-left: 2.5vh;
          }
        }
      }
    }
  }

  @media #{$m-laptop} {
    .projects {
      .project {
        .image-container {
          margin: 5vh 10vh 10vh 10vh;

          img {
            width: 70vw;
            filter: grayscale(0);
          }
        }
        margin: 2vh;
      }
      .right {
        text-align: left;
        .texts {
          margin-right: -20vh;
        }
      }
      .left {
        text-align: right;
        .texts {
          margin-left: -20vh;
        }
      }
    }
  }

  @media #{$xs-mobile, $s-tablets, $ls-tablets, $sm-tablets} {
    padding: 10vh 4vh;
    margin: 0;
    .projects {
      .project {
        flex-direction: column;
        padding-top: 5vh;
        margin: 0;
        margin: 0vh;

        .image-container {
          width: max-content;
          img {
            width: 75vw;
            filter: grayscale(0);
          }
        }
      }
      .left {
        .texts {
          margin: 0;
          margin-top: 4vh;
          width: 100%;
        }
      }
      .right {
        margin-top: 4vh;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        .image-container {
          margin-top: 4vh;
        }
        .texts {
          margin: 0;
          margin-top: 4vh;
          width: 100%;
        }
      }
    }
  }
}
</style>

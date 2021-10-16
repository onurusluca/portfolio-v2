<template>
  <div id="works">
    <h2>
      {{ $t("myworks") }}
      <hr />
    </h2>
    <div class="projects">
      <div class="project left" data-aos="fade-in">
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://denmou-company.vercel.app/"
          >
            <img
              v-if="supportsWebP == true"
              src="../assets/images/denmou.webp"
              alt="Denmou image"
              class="showcase"
            />
            <img
              v-if="supportsWebP == false"
              src="../assets/images/denmou.png"
              alt="Denmou image"
              class="showcase"
            />
          </a>
        </div>
        <div class="texts">
          <h3 class="title">Denmou</h3>
          <p class="text">
            {{ $t("p-detail-denmou") }}
          </p>
          <div class="tags">
            <p>HTML</p>
            <p>CSS&SCSS</p>
            <p>JavaScript</p>
            <p>Vue.js/Nuxt.js</p>
          </div>
          <div class="links">
            <a
              title="Show the code on github"
              target="_blank"
              rel="”noreferrer”"
              href="https://github.com/onurusluca/denmou-company"
            >
              <github-svg />
            </a>
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://denmou-company.vercel.app/"
            >
              <outlink-svg />
            </a>
          </div>
        </div>
      </div>

      <div class="project right" data-aos="fade-in">
        <div class="texts">
          <h3 class="title">Ongaku</h3>
          <p class="text">
            {{ $t("p-detail-ongaku") }}
          </p>
          <div class="tags">
            <p>JavaScript</p>
            <p>Vue.js</p>
            <p>CSS&SCSS</p>
          </div>
          <div class="links">
            <a
              title="Show the code on github"
              target="_blank"
              rel="”noreferrer”"
              href="https://github.com/onurusluca/ongaku-music-player"
            >
              <github-svg />
            </a>
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://ongakuplayer.netlify.app/"
            >
              <outlink-svg />
            </a>
          </div>
        </div>
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://ongakuplayer.netlify.app/"
          >
            <img
              src="../assets/images/ongaku.webp"
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
            href="https://egaki.netlify.app/"
          >
            <img
              src="../assets/images/egaki.webp"
              alt="Denmou image"
              class="showcase"
            />
          </a>
        </div>
        <div class="texts">
          <h3 class="title">Egaki</h3>
          <p class="text">
            {{ $t("p-detail-egaki") }}
          </p>
          <div class="tags">
            <p>Canvas</p>
            <p>Draw</p>
            <p>JavaScript</p>
            <p>Touch Inputs</p>
          </div>
          <div class="links">
            <a
              title="Show the code on github"
              target="_blank"
              rel="”noreferrer”"
              href="https://github.com/onurusluca/egaki"
            >
              <github-svg />
            </a>
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://egaki.netlify.app/"
            >
              <outlink-svg />
            </a>
          </div>
        </div>
      </div>

      <!--       <div class="project right" data-aos="fade-in">
        <div class="texts">
          <h3 class="title">FotoShare</h3>
          <p class="text">
            {{ $t("p-detail-fotoshare") }}
          </p>
          <div class="tags">
            <p>Firebase</p>
            <p>JavaScript</p>
            <p>URL Shortening</p>
            <p>Image Sharing</p>
          </div>
          <div class="links">
            <a
              title="Show the code on github"
              target="_blank"
              rel="”noreferrer”"
              href="https://github.com/onurusluca/fotoshare"
              ><github-svg />
            </a>
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://fotoshare.netlify.app/"
              ><outlink-svg />
            </a>
          </div>
        </div>
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://fotoshare.netlify.app/"
          >
            <img
              src="../assets/images/upload.webp"
              alt="KaidanFit image"
              class="showcase"
            />
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>
<i18n>
{
  "en": {
    "myworks": "My Works",
    "p-detail-denmou": "A fictional Japanese SaaS company website offering services like website making, digital marketing, social media managing etc... Made with Nuxt.js",
    "p-detail-ongaku": "A simple music player web app with modern UI. Designed for simplicity and style.",
    "p-detail-egaki": "Drawing app made with canvas. User can draw on the canvas, erase, change color and brush size, add picture and download the canvas.",
    "p-detail-fotoshare": "Image sharing website. It saves the image and give the user an URL. Uses Firebase database."

  },
  "ja": {
    "myworks": "実績",
    "p-detail-denmou": "ウェブサイト作成、デジタルマーケティング、ソーシャルメディア管理などのサービスを提供する架空の日本のSaaS会社のウェブサイト。 Nuxt.jsで作成しました。",
    "p-detail-ongaku": "最新のUIを備えたシンプルな音楽プレーヤーWebアプリです。 シンプルさとスタイルを追求して設計しました。",
    "p-detail-egaki": "Canvasで作ったお絵かきアプリです。ユーザーはキャンバスに描画したり、色やブラシサイズの変更、画像の追加や消去、キャンバスのダウンロードなどをすることができます。",
    "p-detail-fotoshare": " Firebaseデータベースを使用した画像共有サイトです。 画像を保存し、ユーザーにそのURLを提供します。"

},
    "tr": {
    "myworks": "Çalışmalarım",
    "p-detail-denmou": "Web sitesi yapımı, dijital pazarlama, sosyal medya yönetimi gibi hizmetler sunan kurgusal bir Japon SaaS şirketi web sitesi ... Nuxt.js ile yapılmıştır",
    "p-detail-ongaku": "Modern kullanıcı arayüzüne sahip basit bir müzik çalar web uygulaması. Sadelik ve şıklık için tasarlandı.",
    "p-detail-egaki": "Canvas ile yapılmış bir çizim uygulaması. Kullanıcı çizim yapabilir, silebilir, rengi değiştirebilir, fırça boyutunu ayarlayabilir, tuvali indirebilir ve resim ekleyebilir.",
    "p-detail-fotoshare": "Bir resim paylaşım sitesi. Görüntüyü kaydeder ve kullanıcıya bir URL verir. Firebase veritabanını kullanır."

  }
}
</i18n>

<script>
import GithubSvg from "./Svg/GitHub.vue";
import OutlinkSvg from "./Svg/OutLink.vue";

import checkWebPSupport from "../mixins/checkWebPSupport";

export default {
  mixins: [checkWebPSupport],

  components: {
    GithubSvg,
    OutlinkSvg,
  },
  methods: {},
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
          width: 45vw;
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

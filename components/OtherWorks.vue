<template>
  <div id="other-works">
    <h2>{{ $t("title") }}</h2>
    <div class="o-work">
      <div class="work" data-aos="fade-in" data-aos-delay="100">
        <img src="../assets/images/kaidanfit-icon.png" alt="" />
        <div class="links">
          <a
            title="Show the code on github"
            target="_blank"
            rel="”noreferrer”"
            href="https://github.com/onurusluca/kaidanfit"
            ><github-svg />
          </a>
          <a
            title="Show the live website"
            target="_blank"
            rel="”noreferrer”"
            href="https://kaidanfit.netlify.app/"
            ><outlink-svg />
          </a>
        </div>
        <h3>KaidanFit</h3>
        <p>
          {{ $t("p-detail-kaidanfit") }}
        </p>
        <div class="tags">
          <p>HTML</p>
          <p>CSS&SCSS</p>
          <p>JavaScript</p>
          <p>JQuery</p>
        </div>
      </div>

      <div class="work" data-aos="fade-in" data-aos-delay="200">
        <img src="../assets/images/kalendar-icon.png" alt="" />
        <div class="links">
          <a
            title="Show the code on github"
            target="_blank"
            rel="”noreferrer”"
            href="https://github.com/onurusluca/calendar-app-vue"
            ><github-svg />
          </a>
          <a
            title="Show the live website"
            target="_blank"
            rel="”noreferrer”"
            href="https://kalendar-vue.netlify.app/"
            ><outlink-svg />
          </a>
        </div>
        <h3>Kalendar</h3>
        <p>
          {{ $t("p-detail2-calendar") }}
        </p>
        <div class="tags">
          <p>Vue.js&Vuetify</p>
          <p>Firebase</p>
          <p>Back-end</p>
        </div>
      </div>

      <div class="work" data-aos="fade-in" data-aos-delay="300">
        <img src="../assets/images/onursmovies-icon.png" alt="" />
        <div class="links">
          <a
            title="Show the code on github"
            target="_blank"
            rel="”noreferrer”"
            href="https://github.com/onurusluca/onurs-movies"
            ><github-svg />
          </a>
          <a
            title="Show the live website"
            target="_blank"
            rel="”noreferrer”"
            href="https://onur-movies.herokuapp.com/"
            ><outlink-svg />
          </a>
        </div>
        <h3>Onur's Movies</h3>
        <p>
          {{ $t("p-detail6-onurs-movies") }}
        </p>
        <div class="tags">
          <p>Express.js</p>
          <p>Ejs</p>
          <p>Axios</p>
          <p>OMDb Api</p>
        </div>
      </div>
      <div class="work" data-aos="fade-in" data-aos-delay="100">
        <img src="../assets/images/pv1-icon.png" alt="" />

        <div class="links">
          <a
            title="Show the code on github"
            target="_blank"
            rel="”noreferrer”"
            href="https://github.com/onurusluca/portfolioV1"
            ><github-svg />
          </a>
          <a
            title="Show the live website"
            target="_blank"
            rel="”noreferrer”"
            href="https://uslucaonurv1.netlify.app/en"
            ><outlink-svg />
          </a>
        </div>
        <h3>Portfolio V1</h3>
        <p>
          {{ $t("p-detail3-old-portfolio") }}
        </p>
        <div class="tags">
          <p>JavaScript</p>
          <p>Vue.js&Vuex</p>
        </div>
      </div>

      <div class="work" data-aos="fade-in" data-aos-delay="200">
        <img src="../assets/images/caspineon-icon.png" alt="" />

        <div class="links">
          <a
            title="Show the code on github"
            target="_blank"
            rel="”noreferrer”"
            href="https://github.com/onurusluca/caspineon"
            ><github-svg />
          </a>
          <a
            title="Show the live website"
            target="_blank"
            rel="”noreferrer”"
            href="https://caspineon.netlify.app/"
            ><outlink-svg />
          </a>
        </div>
        <h3>Caspineon</h3>
        <p>
          {{ $t("p-detail4-caspineon") }}
        </p>
        <div class="tags">
          <p>HTML&SCSS</p>
          <p>Design Oriented</p>
          <p>Vue.js</p>
        </div>
      </div>
      <div class="work" data-aos="fade-in" data-aos-delay="300">
        <img src="../assets/images/todo-icon.png" alt="" />
        <div class="links">
          <a
            title="Show the code on github"
            target="_blank"
            rel="”noreferrer”"
            href="https://github.com/onurusluca/todo-or-nottodo"
            ><github-svg />
          </a>
          <a
            title="Show the live website"
            target="_blank"
            rel="”noreferrer”"
            href="https://todo-or-nottodo.netlify.app/"
            ><outlink-svg />
          </a>
        </div>
        <h3>Todo or Not Todo</h3>
        <p>
          {{ $t("p-detail5-todo") }}
        </p>
        <div class="tags">
          <p>Vue.js</p>
          <p>Firebase</p>
          <p>Back-end</p>
        </div>
      </div>
    </div>
  </div>
</template>
<i18n>
{
  "en": {
    "title": "Other Works",
    "p-detail-kaidanfit": "A fitness and diet program website with an innovative mobile exclusive bottom menu. Made with traditional technologies.",
    "p-detail2-calendar": "A full-stack calendar app with event adding functionality. User data is stored in Firebase.",
    "p-detail3-old-portfolio": "My old portfolio but you are welcome to have a look and maybe get inspired :)",
    "p-detail4-caspineon": "Cyberpunk and dystopian themed futuristic real estate website.",
    "p-detail5-todo": "A full-stack todo app with Firebase database. It has adding, deleting, updating and checking done functions.",
    "p-detail6-onurs-movies": "A simple app for searching IMDB movies. Uses axios to get data from OMDb API with built-in Express server and EJS."

},
  "ja": {
    "title": "その他の実績",
    "p-detail-kaidanfit": "革新的なモバイル専用ボトムメニューを備えたフィットネスおよびダイエットプログラムのウェブサイトです。",
    "p-detail2-calendar": "イベント追加機能を備えたフルスタックカレンダーアプリです。 ユーザーデータはFirebaseに保存されます。",
    "p-detail3-old-portfolio": "これは私の以前のポートフォリオです。あなたはきっとインスピレーションを受けるでしょう。",
    "p-detail4-caspineon": "サイバーパンクとディストピテーマの未来的な不動産ウェブサイトです。",
    "p-detail5-todo": "Firebaseデータベースを備えたフルスタックのtodoアプリです。 項目の追加、削除、編集と更新などの機能があります。",
    "p-detail6-onurs-movies": "IMDBの映画を検索するためのシンプルなアプリ。 axiosを使用して、組み込みのExpressサーバーとEJを備えたOMDbAPIからデータを取得します。"
  },
    "tr": {
    "title": "Diğer Çalışmalarım",
    "p-detail-kaidanfit": "Yenilikçi bir mobil özel alt menüye sahip bir fitness ve diyet programı web sitesi. ",
    "p-detail2-calendar": "Yapılacaklar listesi özelliği olan full-stack bir takvim uygulaması. Kullanıcı verisi Firebase veritabanında saklanır.",
    "p-detail3-old-portfolio": "Eski portföyüm ama bir göz atabilir ve belki ilham alabilirsiniz :)",
    "p-detail4-caspineon": "Cyberpunk ve dystopian temalı fütiristik bir emlak sitesi.",
    "p-detail5-todo": "Firebase veritabanı kullanan 'full-stack' bir yapılacaklar listesi uygulaması. Ekleme, silme, güncelleme ve işaretleme özellikleri vardır.",
    "p-detail6-onurs-movies": "IMDB filmlerini aramak için yapılmış basit bir uygulama. Kendi Express sunucucu ve EJS ile OMDb API'den veri almak için axios kullanın."
}
}
</i18n>

<script>
import GithubSvg from "./Svg/GitHub.vue";
import OutlinkSvg from "./Svg/OutLink.vue";

export default {
  components: {
    GithubSvg,
    OutlinkSvg,
  },
};
</script>

<style lang="scss" scoped>
#other-works {
  width: 85%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  h2 {
    margin-bottom: 5vh;
    color: $p-color;
  }
  .o-work {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .work {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 3vh;
      width: 42vh;
      height: 42vh;
      border: 1px solid $p-color;
      border-radius: 0.3vh;
      margin: 1vh;
      position: relative;
      &:hover {
        transition: all 100ms;
        background: rgb(39, 39, 39);
        img {
          filter: grayscale(0);
        }
      }
      img {
        position: absolute;
        top: 3vh;
        left: 4vh;
        filter: grayscale(100%);
      }
      .links {
        position: absolute;
        right: 3vh;
        top: 3vh;
        margin-bottom: 2vh;

        svg {
          margin: 0 1vh;
          width: 3.5vh;
          height: 3.5vh;
          fill: $text-color;
          transition: 300ms;
          &:hover {
            fill: $p-color;
          }
        }
      }
      h3 {
        margin-top: 8vh;
        margin-bottom: 1vh;
      }

      .tags {
        position: absolute;
        bottom: 2vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        p {
          padding-right: 1.5vh;
          font-size: 1.8vh;
          color: rgb(139, 137, 137);
        }
      }
    }
  }

  @media #{$xs-mobile, $s-tablets, $sm-tablets} {
    .o-work {
      .work {
        width: 95%;
      }
    }
  }
}
</style>

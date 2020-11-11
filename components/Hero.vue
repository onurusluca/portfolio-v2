<template>
  <div id="hero">
    <p class="greet">{{ $t("hi") }}</p>
    <h1>
      Onur Usluca<span class="desu" v-show="$i18n.locale === 'ja'">です</span>
    </h1>
    <h2>{{ $t("webdev") }}</h2>
    <p>
      {{ $t("text") }}
    </p>
    <button>{{ $t("contactme") }}</button>
  </div>
</template>
<i18n>
{
  "en": {
      "hi": "Hi, I am",
      "webdev": "Web Developer / Designer",
      "text": "I create highly responsive, easy-to-use, simple but elegant websites and applications. I care about 'user-friendliness' a great deal.",
      "contactme": "Get In Touch"
  },
  "ja": {
      "hi": "こんにちは！私は",
      "text": "私は、応答性が高く、使いやすく、シンプルでありながら エレガントなWebサイトとアプリケーションを作成しています。 私は「使いやすさ」を大いに 気にかけています。",
      "webdev": "Web開発者 / デザイナー",
      "contactme": "お問い合わせ"
  },
  "tr": {
      "hi": "Merhaba! Ben",
      "text": "Mobil optimizasyonlu, kullanımı kolay, basit ama zarif web siteleri ve uygulamalar oluşturuyorum. 'Kullanıcı dostu olma' konusuna çok önem veriyorum.",
      "webdev": "Web Geliştiricisi / Tasarımcısı",
      "contactme": "Bana Ulaşın"
  }
}
</i18n>

<script>
export default {};
</script>

<style lang="scss" scoped>
#hero {
  width: 100%;
  height: 100vh;
  padding-top: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding-left: 30vh;
  .greet {
    font-size: 3vh;
    margin-bottom: 1vh;
    color: $p-color;
  }
  h1 {
    font-size: 10vh;
    color: white;
    font-family: $p-font;
    padding: 0;
    margin: 0;
    word-break: keep-all;
    .desu {
      font-size: 3vh;
      color: $p-color;
      padding-left: 2vh;
    }
  }
  h2 {
      margin-top: -3vh;
    font-size: 4.5vw;
    color: rgb(154, 153, 153);
  }
  p {
    margin-top: 2vh;
    color: $text-color;
    width: 70vh;
  }
  button {
    margin-top: 5vh;
    outline: none;
    background: none;
    padding: 1vh 2vh;
    border: 0.2vh solid white;
    border-radius: 0.3vh;
    font-size: 2.5vh;
    cursor: pointer;
    font-weight: bold;
    transition: all 200ms;
    &:hover {
      background: $p-color;
      color: $b-color;
      border-color: $p-color;
    }
  }
  @media #{$xs-mobile, $s-tablets, $ls-tablets, $sm-tablets} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    padding-left: 15vh;
  }

  @media #{ $s-tablets} {
    padding-top: 25vh;
    padding-left: 10vh;
    .greet {
      font-size: 3vw;
    }
    h1 {
      font-size: 10vw;
       .desu {
      font-size: 3vw;
      padding-left: 0;
    }
    }
    h2 {
      font-size: 4vw;
    }
    p {
      font-size: 2.1vh;
      width: 90%;
    }
    button {
      font-size: 3vw;
    }
  }

  @media #{$xs-mobile,} {
    padding-left: 5vh;
    width: 95%;
   
    h1 {
      font-size: 10vw;
      .desu {
      font-size: 3vw;
      padding: 0;
      margin: 0;
    }
    }
    h2 {
      font-size: 6vw;
    }
    p {
      font-size: 3.8vw;
      width: 95%;
    }
    button {
      font-size: 4vw;
    }
  }
}
</style>
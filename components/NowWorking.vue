<template>
  <div id="now-working">
    <h2>
      {{ $t("title") }}
      <hr />
    </h2>
    <a href="https://kodyolu.vercel.app/">
      <img class="kodyolu-img" src="../assets/images/kodyolu.webp" alt="" />
    </a>
    <p>
      <a id="kod" href="https://kodyolu.vercel.app/">Kodyolu.</a>
      {{ $t("expl") }}
    </p>
  </div>
</template>
<i18n>
{
  "en": {
    "title": "What I am working on lately",
    "expl": "A website that helps people get into software development and find a job"
   },
  "ja": {
    "title": "最近の取り組み",
    "expl": "人々がソフトウェア開発に入り、仕事を見つけるのを助けるウェブサイト。"
},
    "tr": {
    "title": "Şu anda üzerinde çalıştığım proje",
    "expl": "İnsanların yazılım geliştirmeye başlamasına ve iş bulmasına yardımcı olan bir web sitesi."
  }
}
</i18n>

<script>
export default {};
</script>

<style lang="scss" scoped>
#now-working {
  width: 100%;
  height: 22vh;
  padding: 30vh 0 5vh 0;
  margin: 35vh 0;
  margin-bottom: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 5vh;
    color: $p-color;
    width: 60vh;
  }

  .kodyolu-img {
    width: 100vh;
    border-radius: 3vh;
    box-shadow: 0 12px 10px rgba(0, 0, 0, 0.5);

    margin-bottom: 5vh;

    transition: all 200ms;
    filter: grayscale(100%);
    &:hover {
      transform: scale(1.03);
      filter: grayscale(0);
    }
  }

  p {
    width: 50%;
    #kod {
      color: $p-color;
    }
  }

  @media #{$ls-tablets, $sm-tablets} {
    width: 95%;

    #kodyolu {
      width: 75vw;
    }
    p {
      width: 80%;
    }
  }
  @media #{$xs-mobile, $s-tablets} {
    width: 95%;
    h2 {
      width: inherit;
    }
    padding: 0;
    margin: 30vh 0;
    padding-left: 3vh;
    #kodyolu {
      padding: 0;
      width: 85vw;
    }
    p {
      width: 90%;
    }
  }

  @media #{$m-laptop} {
    margin: 20vh 0;
    margin-bottom: 15rem;
  }
}
</style>

<template>
  <div id="now-working">
    <h2>
      {{ $t("title") }}
      <hr />
    </h2>
    <a href="https://kodyolu.com/">
      <video id="kodyolu" autoplay muted loop>
        <source src="../assets/images/kodyolu.mp4" />
      </video>
    </a>
    <p><a id="kod" href="https://kodyolu.com/">Kodyolu.</a> {{ $t("expl") }}</p>
  </div>
</template>
<i18n>
{
  "en": {
    "title": "What I am working on lately",
    "expl": "A website that helps people get into software development and find a job"
   },
  "ja": {  
    "title": "What I am working on lately",
    "expl": "人々がソフトウェア開発に入り、仕事を見つけるのを助けるウェブサイト。"
},
    "tr": {  
    "title": "What I am working on lately",
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

  #kodyolu {
    width: 120vh;
    border-radius: 3vh;
    box-shadow: 0 12px 10px rgba(0, 0, 0, 0.5);
    transition: all 500ms;
    margin: 5vh;
    &:hover {
      transform: scale(1.03);
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
}
</style>
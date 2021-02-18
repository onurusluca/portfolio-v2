<template>
  <div id="footer" data-aos="fade-in">
    <nuxt-link id="logo" :to="localePath('/')"
      ><img src="~assets/images/logo.png" alt="" />
    </nuxt-link>
    <div class="footer-head">
      <a class="mail" href="mailto:uslucaonur@gmail.com"
        >uslucaonur@gmail.com</a
      >
    </div>
    <p>{{ $t("handcraft") }}</p>
    <a class="f-bottom" href="https://onurusluca.me/">©onurusluca.me™</a>
  </div>
</template>
<i18n>
{
  "en": {
    "handcraft": " Handcrafted with love and care by Onur Usluca."
  },
  "ja": {
    "handcraft": "  私が心を込めて作ったウェブサイトです"

  },
  "tr": {
    "handcraft": "  Sevgi ve özenle hazırlanmıştır."

  }
}
</i18n>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  background: rgb(27, 27, 27);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5vh;
  padding: 10vh 0 1vh 0;
  #logo {
    width: 10vh;
    margin-bottom: 4vh;
  }
  .mail {
    color: $p-color;
    border-bottom: 1px solid $p-color;
    margin-bottom: 5vh;
  }

  p {
    margin-top: 5vh;
    padding: 0;
    font-size: 1.8vh;
    font-style: italic;
    color: gray;
    user-select: none;
  }
  .f-bottom {
    padding: 0;
    color: gray;
    user-select: none;
  }
}
</style>
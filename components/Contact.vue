<template>
  <div id="contact" data-aos="fade-in" data-aos-delay="300">
    <h2>{{ $t("git") }}</h2>
    <p class="looking">{{ $t("msg") }}</p>
    <p class="job">{{ $t("in-japan") }}</p>
    <!--     <p class="job">{{ $t("not") }}</p>
 -->
    <p>{{ $t("msg2") }}</p>
    <a href="mailto:uslucaonur@gmail.com"> {{ $t("btn") }} </a>
    <p class="email">uslucaonur@gmail.com</p>
  </div>
</template>
<i18n>
{
  "en": {
    "git": "Get In Touch",
    "not": "I am not looking for a job but I am open to offers and ideas!",
    "msg": "I am currently looking for a job!",
    "in-japan":"Preferably in Japan.",
    "msg2": "Got a job offer or an idea? Or you just wanna talk? I can help! Feel free to contact me!",
    "btn": "Send Me An Email"
  },
  "ja": {
     "git": "お問い合わせ",
    "not": "私は仕事を探していませんが、オファーやアイデアを受け入れています！",
    "msg": "現在仕事を探しています！",
    "in-japan":"日本で仕事をすることを望んでいます。",
    "msg2": "仕事に関することやその他お問い合わせをお待ちしております。 お話しましょう！",
    "btn": "メールを送る"
  },
  "tr": {
     "git": "Bana Ulaşın",
    "not": "İş aramıyorum ama tekliflere ve fikirlere açığım!",
    "msg": "Şu anda bir iş arıyorum! ",
    "in-japan":"Tercihen Japonya'da.",
    "msg2": "Bir İş teklifi veya fikriniz mi var? Yada konuşmak mı istiyorsunuz? Yardımcı olabilirim!",
    "btn": "Bana yazın!"
  }
}
</i18n>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contact {
  padding: 30vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    color: $p-color;
    font-size: 4.5vh;
    margin-bottom: 2vh;
  }
  p {
    font-size: 3vh;
    width: 75vh;
  }

  .looking {
    font-weight: bold;
    text-decoration: underline;
  }
  .job {
    border-bottom: 1px solid $p-color;
    margin-bottom: 1vh;
    margin-bottom: 2vh;
    padding-bottom: 1.5vh;
  }

  a {
    margin-top: 5vh;
    border: 1px solid $p-color;
    padding: 2vh 3vh;
    border-radius: 0.5vh;
    font-size: 2.5vh;
    font-weight: bold;
    transition: color 400ms;
    margin-bottom: 3vh;
    &:hover {
      background: $p-color;
      color: $b-color;
    }
  }
  .email {
    font-size: 2vh;
  }
  @media #{$ls-tablets, $sm-tablets} {
    width: 95%;
  }
  @media #{$xs-mobile, $s-tablets} {
    padding: 30vh 3vh;
    p {
      width: inherit;
    }
  }
}
</style>

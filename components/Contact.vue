<template>
  <div id="contact" data-aos="fade-in" data-aos-delay="300">
    <h2>{{ $t("git") }}</h2>
<!--     <p class="job">{{ $t("msg") }}</p>
 -->    
 <p class="job">{{ $t("not") }}</p>
    <p>{{ $t("msg2") }}</p>
    <a href="mailto:uslucaonur@gmail.com"> {{ $t("btn") }} </a>
    <p class="email">uslucaonur@gmail.com</p>
  </div>
</template>
<i18n>
{
  "en": {
    "git": "Get In Touch",
    "msg": "I am currently looking for a job! Preferably in Japan.",
    "not": "I am not looking for a job but I am open to offers and ideas!",
    "msg2": "Got a job offer or an idea? Or you just wanna talk? I can help!",
    "btn": "Send Me An Email"
  },
  "ja": {
     "git": "お問い合わせ",
    "not": "私は仕事を探していませんが、オファーやアイデアを受け入れています！",
    "msg": "現在仕事を探しています！日本で仕事をすることを望んでいます。",
    "msg2": "仕事に関することやその他お問い合わせをお待ちしております。 お話しましょう！",
    "btn": "メールを送る"
  },
  "tr": {
     "git": "Bana Ulaşın",
    "not": "İş aramıyorum ama tekliflere ve fikirlere açığım!",
    "msg": "Şu anda bir iş arıyorum! Tercihen Japonya'da.",
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
  width: 100%;
  padding: 30vh 0vh;
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
  .job {
    border-bottom: 1px solid $p-color;
    width: max-content;
    margin-bottom: 1vh;
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
  @media #{$xs-mobile, $s-tablets} {
    p {
      width: 90%;
    }
  }
}
</style>
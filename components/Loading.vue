<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="circles">
       <div class="lds-ripple"><div></div><div></div></div>
      </div>
      <p>{{ $t("loading") }}</p>
    </div>
  </transition>
</template>
<i18n>
{
  "en": {
      "loading": "Please wait. Website is loading..."
  },
  "ja": {      
      "loading": "少々お待ちください。。。"

  },
  "tr": {      
      "loading": "Lütfen bekleyin. Websitesi yükleniyor..."

  }
}
</i18n>

<script>
export default {
  name: "preloader",
  data() {
    return {
      show: true,
    };
  },
  beforeMount() {
    if (Boolean(this.show)) this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $b-color;
  z-index: 9999;

  .lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid $p-color;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

}
</style>
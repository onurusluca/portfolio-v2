<template>
  <div id="danger">
    <nuxt-link
      :to="localePath('/')"
      id="logo"
      :class="{ 'scroll-nav': scrollNav }"
      ><img src="~assets/images/logo.png" alt="" />
    </nuxt-link>
    <h1>There is an error or this page doesn't exist.</h1>
    <h2>Instead have this cute "loading seal" :)</h2>
    <video autoplay muted controls loop>
      <source src="../assets/images/loading.mp4" />
    </video>
    <h2>or</h2>
    <a href="/">Go to main page</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#danger {
  width: 100%;
  height: 100%;
  background: $b-color;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2vh;
  z-index: 666;
  #logo {
    width: 12vh;
    margin-bottom: 4vh;
  }
  video {
    width: 75vh;
    height: auto;
    box-shadow: 0 12px 10px rgba(0, 0, 0, 0.5);
    border-radius: 1vh;
  }
  h1 {
    font-family: $p-font;
    color: red;
    font-size: 4vh;
  }
  h2 {
    margin: 3vh 0;
    color: $p-color;
  }
  a {
    font-size: 2.5vh;
    color: rgb(31, 170, 245);
    &:hover {
      transform: scale(1.05);
    }
  }
  @media #{$xs-mobile, $s-tablets} {
    video {
      width: 90%;
    }
  }
}
</style>
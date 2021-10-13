<template>
  <div>
    <!--     <Loading />
 -->
    <Navbar />
    <MobileNav />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "../components/Navigation/Navbar";
import MobileNav from "../components/Navigation/MobileNav";
/* import Loading from "../components/Loading";
 */
import Vue from "vue";
/* Scroll mixin */
import scrollShow from "../mixins/scrollShow";
Vue.mixin(scrollShow);

import AOS from "aos";
import "aos/dist/aos.css";
const aosPlugin = {
  install: () => {
    AOS.init({
      // add your settings here
    });
  },
};

if (process.client) {
  Vue.use(aosPlugin);
}

export default {
  components: {
    Navbar,
    MobileNav,
    /*     Loading,
     */
  },
};
</script>
<style>
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
</style>

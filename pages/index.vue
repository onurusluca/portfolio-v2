<template>
  <div>
    <Hero />
    <AboutMe />
    <!--     <Experience />
 -->
    <LazyHydrate when-visible>
      <NowWorking />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Works />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Design />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <OtherWorks />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Contact />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Footer />
    </LazyHydrate>
  </div>
</template>



<script>
import LazyHydrate from "vue-lazy-hydration";

import Hero from "../components/Hero";
/* import Experience from "../components/Experience";
 */ import AboutMe from "../components/AboutMe";

export default {
  components: {
    LazyHydrate,

    Hero,
    AboutMe,
    /*     Experience,
     */

    NowWorking: () => import("../components/NowWorking"),
    Works: () => import("../components/Works"),
    OtherWorks: () => import("../components/OtherWorks"),
    Footer: () => import("../components/Navigation/Footer.vue"),
    Contact: () => import("../components/Contact"),
    Design: () => import("../components/Design"),
  },
};
</script>

<style lang="scss">
html,
body {
  overflow-x: hidden;
}
</style>

<template>
  <div>
    <Hero />
    <AboutMe />
    <!--     <Experience />

    <LazyHydrate when-visible>
      <NowWorking />
    </LazyHydrate>
     -->

    <Works />
    <Design />
    <OtherWorks />
    <Contact />
    <Footer />
  </div>
</template>



<script>
import Hero from "../components/Hero";
/* import Experience from "../components/Experience";
 */ import AboutMe from "../components/AboutMe";
import NowWorking from "../components/NowWorking";
import Works from "../components/Works";
import Design from "../components/Design";
import OtherWorks from "../components/OtherWorks";
import Contact from "../components/Contact";
import Footer from "../components/Navigation/Footer";

export default {
  components: {
    Hero,
    AboutMe,
    /*     Experience,
     */

    NowWorking,
    Works,
    OtherWorks,
    Footer,
    Contact,
    Design,
  },
};
</script>

<style lang="scss">
html,
body {
  overflow-x: hidden;
}
</style>

<template>
  <div>
    <Hero />
    <AboutMe />
    <Experience />
    <NowWorking />
    <Works />
    <OtherWorks />
    <Contact />
    <Footer />
  </div>
</template>



<script>
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import NowWorking from "../components/NowWorking";
import Works from "../components/Works";
import OtherWorks from "../components/OtherWorks";
import Contact from "../components/Contact";
import Footer from "../components/Navigation/Footer";

export default {
  components: {
    Hero,
    AboutMe,
    Experience,
    Works,
    OtherWorks,
    Footer,
    Contact,
    NowWorking
  },
};
</script>

<style lang="scss">
</style>

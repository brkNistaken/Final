<template>
  <div>
    <NavBar />
    <FirstComp />
    <ThirdComp />
    <FourthComp />
    <LastComp />

    <Footer />
    <TopButton />
  </div>
</template>

<script>
import FirstComp from "~/components/first-comp.vue";
import ThirdComp from "~/components/third-comp.vue";
import FourthComp from "~/components/fourth-comp.vue";
import LastComp from "~/components/last-comp.vue";
import NavBar from "~/components/nav-bar.vue";
import Footer from "~/components/footer.vue";
import TopButton from "~/components/TopButton.vue";

export default {
  components: {
    FirstComp,
    ThirdComp,
    FourthComp,
    LastComp,
    NavBar,
    Footer,
    TopButton,
  },
};
</script>

<style scoped>
/* Ana sayfa için özel stiller burada olabilir */
</style>

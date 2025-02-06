<template>

    <div class="page-container">
        <Navbar />
        <MemberPage />
        <Footer />
    </div>
</template>

<script>
import Navbar from "~/components/nav-bar.vue";
import Footer from "~/components/Footer.vue";
import MemberPage from "~/components/member.vue";

export default {
  components: {
    Navbar,
    Footer,
    MemberPage,
  },
};
</script>

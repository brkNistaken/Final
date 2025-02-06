<template>
    <NavBar />
    <SignUp />
    <Footer />
</template>

<script>
import NavBar from "~/components/nav-bar.vue";
import SignUp from "~/components/Sign-up.vue";
import Footer from "~/components/footer.vue";   

export default {
    components: {
        NavBar,
        SignUp,
        Footer,
    },
};
</script>
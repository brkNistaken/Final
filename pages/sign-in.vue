<template>
    <NavBar />
    <SignIn />
    <Footer />
</template>

<script>
import NavBar from "~/components/nav-bar.vue";
import SignIn from "~/components/Sign-In.vue";
import Footer from "~/components/footer.vue";

export default {
    components: {
        NavBar,
        SignIn,
        Footer,
    },
};

</script>
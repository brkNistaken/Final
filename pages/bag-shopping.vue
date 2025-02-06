<template>
    <NavBar />
    <BagShopping />
    <Footer />
</template>

<script>
import NavBar from "~/components/nav-bar.vue";
import Footer from "~/components/footer.vue";
import BagShopping from "~/components/shop-bag.vue";

export default {
    components: {
        NavBar,
        BagShopping,
        Footer,
    },
};

</script>
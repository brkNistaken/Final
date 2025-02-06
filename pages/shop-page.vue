<template>
    <NavBar />
    <SingleProduct />
    <Footer />
</template>

<script>
import NavBar from "~/components/nav-bar.vue";
import SingleProduct from "~/components/singleProduct.vue";
import Footer from "~/components/footer.vue";

export default {
    components: {
        NavBar,
        SingleProduct,
        Footer,
    },
};

</script>
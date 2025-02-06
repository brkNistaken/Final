<template>
  <NavBar />
  <div class="products-page">
    <!-- Filter Section -->
    <Gallery />

    <!-- Products Section -->
    <div class="products-grid">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <!-- Add more products as needed -->
    </div>
  </div>
  <TopButton />

  <Footer />
</template>

<script>
import Footer from "~/components/footer.vue";
import Gallery from "~/components/Gallery.vue";
import NavBar from "~/components/nav-bar.vue";
import Product from "~/components/product.vue";
import TopButton from "~/components/TopButton.vue";

export default {
  components: {
    Gallery,
    Product,
    NavBar,
    Footer,
    TopButton,
  },
};
</script>

<style scoped>
.products-page {
  display: flex;
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-left: 20px;
  flex-grow: 1;
}
</style>

<template>
  <div class="product-slider">
    <h2 class="title">İndirimin Favorileri</h2>
    <div class="slider-container">
      <button class="slider-button left" @click="prevSlide">
        &#8249;
        <!-- Sol ok -->
      </button>
      <div class="products">
        <div
          class="product-card"
          v-for="product in visibleProducts"
          @mouseover="setHoverImage(product)"
          @mouseout="resetImage(product)"
          :key="product.id"
        >
          <img
            :src="getCurrentImage(product)"
            :alt="product.name"
            class="product-image"
          />

          <h3 class="product-name">{{ product.name }}</h3>
          <font-awesome-icon
            style="color: rgb(247, 198, 3)"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            style="color: rgb(247, 198, 3)"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            style="color: rgb(247, 198, 3)"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            style="color: rgb(247, 198, 3)"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            style="color: rgb(247, 198, 3)"
            :icon="['fas', 'star-half-stroke']"
          />
          <span style="font-size: 0.75rem">2 değerlendirme</span><br />
          <p class="discount-rate">
            <span v-if="product.discountRate">%{{ product.discountRate }}</span>
          </p>
          <p class="product-price">
            <span class="old-price" v-if="product.oldPrice">
              {{ formatPrice(product.oldPrice) }}
            </span>
            <span class="new-price">
              {{ formatPrice(product.newPrice) }}
            </span>
          </p>
        </div>
      </div>
      <button class="slider-button right" @click="nextSlide">
        &#8250;
        <!-- Sağ ok -->
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductSlider",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Oversized Half-Zip Fleece (IETS-2)",
          image:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/8191cdb6-c0f6-4b2b-897e-c27100a26d28/1080/47.webp", // Replace with actual image URL
          hoverImage:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/50fa4cd4-068e-4cc9-b8fd-f3519a3b85f9/1080/46.webp",
          oldPrice: 799.9,
          newPrice: 699.9,
          discountRate: 22,
        },
        {
          id: 2,
          name: "Oversized Half-Zip Fleece (IETS-2)",
          image:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/8191cdb6-c0f6-4b2b-897e-c27100a26d28/1080/47.webp", // Replace with actual image URL
          hoverImage:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/50fa4cd4-068e-4cc9-b8fd-f3519a3b85f9/1080/46.webp",
          oldPrice: 799.9,
          newPrice: 699.9,
          discountRate: 22,
        },
        {
          id: 3,
          name: "Oversized Half-Zip Fleece (IETS-2)",
          image:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/8191cdb6-c0f6-4b2b-897e-c27100a26d28/1080/47.webp", // Replace with actual image URL
          hoverImage:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/50fa4cd4-068e-4cc9-b8fd-f3519a3b85f9/1080/46.webp",
          oldPrice: 799.9,
          newPrice: 699.9,
          discountRate: 22,
        },
        {
          id: 4,
          name: "Oversized Half-Zip Fleece (IETS-2)",
          image:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/8191cdb6-c0f6-4b2b-897e-c27100a26d28/1080/47.webp", // Replace with actual image URL
          hoverImage:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/50fa4cd4-068e-4cc9-b8fd-f3519a3b85f9/1080/46.webp",
          oldPrice: 799.9,
          newPrice: 699.9,
          discountRate: 22,
        },
        {
          id: 5,
          name: "P.Clo Faded Zip (Shark Grey)",
          image:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/0244d27a-0dec-418d-8f2f-3f146254327a/1080/p5.webp", // Replace with actual image URL
          hoverImage:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/909a2a15-209a-4933-a8d0-4711ac74f326/1080/p7.webp",
          oldPrice: 899.9,
          newPrice: 699.9,
          discountRate: 15,
        },
        {
          id: 6,
          name: "P.Clo Faded Zip (Shark Grey)",
          image:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/0244d27a-0dec-418d-8f2f-3f146254327a/1080/p5.webp", // Replace with actual image URL
          hoverImage:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/909a2a15-209a-4933-a8d0-4711ac74f326/1080/p7.webp",
          oldPrice: 899.9,
          newPrice: 699.9,
          discountRate: 15,
        },
        {
          id: 7,
          name: "P.Clo Faded Zip (Shark Grey)",
          image:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/0244d27a-0dec-418d-8f2f-3f146254327a/1080/p5.webp", // Replace with actual image URL
          hoverImage:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/909a2a15-209a-4933-a8d0-4711ac74f326/1080/p7.webp",
          oldPrice: 899.9,
          newPrice: 699.9,
          discountRate: 15,
        },
        {
          id: 8,
          name: "P.Clo Faded Zip (Shark Grey)",
          image:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/0244d27a-0dec-418d-8f2f-3f146254327a/1080/p5.webp", // Replace with actual image URL
          hoverImage:
            "https://cdn.myikas.com/images/45cf1d92-19fb-4955-871e-36793acf1331/909a2a15-209a-4933-a8d0-4711ac74f326/1080/p7.webp",
          oldPrice: 899.9,
          newPrice: 699.9,
          discountRate: 15,
        },
      ],
      currentImages: new Map<number, string | null>(),
      currentSlide: 0, // Aktif slide (0 ya da 1)
      itemsPerPage: 4, // Her sayfada gösterilecek ürün sayısı
      autoSlideInterval: null as number | null,
    };
  },
  computed: {
    visibleProducts() {
      // Gösterilecek ürünleri hesaplar
      const start = this.currentSlide * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
    maxSlide() {
      // Toplam kaç slayt olduğunu hesaplar
      return Math.ceil(this.products.length / this.itemsPerPage) - 1;
    },
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % (this.maxSlide + 1);
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + (this.maxSlide + 1)) % (this.maxSlide + 1);
      this.resetAutoSlide();
    },
    setHoverImage(product) {
      this.currentImages.set(product.id, product.hoverImage);
      this.resetAutoSlide();
    },
    resetImage(product) {
      this.currentImages.set(product.id, null);
    },
    getCurrentImage(product) {
      return this.currentImages.get(product.id) || product.image;
    },
    formatPrice(price: number): string {
      return `₺ ${price.toFixed(2)}`;
    },
    startAutoSlide() {
      this.autoSlideInterval = window.setInterval(() => {
        this.nextSlide();
      }, 3000); // 3 saniyede bir otomatik kaydırma
    },
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },
    resetAutoSlide() {
      this.stopAutoSlide();
      this.startAutoSlide();
    },
  },
  mounted() {
    // Otomatik kaydırmayı başlat
    this.startAutoSlide();
  },
  beforeUnmount() {
    // Bileşen kaldırıldığında zamanlayıcıyı temizle
    this.stopAutoSlide();
  },
});
</script>

<style scoped>
.product-slider {
  padding: 20px;
  text-align: center;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
}
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 80%;
}
.slider-container .products{
    display: flex;
  transition: transform 0.5s ease-in-out;
}
.product-card {
  overflow: hidden;
  text-align: left;
  cursor: pointer;
}
.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.product-name {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}
.product-price {
  margin: 5px 0;
  display: inline-block;
}
.old-price {
  text-decoration: line-through;
  color: #888;
}
.new-price {
  font-weight: bold;
  color: #000;
  display: block;
}
.discount-rate {
  display: inline-block;
  color: white;
  background-color: #000;
  font-weight: bold;
  padding: 5px;
  text-align: center;
  line-height: 30px;
  border-radius: 0%;
}
.slider-button {
  font-size: 24px;
  background: none;
  border: 1px solid black;
  width: 40px; /* Kare olması için genişlik ve yükseklik eşit olmalı */
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  display: flex;
  position: absolute;
  font-weight: bold;
}
.slider-button.left {
  left: 10%;
}

.slider-button.right {
  right: 10%;
}

.slider-container:hover .slider-button {
  opacity: 1;
  visibility: visible;
}
</style>

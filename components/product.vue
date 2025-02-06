<template>
  <div class="single-product-container">
    <nuxt-link to="/shop-page" class="title">
      <div class="product-card">
        <div class="product-image">
          <img :src="product.image" :alt="product.name" class="image" />
        </div>
        <div class="product-details">
          <div class="product-brand">{{ product.brand }}</div>
          <div class="product-name">{{ product.name }}</div>
          <div class="product-title">{{ product.title }}</div>
          <div class="product-price">
            <span class="original-price">${{ product.originalPrice }}</span>
            <span class="discounted-price">${{ product.discountedPrice }}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "SingleProduct",
  data() {
    return {
      product: {
        id: 1,
        brand: "MOREM",
        name: "sepete ekle",
        title: "Sohigh Puffer Logo Boxy Fit Hoodie",
        image:
          "https://cdn.myikas.com/images/theme-images/f5700c62-9d4b-4db5-86f4-0d8e8113e556/image_3840.webp",
        originalPrice: "1,199.90",
        discountedPrice: "639",
      },
    };
  },
};
</script>

<style scoped>
.single-product-container {
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

.product-card {
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto; /* Ürünü sayfada ortalamak için */
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  padding: 16px;
}

.product-brand {
  font-size: 12px;
  font-weight: 500;
  color: #666666;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.product-name {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
}

.product-title {
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 12px;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.original-price {
  font-size: 14px;
  color: #999999;
  text-decoration: line-through;
}

.discounted-price {
  font-size: 18px;
  font-weight: 700;
  color: #000000;
}
</style>

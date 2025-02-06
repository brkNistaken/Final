<template>
  <div class="product-page-container">
    <div class="product-page-card">
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
        <div class="product-description">
          <p>Description for the product goes here.</p>
        </div>
        <button class="add-to-cart-btn" @click="addToCart">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/counter.ts';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
export default {
  name: 'ProductPage',
  data() {
    return {
      product: {
        brand: 'MOREM',
        name: 'Sweatshirt',
        title: 'Sohigh Puffer Logo Boxy Fit Hoodie',
        image:
          'https://cdn.myikas.com/images/theme-images/f5700c62-9d4b-4db5-86f4-0d8e8113e556/image_3840.webp',
        originalPrice: '1,199.90',
        discountedPrice: '639',
      },
    };
  },
  methods: {
    async addToCart() {
      const { $firebase } = useNuxtApp();
      const db = $firebase.projectFirestore;

      try {
        const docRef = await addDoc(collection(db, 'cart'), {
          ...this.product,
          timestamp: $firebase.serverTimestamp(),
        });

        console.log("Ürün Firestore'a eklendi, ID:", docRef.id);
      } catch (error) {
        console.error("Ürün Firestore'a eklenirken hata:", error);
      }
    },
  },
};
</script>

<style scoped>
.product-page-container {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.product-page-card {
  width: 800px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
}

.product-image {
  width: 50%;
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
  width: 50%;
}

.product-brand {
  font-size: 12px;
  font-weight: 500;
  color: #666666;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
}

.product-title {
  font-size: 18px;
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

.product-description {
  margin-top: 20px;
  font-size: 14px;
  color: #666666;
}

.add-to-cart-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart-btn:hover {
  background-color: #444;
}
</style>

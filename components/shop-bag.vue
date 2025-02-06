<template>
  <div class="shopping-cart">
    <h1>Sepetim ({{ cartItems.length }})</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
        <div class="item-image">
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.name"
            class="image"
          />
          <div v-else class="no-image">No Image Available</div>
        </div>
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p>Fiyat: {{ item.discountedPrice }} TL</p>
        </div>
        <button @click="removeFromCart(item.id)" class="remove-button">
          Kaldır
        </button>
      </div>
      <div class="cart-total">
        <h2>Toplam: {{ cartTotal }} TL</h2>
        <button @click="checkout" class="checkout-button">Ödeme Yap</button>
      </div>
    </div>
    <div v-else>
      <h2>Sepetiniz boş!</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useNuxtApp } from '#app';
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

export default defineComponent({
  setup() {
    const { $firebase } = useNuxtApp();
    const db = $firebase.projectFirestore;

    const cartItems = ref<any[]>([]);

    // Firestore'dan Sepet Verilerini Çek
    const fetchCartItems = async () => {
      cartItems.value = []; // Önce temizle
      const querySnapshot = await getDocs(collection(db, 'cart'));
      querySnapshot.forEach((doc) => {
        cartItems.value.push({ id: doc.id, ...doc.data() });
      });
    };

    // Firestore'dan Sepet Toplamını Hesapla
    const cartTotal = computed(() => {
      return cartItems.value.reduce((total, item) => {
        return total + item.discountedPrice * (item.quantity ?? 1);
      }, 0);
    });

    // Ürünü Firestore'dan Kaldır
    const removeFromCart = async (id: string) => {
      try {
        await deleteDoc(doc(db, 'cart', id));
        cartItems.value = cartItems.value.filter((item) => item.id !== id);
      } catch (error) {
        console.error('Ürün silinirken hata oluştu:', error);
      }
    };

    // Ürün Miktarını Güncelle
    const updateQuantity = async (id: string, newQuantity: number) => {
      try {
        const productRef = doc(db, 'cart', id);
        await updateDoc(productRef, { quantity: newQuantity });
        cartItems.value = cartItems.value.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
      } catch (error) {
        console.error('Miktar güncellenirken hata:', error);
      }
    };

    onMounted(fetchCartItems);

    return {
      cartItems,
      cartTotal,
      removeFromCart,
      updateQuantity,
      checkout: () => console.log('Ödeme işlemi...'),
    };
  },
});
</script>

<style scoped>
.shopping-cart {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.item-image img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 20px;
}

.item-details h3 {
  font-size: 1.1rem;
  color: #444;
}

.item-details p {
  font-size: 1rem;
  color: #888;
}

.cart-item input {
  width: 50px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
}

.remove-button {
  padding: 8px 15px;
  background-color: #ff4d4d;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}

.remove-button:hover {
  background-color: #ff3333;
}

.cart-total {
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #28a745;
  color: white;
  text-align: center;
  font-size: 1.1rem;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
}

.checkout-button:hover {
  background-color: #218838;
}
</style>

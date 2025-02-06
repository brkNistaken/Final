// stores/cartStore.ts
import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

interface CartState {
  cartItems: Product[];
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product: Product) {
      const existingProduct = this.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 0) + 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },
    updateQuantity(productId: number, quantity: number) {
      const product = this.cartItems.find(item => item.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
  getters: {
    cartTotal: (state): string => {
      return state.cartItems.reduce(
        (total, item) => total + item.price * (item.quantity || 0),
        0
      ).toFixed(2);
    },
    itemCount: (state): number => {
      return state.cartItems.reduce((count, item) => count + (item.quantity || 0), 0);
    },
  },
});

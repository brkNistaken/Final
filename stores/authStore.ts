// stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  const { $firebase } = useNuxtApp();
  const auth = getAuth($firebase.app);
  
  const user = ref(null);
  const isLoading = ref(true);

  // Kullanıcı oturum durumunu takip et
  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser;
    isLoading.value = false;
  });

  return {
    user,
    isLoading,
  };
});

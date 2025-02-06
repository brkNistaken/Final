<template>
    <div class="member-container">
      <h1>Üye Bilgileri</h1>
      <div v-if="isLoading">Yükleniyor...</div>
      <div v-else-if="user">
        <p><strong>Ad Soyad:</strong> {{ userDetails?.displayName || 'Bilinmiyor' }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Telefon:</strong> {{ userDetails?.phoneumber || 'Eklenmemiş' }}</p>
        <p><strong>UID:</strong> {{ user.uid }}</p>
        <NuxtLink to="sign-in"><button @click="logout">Çıkış Yap</button></NuxtLink>
      </div>
      <div v-else>
        <p>Giriş yapmamışsınız.</p>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { useAuthStore } from '@/stores/authStore';
  import { getAuth, signOut } from 'firebase/auth';
  import { doc, deleteDoc } from "firebase/firestore";
  
  const authStore = useAuthStore();
  const { user, isLoading } = authStore;
  
  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  
  </script>
  
  <style scoped>
  .member-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.1rem;
    margin: 5px 0;
  }
  
  button {
    margin-top: 15px;
    padding: 10px 15px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #cc0000;
  }
  </style>
  
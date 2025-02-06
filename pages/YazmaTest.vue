<script setup>
import { useNuxtApp } from '#app';
import { collection, addDoc } from 'firebase/firestore';

const { $firebase } = useNuxtApp();

async function testFirestore() {
  try {
    const docRef = await addDoc(
      collection($firebase.projectFirestore, 'test'),
      {
        message: 'Firebase bağlantısı başarılı!',
        timestamp: $firebase.serverTimestamp(),
      }
    );
    console.log('Belge eklendi:', docRef.id);
  } catch (error) {
    console.error('Firestore bağlantı hatası:', error);
  }
}
</script>

<template>
  <div>
    <h2>Firebase Bağlantı Testi</h2>
    <button @click="testFirestore">Firestore Test</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const { $firebase } = useNuxtApp();
const messages = ref([]);

// Firestore'dan verileri çekme fonksiyonu
async function fetchMessages() {
  try {
    const q = query(
      collection($firebase.projectFirestore, 'test'),
      orderBy('timestamp', 'desc')
    );
    const querySnapshot = await getDocs(q);

    messages.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Firestore okuma hatası:', error);
  }
}

// Sayfa yüklendiğinde verileri çek
onMounted(fetchMessages);
</script>

<template>
  <div>
    <h2>Firestore'daki Mesajlar</h2>
    <button @click="fetchMessages">Yenile</button>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <strong>ID:</strong> {{ message.id }} <br />
        <strong>Mesaj:</strong> {{ message.message }} <br />
        <strong>Tarih:</strong>
        {{ new Date(message.timestamp?.seconds * 1000).toLocaleString() }}
      </li>
    </ul>
  </div>
</template>

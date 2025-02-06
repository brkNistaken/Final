<template>
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="scroll-to-top-button"
      aria-label="Sayfanın başına dön"
    >
      ↑
    </button>
  </template>
  
  <script>
  export default {
    name: 'ScrollToTopButton',
    data() {
      return {
        showButton: false, // Butonun görünürlüğünü kontrol eder
      };
    },
    mounted() {
      // Sayfa kaydırıldığında butonun görünürlüğünü kontrol et
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      // Component kaldırıldığında event listener'ı temizle
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Sayfanın kaydırma pozisyonunu kontrol et
        this.showButton = window.scrollY > 300; // 300 piksel kaydırıldığında buton göster
      },
      scrollToTop() {
        // Sayfanın başına yumuşak bir şekilde kaydır
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Yumuşak kaydırma efekti
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .scroll-to-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }
  
  .scroll-to-top-button:hover {
    background-color: #0056b3;
  }
  </style>
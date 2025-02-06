<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="scroll-to-top-button"
    aria-label="Sayfanın başına dön"
  >
    <span class="arrow-up"></span>
    <!-- CSS ile oluşturulan içi boş yukarı ok -->
  </button>
</template>
<script>
export default {
  name: "ScrollToTopButton",
  data() {
    return {
      showButton: false, // Butonun görünürlüğünü kontrol eder
    };
  },
  mounted() {
    // Sayfa kaydırıldığında butonun görünürlüğünü kontrol et
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Component kaldırıldığında event listener'ı temizle
    window.removeEventListener("scroll", this.handleScroll);
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
        behavior: "smooth", // Yumuşak kaydırma efekti
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
  background-color: black; /* Arka plan rengi siyah */
  color: white; /* Metin rengi beyaz */
  border: none;
  border-radius: 50%;
  width: 40px; /* Buton genişliği küçük */
  height: 40px; /* Buton yüksekliği küçük */
  font-size: 18px; /* Font boyutu küçük */
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-to-top-button:hover {
  background-color: #333; /* Hover durumunda arka plan rengi */
}

/* CSS ile içi boş yukarı ok (üçgen) oluşturma */
.arrow-up {
  width: 0;
  height: 0;
  border-left: 6px solid transparent; /* Sol kenar daha ince */
  border-right: 6px solid transparent; /* Sağ kenar daha ince */
  border-bottom: 10px solid white; /* Alt kenar daha ince */
  position: relative;
}

/* Alt kenarı kaldırmak için pseudo-element kullanımı */
.arrow-up::after {
  content: '';
  position: absolute;
  top: 2px; /* Okun içini boşaltmak için ayar */
  left: -4px; /* Kenarları hizalamak için ayar */
  width: 0;
  height: 0;
  border-left: 4px solid transparent; /* Sol kenar daha ince */
  border-right: 4px solid transparent; /* Sağ kenar daha ince */
  border-bottom: 8px solid black; /* Alt kenar daha ince */
}
</style>

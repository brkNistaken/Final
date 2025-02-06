<template>
  <div class="page-container">
    <!-- Sol Taraf: Login Formu -->
    <div class="login-section">
      <div class="login-container">
        <!-- Üye Girişi ve Üye Ol Bağlantıları -->
        <div class="login-links">
          <nuxt-link to="/sign-in" class="login-link">Üye Girişi</nuxt-link>
          <nuxt-link to="/sign-up" class="register-link">Üye Ol</nuxt-link>
        </div>

        <!-- Email Input -->
        <div class="input-container">
          <label class="input-label">
            <span class="required">*</span> Email
          </label>
          <div class="input-wrapper">
            <input
              v-model="email"
              class="input-field"
              type="email"
              name="email"
              placeholder=""
            />
          </div>
        </div>

        <!-- Şifre Input -->
        <div class="input-container">
          <label class="input-label">
            <span class="required">*</span> Şifre
          </label>
          <div class="input-wrapper">
            <input
              v-model="password"
              class="input-field"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder=""
            />
            <span class="password-toggle" @click="togglePasswordVisibility">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <!-- Üye Girişi Butonu -->
        <NuxtLink to="MemberPage">
          <button class="login-button" @click="handleLogin">
            <span>Üye Girişi</span>
          </button>
        </NuxtLink>
        <!-- Parolamı Unuttum Bağlantısı -->
        <div class="forgot-password-link">
          <nuxt-link to="/account/forgot-password">Parolamı Unuttum</nuxt-link>
        </div>
      </div>
    </div>

    <!-- Sağ Taraf: Fotoğraf ve Metin -->
    <div class="image-section">
      <img src="../assets/bere.webp" alt="member" class="member-image" />
      <div class="image-text">
        100.000'i aşkın üyemiz ile sektörde 6. yılımızı kutluyoruz!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Firebase Auth fonksiyonunu içe aktar
import { initializeApp } from "firebase/app"; // Firebase App fonksiyonunu içe aktar

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyBPCdcef4H2mYuzP-3Pbh6t8WAr65Uq_rU",
  authDomain: "webproject-f93aa.firebaseapp.com",
  projectId: "webproject-f93aa",
  storageBucket: "webproject-f93aa.firebasestorage.app",
  messagingSenderId: "563943750992",
  appId: "1:563943750992:web:e49492f70b632d0c648055",
  measurementId: "G-8CNR1YZNJR",
};

export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async handleLogin() {
      if (!this.email || !this.password) {
        alert("Lütfen email ve şifrenizi girin.");
        return;
      }
      try {
        const userCredential = await signInWithEmailAndPassword(
          getAuth(),
          this.email,
          this.password
        );
        console.log("Email:", this.email);
        console.log("Şifre:", this.password);
      } catch (error) {
        alert("Giriş yapılırken bir hata oluştu.");
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Sayfa Düzeni */
.page-container {
  display: grid;
  grid-template-columns: 40% 60%; /* Sol taraf %40, sağ taraf %60 */
  height: 100vh; /* Sayfanın tam yüksekliği */
}

/* Sol Taraf: Login Formu */
.login-section {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* İçeriği yukarı hizala */
  background-color: #fff; /* Arka plan rengi */
  padding: 20px;
  padding-top: 10vh; /* İçeriği biraz daha yukarı taşı */
}

.login-container {
  max-width: 400px;
  width: 100%;
}

/* Sağ Taraf: Fotoğraf ve Metin */
.image-section {
  position: relative;
  overflow: hidden; /* Taşan içeriği kes */
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Fotoğrafı sayfaya sığdır */
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 72px; /* Yazıyı 3 kat büyüttük */
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  width: 80%; /* Metin genişliği */
  white-space: pre-line; /* Satır sonlarını koru */
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

/* Diğer CSS Kuralları (Aynen Korundu) */
.login-links {
  display: flex;
  gap: 20px;
  padding: 20px 0;
}

.login-link {
  font-weight: 900; /* Daha kalın */
  color: #000;
  font-size: 24px; /* Daha büyük */
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  text-decoration: none; /* Alt çizgiyi kaldır */
}

.register-link {
  font-weight: 700;
  color: #000;
  font-size: 20px; /* Daha büyük */
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  text-decoration: none; /* Alt çizgiyi kaldır */
}

.input-container {
  margin-bottom: 16px;
}

.input-label {
  display: block;
  margin-bottom: 4px;
  color: #666;
  font-size: 14px;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

.required {
  color: red;
}

.input-wrapper {
  position: relative;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: none; /* Kenarlık kaldırıldı */
  border-bottom: 1px solid #ccc; /* Sadece alt çizgi */
  font-size: 14px;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  outline: none; /* Odaklandığında çıkan çerçeveyi kaldır */
}

.input-field:focus {
  border-bottom: 1px solid #000; /* Odaklandığında alt çizgi rengi */
}

.password-toggle {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cfcfcf;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

.forgot-password-link {
  margin-top: 10px;
  font-size: 14px;
  text-align: left; /* Sola hizala */
  padding-left: 0; /* Daha sola al */
}

.forgot-password-link a {
  color: #000; /* Siyah renk */
  text-decoration: none;
}

.forgot-password-link a:hover {
  text-decoration: underline;
}
</style>

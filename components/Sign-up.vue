<template>
  <div class="page-container">
    <!-- Sol Taraf: Kayıt Formu -->
    <div class="login-section">
      <div class="login-container">
        <!-- Üye Girişi ve Üye Ol Bağlantıları -->
        <div class="login-links">
          <nuxt-link to="/sign-in" class="login-link">Üye Girişi</nuxt-link>
          <nuxt-link to="/sign-up" class="register-link">Üye Ol</nuxt-link>
        </div>

        <!-- Ad Input -->
        <div class="input-container">
          <label class="input-label">
            <span class="required">*</span> Ad
          </label>
          <div class="input-wrapper">
            <input
              v-model="firstName"
              class="input-field"
              type="text"
              name="firstName"
              placeholder=""
            />
          </div>
        </div>

        <!-- Soyad Input -->
        <div class="input-container">
          <label class="input-label">
            <span class="required">*</span> Soyad
          </label>
          <div class="input-wrapper">
            <input
              v-model="lastName"
              class="input-field"
              type="text"
              name="lastName"
              placeholder=""
            />
          </div>
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

        <!-- Telefon Input -->
        <div class="input-container">
          <label class="input-label">
            <span class="required">*</span> Telefon
          </label>
          <div class="input-wrapper phone-input">
            <span class="phone-prefix">
              <img
                src="../assets/bayrak.png"
                alt="Turkey Flag"
                class="flag-icon"
              />
              +90
            </span>
            <input
              v-model="phone"
              class="input-field phone-field"
              type="tel"
              name="phone"
              placeholder="5__ ___ __ __"
            />
          </div>
        </div>

        <!-- Onay Kutuları -->
        <div class="checkbox-container">
          <label class="checkbox-label">
            <input
              type="checkbox"
              v-model="acceptMarketing"
              class="checkbox-input"
            />
            <span class="checkbox-text">
              Kampanyalardan haberdar olmak için
              <b style="text-decoration: underline; color: black"
                >Ticari Elektronik İleti Onayı</b
              >
              metnini okudum, onaylıyorum. Tarafınızdan gönderilecek ticari
              elektronik iletileri almak istiyorum.
            </span>
          </label>
        </div>

        <div class="checkbox-container">
          <label class="checkbox-label">
            <input
              type="checkbox"
              v-model="acceptTerms"
              class="checkbox-input"
            />
            <span class="checkbox-text">
              <b style="text-decoration: underline; color: black"
                >Üyelik sözleşmesini</b
              >
              ve
              <b style="text-decoration: underline; color: black"
                >KVKK Aydınlatma Metnini</b
              >
              okudum, kabul ediyorum.
            </span>
          </label>
        </div>

        <!-- Hesap Oluştur Butonu -->
        <button class="login-button" @click="handleSignUp">
          <span>Hesap Oluştur</span>
        </button>

        <!-- Çizgi ve "ya da" Metni -->
        <div class="or-divider">
          <span class="or-text">ya da</span>
        </div>

        <!-- Google ve Facebook Butonları -->
        <div class="social-buttons-container">
          <button
            class="social-button google-button"
            @click="handleGoogleSignUp"
          >
            <font-awesome-icon :icon="['fab', 'google']" class="social-icon" />
            <span>Google ile kayıt ol</span>
          </button>

          <button
            class="social-button facebook-button"
            @click="handleFacebookSignUp"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="social-icon"
            />
            <span>Facebook ile kayıt ol</span>
          </button>
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
import { defineComponent } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: 'AIzaSyBPCdcef4H2mYuzP-3Pbh6t8WAr65Uq_rU',
  authDomain: 'webproject-f93aa.firebaseapp.com',
  projectId: 'webproject-f93aa',
  storageBucket: 'webproject-f93aa.firebasestorage.app',
  messagingSenderId: '563943750992',
  appId: '1:563943750992:web:e49492f70b632d0c648055',
  measurementId: 'G-8CNR1YZNJR',
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  acceptMarketing: boolean;
  acceptTerms: boolean;
}

export default defineComponent({
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      acceptMarketing: false,
      acceptTerms: false,
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
    },
    async handleSignUp(): Promise<void> {
      if (
        !this.firstName ||
        !this.lastName ||
        !this.email ||
        !this.password ||
        !this.phone
      ) {
        alert('Lütfen tüm alanları doldurun.');
        return;
      }
      if (!this.acceptTerms) {
        alert(
          'Lütfen üyelik sözleşmesini ve KVKK Aydınlatma Metnini kabul edin.'
        );
        return;
      }

      try {
        // Kullanıcıyı Firebase Authentication ile kaydet
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;

        if (user) {
          // Firestore'a kullanıcı bilgilerini kaydet
          const userData: UserData = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            acceptMarketing: this.acceptMarketing,
            acceptTerms: this.acceptTerms,
          };

          await setDoc(doc(db, 'users', user.uid), userData);
        }

        alert('Kayıt başarılı!');
      } catch (error: any) {
        console.error('Kayıt sırasında hata oluştu:', error);
        alert(error.message);
      }
    },
    handleGoogleSignUp(): void {
      console.log('Google ile kayıt ol butonuna tıklandı.');
      // Google ile kayıt işlemleri burada yapılabilir.
    },
    handleFacebookSignUp(): void {
      console.log('Facebook ile kayıt ol butonuna tıklandı.');
      // Facebook ile kayıt işlemleri burada yapılabilir.
    },
  },
});
</script>

<style scoped>
/* Sayfa Düzeni */
.page-container {
  display: grid;
  grid-template-columns: 40% 60%; /* Sol taraf %40, sağ taraf %60 */
  height: 100vh; /* Sayfanın tam yüksekliği */
}

/* Sol Taraf: Kayıt Formu */
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
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
}

/* Diğer CSS Kuralları (Aynen Korundu) */
.login-links {
  display: flex;
  gap: 20px;
  padding: 20px 0;
}

.login-link {
  font-weight: 700; /* Normal kalınlık */
  color: #000;
  font-size: 20px; /* Daha büyük */
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
  text-decoration: none; /* Alt çizgiyi kaldır */
}

.register-link {
  font-weight: 900; /* Daha kalın */
  color: #000;
  font-size: 24px; /* Daha büyük */
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
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
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
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
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
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

/* Telefon Input Stili */
.phone-input {
  display: flex;
  align-items: center;
}

.phone-prefix {
  display: flex;
  align-items: center;
  padding-right: 8px;
  border-bottom: 1px solid #ccc; /* Alt çizgi */
  font-size: 14px;
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
}

.flag-icon {
  width: 20px;
  height: 15px;
  margin-right: 5px;
}

.phone-field {
  flex: 1;
  border-bottom: 1px solid #ccc; /* Alt çizgi */
  padding-left: 0; /* Sol padding'i kaldır */
}

/* Onay Kutuları Stili */
.checkbox-container {
  margin-bottom: 16px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  color: #666;
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
}

.checkbox-input {
  margin-right: 8px;
  margin-top: 4px;
}

.checkbox-text {
  line-height: 1.5;
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
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
}

.login-button:hover {
  background-color: #333;
}

.login-button:active {
  background-color: #555;
}

/* Çizgi ve "ya da" Metni Stili */
.or-divider {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

.or-divider::before,
.or-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ccc; /* Çizgi */
}

.or-text {
  padding: 0 10px;
  color: #666;
  font-size: 14px;
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
}

/* Sosyal Medya Butonları Stili */
.social-buttons-container {
  display: flex;
  gap: 10px; /* Butonlar arası boşluk */
  margin-top: 20px;
}

.social-button {
  flex: 1; /* Butonlar eşit genişlikte */
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px; /* Yazı boyutu küçültüldü */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px; /* İkon ve metin arası boşluk */
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: 'Oswald', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
}

.google-button {
  background-color: #fff; /* Beyaz arka plan */
  color: #000; /* Siyah metin */
  border: 1px solid #000; /* Siyah kenarlık */
}

.google-button:hover {
  background-color: #f8f8f8; /* Hafif gri hover efekti */
  color: #000; /* Metin rengi sabit */
}

.facebook-button {
  background-color: #fff; /* Beyaz arka plan */
  color: #1877f2; /* Mavi metin */
  border: 1px solid #1877f2; /* Mavi kenarlık */
}

.facebook-button:hover {
  background-color: #f8f8f8; /* Hafif gri hover efekti */
  color: #1877f2; /* Metin rengi sabit */
}

.social-icon {
  font-size: 14px; /* İkon boyutu küçültüldü */
}
</style>

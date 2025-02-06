<template>
  <div id="subscribe" class="subscribe-main relative">
    <div class="relative">
      <div class="image-wrapper">
        <img
          alt="Image"
          src="https://cdn.myikas.com/images/theme-images/bae76d17-5dc5-403a-8e44-2319c3c63cbd/image_3840.webp"
          class="blog-detail-image"
        />
      </div>
    </div>
    <div
      class="absolute subscribe-content flex flex-col items-center justify-center text-center"
    >
      <h3 class="subscribe-title">BÜLTENE ABONE OL!</h3>
      <span class="subtext"
        >BÜLTENE ÜYELERİNE ÖZEL İNDİRİMLERDEN FAYDALAN!</span
      >
      <div class="subscribe-input-main relative mt-4">
        <input
          type="email"
          v-model="email"
          placeholder="email adresiniz"
          class="subscribe-input"
        />
        <button
          :disabled="!isFormValid"
          @click="subscribe"
          class="subscribe-button"
        >
          ABONE OL
        </button>
      </div>
      <div
        class="flex flex-col mb-2 mt-4 w-full justify-center items-center mx-auto text-center"
      >
        <div class="flex text-sm space-x-2">
          <input
            type="checkbox"
            v-model="privacyPolicy"
            id="privacy-policy"
            class="option-checkbox"
          />
          <label for="privacy-policy" class="text-white">
            Kişisel verilerin korunması kanunu
            <u style="cursor: pointer;">okudum,onaylıyorum</u>
          </label>
        </div>
      </div>
    </div>
    <div v-if="isSuccess" class="subscribe-success">
      Başarıyla abone oldunuz
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      privacyPolicy: false,
      isSuccess: false,
    };
  },
  computed: {
    isFormValid() {
      return this.email.includes("@") && this.privacyPolicy;
    },
  },
  methods: {
    subscribe() {
      if (this.isFormValid) {
        this.isSuccess = true;
        console.log("Email:", this.email);
      } else {
        alert("Lütfen tüm alanları doğru şekilde doldurun!");
      }
    },
  },
};
</script>

<style scoped>
.subscribe-main {
  position: relative;
}

.image-wrapper {
  width: 100%;
  height: 45vh;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.subscribe-content {
  position: absolute;
  top: 19%;
  left: 52%;
  transform: translate(-50%, -50%);
  color: white;
}

.subscribe-title {
  font-size: 2.4rem;
  font-weight: 900;
  color: #fff; /* Yazı rengi beyaz */
  text-align: center;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

.subtext {
  font-size: 1rem;
  font-weight: 400;
  display: block;
  margin-top: 5px;
  text-align: center;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

.subscribe-input-main {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

.subscribe-input {
  padding: 0.5rem;
  border: 1px solid white;
  border-radius: 0px;
  background: white;
  color: black;
  width: 300px;
  height: 25px;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

.subscribe-input::placeholder {
  color: gray;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

.subscribe-button {
  background-color: black;
  color: white;
  padding: 13px 1rem;
  border: none;
  border-radius: 0px;
  margin-left: 0px;
  cursor: pointer;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

.subscribe-button:disabled {
  border-color: black;
  color: white;
  cursor: not-allowed;
}

.subscribe-success {
  color: green;
  font-weight: bold;
  margin-top: 1rem;
}
.option-checkbox {
  display: none; /* Varsayılan checkbox'ı gizle */
}

.option-checkbox + label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: white;
  margin-left: 8px;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

/* Checkbox'ın yerine özel kutu */
.option-checkbox + label:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid white;
  background-color: white; /* Beyaz kare */
  margin-right: 8px;
  box-sizing: border-box;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

/* Tik işareti */
.option-checkbox:checked + label:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='black' d='M5.5 11.3L2.7 8.5 1.3 9.9l4.2 4.2 9-9-1.4-1.4z'/%3E%3C/svg%3E");
  background-size: 10px 10px;
  background-repeat: no-repeat;
  background-position: center;
}

</style>

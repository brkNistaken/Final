<template>
  <div class="search-component">
    <nuxt-link to="/" class="logo">
      <img
        src="https://cdn.myikas.com/images/theme-images/c86b3cdb-e936-440f-bb01-27b8ade84ff3/image_540.webp"
        alt="logo"
        class="logo"
      />
    </nuxt-link>
    <!-- Search Input -->
    <div class="search-bar">
      <button class="search-icon" @click="performSearch" aria-label="Search">
        <!-- SVG Magnifying Glass Icon -->
        <nuxt-link to="/gallery">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </nuxt-link>
      </button>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Ne aramıştınız?"
        class="search-input"
        @keyup.enter="performSearch"
        @input="debouncedSearch"
        aria-label="Search"
      />
    </div>
    <!-- Çarpı işareti (X) -->
    <button @click="goBack" class="close-button" aria-label="Close">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Search",
  data() {
    return {
      searchQuery: "",
      filters: {
        option1: false,
        option2: false,
        option3: false,
      },
    };
  },
  methods: {
    performSearch() {
      this.$emit("search", { query: this.searchQuery, filters: this.filters });
      console.log("Arama Sorgusu:", this.searchQuery);
    },
    debouncedSearch: _.debounce(function () {
      this.performSearch();
    }, 300),
    goBack() {
      this.$router.go(-1); // Bir önceki sayfaya dön
    },
  },
};
</script>

<style scoped>
.search-component {
  display: flex;
  position: relative;
  padding: 2%;
  align-items: center;
}

.search-bar {
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.logo {
  padding-right: 10%;
}

.search-input {
  padding: 12px 8px 12px 35px; /* Further increased left padding and top/bottom padding for height */
  width: 60%; /* Further reduced width */
  border: 1px solid #ccc;
  color: #ccc;
  border-radius: 4px;
  outline: none;
  width: 75%;
  font-size: 14px;
  background-color: #f7f7f7;
}

.search-icon {
  position: absolute;
  left: 10px;
  width: 20px;
  cursor: pointer;
  background: none;
  border: none;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 10px; /* Çarpı işareti ile arama çubuğu arasında boşluk */
}

.close-button svg {
  width: 20px;
  height: 20px;
  fill: currentColor; /* SVG rengini mevcut renge uyumlu hale getirir */
}
</style>
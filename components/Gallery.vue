<template>
  <div class="filter-container">
    <!-- Beden Filter -->
    <div class="filter-item">
      <div
        class="filter-header"
        @click="toggleSection('beden')"
      >
        <span class="filter-title">Beden</span>
        <span class="filter-icon">
          <svg
            :class="{ rotated: sectionsVisibility.beden }"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
            ></path>
          </svg>
        </span>
      </div>

      <div class="filter-content" v-if="sectionsVisibility.beden">
        <div class="filter-search">
          <input
            type="text"
            class="filter-search-input"
            placeholder="Filtrele"
            v-model="searchBeden"
          />
          <span class="filter-search-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              ></path>
            </svg>
          </span>
        </div>

        <div class="filter-options">
          <div
            class="filter-option"
            v-for="size in filteredBeden"
            :key="size"
          >
            <input
              type="checkbox"
              :id="`beden${size}`"
              v-model="filters.beden[size]"
            />
            <label :for="`beden${size}`" class="filter-label">
              {{ size }} <span class="filter-count">({{ getBedenCount(size) }})</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Stok Durumu Filter -->
    <div class="filter-item">
      <div
        class="filter-header"
        @click="toggleSection('stokDurumu')"
      >
        <span class="filter-title">Stok Durumu</span>
        <span class="filter-icon">
          <svg
            :class="{ rotated: sectionsVisibility.stokDurumu }"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
            ></path>
          </svg>
        </span>
      </div>

      <div class="filter-content" v-if="sectionsVisibility.stokDurumu">
        <div class="filter-options">
          <div class="filter-option">
            <input type="checkbox" id="stokta" v-model="filters.stokta" />
            <label for="stokta" class="filter-label">
              Stokta <span class="filter-count">({{ getStoktaCount() }})</span>
            </label>
          </div>
          <div class="filter-option">
            <input type="checkbox" id="stokta-yok" v-model="filters.stoktaYok" />
            <label for="stokta-yok" class="filter-label">
              Stokta yok <span class="filter-count">({{ getStoktaYokCount() }})</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Fiyat Slider -->
    <div class="filter-item">
      <div
        class="filter-header"
        @click="toggleSection('fiyat')"
      >
        <span class="filter-title">Fiyat</span>
        <span class="filter-icon">
          <svg
            :class="{ rotated: sectionsVisibility.fiyat }"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
            ></path>
          </svg>
        </span>
      </div>

      <div class="filter-content" v-if="sectionsVisibility.fiyat">
        <div class="slider-container">
          <div class="slider-background">
            <div class="slider-track"></div>
            <div
              class="slider-handle"
              :style="{ left: minPercentage + '%' }"
              @mousedown="startDrag('min')"
            ></div>
            <div
              class="slider-handle"
              :style="{ left: maxPercentage + '%' }"
              @mousedown="startDrag('max')"
            ></div>
            <div
              class="slider-range"
              :style="{
                left: minPercentage + '%',
                width: maxPercentage - minPercentage + '%',
              }"
            ></div>
          </div>
        </div>

        <div class="slider-values">
          <span>{{ minValue }}₺</span>
          <span>{{ maxValue }}₺</span>
        </div>
      </div>
    </div>

    <!-- Filterleri Temizle Button -->
    <div class="filter-item">
      <button
        class="filter-clear-button"
        @click="clearFilters"
      >
        Filtreleri Temizle
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionsVisibility: {
        beden: true,
        stokDurumu: true,
        fiyat: true,
      },
      filters: {
        beden: {
          "24(1)": false,
          "26(8)": false,
          "26(XXS)5": false,
          "28(11)": false,
          "28(KS)5": false,
          "30(14)": false,
          "30-32(1)": false,
          "30(S)(4)": false,
          "31(1)": false,
          "32(13)": false,
          "32-32(1)": false,
          "32(M)(1)": false,
          "34(13)": false,
          "36(10)": false,
          "L114": false,
          "M135": false,
        },
        stokta: false,
        stoktaYok: false,
      },
      searchBeden: "",
      minValue: 0,
      maxValue: 1000,
      minPercentage: 0,
      maxPercentage: 100,
      isDragging: false,
      activeHandle: null,
    };
  },
  computed: {
    filteredBeden() {
      return Object.keys(this.filters.beden).filter((size) =>
        size.toLowerCase().includes(this.searchBeden.toLowerCase())
      );
    },
  },
  methods: {
    toggleSection(section) {
      this.sectionsVisibility[section] = !this.sectionsVisibility[section];
    },
    getBedenCount(size) {
      const counts = {
        "24(1)": 1,
        "26(8)": 8,
        "26(XXS)5": 5,
        "28(11)": 11,
        "28(KS)5": 5,
        "30(14)": 14,
        "30-32(1)": 1,
        "30(S)(4)": 4,
        "31(1)": 1,
        "32(13)": 13,
        "32-32(1)": 1,
        "32(M)(1)": 1,
        "34(13)": 13,
        "36(10)": 10,
        "L114": 114,
        "M135": 135,
      };
      return counts[size] || 0;
    },
    getStoktaCount() {
      return 240;
    },
    getStoktaYokCount() {
      return 127;
    },
    startDrag(handle) {
      this.isDragging = true;
      this.activeHandle = handle;
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.stopDrag);
    },
    onMouseMove(event) {
      if (this.isDragging && this.activeHandle) {
        const sliderWidth = this.$el.querySelector(".slider-background").offsetWidth;
        const sliderLeft = this.$el.querySelector(".slider-background").getBoundingClientRect().left;
        const newPercentage = ((event.clientX - sliderLeft) / sliderWidth) * 100;

        if (this.activeHandle === "min") {
          this.minPercentage = Math.max(0, Math.min(newPercentage, this.maxPercentage));
          this.minValue = Math.round((this.minPercentage / 100) * 1000);
        } else if (this.activeHandle === "max") {
          this.maxPercentage = Math.max(this.minPercentage, Math.min(newPercentage, 100));
          this.maxValue = Math.round((this.maxPercentage / 100) * 1000);
        }
      }
    },
    stopDrag() {
      this.isDragging = false;
      this.activeHandle = null;
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.stopDrag);
    },
    clearFilters() {
      this.filters.beden = Object.fromEntries(
        Object.keys(this.filters.beden).map((key) => [key, false])
      );
      this.filters.stokta = false;
      this.filters.stoktaYok = false;
      this.minValue = 0;
      this.maxValue = 1000;
      this.minPercentage = 0;
      this.maxPercentage = 100;
    },
  },
};
</script>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  width: 250px; /* Genişliği biraz daralttık */
  background-color: #f9f9f9;
  border-right: 1px solid #ccc;
  padding: 15px; /* Padding'i azalttık */
  box-sizing: border-box;
}

.filter-item {
  margin-bottom: 15px; /* Boşlukları azalttık */
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0; /* Padding'i azalttık */
}

.filter-title {
  font-weight: 500;
  font-size: 13px; /* Yazı boyutunu küçülttük */
}

.filter-icon {
  transition: transform 0.3s ease;
}

.rotated {
  transform: rotate(180deg);
}

.filter-content {
  margin-top: 8px; /* Boşluğu azalttık */
}

.filter-search {
  position: relative;
  margin-bottom: 8px; /* Boşluğu azalttık */
  width: 80%; /* Arama kutusunun genişliğini azalttık */
}

.filter-search-input {
  width: 100%;
  padding: 6px 25px 6px 8px; /* Padding'i azalttık */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px; /* Yazı boyutunu küçülttük */
  height: 30px; /* Yüksekliği azalttık */
}

.filter-search-icon {
  position: absolute;
  top: 50%;
  right: 8px; /* Sağ boşluğu azalttık */
  transform: translateY(-50%);
  color: #666;
  font-size: 12px; /* İkon boyutunu küçülttük */
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 6px; /* Boşluğu azalttık */
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 6px; /* Boşluğu azalttık */
}

.filter-label {
  font-size: 12px; /* Yazı boyutunu küçülttük */
}

.filter-count {
  color: #666;
  font-size: 11px; /* Yazı boyutunu küçülttük */
}

.slider-container {
  margin-top: 15px; /* Boşluğu azalttık */
}

.slider-background {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: #ddd;
  border-radius: 2px;
}

.slider-track {
  position: absolute;
  height: 100%;
  background-color: #000;
  border-radius: 2px;
}

.slider-handle {
  position: absolute;
  width: 14px; /* Handle boyutunu küçülttük */
  height: 14px; /* Handle boyutunu küçülttük */
  background-color: #000;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.slider-range {
  position: absolute;
  height: 100%;
  background-color: #000;
  border-radius: 2px;
}

.slider-values {
  display: flex;
  justify-content: space-between;
  margin-top: 8px; /* Boşluğu azalttık */
  font-size: 12px; /* Yazı boyutunu küçülttük */
}

.filter-clear-button {
  width: 100%;
  padding: 8px; /* Padding'i azalttık */
  background-color: #eee;
  border: none;
  border-radius: 4px;
  font-size: 12px; /* Yazı boyutunu küçülttük */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-clear-button:hover {
  background-color: #ddd;
}
</style>
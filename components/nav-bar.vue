<template>
  <header class="header">
    <div id="announcements-main">
      <Swiper
        :loop="true"
        :slidesPerView="1"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
      >
        <SwiperSlide>
          <div
            class="slider-banner flex justify-center items-center h-full"
            style="
              color: rgb(253, 253, 253);
              background-color: rgb(0, 0, 0);
              height: 40px;
            "
          >
            <div
              class="w-3/4 mx-auto text-center announcement-text font-medium uppercase"
              style="font-size: 13px"
            >
              16:00'A KADAR VERİLEN TÜM SİPARİŞLER AYNI GÜN KARGODA!
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="slider-banner flex justify-center items-center h-full"
            style="
              color: rgb(253, 253, 253);
              background-color: rgb(0, 0, 0);
              height: 40px;
            "
          >
            <div
              class="w-3/4 mx-auto text-center announcement-text font-medium uppercase"
              style="font-size: 13px"
            >
              2.000TL VE ÜZERİ ÜCRETSİZ KARGO!
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="menu">
      <nav>
        <ul class="nav-items">
          <div class="parent">
            <nuxt-link to="/" class="logo"
              ><img
                src="https://cdn.myikas.com/images/theme-images/c86b3cdb-e936-440f-bb01-27b8ade84ff3/image_540.webp"
                alt="logo"
                class="logo"
            /></nuxt-link>
          </div>
          <div class="parent">
            <li>
              <nuxt-link to="/gallery" class="title">YENİ</nuxt-link>
            </li>
          </div>
          <div class="parent">
            <li>
              <nuxt-link to="/gallery" class="title">ÜST GİYİM</nuxt-link>
              <div class="child">
                <nuxt-link to="/gallery" class="alt">T-Shirt</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Sweatshirt</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Gömlek</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Tümünü Gör</nuxt-link>
              </div>
            </li>
          </div>
          <div class="parent">
            <li>
              <nuxt-link to="/gallery" class="title">ALT GİYİM</nuxt-link>
              <div class="child">
                <nuxt-link to="/gallery" class="alt">Pantolon</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Eşofman</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Şort</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Tümünü Gör</nuxt-link>
              </div>
            </li>
          </div>
          <div class="parent">
            <li>
              <nuxt-link to="/gallery" class="title">DIŞ GİYİM</nuxt-link>
              <div class="child">
                <nuxt-link to="/gallery" class="alt">Ceket</nuxt-link>
              </div>
            </li>
          </div>
          <div class="parent">
            <li>
              <nuxt-link to="/gallery" class="title">AKSESUAR</nuxt-link>
              <div class="child">
                <nuxt-link to="/gallery" class="alt">Çorap</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Bere</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Atkı</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Şapka</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Çanta</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Cüzdan</nuxt-link><br />
                <nuxt-link to="/gallery" class="alt">Tümünü Gör</nuxt-link>
              </div>
            </li>
          </div>
          <div class="parent">
            <li>
              <nuxt-link to="/gallery" class="title">SOHIGH</nuxt-link>
            </li>
          </div>
          <div class="nov">
            <li>
              <nuxt-link to="/gallery" class="nov-title">YILBAŞI İNDİRİMLERİ</nuxt-link>
            </li>
          </div>
          <div class="parent">
            <nuxt-link to="/arama"
              ><font-awesome-icon
                class="icons"
                :icon="['fas', 'magnifying-glass']"
            /></nuxt-link>
            <nuxt-link to="/sign-in"
              ><font-awesome-icon class="icons" icon="fa-solid fa-user"
            /></nuxt-link>
            <nuxt-link to="/bag-shopping"
              ><font-awesome-icon
                class="icons"
                :icon="['fas', 'bag-shopping']"
                style="padding-right: 200px"
            /></nuxt-link>
          </div>
        </ul>
      </nav>
    </div>
    <hr />
  </header>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
export default {
  name: "SecondComp",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.header {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}
* {
  margin: 0%;
  padding: 0%;
}
.icons {
  color: black;
  font-size: 23px;
  padding: 10px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: inline-block;
  width: 140px;
  margin-left: 150px;
  margin-top: 0%;
  margin-right: 150px;
}
.title {
  text-decoration: none;
  background-color: white;
  color: black;
  font-size: 16px;
  margin: 0px 15px;
}
.title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 1px;
  background-color: black;
  width: 0;
  transition: width 0.3s ease-in-out;
}
.title:hover::after {
  width: 100%;
}
.parent {
  position: relative;
  display: inline-block;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  font-weight: bolder;
}
.parent .child {
  position: absolute;
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  top: 150%;
  background-color: white;
  padding: 10px;
  padding-right: 100px;
  box-shadow: 0 4px 8px black;
  border-radius: 0px;
  transition: visibility 0.1s, opacity 0.3s ease-in-out;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}
.parent:hover .child {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.nov-title {
  position: relative;
  color: #d82525ff;
  text-decoration: none;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  font-weight: bolder;
}
.nov-title:hover {
  color: black;
}
.nov-title::after {
  content: ""; /* Pseudo-element için boş içerik */
  position: absolute;
  left: 0;
  bottom: -5px; /* Yazının hemen altına yerleştir */
  height: 1px; /* Çizginin kalınlığı */
  background-color: #d82525ff; /* Çizgi rengi */
  width: 0; /* Başlangıçta görünmez */
  transition: width 0.3s ease-in-out; /* Geçiş efekti */
}
.nov-title:hover::after {
  width: 100%; /* Hover ile tam genişlikte görünür */
}
.announcement-text {
  display: flex;
  justify-content: center;
  text-align: center;
}
.alt{
  text-decoration: none;
  color: black;
}
</style>

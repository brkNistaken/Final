<template>
  <div>
    <img
      id="images"
      src="https://cdn.myikas.com/images/theme-images/c2eb5bbd-31a1-49c2-ace1-706832e4cc1b/image_3840.webp"
      alt="İndirim bilgi fotoğrafı"
    /><nuxt-link to="/gallery"
      ><button id="btn">FIRSATI YAKALA!</button></nuxt-link
    >
  </div>
</template>

<script></script>

<style>
#images {
  width: 100%;
  position: relative;
  display: block;
}

#btn {
  position: absolute;
  min-width: 195px;
  color: rgb(255, 255, 255);
  background-color: rgb(216, 37, 37);
  padding: 15px;
  border-radius: 1px;
  font-size: 17px;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}
</style>

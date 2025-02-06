<template>
  <div class="category-slider">
    <div class="category-slide">
      <a href="/sweatshirt">
        <img
          src="https://cdn.myikas.com/images/theme-images/f5700c62-9d4b-4db5-86f4-0d8e8113e556/image_3840.webp"
          alt="Sweatshirt"
        />
        <div class="text">
          <h2>SWEATSHIRT</h2>
          <p>HOODIE & ZIP</p>
          <button>TÜMÜNÜ GÖR</button>
        </div>
      </a>
    </div>
    <div class="category-slide">
      <a href="/pantolon">
        <img
          src="https://cdn.myikas.com/images/theme-images/45a2d8c7-769f-4466-b61d-a335c4260ff6/image_900.webp"
          alt="Pantolon"
        />
        <div class="text">
          <h2>PANTOLON</h2>
          <p>BAGGY JEANS</p>
          <button>TÜMÜNÜ GÖR</button>
        </div>
      </a>
    </div>
    <div class="category-slide">
      <a href="/tshirt">
        <img
          src="https://cdn.myikas.com/images/theme-images/5a2f2059-051e-4bbc-b9e7-abea36005977/image_900.webp"
          alt="Tshirt"
        />
        <div class="text">
          <h2>T SHIRT</h2>
          <p>EFSANE FİYATLAR</p>
          <button>TÜMÜNÜ GÖR</button>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style>
.category-slider {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
}
.category-slide {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}
.category-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}
.text {
  position: absolute;
  top: 25%;
  left: 0%;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.category-slide:hover img {
  width: 100%;
  height: 105%;
  object-fit: cover;
}
.text h2 {
  font-size: 2rem;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  text-transform: uppercase;
  font-weight: 600;
}
.text p {
  font-size: 1rem;
  font-weight: 700;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.text button {
  background-color: white;
  color: black;
  width: 35%;
  border: none;
  padding: 14px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 0px;
  text-transform: uppercase;
  transition: background-color 0.3s;
  font-weight: bold;
  transition: all .3s;
  box-sizing: border-box;
}

.text button:hover {
  background-color: black;
  color: white;
}
</style>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="logo-container">
        <img src="../assets/beyazLogo.webp" alt="logo" class="logo" />
      </div>
      <div class="footer-parent">
        <div class="footer-info">
          <p style="font-weight: bolder">
            Hypetr Tekstil Mağazacılık İç Ve Dış Ticaret Limited Şirketi®
          </p>
          <p>Mersis No: 0465145899600001 | Kadıköy Vergi Dairesi</p>
          <p>
            Caferağa Mah. Sakızgülü Sok. Beyazsaray Apt. No:30/1 İç Kapı No:49
          </p>
          <p>Kadıköy / İstanbul</p>
          <p>
            <a
              href="https://www.eticaret.gov.tr/siteprofil/4051600845535875/hypetrcom"
            >
              <img
                src="../assets/qrKod.jpg"
                alt="Etbis Qr Link"
                class="qr-code"
            /></a>
          </p>
        </div>
        <div class="footer-links">
          <div class="Account">
            <p>Hesabım</p>
            <ul>
              <li>
                <nuxt-link to="/sign-up" class="custom-links"
                  >Kayıt Ol</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/sign-in" class="custom-links"
                  >Giriş Yap</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/resetPassword" class="custom-links"
                  >Şifremi Unuttum</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/cargo" class="custom-links"
                  >Kargo Takip</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="corparate">
            <p>Kurumsal</p>
            <ul>
              <li>
                <nuxt-link to="/contact" class="custom-links"
                  >İletişim</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/About" class="custom-links"
                  >Hakkımızda</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/protection" class="custom-links"
                  >KKVK</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/terms" class="custom-links"
                  >Hizmet Kullanım Şartları</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/privacy" class="custom-links"
                  >Gizlilik Politikası</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="Help">
            <p>Yardım</p>
            <ul>
              <li>
                <nuxt-link to="/questions" class="custom-links"
                  >Sık Sorulan Sorular</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/" class="custom-links"
                  >Sipariş, Teslimat ve İade</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="icons-logos">
      <div class="icons">
        <ul>
          <li><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
          <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
          <li><font-awesome-icon :icon="['fab', 'tiktok']" /></li>
        </ul>
      </div>
      <div class="banks-logo">
        <span
          ><img
            src="https://cdn.myikas.com/sf/assets/ozy/images/Visa.svg"
            alt="visa"
        /></span>
        <span
          ><img
            src="https://cdn.myikas.com/sf/assets/ozy/images/Maestro.svg"
            alt="maestro"
        /></span>
        <span
          ><img
            src="https://cdn.myikas.com/sf/assets/ozy/images/Mastercard.svg"
            alt="mastercard"
        /></span>
        <span
          ><img
            src="https://cdn.myikas.com/sf/assets/ozy/images/troy.png"
            alt="troy"
        /></span>
        <span
          ><img
            src="https://cdn.myikas.com/sf/assets/ozy/images/american_express.png"
            alt="american-express"
        /></span>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="footer-text">
        <span>
          <font>HYPETR ©2018-2025 Tüm Hakları Saklıdır.</font>
        </span>
        <br />
      </div>
    </div>
    <div class="footer-last">
      <a
        href="https://businessup.com.tr/?utm_source=hypetr.com&utm_medium=footer&utm_campaign=footer"
        target="_blank"
        >Performance Marketing:<b>BusinessUp!</b></a
      >
    </div>
  </footer>
</template>

<script></script>

<style scoped>
.site-footer {
  background-color: #f5f5f5;
  padding-top: 2%;
  font-size: 14px;
  color: #333;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden; /* Yatay kaydırmayı engeller */
}

.foote-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo-container {
  width: 100px;
}

.footer-parent {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 8%;
  padding-right: 0; /* Sağ padding'i kaldır */
}

.footer-links {
  display: flex;
  position: absolute;
  justify-content: center;
  width: 50%;
  padding-right: 0; /* Sağ padding'i kaldır */
  padding-left: 25%;
}

.footer-links p {
  font-weight: bolder;
  margin: 5px 0;
  font-size: larger;
}

.footer-info {
  width: 50%;
}

.footer-info p {
  margin: 5px 0;
}

.footer-info img {
  width: 100px;
}

.footer-links div {
  width: 33%;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin: 5px 0;
}

.icons {
  padding-left: 7%;
}

.icons-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.icons ul {
  display: flex;
  justify-content: space-between;
  width: 100px;
}

.icons ul li {
  list-style: none;
}

.banks-logo {
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding-right: 0; /* Sağ padding'i kaldır */
}

.banks-logo img {
  width: 40px;
}

.footer-copyright {
  background-color: black;
  color: #fff;
  padding: 10px 0;
  text-align: left;
}

.footer-text {
  font-size: 12px;
  padding-left: 8%;
}

.footer-text font {
  font-size: 12px;
}

.custom-links {
  color: black;
  text-decoration: none;
}

.footer-last {
  background-color: #f5f5f5;
  padding: 10px 0;
  text-align: center;
  font-size: 12px;
}

.footer-last a {
  color: black;
  text-decoration: none;
}
</style>
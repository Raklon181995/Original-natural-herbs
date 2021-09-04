<template>
  <div>
    <!-- Footer Start -->
    <div class="footerx">
      <footer class="page-footer font-small mdb-color pt-5">
        <!-- Footer Links -->
        <div class="container text-center text-md-left">
          <!-- Footer links -->
          <div class="row text-center text-md-left mt-3 pb-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-3 col-xl-3 mt-3">
              <div class="footer-img">
                <img
                  src="../assets/home_herbal_logo_small.png"
                  class="card-img-top"
                  alt="logo"
                />
              </div>
              <p class="footer-para">
                Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.
                Lorem ipsum primis in nibh vel risus..
              </p>
            </div>
            <!-- Grid column -->
            <!-- <hr class="w-100 clearfix d-md-none" /> -->
            <!-- Grid column -->
            <div class="footer-section2">
              <div class="col-md-2 col-lg-2 col-xl-2 mx-5 mt-3">
                <div class="fp">
                  <p>
                    <a href="#!"><b>Aliquam</b></a>
                  </p>
                  <p>
                    <a href="#!"><b>Imperdiet</b></a>
                  </p>
                  <p>
                    <a href="#!"><b>Quisque</b></a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Grid column -->
            <!-- Grid column -->
            <div class="footer-section2">
              <div class="col-md-2 col-lg-2 col-xl-2 mx-5 mt-3">
                <div class="fp">
                  <p>
                    <a href="#!"><b>Curabitur</b></a>
                  </p>
                  <p>
                    <a href="#!"><b>Donec ligula</b></a>
                  </p>
                  <p>
                    <a href="#!"><b>Vestibulum</b></a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Grid column -->

            <!-- <hr class="w-100 clearfix d-md-none" /> -->
            <!-- Grid column -->
            <div class="footer-section2">
              <div class="col-md-2 col-lg-2 col-xl-2 mx-5 mt-3">
                <div class="fp">
                  <p>
                    <a href="#!"><b>Vivamus</b></a>
                  </p>
                  <p>
                    <a href="#!"><b>Etiam commodo</b></a>
                  </p>
                  <p>
                    <a href="#!"><b>Morbi</b></a>
                  </p>
                </div>
              </div>
            </div>

            <div class="followus col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="mb-5">Follow us:</h6>

              <ul class="icons">
                <button class="list-inline-item border">
                  <a class="btn-floating btn-sm rgba-white-slight mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </button>
                <button class="list-inline-item border">
                  <a class="btn-floating btn-sm rgba-white-slight mx-1">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </button>
                <button class="list-inline-item border">
                  <a class="btn-floating btn-sm rgba-white-slight mx-1">
                    <i class="fab fa-twitter"></i>
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer class="last-footer page-footer font-large blue">
        <div class="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://www.wohlig.com/"> wohlig.com</a>
        </div>
      </footer>

      <!-- Footer -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* ------------footer--------- */
.footerx {
  background-color: #c6ccc6;
}
.list-inline-item:hover {
  background-color: #ff8c00;
}
.footer-img {
  width: 80px;
  margin-top: 20px;
}
.footer-para {
  margin-top: 20px;
  color: #6b7a6b;
  font-family: Lato, Helvetica, sans-serif;
  letter-spacing: 3px;
  font-size: 11px;
  margin-bottom: 20px;
}
.footer-section2 {
  margin-top: 20px;
}
.fp a {
  color: #6b7a6b;
}
.mb-5 {
  margin-top: -160px;
  margin-left: 500px;
  width: 30%;
  color: #6b7a6b;
}
.icons {
  margin-left: 460px;
  width: 100%;
  margin-top: -30px;
  border: none;
}
.htfooter {
  width: 100%;
}
.last-footer {
  background-color: #b2b6b2;
  width: 100%;
}

@media (max-width: 570px) {
  .footer-img {
    margin-left: 20px;
    margin-top: 0px;
  }
  .footer-para {
    letter-spacing: 1px;
    text-align: left;
    font-size: 12px;
    margin-bottom: 40px;
    margin-left: 20px;
  }

  .footer-section2 {
    margin-top: 0px;
    margin-left: -21px;
    text-align: left;
  }
  .followus {
    display: none;
  }
}
</style>

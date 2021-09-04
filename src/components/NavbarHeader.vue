<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <div class="nav-img">
            <img src="../assets/herbal.png" class="card-img-top" alt="logo" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/main" class="nav-link">Home</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/shop" class="nav-link">SHOP</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/about" class="nav-link">ABOUT</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/faq" class="nav-link">FAQ</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link"
                  >CONTACT</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- second nav bar -->
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*
nav ul li:hover{
  background-color: #b2bbb2;

} */
/* ul li.active {
  background-color: #b2bbb2;

} */
/* a.router-link-active {
  background-color: #d2d8d2;
} */

.nav-item:hover {
  background-color: #d2d8d2;
}
.nav-item {
  margin: 0px 25px 0px 0;
  font-size: 14px;
  padding: 20px;
}
nav.navbar.navbar-expand-lg.navbar-light.bg-light {
  padding: 0px 0px 0px 0px !important;
}
/* .nav-link{
  padding-top: 20px ;
  padding-bottom: 20px ;
  padding-left: 20px ;
  margin-top: -13px;
  margin-bottom: -13px;
} */

@media (max-width: 570px) {
  /* a.router-link-active {
    background-color: #d2d8d2;
    width: 100%;
    
  } */
  .nav-item:hover {
    background-color: #d2d8d2;
  }
  .navbar {
    overflow-x: hidden;
  }
  .nav-img {
    width: 150px;
  }
  .card-img-top {
    width: 180px;
  }
  .navbar-nav {
    float: left;
    text-align: left;
  }
  .nav-item {
    font-size: 12px;
  }
}
</style>

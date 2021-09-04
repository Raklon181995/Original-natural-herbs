<template>
  <div class="ShopMain">
    <navbar-header></navbar-header>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Shop</h1>
      </div>
    </div>
    <div>
      <div class="header2">
        <div class="h6">
          <p>Showing all 3 results</p>
        </div>
        <div class="drop">
          <div class="dropdown show">
            <a
              class="btn btn-default  dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by latest
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item " href="#">Sort by price: low to high</a>
              <a class="dropdown-item" href="#">Sort by popularty</a>
              <a class="dropdown-item" href="#">Sort by average rating</a>
            </div>
          </div>
        </div>
      </div>

      <div class="cardbox1">
        <div
          class="cardsize1 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-lg-5"
        >
          <div class="col mb-4">
            <div class="card border-default hover- mb-3" style="">
              <div class="card-img">
                <img
                  src="../assets/home_herbal_product1-600x600.jpg"
                  class="card-img-top"
                  alt="Sed frignill tempus"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title1">Sed frignill tempus</h5>
                <h6 class="card-amount">$ 9.00</h6>
                <button type="button" class="button-shop">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card border-default hover- mb-3" style="">
              <div class="card-img">
                <img
                  src="../assets/home_herbal_product2-600x600.jpg"
                  class="card-img-top"
                  alt="Aliquam tempus"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title1">Aliquam tempus</h5>
                <h6 class="card-amount">$ 9.00</h6>
                <button type="button" class="button-shop">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card border-default hover- mb-3" style="">
              <div class="card-img">
                <img
                  src="../assets/home_herbal_product3.jpg"
                  class="card-img-top"
                  alt="Nullam imperdiet"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title1">Nullam imperdiet</h5>
                <h6 class="card-amount">$ 9.00</h6>
                <button type="button" class="button-shop">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavbarHeader from "../components/NavbarHeader.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Shop",
  components: {
    NavbarHeader,
    Footer,
  },
};
</script>

<style>
.button-shop {
  background-color: #c5cec5;
  color: #1c4e2a;
  margin-top: 20px;
  margin-left: 35px;
  height: 40px;
  width: 140px;
  border: none;
}
.button-shop:hover {
  background-color: #1c4e2a;
  color: white;
}
.ShopMain {
  background-color: #f9f9f9;
}
.jumbotron {
  background-color: #d2d8d2;
  margin-top: -16px;
}
.display-4 {
  font-family: Caudex;
  font-size: 60px;
  margin-top: 28px;
  margin-bottom: 28px;
  letter-spacing: 2px;
  color: #1c4e2a;
}

.card-title1 {
  color: #6a9075;
  font-family: Caudex;
  font-size: 25px;
}
.card-amount {
  color: #ff8c00;
  font-family: Caudex;
  font-size: 22px;
}

/* ---------Cards---------- */
.cardbox1 {
  margin: 20px 0px 20px 180px;
  border: none;
  display: flex;
  flex-wrap: wrap;
}
.cardsize1 {
  width: 1180px;
}
.card-img {
  padding: 20px 20px 25px 20px;
}
.header2 {
  display: flex;
  justify-content: space-between;
}
.h6 {
  margin-top: 30px;
  margin-left: 200px;
  font-size: 15px;
  color: #6b7a6b;
}
.drop {
  margin-right: 265px;
  margin-top: 25px;
  font-size: 15px;
  color: #c5cec5;
  background-color: #d2d8d2;
  border: solid 3px;
  width: 150px;
  height: 40px;
  text-align: left;
}
@media (max-width: 570px) {
  .header2 {
    display: flex;
    flex-wrap: wrap;
  }
  .h6 {
    margin-top: 30px;
    margin-left: 130px;
    font-size: 13px;
    color: #6b7a6b;
  }
  .drop {
    margin-left: 125px;
    margin-top: 0px;
    font-size: 15px;
    color: #c5cec5;
    background-color: #d2d8d2;
    border: solid 3px;
    width: 200px;
    height: 40px;
    text-align: left;
  }
  .cardbox1 {
    margin: 40px 0px 20px 40px;
  }
  .cardsize1 {
    width: 600px;
  }
  .card-img {
    padding: 20px 20px 25px 20px;
  }
  .header2 {
    display: flex;
    justify-content: space-between;
  }
  .card-title1 {
    margin-left: 200px;
    font-size: 20px;
  }
  .card-amount {
    margin-left: 200px;
    font-size: 20px;
  }
  .button-shop {
    font-size: 14px;
    margin-left: 266px;
    margin-top: 10px;
    height: 30px;
    width: 120px;
  }
  .button-shop:hover {
    background-color: #1c4e2a;
    color: white;
  }
}
</style>

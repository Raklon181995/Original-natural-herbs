<template>
  <div>
    <navbar-header></navbar-header>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Contact us</h1>
      </div>
    </div>
    <div class="dissimg">
      <img class=" " src="../assets/home_herbal_pic5.png" alt="contact us main banner img" />
    </div>
    <!--Header End-->
    <div class="main-1">
      <div>
        <img
          src="../assets/home_herbal_logo_small.png"
          class="card-img-main"
          alt="logo"
        />
        <h1 class="main1-header">Herbal</h1>
        <h5 class="main1-title">Original natural herbs</h5>
        <p class="main1-para">
          Suspendisse justo euismod venenatis convallis<br />
          aliquam blandit tempus vitage pede.<br /><br />
          <b
            >4th Floor plot No, Amba<br />
            Bhavan, B wing, 30, sion Cir<br />
            Sion, Mumbai.<br />
            400022.
          </b>
        </p>
      </div>
      <!-- first div end -->
      <div class="maphidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15085.86996849365!2d72.8637791!3d19.0431727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaac7b2a8db110f47!2sWohlig%20Transformations%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1630056952513!5m2!1sen!2sin"
          class="map"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <!-- Card contact -->
    <div class="maincard">
      <div class="card cardmain">
        <div class="card-body1">
          Contact us <span class="span">+91-98200 45678</span>
        </div>
      </div>
    </div>
    <!-- Form -->
    <div>
     
      <form @submit="login">
        <div class="form-row form-group col-md-9">
          <div class="col">
            <input
             
              type="text"
              class="form-control"
              placeholder="Your name * "
              v-model="name"
              onkeypress="return(event.charCode > 64 && event.charCode < 91)||(event.charCode > 96 && event.charCode < 123)"
            />
          </div>
          <div class="col">
            <input
              type="email"
              class="form-control "
              placeholder="Your e-mail *"
              v-model="email"
            />
          </div>
        </div>
         <p v-if="error.length">
        <ul class="errormsg">
          <!-- <li class="errormsglist" v-for="e in error" v-bind:key="e.id">
            {{e}}</li> -->
               <li class="errormsglist-1">User name is required
           </li>
            <li class="errormsglist-2">Emaid id is required
            </li>
        </ul>
      </p>
        <div class="form-row form-group col-md-9">
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Subject"
              v-model="subject"
          />
        </div>
        <div class="form-row form-group col-md-9">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Message"
            rows="8"
              v-model="message"
          ></textarea>
        </div>

        <div>
          <button type="submit" class="custbutton btn btn-md btn-block">
          Send a message
          </button>
        </div>
      </form>
    </div>

    <Footer />
  </div>
</template>

<script>
import NavbarHeader from "../components/NavbarHeader.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Faq",
  components: {
    NavbarHeader,
    Footer,
  },
  data() {
    return {
      error: [],
      name: null,
      email: null,
      subject: null,
      message: null,
    };
  },
  methods: {
    login(e) {
      
      if (this.name && this.email) {
        alert("Your details are submitted...");
      }
      this.error = [];
      if (!this.name) {
        this.error.push("User name is required");
      }
      if (!this.email) {
        this.error.push("Email id is required");
      }
      console.warn("hello");
      e.preventDefault();
      this.name=null;
      this.email=null;
      this.subject=null;
      this.message=null;
    },
  },
};
</script>

<style>
.span{
  color: #cc8c3d;
}
.errormsg{
  color: rgb(221, 89, 89);
}
.errormsglist{
  list-style: none;
}
.errormsglist-1{
  float: left;
    list-style: none;
    margin-left: 200px;
    margin-top: -15px;
    margin-bottom: 15px;
}
.errormsglist-2{
  float: right;
  list-style: none;
  margin-top: -15px;
  margin-right: 560px;
}


.main-1 {
  margin-top: 60px;
  display: flex;
}
.card-img-main {
  width: 12%;
  margin: 60px 350px 20px;
}
.main1-header {
  font-family: Caudex;
  font-size: 50px;
  letter-spacing: 2px;
  margin-top: -10px;
  margin-left: 4px;
  color: #1c4e2a;
}
.main1-title {
  color: #6b7a6b; /* #6B7A6B */
  font-family: Lato, Helvetica, sans-serif;
  letter-spacing: 4px;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 4px;
}
.main1-para {
  color: #6b7a6b; /* #6B7A6B */
  font-family: Lato, Helvetica, sans-serif;
  /* letter-spacing:4px; */
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 100px;
  margin-left: 4px;
}
.map {
  /* width="600"
          height="350" */
  width: 700px;
  margin-left: -200px;
  margin-bottom: 50px;
  height: 400px;
  border: 0;
}
.maincard {
  margin-left: 220px;
  margin-bottom: 80px;
}
.cardmain {
  width: 85%;
  height: 60%;
}
.card-body1 {
  text-align: center;
  color: #1c4e2a;
  font-size: 25px;
  padding: 50px;
}
.form-row {
  margin-left: 205px;
}
.custbutton {
  width: 73%;
  margin-left: 222px;
  margin-bottom: 50px;
  background-color: #cc8c3d;
  color: #fff;
}
.custbutton:hover {
   background-color: #a36519;
    color: #fff;
 
}

@media (max-width: 570px) {
  .main-1 {
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
  }
  .card-img-main {
    width: 20%;
    margin: 50px 150px 20px;
  }
  .main1-header {
    font-size: 30px;
  }
  .main1-title {
    letter-spacing: 2px;
    font-size: 14px;
    margin-top: 5px;
  }
  .main1-para {
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 100px;
    margin-left: 4px;
  }

  .map {
    width: 350px;
    margin-left: 12px;
    margin-top: -70px;
    margin-bottom: 40px;
    height: 400px;
    border: 0;
  }
  .maincard {
    margin-left: 13px;
    margin-bottom: 50px;
  }
  .cardmain {
    width: 96%;
  }
  .card-body1 {
    text-align: center;
    color: #1c4e2a;
    font-size: 20px;
    padding: 40px;
  }

  .form-row {
    margin-left: 0px;
  }
  .custbutton {
    width: 92%;
    margin-left: 16px;
    margin-bottom: 40px;
    background-color: #cc8c3d;
    color: #fff;
  }
  
  

.errormsglist-1{
  float: left;
    list-style: none;
    font-size: 13px;
    margin-left: -15px;
}
.errormsglist-2{
  float: right;
  list-style: none; 
  font-size: 13px;
  margin-right: 60px;
}
}
/* capital O 41373 */
</style>

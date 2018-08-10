<template>
  <div>
    <div class="hero-background">
      <div class="container">
        <div class="header-container header">
          <a class="navbar-brand logo" href=""> <img class="logo" src="src/assets/images/kerb-logo.png"/></a>
          <!-- <a href="#email-form">
            <button class="header-btn"> GET QUOTE!</button>
          </a> -->
            <div class="header-right">
                <a class="navbar-item" href="#team">Team Kerb™</a>
                <a class="navbar-item" href="#features">Our Features</a>
                <a class="navbar-item" href="tel:9515471470">(951) 547-1470</a>
            </div>
        </div>
          
        <div class="hero row">
          <div class="hero-right col-sm-6 col-sm-6">
            <h1 class="header-headline bold">
              On Time<br>
              Service or<br>
              Your Move is<br>
              Free!
            </h1>
            <!-- <a>
              <button v-scroll-to="{
                el: '#form',
                offset: -112
              }" v-if="!formVisible" @click="changeFormVisible" class="hero-btn"> Book Kerb™ </button>
            </a> -->
          </div>
          <div class="col-sm-6 col-sm-6 ipad">
            <img class="ipad-screen img-responsive" src="src/assets/images/screen.png"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking form -->
    <div id="form">
      <booking-form v-if="formVisible" :companyId="companyId"></booking-form>
    </div>
    <!-- End Booking form -->

    <!-- Kerb™ FEATURES -->
    <div id="features" class="features-section">
      <div class="features-container row">
        <h2 class="features-headline">Kerb™ FEATURES</h2>
        <div class="col-sm-4 feature">
          <div class="feature-icon ">
            <img class="feature-img" src="src/assets/images/icon-1.png">
          </div>
          <h5 class="feature-head-text "> TRUST CAM </h5>
          <p class="feature-subtext light "> Our trucks are equipped with live streaming cameras to always ensure quality and safety.</p>
        </div>

        <div class="col-sm-4 feature">
          <div class="feature-icon  ">
            <img class="feature-img" src="src/assets/images/icon-2.png">
          </div>
          <h5 class="feature-head-text  "> PACKING SUPPLIES </h5>
          <p class="feature-subtext light  "> Always included in our rate and delivered ahead of time for free!</p>
        </div>

        <div class="col-sm-4 feature">
          <div class="feature-icon  ">
            <img class="feature-img" src="src/assets/images/icon-3.png">
          </div>
          <h5 class="feature-head-text  "> INSURANCE </h5>
          <p class="feature-subtext light  "> A tricky topic in the moving industry, but not with Kerb™ we include Moving Insurance!</p>
        </div>
      </div> 
    </div>  

    <div class="logos-section">
      <h3 style="padding:30px 0;margin:0;">Kerb™ Moving - HQ = Trust 
        <span style="padding-left:200px;">Book Kerb™ = Welcome Home</span>
      </h3>
    </div>
    
    <div class="white-section row">
      <div class="imac col-sm-6">
        <img class="imac-screen img-responsive" src="src/assets/images/imac.png">
      </div>
      <div class="col-sm-6">
        <div class="white-section-text">
          <h2 class="imac-section-header">MOVING INSURANCE?</h2>
          <div class="imac-section-desc">
            <span>Kerb™ got it.</span>
          </div>
        </div>
      </div>
    </div>
    
    <div id="team" class="team">
      <h2 class="team-section-header text-center">TEAM Kerb™</h2>
      <div class="team-container row">
        <div class="col-sm-4 team-member">
          <img src="src/assets/images/cto.png">
          <div class="team-member-text">
            <h4 class="team-member-position light">CTO</h4>
            <h5 class="bold">Vitalii Bogdanov</h5>
          </div>
        </div>

        <div class="col-sm-4 team-member">
          <img src="src/assets/images/ceo.png">
          <div class="team-member-text">
            <h4 class="team-member-position light">CEO</h4>
            <h5 class="bold">Wes Deaurora</h5>
          </div>
        </div>

        <div class="col-sm-4 team-member">
          <img src="src/assets/images/coo.png">
          <div class="team-member-text">
            <h4 class="team-member-position light">COO</h4>
            <h5 class="bold">Dmitri Rabinovich</h5>
          </div>
        </div>
      </div>
    </div>
 
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-6 webscope">
            <span class="webscope-text"> © Kerb™ 2017. All rights reserved.<br> (951) 547-1470 | Kerb™ Moving #719 1826 Wild Turkey Cir, Corona, CA  92880. </span>
          </div>
          <div class="col-sm-4">
            <div class="social-links">
              <a href="https://www.yelp.com/biz/kerb-tarzana?osq=movers" target="_blank"> <i class="fa fa-yelp icon22"></i> </a>
              <a href="https://www.facebook.com/Kerbmoving/" target="_blank"> <i class="fa fa-facebook icon22"></i> </a>
              <a href="https://www.twitter.com/kerb_inc" target="_blank"> <i class="fa fa-twitter icon22"></i> </a>
              <a href="https://www.instagram.com/kerbinc/" target="_blank"> <i class="fa fa-instagram icon22"></i>  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import bookingForm from '../components/BookingForm.vue'

export default {
  data: () => ({
    formVisible: false,
    companyId: null
  }),

  methods: {
    changeFormVisible () {
      this.formVisible = !this.formVisible
    }
  },

  components: {
    bookingForm
  }
}
</script>

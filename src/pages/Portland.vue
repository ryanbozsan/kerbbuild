<template>
  <div>
    <div class="hero-background">
      <div class="container">
        <div class="header-container header">
          <a class="navbar-brand logo" href="#"> <img class="logo" src="src/assets/images/kerb-logo.png"/></a>
          <!-- <a href="#email-form">
            <button class="header-btn"> GET QUOTE!</button>
          </a> -->
          <div class="header-right">
            <a class="navbar-item" href="#features">Our Features</a>
            <a class="navbar-item" href="#team">Team Kerb™</a>
            <!-- <a class="navbar-item" href="#">Contact Us</a> -->
            

            <a class="navbar-item" style="cursor: pointer" v-scroll-to="{
                el: '#form',
                offset: -112
              }" v-if="!formVisible" @click="changeFormVisible">Book KERB Portland</a>
              

            <a class="navbar-item" href="tel:5035068776">(503)-506-8776</a>
          </div>
        </div>
          
        <div class="hero row">
          <div class="hero-right col-sm-6 col-sm-6">
            <h1 class="header-headline">
              On Time<br>
              Service or<br>
              Your Move is<br>
              Free!
            </h1>
            <a>
              <button v-scroll-to="{
                el: '#form',
                offset: -112
              }" v-if="!formVisible" @click="changeFormVisible" class="hero-btn"> Book Kerb™ </button>
            </a>
            <img class="seal-img" v-if="!formVisible" src="src/assets/images/secure-seal.png"/>

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
        
        <div class="col-sm-3 feature">
          <div class="feature-icon ">
            <img class="feature-img" src="src/assets/images/icon-1.png">
          </div>
          <h5 class="feature-head-text "> TRUST CAM </h5>
          <p class="feature-subtext light "> All Our Trucks Are Equipped With 4 Live Streaming Cameras To Always Ensure Quality And Safety</p>
        </div>

        <div class="col-sm-3 feature">
          <div class="feature-icon  ">
            <img class="feature-img" src="src/assets/images/icon-box.png">
          </div>
          <h5 class="feature-head-text  "> PACKING SUPPLIES </h5>
          <p class="feature-subtext light  "> Packing Supplies Always Included In Our Rate And Delivered Ahead Of Time For Free!</p>
        </div>

        <div class="col-sm-3 feature">
          <div class="feature-icon  ">
            <img class="feature-img" src="src/assets/images/icon-3.png">
          </div>
          <h5 class="feature-head-text  "> INSURANCE </h5>
          <p class="feature-subtext light  "> A Tricky Topic In The Moving Industry, But Not With Kerb™ We Include Moving Insurance!</p>
        </div>

        <div class="col-sm-3 feature">
          <div class="feature-icon  ">
            <img class="feature-img" src="src/assets/images/icon-movers.png">
          </div>
          <h5 class="feature-head-text  "> VETTED MOVERS </h5>
          <p class="feature-subtext light  "> All of Our Employees Undergo A Thorough Background Check and Drug Screening Process.</p>
        </div>

            <!--  <a>
              <button v-scroll-to="{
                el: '#form',
                offset: -112
              }" v-if="!formVisible" @click="changeFormVisible" class="hero-btn"> Book Kerb™ </button>
            </a>
            <img class="seal-img" v-if="!formVisible" src="src/assets/images/secure-seal.png"/>
 -->
      </div> 
    </div>  

    <div class="logos-section">
      <h3 style="padding:30px 0;margin:0;">Kerb™ = Trust 
        <span style="padding-left:200px;">Book Kerb™ = Welcome Home</span>
      </h3>
    </div>
    
  <!-- MOVING INSURANCE -->

    <div class="white-section row">
      <div class="imac col-sm-6">
        <img class="imac-screen img-responsive" src="src/assets/images/imac.png">
        <div class="text-center">
          <h3 style="margin-top:-40px;">Hire Kerb™ = Rest Assured. </h3>
          <a><button v-scroll-to="{
              el: '#form',
              offset: -112
            }" v-if="!formVisible" @click="changeFormVisible" class="hero-blk-btn"> Book Kerb™ </button></a>
          <img class="seal-img" v-if="!formVisible" src="src/assets/images/secure-seal.png"/>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="white-section-text">
          <h2 class="imac-section-header">MOVING INSURANCE?<br><br>Kerb™ got it</h2>

          <div class="imac-section-desc">
              
              <p>When hiring Kerb™ rest assured you are in good hands. 
              <p>We use fresh and modern techniques in all aspects of your move to circumvent and mitigate damage or loss.
              <p>Sounds good? Well now the important stuff. 
              <p>Plain and simple: if something goes wrong, we at Kerb™ will make it right. 
              <p>We call that "Kerb™ assurance" which in our mind is most valuable attribute you could want when hiring a company. </p>


          </div>
        </div>
      </div>
    </div>

  
  <!-- TEAM Kerb™ -->

    <div id="team" class="team">
      <h2 class="team-section-header text-center">TEAM Kerb™</h2>
      <div class="team-container row">
        <div class="col-sm-4 team-member">
          <img src="src/assets/images/cto.png">
          <div class="team-member-text">
            <h4 class="team-member-position light">CTO</h4>
            <h5 class="bold">Vitalii Bogdanov</h5>
            <ul class="social-block">
                <!-- <li><a href="#"><i class="fa fa-facebook"></i></a></li> -->

                <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>

                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4 team-member">
          <img src="src/assets/images/ceo.png">
          <div class="team-member-text">
            <h4 class="team-member-position light">CEO</h4>
            <h5 class="bold">Wes Deaurora</h5>
            <ul class="social-block">
                <!-- <li><a href="#"><i class="fa fa-facebook"></i></a></li> -->

                <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>

                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4 team-member">
          <img src="src/assets/images/coo.png">
          <div class="team-member-text">
            <h4 class="team-member-position light">COO</h4>
            <h5 class="bold">Dmitri Rabinovich</h5>
            <ul class="social-block">
                <!-- <li><a href="#"><i class="fa fa-facebook"></i></a></li> -->

                <li><a href="#"><i class="fa fa-twitter"></i></a></li>

                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>

                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>            
      </div>
    </div>
 


 <!-- Footer -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="text-center">
            <!-- <a class="navbar-item" href="#team">Team Kerb™</a> -->
            <!-- <a class="navbar-item" href="#features">Our Features</a> -->
            <a class="navbar-item" href="https://www.indeedjobs.com/kerb-moving/_hl/en_US" target="_blank">Careers</a>
            
            
            <router-link class="navbar-item" to="/Privacy-policy" target="_blank">Privacy Policy</router-link>
  
            <br><br>
            
               <div class="col-sm-12">
                  <a class="navbar-item" href="tel:5035068776">(503)-506-8776</a>
                  <span class="feature-subtext light"> 5317 NE 105th Ave, Portland, OR 97220 </span> 
                  <br><br>
                    <a href="https://www.yelp.com/biz/kerb-tarzana?osq=movers" target="_blank"> <i class="fa fa-yelp icon22"></i> </a>
                    <a href="https://www.facebook.com/Kerbmoving/" target="_blank"> <i class="fa fa-facebook icon22"></i> </a>
                    <a href="https://www.twitter.com/kerb_inc" target="_blank"> <i class="fa fa-twitter icon22"></i> </a>
                    <a href="https://www.instagram.com/kerbmoving/" target="_blank"> <i class="fa fa-instagram icon22"></i>  </a>
                    <a href="https://www.linkedin.com/company/18461025/" target="_blank"> <i class="fa fa-linkedin-square icon22"></i>  </a>
                  
                </div>

          </div>
        </div>

        <div class="row">          
          <div class="col-sm-12 webscope">
            <br>
            <span class="feature-subtext light">- License# 0191684- </span><br>
            <span class="feature-subtext light">© 2018 Kerb™ Moving. All rights reserved.</span> 
            <!-- <a href="/privacy-policy.html" target="_blank"> Privacy Policy</a> -->
            <!-- <router-link class="navbar-item" to="/Privacy-policy" target="_blank">Privacy Policy</router-link> -->
  
          </div>          
        </div>

      </div>
    </div>    <!-- FOOTER -->

  </div>
</template>

<script>

import bookingForm from '../components/BookingForm.vue'

export default {
  data: () => ({
    formVisible: false,
    companyId: 883
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

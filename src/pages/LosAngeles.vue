<template>
  <div>
    <div class="hero-background">
      <div class="container">
        <div class="header-container header">
          <a class="navbar-brand logo" href="#"> 
              <img class="logo" src="src/assets/images/kerb-logo.png"/>
            <!-- <b-btn v-b-tooltip.hover title="How do we know that we are America’s Most Trusted Movers? 
            While this is a self-proclaimed statement, we had research conducted and believe it to be an accurate statement and representation of our company. 
            The independent research considered crew background checks, in-truck CCTV cameras, and our commitment to resolving claims and complaints in a swift manner. 
            Thus, you can rest assured that we are in fact America’s Most Trusted Movers">
              <img class="logo" src="src/assets/images/kerb-logo.png"/>
            </b-btn> -->
          </a>
          
          <div class="header-right">
            <a class="navbar-item" href="#features">Our Features</a>
            <a class="navbar-item" href="#team">Team Kerb™</a>
            <!-- <a class="navbar-item" href="#">Contact Us</a> -->
            <a class="navbar-item" href="#insurance">Insurance</a>
            <a class="navbar-item" href="#storage">Storage</a>
            <a class="navbar-item" href="#locations">Locations</a>

            <a class="navbar-item" style="cursor: pointer" v-scroll-to="{
                el: '#form',
                offset: -112
              }" v-if="!formVisible" @click="changeFormVisible">Book KERB</a>
              

            <a class="navbar-item" href="tel:8777075372">(877) 707-5372</a>
          </div>
        </div>
          
        <div class="hero row">
          <div class="hero-right col-sm-6 col-sm-6">
            <h1 class="header-headline">
              - On Time<br>
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
          <p class="feature-subtext light  "> A Tricky Topic In The Moving Industry, But Not With Kerb™ We Include "Kerb Cover"</p>
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



<!-- MOVING INSURANCE -->

 <div id="insurance" class="insurance">
    <div class="logos-section">
      <h3 style="padding:30px 0;margin:0;">Kerb™ = Trust 
        <!-- <span style="padding-left:200px;">Book Kerb™ = Welcome Home</span> -->
      </h3>
    </div>
    

    <div class="white-section row">
      <div class="imac col-sm-6">
        <img class="imac-screen img-responsive" src="src/assets/images/kerb-insurance-1.jpg">
        <div class="text-center">
          <h3 style="margin-top:-40px;">Hire Kerb™ = Rest Assured. </h3>
          <a><button v-scroll-to="{
              el: '#form',
              offset: -112
            }" v-if="!formVisible" @click="changeFormVisible" class="hero-blk-btn"> Book Kerb™ </button></a>
          <!-- <img class="seal-img" v-if="!formVisible" src="src/assets/images/secure-seal.png"/> -->
        </div>
      </div>
      <div class="col-sm-6">
        <div class="white-section-text">
          <h2 class="imac-section-header">MOVING INSURANCE?<br><br>We call it "Kerb Cover"</h2>

          <div class="imac-section-desc">
              
              <p>By law, licensed moving companies have limited accountability for contents damaged; with the Maximum liability being at a whopping 0.60 cents per pound of damaged weight.  
              <p>However, with "Kerb Cover"  we will restore items to their original condition, in the rare event of any content or structural damage claim. Furthermore, if an item is damaged beyond repair, we will replace it like-for-like or offer a financial settlement.
              <br><p><b>"Kerb Cover" Exceptions:</b>
              <p>Please note that items of extreme value, such as cash, jewelry, personal documents, antiques or items of sentimental value are not covered. Arrangements to transport these items separately are required to be put in place by the customer. 

              <p>If you would like coverage for these types of items we recommend purchasing a 3rd party insurance policy : Example <a target="_blank" href="http://www.emoveinsurance.com">www.emoveinsurance.com</a> </p>


          </div>
        </div>
      </div>
    </div>
  </div>
  
<!-- Kerb™ STORAGE -->
<div id="storage" class="storage">
    <div class="logos-section">
      <h3 style="padding:30px 0;margin:0;">Kerb™ STORAGE 
        <!-- <span style="padding-left:200px;">Book Kerb™ = Welcome Home</span> -->
      </h3>
    </div>

    <div class="white-section row">
      
      <div class="col-sm-6">
        <div class="white-section-text">
          <h2 class="imac-section-header">STORAGE OPTIONS:</h2>

          <div class="imac-section-desc">
              
              <p>At Kerb™ we offer highly-competitive storage options to our valued customers.
                If you choose to transfer from a competitor’s storage facility to our facility, 
                we will move your consignment from their location to ours for no added charge (Within 50 miles).

              <p>Kerb™ storage rates are calculated by volume.
                We will pack your items, load our truck, measure the volume and charge only $0.25 per cubic foot per month. This means, no more paying for excess space you don't use. 


              <br><p><b>For example:</b> 10X10 worth of space with us would run $200 monthly. Whereas, an average 10X10 Self storage unit goes for $220-$300 Monthly. 
              <p>Also, we offer free deals depending on the duration that you store with us. Example is you store with us for 12 months or more your first 3 months will be free. 

              <p>An added bonus, you can retrieve individual items at any time, free of charge, by visiting our facility. Alternatively, for those who do not have the time to visit our facility, we can re-deliver single items starting at just $20 per item. </p>
              <div class="text-center"><p><b>With all these perks, why wouldn’t you store with us?</b></p></div>


          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <img class="imac-screen img-responsive" src="src/assets/images/storage-bw.jpg">
        <div class="text-center">
          <h3 style="margin-top:-40px;">Get Kerb™ Storage </h3>
          <a><button v-scroll-to="{
              el: '#form',
              offset: -112
            }" v-if="!formVisible" @click="changeFormVisible" class="hero-blk-btn"> Book Kerb™ </button></a>
          <!-- <img class="seal-img" v-if="!formVisible" src="src/assets/images/secure-seal.png"/> -->
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
 
 <div class="container">
        <img class="imac-screen img-responsive" src="src/assets/images/kerb-trucks-Mar20-wbgr.jpg">
  </div>

<!-- Kerb™ LOCATIONs -->

    <div id="locations" class="features-section">
      <div class="features-container row">
        <h2 class="features-headline">Kerb™ Locations</h2>
        
        <div class="col-sm-3 feature">
          <div class="">
            <img class="img-responsive" src="src/assets/images/gardena-kerb.jpg">
          </div>
          <h5 class="feature-head-text "> Gardena, CA </h5>
          <p class="feature-subtext light "> 367 E Alondra Blvd, Gardena, CA 90248</p>
        </div>
        
        <div class="col-sm-3 feature">
          <div class="">
            <img class="img-responsive" src="src/assets/images/corona-kerb.jpg">
          </div>
          <h5 class="feature-head-text  "> Corona, CA </h5>
          <p class="feature-subtext light  "> 1826 Wild Turkey Cir, Corona, CA 92880</p>
        </div>

        <div class="col-sm-3 feature">
          <div class="">
            <img class="img-responsive" src="src/assets/images/portland-kerb.jpg">
          </div>
          <h5 class="feature-head-text  "> Portland, OR </h5>
          <p class="feature-subtext light  "> 5317 NE 105th Ave, Portland, OR 97220</p>
        </div>

        <div class="col-sm-3 feature">
          <div class="">
            <img class="img-responsive" src="src/assets/images/pittsburgh-kerb.jpg">
          </div>
          <h5 class="feature-head-text  "> Pittsburgh, PA </h5>
          <p class="feature-subtext light  "> 2 South 6th, Pittsburgh, PA, 15203</p>
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


 <!-- Footer -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="text-center">
            <!-- <a class="navbar-item" href="#team">Team Kerb™</a> -->
            <!-- <a class="navbar-item" href="#features">Our Features</a> -->
            <a class="navbar-item" href="https://www.indeedjobs.com/kerb-moving/_hl/en_US" target="_blank">Careers</a>
            
            <router-link class="navbar-item1" to="/Privacy-policy" target="_blank">Privacy Policy</router-link>
  
            <br><br>
            
               <div class="col-sm-12">
                  <a class="navbar-item" href="tel:8777075372">(877) 707-5372 </a><br>
                  <span class="feature-subtext light"> HQ 18580 Ventura Blvd, Tarzana CA 91356 </span> 
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
            <a href="https://www.bbb.org/losangelessiliconvalley/business-reviews/moving-and-storage-companies/kerb-in-tarzana-ca-870623" target="_blank"><img class="bbb-img" src="src/assets/images/bbb_logo.png"></a>
            <a href="https://www.authorize.net" target="_blank"><img class="seal-img"  src="src/assets/images/authorize_net_70.png"/></a>

            <br><br>
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

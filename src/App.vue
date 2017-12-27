<template>
  <div id="app">
    <div class="hero-background">
      <div class="container">
        <div class="header-container header">
          <a class="navbar-brand logo" href="index.html"> <img class="logo" src="src/assets/images/kerb-logo.png"/></a>
          <!-- <a href="#email-form">
            <button class="header-btn"> GET QUOTE!</button>
          </a> -->
          <div class="header-right">
            <a class="navbar-item" href="#team">Team Kerb™</a>
            <a class="navbar-item" href="#features">Our Features</a>
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
            <a>
              <button v-if="!formVisible" @click="changeFormVisible" class="hero-btn"> Book Kerb™ </button>
            </a>
          </div>
          <div class="col-sm-6 col-sm-6 ipad">
            <img class="ipad-screen img-responsive" src="src/assets/images/screen.png"/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="formVisible" class="formbg row">
      <h2 class="features-headline text-center" style="padding-bottom: 20px;">Book Kerb™</h2>
      <form action="#" class="col-sm-12 col-md-8 col-md-offset-2">
        <div v-if="formStep == 1" class="col-sm-12 col-md-6 col-md-offset-3">
          <div class="col-sm-12"><h2>Step #1</h2></div>
          <div class="col-sm-12 col-md-12">
            <div class="row">
              <div class="col-sm-9 col-md-9">
                <label>Starting Address</label>
                <vue-google-autocomplete id="pickUp" name="pick up" classname="book-form" placeholder="Enter your Pickup Address" 
                  v-on:placechanged="setPickUp" v-on:keypress="keypressPickUp"></vue-google-autocomplete>
              </div>
              <div class="col-sm-3 col-md-3">
                <label style="height: 20px"><a @click="addAdtPickUp" v-if="!adtPickUp" style="cursor: pointer">more?</a></label>
                <input v-model="form.pickUp.apt" class="book-form" placeholder="Apt/Suit">
              </div>
            </div>
            <div v-if="adtPickUp" class="row">
              <div class="col-sm-9 col-md-9">
                <label>Additional Pickup Address</label>
                <vue-google-autocomplete id="adtPickUp" classname="book-form" placeholder="Place here your additional pickup address here" 
                  v-on:placechanged="setAdtPickUp" v-on:keypress="keypressAdtPickUp"></vue-google-autocomplete>
              </div>
              <div class="col-sm-3 col-md-3">
                <label style="height: 20px"><a @click="removeAdtPickUp" style="cursor: pointer">remove?</a></label>
                <input v-model="form.adtPickUp.apt" class="book-form" placeholder="Apt/Suit">
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12">
            <div v-if="adtDropOff" class="row">
              <div class="col-sm-9 col-md-9">
                <label>Additional Dropoff Address</label>
                <vue-google-autocomplete id="adtDropOff" classname="book-form" placeholder="Place here your additional dropoff address here" 
                  v-on:placechanged="setAdtDropOff" v-on:keypress="keypressAdtDropOff"></vue-google-autocomplete>
              </div>
              <div class="col-sm-3 col-md-3">
                <label style="height: 20px"><a @click="removeAdtDropOff" style="cursor: pointer">remove?</a></label>
                <input v-model="form.adtDropOff.apt" class="book-form" placeholder="Apt/Suit">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-9 col-md-9">
                <label>Ending Address</label>
                <vue-google-autocomplete id="dropOff" classname="book-form" placeholder="Enter your Dropoff Address" 
                  v-on:placechanged="setDropOff" v-on:keypress="keypressDropOff"></vue-google-autocomplete>
              </div>
              <div class="col-sm-3 col-md-3">
                <label style="height: 20px"><a @click="addAdtDropOff" v-if="!adtDropOff" style="cursor: pointer">more?</a></label>
                <input v-model="form.dropOff.apt" class="book-form" placeholder="Apt/Suit">
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <label>The Big Day</label>
            <flat-pickr name="date" v-model="form.date" :config="datepicker_config" input-class="book-form" placeholder="Moving Date"></flat-pickr>
          </div>
          <div class="col-sm-12 col-md-6">
            <label>Move Details</label>
            <select v-model="form.moveSize" class="book-form" v-validate="'required'">
              <option value="">Enter # of Rooms</option>
              <option value="1">Studio</option>
              <option value="2">1 Bedroom</option>
              <option value="5">2 Bedrooms</option>
              <option value="8">3 Bedrooms</option>
              <option value="10">4 Bedrooms</option>
              <option value="11">4+ Bedrooms</option>
              <option value="3">Small Office</option>
              <option value="6">Medium Office</option>
              <option value="12">Large Office</option>
              <option value="4">Small storage (5x5, 5x8, 5x10)</option>
              <option value="7">Medium storage (10x10, 10x15)</option>
              <option value="9">Large storage (10x20)</option>
            </select>
          </div>
          <div class="col-sm-12 col-md-8 text-center date-val">
            {{ validationMessage }}
            <!-- <img src="src/assets/images/up-arrow.png" alt="Kerb™"> Selected date is not available. -->
          </div>
          <div class="col-sm-12 col-md-4 text-right">
            <button @click="getAvailability" type="button" class="book-next">next step ></button>
          </div>
        </div>
      
        <div v-if="formStep == 2" class="col-sm-12 col-md-6 col-md-offset-3">
          <div class="col-sm-12"><h2>Step #2</h2></div>
          <div class="col-sm-12">
            <label># of Men</label>
            <div class="men-buttons row">
              <a v-for="(price, movers) in availability.prices" :key="movers" :class="{ 'dis-but': parseInt(availability.movers.am_left) < movers || parseInt(availability.movers.pm_left) < movers }">
                <div class="col-sm-12 col-md-4 text-center">
                  <div class="mbutton">
                    <h2><i class="fa fa-user-o"></i>{{ movers }}<span>movers</span></h2>
                    <h3><span>$</span>{{ price }}<span>/hr</span></h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-12">
            <label>Moving Van</label>
            <select name="moving-van" class="book-form">
              <option value="">Please select</option>
              <option value="1">1 - Moving Van</option>
              <option value="2">2 - Moving Van</option>
              <option value="3">3 - Moving Van</option>     
            </select>
          </div>
          <div class="col-sm-12">
            <label>$ Total</label>
            <input id="total" name="total" class="book-form2" value="$265" readonly>
          </div>
          <div class="col-sm-12 col-md-6 text-left">
            <!-- <button @click="changeStep(1)" type="button" class="book-next">< prev step</button> -->
          </div>
          <div class="col-sm-12 col-md-6 text-right">
            <button type="button" class="book-next">next step ></button>
          </div>
        </div>
      
        <div v-if="formStep == 3" class="col-sm-12 col-md-6 col-md-offset-3">
          <div class="col-sm-12"><h2>Step #3</h2></div>
          <div class="col-sm-12 col-md-6">
            <label>First Name</label>
            <input name="first-name" class="book-form" type="text" placeholder="I'm Kerb">
          </div>
          <div class="col-sm-12 col-md-6">
            <label>Last Name</label>
            <input name="last-name" class="book-form" type="text" placeholder="Pleased to meet you">
          </div>
          <div class="col-sm-12 col-md-6">
            <label>Email</label>
            <input name="user-email" class="book-form" type="email" placeholder="For a Kerb confirmation">
          </div>
          <div class="col-sm-12 col-md-6">
            <label>Phone Number</label>
            <input name="user-phone" class="book-form" type="text" placeholder="For Kerb alerts">
          </div>
          <div class="col-sm-12">
            <label>Notes</label>
            <textarea name="notes" class="book-form3" type="text" placeholder="To better assist you"></textarea>
          </div>
          <div class="col-sm-12 col-md-6 text-left">
            <input type="submit" class="book-next" id="hide2" value="< prev step">
          </div>
          <div class="col-sm-12 col-md-6 text-right">
            <input class="book-next" type="submit" value="Pay">
          </div>
        </div>
      </form>
    </div>

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

    <!-- <div class="blue-section">
      <h2 class="features-headline" style="padding-bottom: 20px;">Book Kerb™</h2>
      <form @submit.prevent="getQuote" class="moving-form" style="z-index: 1;">
        <div class="row">
          <div class="col-sm-12 col-md-4 col-md-offset-4">
            <div v-show="errors.has('zip from')" style="margin-bottom: 10px;">{{ errors.first('zip from') }}</div>
            <div v-show="errors.has('zip to')" style="margin-bottom: 10px;">{{ errors.first('zip to') }}</div>
          </div>
          <div class="col-sm-12 col-md-4 col-md-offset-4">
            <div class="col-md-6">
              <input name="zip from" v-model="quoteForm.zipFrom" class="form-name" placeholder="Zip From" v-validate="'required|digits:5'">
            </div>
            <div class="col-md-6">
              <input name="zip to" v-model="quoteForm.zipTo" class="form-name" placeholder="Zip To" v-validate="'required|digits:5'">
            </div>
            <div class="col-md-6">
              <select v-model="quoteForm.moveSize" class="form-name">
                <option value="">Move Size</option>
                <option value="1">Studio</option>
                <option value="2">1 Bedroom</option>
                <option value="5">2 Bedrooms</option>
                <option value="8">3 Bedrooms</option>
                <option value="10">4 Bedrooms</option>
                <option value="11">4+ Bedrooms</option>
                <option value="3">Small Office</option>
                <option value="6">Medium Office</option>
                <option value="12">Large Office</option>
                <option value="4">Small storage (5x5, 5x8, 5x10)</option>
                <option value="7">Medium storage (10x10, 10x15)</option>
                <option value="9">Large storage (10x20)</option>
              </select>
            </div>
            <div class="col-md-6">
              <flat-pickr v-model="quoteForm.date" :config="datepicker_config" input-class="form-name" placeholder="Moving Date"></flat-pickr>
            </div>
            <div class="col-md-6">
              <input v-model="quoteForm.firstName" class="form-name" placeholder="First Name">
            </div>
            <div class="col-md-6">
              <input v-model="quoteForm.lastName" class="form-name" placeholder="Last Name">
            </div>
            <div class="col-md-6">
              <input v-model="quoteForm.phone" class="form-name" placeholder="Phone">
            </div>
            <div class="col-md-6">
              <input v-model="quoteForm.email" class="form-name" placeholder="Email">
            </div>
            <div class="col-md-12">
              <input class="send-form" type="submit" value="Submit">
            </div>
          </div>
        </div>
      </form>
    </div> -->
 
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-6 webscope">
            <span class="webscope-text"> © Kerb™ Moving - HQ 2017. All rights reserved.  HQ 18580 Ventura Blvd, Tarzana CA 91356. </span>   
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

import VueGoogleAutocomplete from 'vue-google-autocomplete'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
  data: () => ({
    form: {
      pickUp: {
        full: '',
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      adtPickUp: {
        full: '',
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      dropOff: {
        full: '',
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      adtDropOff: {
        full: '',
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      moveSize: '',
      date: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    },
    formVisible: false,
    formStep: null,
    availability: null,
    adtPickUp: false,
    adtDropOff: false,
    validationMessage: '',
    datepicker_config: {
      minDate: 'today',
      altInput: true,
      altFormat: 'm/d/Y'
    }
  }),

  methods: {
    setPickUp (addressData, placeResultData, id) {
      this.form.pickUp.address = addressData.street_number + ' ' + addressData.route
      this.form.pickUp.city = addressData.locality
      this.form.pickUp.state = addressData.administrative_area_level_1
      this.form.pickUp.zip = addressData.postal_code
    },

    keypressPickUp () {
      this.form.pickUp.address = ''
      this.form.pickUp.city = ''
      this.form.pickUp.state = ''
      this.form.pickUp.zip = ''
    },

    setAdtPickUp (addressData, placeResultData, id) {
      this.form.adtPickUp.address = addressData.street_number + ' ' + addressData.route
      this.form.adtPickUp.city = addressData.locality
      this.form.adtPickUp.state = addressData.administrative_area_level_1
      this.form.adtPickUp.zip = addressData.postal_code
    },

    keypressAdtPickUp () {
      this.form.adtPickUp.address = ''
      this.form.adtPickUp.city = ''
      this.form.adtPickUp.state = ''
      this.form.adtPickUp.zip = ''
    },

    setAdtDropOff (addressData, placeResultData, id) {
      this.form.adtDropOff.address = addressData.street_number + ' ' + addressData.route
      this.form.adtDropOff.city = addressData.locality
      this.form.adtDropOff.state = addressData.administrative_area_level_1
      this.form.adtDropOff.zip = addressData.postal_code
    },

    keypressAdtDropOff () {
      this.form.adtDropOff.address = ''
      this.form.adtDropOff.city = ''
      this.form.adtDropOff.state = ''
      this.form.adtDropOff.zip = ''
    },

    setDropOff (addressData, placeResultData, id) {
      this.form.dropOff.address = addressData.street_number + ' ' + addressData.route
      this.form.dropOff.city = addressData.locality
      this.form.dropOff.state = addressData.administrative_area_level_1
      this.form.dropOff.zip = addressData.postal_code
    },

    keypressDropOff () {
      this.form.dropOff.address = ''
      this.form.dropOff.city = ''
      this.form.dropOff.state = ''
      this.form.dropOff.zip = ''
    },

    changeFormVisible () {
      this.formVisible = !this.formVisible
      this.formStep = 1
    },

    addAdtPickUp () {
      this.adtPickUp = true
    },

    removeAdtPickUp () {
      this.adtPickUp = false
      this.form.adtPickUp.address = ''
      this.form.adtPickUp.apt = ''
      this.form.adtPickUp.city = ''
      this.form.adtPickUp.state = ''
      this.form.adtPickUp.zip = ''
    },

    addAdtDropOff () {
      this.adtDropOff = true
    },

    removeAdtDropOff () {
      this.adtDropOff = false
      this.form.adtDropOff.address = ''
      this.form.adtDropOff.apt = ''
      this.form.adtDropOff.city = ''
      this.form.adtDropOff.state = ''
      this.form.adtDropOff.zip = ''
    },

    getAvailability () {
      let vm = this
      if (vm.form.pickUp.zip === undefined || !vm.form.pickUp.zip.length) {
        vm.validationMessage = 'Please select correct pick up address'
        return
      }
      if (vm.adtPickUp && (vm.form.adtPickUp.zip === undefined || !vm.form.adtPickUp.zip.length)) {
        vm.validationMessage = 'Please select correct additional pick up address'
        return
      }
      if (vm.adtDropOff && (vm.form.adtDropOff.zip === undefined || !vm.form.adtDropOff.zip.length)) {
        vm.validationMessage = 'Please select correct additional drop off address'
        return
      }
      if (vm.form.dropOff.zip === undefined || !vm.form.dropOff.zip.length) {
        vm.validationMessage = 'Please select correct drop off address'
        return
      }
      if (!vm.form.date.length) {
        vm.validationMessage = 'Please select date of the move'
        return
      }
      if (!vm.form.moveSize.length) {
        vm.validationMessage = 'Please select size of the move'
        return
      }
      vm.validationMessage = ''
      vm.axios.post('https://admin.movingreservation.com/kerb/get-availability', {
        zipFrom: vm.form.pickUp.zip,
        zipTo: vm.form.dropOff.zip,
        date: vm.form.date,
        moveSize: vm.form.moveSize
      }).then(function (response) {
        if (response.data) {
          if (response.data.out_of_service === 1) {
            vm.validationMessage = 'We don\'t serve this area.'
          } else {
            vm.availability = response.data
            vm.formStep = 2
          }
        }
      })
    },

    changeStep (step) {
      this.formStep = step
    }
  },

  components: {
    flatPickr,
    VueGoogleAutocomplete
  }
}
</script>

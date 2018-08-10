<template>
    <div class="formbg row">
        <h2 class="features-headline text-center" style="padding-bottom: 10px;">Book Kerb™ In 3 Easy Steps</h2>
        <p class="features-headline text-center" style="padding-bottom: 20px;"> (Please fill out all the fields)</p>
        <form action="#" class="col-sm-12 col-md-8 col-md-offset-2">
            <div v-if="formStep == 1" class="col-sm-12 col-md-6 col-md-offset-3">
            <div class="row">
                <div class="col-sm-12" style="margin-bottom: 15px;"><h2>Step #1 </h2></div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                <label>Select location</label>
                <select v-model="form.companyId" class="book-form" :disabled="companyId ? true : false">
                    <option value="">Select Location</option>
                    <option value="859">Los Angeles</option>
                    <option value="884">Corona</option>
                    <option value="861">San Francisco</option>
                    <option value="870">Pittsburgh</option>
                    <option value="883">Portland</option>
                </select>
                </div>
                <div class="col-sm-12 col-md-6">
                <label>Phone number</label>
                <input v-model="form.phone" class="book-form" placeholder="Phone number">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                <label>Starting zip</label>
                <input v-model="form.pickUp.zip" class="book-form" placeholder="Pick up zip code">
                </div>
                <div class="col-sm-12 col-md-6">
                <label>Ending zip</label>
                <input v-model="form.dropOff.zip" class="book-form" placeholder="Drop off zip code">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                <label>The Big Day</label>
                <flat-pickr v-model="form.date" :config="datepicker_config" input-class="book-form" placeholder="Moving Date"></flat-pickr>
                </div>
                <div class="col-sm-12 col-md-6">
                <label>Move Details</label>
                <select v-model="form.moveSize" class="book-form">
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
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-8 text-center date-val">
                {{ validationMessage }}
                </div>
                <div class="col-sm-12 col-md-4 text-right">
                <button @click="getAvailability" type="button" class="book-next">Next step ></button>
                </div>
            </div>
            </div>
        
            <div v-if="formStep == 2" class="col-sm-12 col-md-6 col-md-offset-3">
            <div class="col-sm-12" style="margin-bottom: 15px;"><h2>Step #2</h2></div>
            <div class="col-sm-12">
                <label>Select number of Men</label>
                <div class="men-buttons row">
                <a v-for="(price, movers) in availability.prices" :key="movers" 
                    @click="selectPrice(movers, price)" 
                    :class="{ 'dis-but': availability.movers_left < movers }">
                    <div class="col-sm-12 col-md-4 text-center">
                    <div class="mbutton">
                        <h2><i class="fa fa-user-o"></i>{{ movers }}<span>movers</span><span></span></h2>
                        <h3><span>$</span>{{ price }}<span>/hr</span></h3>
                    </div>
                    <p style="color: white" v-if="(availability.movers_left < movers) || availability.trucks_left < 1">
                        Sorry, but this option is not available.
                    </p>
                    </div>
                </a>
                </div>
            </div>
            </div>
        
            <div v-if="formStep == 3" class="col-sm-12 col-md-6 col-md-offset-3">
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12"><h2>Step #3</h2></div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12 col-md-6">
                  <label>First Name</label>
                  <input name="first name" v-model="form.firstName" style="margin-bottom: 5px;" class="book-form" type="text" v-validate="'required'" placeholder="First Name">
                  <span v-show="errors.has('first name')">{{ errors.first('first name') }}</span>
                </div>
                <div class="col-sm-12 col-md-6">
                  <label>Last Name</label>
                  <input name="last name" v-model="form.lastName" style="margin-bottom: 5px;" class="book-form" type="text" v-validate="'required'" placeholder="Last Name">
                  <span v-show="errors.has('last name')">{{ errors.first('last name') }}</span>
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12 col-md-6">
                  <label>Email</label>
                  <input name="email" v-model="form.email" style="margin-bottom: 5px;" class="book-form" type="email" v-validate="'required|email'" placeholder="Email">
                  <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
                </div>
                <div class="col-sm-12 col-md-6">
                  <label>Phone Number</label>
                  <input name="phone" v-model="form.phone" style="margin-bottom: 5px;" class="book-form" type="text" v-validate="'required|digits:10'" disabled placeholder="Phone">
                  <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12">
                  <label>Notes</label>
                  <textarea v-model="form.notes" class="book-form3" type="text" placeholder="Notes"></textarea>
                </div>
            </div>

            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12">
                  <h2>Pick up address</h2>
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-8 col-md-9">
                  <label>Street address</label>
                  <input name="pick up address" v-model="form.pickUp.address" class="book-form" style="margin-bottom: 5px;" v-validate="'required'" placeholder="Street address">
                  <span v-show="errors.has('pick up address')">{{ errors.first('pick up address') }}</span>
                </div>
                <div class="col-sm-4 col-md-3">
                  <label>Apt/Suit</label>
                  <input v-model="form.pickUp.apt" class="book-form" style="margin-bottom: 5px;" placeholder="Apt/Suit">
                </div>
            </div>
            <div class="row" style="margin-bottom: 25px;">
                <div class="col-sm-12 col-md-4">
                  <label>City</label>
                  <input name="pick up city" v-model="form.pickUp.city" v-validate="'required'" class="book-form" style="margin-bottom: 5px;" readonly>
                  <span v-show="errors.has('pick up city')">{{ errors.first('pick up city') }}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                  <label>State</label>
                  <select name="pick up state" v-model="form.pickUp.state" v-validate="'required'" class="book-form" style="margin-bottom: 5px;" disabled>
                    <option value="">Select state</option>
                    <option v-for="state in states" :key="state.abbreviation" :value="state.abbreviation">{{ state.name }}</option>
                  </select>
                <span v-show="errors.has('pick up state')">{{ errors.first('pick up state') }}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                <label>Zip</label>
                <input name="pick up zip" v-model="form.pickUp.zip" v-validate="'required|digits:5'" class="book-form" style="margin-bottom: 5px;" readonly>
                <span v-show="errors.has('pick up zip')">{{ errors.first('pick up zip') }}</span>
                </div>
            </div>

            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12">
                <h2 @click="toggleAdtPickUp" style="cursor: pointer">
                    <i class="glyphicon" :class="[ adtPickUp ? 'glyphicon-minus' : 'glyphicon-plus' ]" style="font-size: 30px; margin-right: 10px;"></i>
                    <span v-if="!adtPickUp">Add</span><span v-else>Remove</span> additional pick up address
                </h2>
                </div>
            </div>
            <div v-if="adtPickUp">
                <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-8 col-md-9">
                    <label>Street address</label>
                    <input name="additional pick up address" v-model="form.adtPickUp.address" class="book-form" style="margin-bottom: 5px;" v-validate="'required'" placeholder="Street address">
                    <span v-show="errors.has('additional pick up address')">{{ errors.first('additional pick up address') }}</span>
                </div>
                <div class="col-sm-4 col-md-3">
                    <label>Apt/Suit</label>
                    <input v-model="form.adtPickUp.apt" class="book-form" style="margin-bottom: 5px;" placeholder="Apt/Suit">
                </div>
                </div>
                <div class="row" style="margin-bottom: 25px;">
                <div class="col-sm-12 col-md-4">
                    <label>City</label>
                    <input name="additional pick up city" v-model="form.adtPickUp.city" v-validate="'required'" class="book-form" style="margin-bottom: 5px;">
                    <span v-show="errors.has('additional pick up city')">{{ errors.first('additional pick up city') }}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                    <label>State</label>
                    <select name="additional pick up state" v-model="form.adtPickUp.state" v-validate="'required'" class="book-form" style="margin-bottom: 5px;">
                      <option value="">Select state</option>
                      <option v-for="state in states" :key="state.abbreviation" :value="state.abbreviation">{{ state.name }}</option>
                    </select>
                    <span v-show="errors.has('additional pick up state')">{{ errors.first('additional pick up state') }}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                    <label>Zip</label>
                    <input name="additional pick up zip" v-model="form.adtPickUp.zip" v-validate="'required|digits:5'" class="book-form" style="margin-bottom: 5px;">
                    <span v-show="errors.has('additional pick up zip')">{{ errors.first('additional pick up zip') }}</span>
                </div>
                </div>
            </div>

            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12">
                <h2 @click="toggleAdtDropOff" style="cursor: pointer">
                    <i class="glyphicon" :class="[ adtDropOff ? 'glyphicon-minus' : 'glyphicon-plus' ]" style="font-size: 30px; margin-right: 10px;"></i>
                    <span v-if="!adtDropOff">Add</span><span v-else>Remove</span> additional drop off address
                </h2>
                </div>
            </div>
            <div v-if="adtDropOff">
                <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-8 col-md-9">
                    <label>Street address</label>
                    <input name="additional drop off address" v-model="form.adtDropOff.address" class="book-form" style="margin-bottom: 5px;" v-validate="'required'" placeholder="Street address">
                    <span v-show="errors.has('additional drop off address')">{{ errors.first('additional drop off address') }}</span>
                </div>
                <div class="col-sm-4 col-md-3">
                    <label>Apt/Suit</label>
                    <input v-model="form.adtDropOff.apt" class="book-form" style="margin-bottom: 5px;" placeholder="Apt/Suit">
                </div>
                </div>
                <div class="row" style="margin-bottom: 25px;">
                <div class="col-sm-12 col-md-4">
                    <label>City</label>
                    <input name="additional drop off city" v-model="form.adtDropOff.city" v-validate="'required'" class="book-form" style="margin-bottom: 5px;">
                    <span v-show="errors.has('additional drop off city')">{{ errors.first('additional drop off city') }}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                    <label>State</label>
                    <select name="additional drop off state" v-model="form.adtDropOff.state" v-validate="'required'" class="book-form" style="margin-bottom: 5px;">
                      <option value="">Select state</option>
                      <option v-for="state in states" :key="state.abbreviation" :value="state.abbreviation">{{ state.name }}</option>
                    </select>
                    <span v-show="errors.has('additional drop off state')">{{ errors.first('additional drop off state') }}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                    <label>Zip</label>
                    <input name="additional drop off zip" v-model="form.adtDropOff.zip" v-validate="'required|digits:5'" class="book-form" style="margin-bottom: 5px;">
                    <span v-show="errors.has('additional drop off zip')">{{ errors.first('additional drop off zip') }}</span>
                </div>
                </div>
            </div>

            <div class="row" style="margin-bottom: 25px;">
                <div class="col-sm-12">
                  <h2>Drop off address</h2>
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-8 col-md-9">
                  <label>Street address</label>
                  <input name="drop off address" v-model="form.dropOff.address" class="book-form" style="margin-bottom: 5px;" v-validate="'required'" placeholder="Street address">
                  <span v-show="errors.has('drop off address')">{{ errors.first('drop off address') }}</span>
                </div>
                <div class="col-sm-4 col-md-3">
                  <label>Apt/Suit</label>
                  <input v-model="form.dropOff.apt" class="book-form" style="margin-bottom: 5px;" placeholder="Apt/Suit">
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12 col-md-4">
                  <label>City</label>
                  <input name="drop off city" v-model="form.dropOff.city" v-validate="'required'" class="book-form" style="margin-bottom: 5px;" readonly>
                  <span v-show="errors.has('drop off city')">{{ errors.first('drop off city') }}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                  <label>State</label>
                  <select name="drop off state" v-model="form.dropOff.state" v-validate="'required'" class="book-form" style="margin-bottom: 5px;" disabled>
                    <option value="">Select state</option>
                    <option v-for="state in states" :key="state.abbreviation" :value="state.abbreviation">{{ state.name }}</option>
                  </select>
                  <span v-show="errors.has('drop off state')">{{ errors.first('drop off state') }}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                  <label>Zip</label>
                  <input name="drop off zip" v-model="form.dropOff.zip" v-validate="'required|digits:5'" class="book-form" style="margin-bottom: 5px;" readonly>
                  <span v-show="errors.has('drop off zip')">{{ errors.first('drop off zip') }}</span>
                </div>
            </div>

            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12">
                <h2>Payment information</h2>
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12 col-md-6">
                  <label>Credit Card Number</label>
                  <input name="credit card number" v-model="form.cardNumber" style="margin-bottom: 5px;" class="book-form" type="text" v-validate="'required|credit_card'" placeholder="Credit Card Number">
                  <span v-show="errors.has('credit card number')">{{ errors.first('credit card number') }}</span>
                </div>
                <div class="col-sm-12 col-md-6">
                  <label>Name On Card</label>
                  <input name="name on the card" v-model="form.cardName" style="margin-bottom: 5px;" class="book-form" type="text" v-validate="'required'" placeholder="Name On Card">
                  <span v-show="errors.has('name on the card')">{{ errors.first('name on the card') }}</span>
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12 col-md-6">
                  <label>Exp. Month</label>
                  <select name="expiration month" v-model="form.cardExpMonth" style="margin-bottom: 5px;" class="book-form" v-validate="'required'">
                    <option value="">Exp. Month</option>
                    <option value="01">01 January</option>
                    <option value="02">02 February</option>
                    <option value="03">03 March</option>
                    <option value="04">04 April</option>
                    <option value="05">05 May</option>
                    <option value="06">06 June</option>
                    <option value="07">07 July</option>
                    <option value="08">08 August</option>
                    <option value="09">09 September</option>
                    <option value="10">10 October</option>
                    <option value="11">11 November</option>
                    <option value="12">12 December</option>
                  </select>
                  <span v-show="errors.has('expiration month')">{{ errors.first('expiration month') }}</span>
                </div>
                <div class="col-sm-12 col-md-6">
                  <label>Exp. Year</label>
                  <select name="expiration year" v-model="form.cardExpYear" style="margin-bottom: 5px;" class="book-form" v-validate="'required'">
                    <option value="">Exp. Year</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </select>
                  <span v-show="errors.has('expiration year')">{{ errors.first('expiration year') }}</span>
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12 col-md-6">
                  <label>CVV</label>
                  <input name="cvv" v-model="form.cardCvv" style="margin-bottom: 5px;" class="book-form" type="text" v-validate="'required|numeric'" placeholder="CVV">
                  <span v-show="errors.has('cvv')">{{ errors.first('cvv') }}</span>
                </div>
                <div class="col-sm-12 col-md-6">
                  <label>Billing zip code</label>
                  <input name="billing zip code" v-model="form.cardZip" style="margin-bottom: 5px;" class="book-form" type="text" v-validate="'required|digits:5'" placeholder="Zip Code">
                  <span v-show="errors.has('billing zip code')">{{ errors.first('billing zip code') }}</span>
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-sm-12 col-md-6">
                  <label>Deposit</label>
                  <input style="margin-bottom: 5px;" class="book-form" type="text" readonly :value="availability.deposit">
                </div>
            </div>
            <div class="row" style="margin-bottom: 15px;">
                <div class="col-md-12">
                  <p class="text-right" style="font-size: 20px;">Total: $100</p>
                </div>
            </div>
            <!-- <div class="col-sm-12 col-md-6 text-left">
                <input type="submit" class="book-next" id="hide2" value="< prev step">
            </div> -->
            <div class="row">
                <div class="col-sm-12 col-md-9">
                  <p style="font-size: 18px;">{{ validationMessage }}</p>
                </div>
                <div class="col-sm-12 col-md-3 text-right">
                  <button @click="book" class="book-next" type="button">Book</button>
                </div>
            </div>
            </div>

            <div v-if="formStep == 4" class="col-sm-12">
              <h1 style="margin-top: 80px;" class="text-center">Your job {{ moveId }} was successfully booked.</h1>
            </div>
        </form>
    </div>
</template>

<script>

import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
  props: [
    'companyId'
  ],
  data: () => ({
    form: {
      pickUp: {
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      adtPickUp: {
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      dropOff: {
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      adtDropOff: {
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: ''
      },
      companyId: '',
      moveSize: '',
      date: '',
      movers: null,
      price: null,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      notes: '',
      cardNumber: '',
      cardName: '',
      cardExpMonth: '',
      cardExpYear: '',
      cardCvv: '',
      cardZip: ''
    },
    formStep: 1,
    availability: null,
    adtPickUp: false,
    adtDropOff: false,
    moveId: null,
    validationMessage: '',
    datepicker_config: {
      minDate: 'today',
      altInput: true,
      altFormat: 'm/d/Y'
    }
  }),

  methods: {
    toggleAdtPickUp () {
      this.form.adtPickUp.address = ''
      this.form.adtPickUp.apt = ''
      this.form.adtPickUp.city = ''
      this.form.adtPickUp.state = ''
      this.form.adtPickUp.zip = ''
      this.adtPickUp = !this.adtPickUp
    },

    toggleAdtDropOff () {
      this.form.adtDropOff.address = ''
      this.form.adtDropOff.apt = ''
      this.form.adtDropOff.city = ''
      this.form.adtDropOff.state = ''
      this.form.adtDropOff.zip = ''
      this.adtDropOff = !this.adtDropOff
    },

    validateZipCode (zip) {
      let vm = this
      return vm.axios.get('https://kerb.movingreservation.com/get-zip-info/' + zip)
    },

    validateFirstStep () {
      let vm = this
      let numbers = /^[-+]?[0-9]+$/
      if (vm.form.companyId === null) {
        console.log(vm.form.companyId)
        vm.validationMessage = 'Please choose a location'
        return false
      }
      if (vm.form.phone.length !== 10 || !vm.form.phone.match(numbers)) {
        vm.validationMessage = 'Please enter a 10 digit phone number'
        return false
      }
      if (vm.form.pickUp.zip.length !== 5 || !vm.form.pickUp.zip.match(numbers)) {
        vm.validationMessage = 'Please enter a correct starting zip code'
        return false
      } else {
        vm.validateZipCode(vm.form.pickUp.zip)
          .then(function (response) {
            if (response.data.zip === 'false') {
              vm.validationMessage = 'Please enter an existing starting zip code'
              return false
            } else {
              vm.form.pickUp.state = response.data.zip.state
              vm.form.pickUp.city = response.data.zip.primary_city
            }
          })
      }
      if (vm.form.dropOff.zip.length !== 5 || !vm.form.dropOff.zip.match(numbers)) {
        vm.validationMessage = 'Please enter a correct ending zip code'
        return false
      } else {
        vm.validateZipCode(vm.form.dropOff.zip)
          .then(function (response) {
            if (response.data.zip === 'false') {
              vm.validationMessage = 'Please enter an existing ending zip code'
              return false
            } else {
              vm.form.dropOff.state = response.data.zip.state
              vm.form.dropOff.city = response.data.zip.primary_city
            }
          })
      }
      if (!vm.form.date.length) {
        vm.validationMessage = 'Please select date of the move'
        return false
      }
      if (!vm.form.moveSize.length) {
        vm.validationMessage = 'Please select size of the move'
        return false
      }
      vm.validationMessage = ''
      return true
    },

    getAvailability () {
      let vm = this
      if (!vm.validateFirstStep()) return
      vm.axios.post('https://kerb.movingreservation.com/kerb/get-availability', {
        companyId: vm.form.companyId,
        phone: vm.form.phone,
        zipFrom: vm.form.pickUp.zip,
        zipTo: vm.form.dropOff.zip,
        date: vm.form.date,
        moveSize: vm.form.moveSize
      }).then(function (response) {
        if (response.status === 200) {
          if (response.data.data.out_of_service === 1) {
            vm.validationMessage = 'We don\'t serve this area.'
            return
          }

          if (response.data.data.long_distance === 1) {
            vm.validationMessage = 'It\'s a long distance job. Please give us a call.'
            return
          }

          if (response.data.data.trucks_left < 1) {
            vm.validationMessage = 'Selected date is not available.'
            return
          }

          vm.availability = response.data.data
          vm.formStep = 2
        } else if (response.status === 400) {
          vm.validationMessage = response.data.message
        } else {
          vm.validationMessage = 'Unexpected error. Please try again.'
        }
      })
    },

    changeStep (step) {
      this.formStep = step
    },

    selectPrice (movers, price) {
      if (parseInt(this.availability.movers_left) >= movers) {
        this.form.movers = movers
        this.form.price = price
        this.formStep = 3
      }
    },

    getValidationRules () {
      let vm = this
      let rules = {
        'first name': vm.form.firstName,
        'last name': vm.form.lastName,
        'email': vm.form.email,
        'phone': vm.form.phone,
        'pick up address': vm.form.pickUp.address,
        'pick up city': vm.form.pickUp.city,
        'pick up state': vm.form.pickUp.state,
        'pick up zip': vm.form.pickUp.zip,
        'drop off address': vm.form.dropOff.address,
        'drop off city': vm.form.dropOff.city,
        'drop off state': vm.form.dropOff.state,
        'drop off zip': vm.form.dropOff.zip,
        'credit card number': vm.form.cardNumber,
        'name on the card': vm.form.cardName,
        'expiration month': vm.form.cardExpMonth,
        'expiration year': vm.form.cardExpYear,
        'cvv': vm.form.cardCvv,
        'billing zip code': vm.form.cardZip
      }
      if (vm.adtPickUp) {
        rules['additional pick up address'] = vm.form.adtPickUp.address
        rules['additional pick up city'] = vm.form.adtPickUp.city
        rules['additional pick up state'] = vm.form.adtPickUp.state
        rules['additional pick up zip'] = vm.form.adtPickUp.zip
      }
      if (vm.adtDropOff) {
        rules['additional drop off address'] = vm.form.adtDropOff.address
        rules['additional drop off city'] = vm.form.adtDropOff.city
        rules['additional drop off state'] = vm.form.adtDropOff.state
        rules['additional drop off zip'] = vm.form.adtDropOff.zip
      }
      return rules
    },

    book () {
      let vm = this
      vm.$validator.validateAll(vm.getValidationRules).then(result => {
        if (result) {
          vm.axios.post('https://kerb.movingreservation.com/kerb/book', vm.form)
            .catch(error => {
              if (error) {
                vm.validationMessage = 'Payment unsuccessfull. Please check the information and try again.'
              }
            })
            .then(response => {
              if (response.status === 400) {
                vm.validationMessage = 'Payment unsuccessfull.'
              } else if (response.status === 200) {
                vm.moveId = response.data.data.move_id
                vm.formStep = 4
              } else {
                vm.validationMessage = 'Unexpected error. Please try again.'
              }
            })
        }
      })
    }
  },

  created () {
    if (this.companyId !== null) {
      this.form.companyId = this.companyId
    }
  },

  computed: {
    states () {
      return [
        { abbreviation: 'AL', name: 'Alabama' },
        { abbreviation: 'AK', name: 'Alaska' },
        { abbreviation: 'AZ', name: 'Arizona' },
        { abbreviation: 'AR', name: 'Arkansas' },
        { abbreviation: 'CA', name: 'California' },
        { abbreviation: 'CO', name: 'Colorado' },
        { abbreviation: 'CT', name: 'Connecticut' },
        { abbreviation: 'DE', name: 'Delaware' },
        { abbreviation: 'DC', name: 'District Of Columbia' },
        { abbreviation: 'FL', name: 'Florida' },
        { abbreviation: 'GA', name: 'Georgia' },
        { abbreviation: 'HI', name: 'Hawaii' },
        { abbreviation: 'ID', name: 'Idaho' },
        { abbreviation: 'IL', name: 'Illinois' },
        { abbreviation: 'IN', name: 'Indiana' },
        { abbreviation: 'IA', name: 'Iowa' },
        { abbreviation: 'KS', name: 'Kansas' },
        { abbreviation: 'KY', name: 'Kentucky' },
        { abbreviation: 'LA', name: 'Louisiana' },
        { abbreviation: 'ME', name: 'Maine' },
        { abbreviation: 'MD', name: 'Maryland' },
        { abbreviation: 'MA', name: 'Massachusetts' },
        { abbreviation: 'MI', name: 'Michigan' },
        { abbreviation: 'MN', name: 'Minnesota' },
        { abbreviation: 'MS', name: 'Mississippi' },
        { abbreviation: 'MO', name: 'Missouri' },
        { abbreviation: 'MT', name: 'Montana' },
        { abbreviation: 'NE', name: 'Nebraska' },
        { abbreviation: 'NV', name: 'Nevada' },
        { abbreviation: 'NH', name: 'New Hampshire' },
        { abbreviation: 'NJ', name: 'New Jersey' },
        { abbreviation: 'NM', name: 'New Mexico' },
        { abbreviation: 'NY', name: 'New York' },
        { abbreviation: 'NC', name: 'North Carolina' },
        { abbreviation: 'ND', name: 'North Dakota' },
        { abbreviation: 'OH', name: 'Ohio' },
        { abbreviation: 'OK', name: 'Oklahoma' },
        { abbreviation: 'OR', name: 'Oregon' },
        { abbreviation: 'PA', name: 'Pennsylvania' },
        { abbreviation: 'RI', name: 'Rhode Island' },
        { abbreviation: 'SC', name: 'South Carolina' },
        { abbreviation: 'SD', name: 'South Dakota' },
        { abbreviation: 'TN', name: 'Tennessee' },
        { abbreviation: 'TX', name: 'Texas' },
        { abbreviation: 'UT', name: 'Utah' },
        { abbreviation: 'VT', name: 'Vermont' },
        { abbreviation: 'VA', name: 'Virginia' },
        { abbreviation: 'WA', name: 'Washington' },
        { abbreviation: 'WV', name: 'West Virginia' },
        { abbreviation: 'WI', name: 'Wisconsin' },
        { abbreviation: 'WY', name: 'Wyoming' }
      ]
    }
  },

  components: {
    flatPickr
  }
}
</script>

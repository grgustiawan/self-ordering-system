<template>
  <div class="foodpage-wrapper">
    <div v-if="loading" class="d-flex flex-column justify-content-center ps-3">
        <FoodImageLoaderVue  />
        <FoodDetailLoaderVue class="mb-2" style="margin-top: -10vh;" />
        <FoodOptionLoaderVue />
        <PayPopUpLoaderVue />
    </div>

    <div v-if="food.quantity <= 0" class="sold-out-container">
      <div class="sold-out-item">
          <lottie-player src="https://lottie.host/0b1c58f2-12f2-4ef5-bb72-b1e6759937ca/pOeLTteYmi.json" 
          background="transparent" speed="1" style="width: 500px; height: 500px;margin-top: -30%;" loop autoplay></lottie-player>

          <h2 class="sold-out-text">Sorry, Item Out Of Stock</h2>
          <h5 class="text-white mt-3" style="font-size: 13pt;">Please comeback latter!</h5>
          <router-link :to="{name: 'Main', query: { scr: this.$route.query.scr}}" class="btn login-btn mt-3 mb-3" style="width: 90%;" role="button">
            Back to Home
          </router-link>
      </div>
    </div>

    <div class="food-video-container" v-if="video" @click="video = false">
      <video autoplay muted loop class="food-video">
        <source src="/assets/images/video/caesar_salad.mp4" type="video/mp4" />
      </video>
    </div>

    <div v-if="!loading" class="navigation">
        <div class="navigation-item" @click="$router.go(-1)">
          <i class="ri-arrow-left-s-line" style="font-size: 22pt;font-weight:bolder"></i>
        </div>
    </div>

    <!-- banner section start -->
    <div v-if="!loading" class="bgfood-banner">
      <div style="position: absolute;
                  top: 0;
                  left: 50%;
                  -webkit-transform: translateX(-50%);
                  transform: translateX(-50%);
                  width: 100%;
                  max-width: 600px;
                  z-index: 1000;">
          <img class="addons1" src="/assets/images/addons/1.png" id="addons1" alt="">
          <img class="addons2" src="/assets/images/addons/3.png" id="addons2" alt="">
          <img class="addons3" src="/assets/images/addons/4.png" id="addons3" alt="">
          <img class="addons4" src="/assets/images/addons/5.png" id="addons4" alt="">
          <img class="addons5" src="/assets/images/addons/6.png" id="addons5" alt="">
          <img class="addons6" src="/assets/images/addons/7.png" id="addons6" alt="">
          <img class="addons7" src="/assets/images/addons/2.png" id="addons7" alt="">
      </div>
      <div class="bg-overlay"></div>
      <img class="bg-image" src="../assets/backgrounds/bgfood-banner.jpg" alt="">
    </div>
    <!-- <div class="playbtn-wrapper" @click="video = true">
      <svg id="playfood"  viewBox="0 0 163 163" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
          <g fill="none">
              <g  transform="translate(2.000000, 2.000000)" stroke-width="4">
                  <path d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11" id="lineOne" stroke="#A5CB43"></path>
                  <path d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z" id="triangle" stroke="#A3CD3A"></path>
                  <path d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159" id="lineTwo" stroke="#A5CB43"></path>
              </g>
          </g>
      </svg>
    </div> -->
    <!-- banner section end -->

    <!-- Restaurant details section start -->
    <!-- <section v-if="!loading" class="product-details-card">
      <div class="food-container">
        <div class="restaurant-details-box">
          <div class="restaurant-head">
            <div class="name">
              <div class="d-block ml-2">
                <div class="food-image-wrapper">
                  <img class="food-images-thmb" :src="getFoodImg(food.image)" :alt="food.image">
                </div>
          
                <div @click="$router.go(-1)" class="navigation-back">
                    <i class="ri-arrow-left-s-line" style="font-size: 22pt;font-weight:bolder"></i>
                </div>
                <div class="food-name">
                  <h3 id="food_name" style="color: #603939">{{ food.name }}</h3>
                </div>
              </div>
            </div>
            <div class="option">
              <a href="#">
                <i class="ri-share-line share"></i>
              </a>

              <a href="#">
                <i class="toggle-heart ri-heart-3-fill heart"></i>
              </a>
            </div>
          </div>

          <div class="restaurant-head">
            <div>
                  <h6>{{ food.description }}</h6>
            </div>
          </div>

          <div class="restaurant-details">
            <div class="location">
              <h6 class="rating-star">
                <span class="star"><i class="ri-star-s-fill"></i></span>
                <span class="test-secondary" fontSize="12pt" v-text="0 + ' sold'"></span>
              </h6>
              <h6 class="pt-2 light-text"><span class="dark-text">4.0km</span> Free Delivery</h6>
            </div>
            <ul class="distance">
              <li><i class="ri-time-fill"></i><span ></span> 15 min</li>
              <li><i class="ri-time-fill theme-color"></i><span></span> 25 min</li>
              <input type="hidden" name="food_price" id="food_price" value="72,000">
            </ul>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Restaurant details section end -->

    <div v-if="!loading" style="position:absolute;
                width: 100%;
                max-width: 600px;
                background: linear-gradient(to bottom, transparent 0%, #00000078 25%);
                top: 60vh;
                z-index: 100;
                left:50%;
                -webkit-transform: translateX(-50%);
                        transform: translateX(-50%);">
          <img style="position: relative;margin-top: -350px;width: 70%;" :src="getFoodImg(food.image)" alt="">

          <div style="width: 100%;
                      color: #fff;
                      font-size: 13pt;
                      text-align: start;
                      display: flex;
                      flex-direction: column;
                      justify-content: start;">
              <span style="margin-left: 20px;font-family: 'Quadrus Semicond', sans-serif;">{{ food.name }}</span>
              <span style="margin-left: 20px;font-family: 'Courier New', Courier, monospace;font-size: 11pt;">{{ food.category }}</span>
              <!-- <p style="width: 90%;margin-left: 20px;margin-top: 10px;text-align: justify;color: var(--white);font-size: 10pt;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper non augue nec maximus. Ut justo tellus, varius suscipit urna nec, finibus placerat neque. Aenean sit amet ante id velit egestas porta nec sed leo. Vestibulum efficitur nulla diam, ac gravida eros rutrum vel. Phasellus nec elementum felis. 
              </p> -->
          </div>

          <!-- Options Slider Start -->
          <section v-show="this.option1.length > 0" class="section-t-space">
              <div class="custom-container" style="background-color: transparent">
                  <div class="options">
                      <div class="title">
                          <h3 class="mt-0 text-white" v-text="food.opt1_name"></h3>
                      </div>

                      <div class="option-container" style="background: transparent;">
                          <Splide :options="{ rewind: true, 
                                            perPage: 5, 
                                            drag: 'free',
                                            arrows: false,
                                            width: '100%',
                                            pagination: false}" aria-label="Category Slider">
                            <SplideSlide v-for="opt in option1" :key="opt.id">
                                <div v-show="opt.quantity === 0" class="opt-soldout"><h6>Sold Out</h6></div>
                                <div class="input-container" style="background-color: var(--white);border-radius: 3px;">
                                    <input id="kafe" class="radio-button" type="radio" name="option1" :value="opt.id" @change="selectOption1(opt.id, opt.name, opt.price, opt.service_charge, opt.discount, opt.tax)">
                                    <div class="radio-tile" style="border: none;">
                                        <div class="icon walk-icon">
                                          <img style="width: 50px;" :src="getImgOpt(opt.image)" alt="">              
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                          </Splide>
                          <span class="opt-name" v-show="selected_opt1">{{ selected_opt1 }} <span v-show="selected_opt1_price > 0" class="text-success">+{{ selected_opt1_price }}</span></span>
                          <span class="opt-name text-sm text-danger" v-show="!selected_opt1">{{ String(error_sauce).toLowerCase() }}</span>
                      </div>
                  </div>
              </div>
          </section>

          <section class="section-t-space mt-4">
              <div class="custom-container" style="background-color: transparent">
                  <div class="options">
                      <div class="title">
                          <h3 class="mt-0 text-white" v-text="food.opt2_name"></h3>
                      </div>

                      <div class="option-container">
                          <Splide :options="{ rewind: true, 
                                            perPage: 5, 
                                            drag: 'free',
                                            arrows: false,
                                            width: '100%',
                                            pagination: false}" aria-label="Category Slider">
                            <SplideSlide v-for="opt in option2" :key="opt.id">
                                <div v-show="opt.quantity === 0" class="opt-soldout"><h6>Sold Out</h6></div>
                                <div class="input-container" style="background-color: var(--white);border-radius: 3px;">
                                    <input id="kafe" class="radio-button" type="radio" name="option2" :value="opt.id" @change="selectOption2(opt.id, opt.name, opt.price, opt.service_charge, opt.discount, opt.tax)">
                                    <div class="radio-tile">
                                        <div class="icon walk-icon">
                                          <img style="width: 50px;" :src="getImgOpt(opt.image)" alt="">              
                                        </div>
                                    </div>
                                    <label for="walk" class="menu-text">{{ opt.name }}</label>
                                </div>
                            </SplideSlide>
                          </Splide>
                          <span class="opt-name" v-show="selected_opt2">{{ selected_opt2 }} <span v-show="selected_opt2_price > 0" class="text-success">+{{ selected_opt2_price }}</span></span>
                          <span class="opt-name text-sm text-danger" v-show="!selected_opt2">{{ String(error_side).toLowerCase() }}</span>
                      </div>
                  </div>
              </div>
          </section>
          <!-- Options Slider End --> 

          <section v-if="food.is_steak" class="section-t-space mt-3">
              <div class="custom-container" style="background-color: transparent">
                  <div class="options">
                      <div class="title">
                          <h3 class="mt-0 text-white">Kematangan</h3>
                      </div>

                      <div class="maturity-radio-group" v-for="mtr in maturity" :key="mtr.id">
                          <input class="radio-input" name="radio-group" :id="'radio' + mtr.id" type="radio" value="mtr.name" @click="setMaturity(mtr.name)">
                          <label class="radio-label" :for="'radio' + mtr.id">
                            <span class="radio-inner-circle"></span>
                            {{ mtr.name }}
                          </label>
                      </div>
                  </div>
                  <span style="position: relative;" class="text-sm text-danger">{{ error_maturity }}</span>
              </div>
          </section>

          <div class="custom-container" style="margin-top: 10px">
              <textarea class="form-control" name="catatan" id="" 
                        cols="30" rows="3" placeholder="Food Note"
                        style="border: 1px solid #603939" 
                        v-model="foods.foodnote">
              </textarea>
          </div>

          <div v-if="!loading" class="mt-5" style="background-color: transparent">
            <div class="custom-container" style="background-color: transparent">
              <div class="horizontal-product-box mt-3" style="background-color: #fff9f3;">
                <div class="product-content">
                  <h5>Quantity</h5>
                  <h6 id="cart_name" v-text="food.name"></h6>
                  
                  <div class="plus-minus align-items-center" style="margin-left:100%;border: 2px solid var(--basecolor)">
                    <i class="ri-subtract-line" @click="subQty()" style="color: var(--basecolor)"></i>
                      <input type="number" name="qty" id="qty" min="0" max="50" v-model="cart.qty" style="color: var(--basecolor)" readonly />
                    <i class="ri-add-line" @click="addQty()" style="color: var(--basecolor)"></i>
                  </div>
                </div>
              </div>
              <span v-show="isZero" class="text-danger text-xxs">Minimum order 1</span>
              <span v-show="error_limit" class="text-danger text-xxs mt-2">{{ error_limit }}</span>
            </div>
          </div>

          <div style="height:110px;width:100%"></div>
    </div>

    <div v-if="!loading" style="width: 100%;">
        <div class="sold-out-bg" v-if="food.quantity == 0"></div>
        <div class="food-pay-popup">
          <div class="price-items">
            <h3 v-text="'Rp. ' + formatPrice(cart.total)"></h3>
            <h6 v-text="cart.qty + ' item Added'"></h6>
          </div>
          <button class="btn wood-btn pay-btn mt-0" @click="addToCart()">Add To Cart</button>
        </div>
    </div>
  </div> 
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';
import axios from 'axios'
import FoodDetailLoaderVue from '@/components/loader/FoodDetailLoader.vue';
import FoodOptionLoaderVue from '@/components/loader/FoodOptionLoader.vue';
import PayPopUpLoaderVue from '@/components/loader/PayPopUpLoader.vue';
import FoodImageLoaderVue from '@/components/loader/FoodImageLoader.vue';

export default {
    name: 'FoodView',
    components: {
      Splide,
      SplideSlide,
      FoodOptionLoaderVue,
      FoodDetailLoaderVue,
      PayPopUpLoaderVue,
      FoodImageLoaderVue
    },
    data(){
        return {
            food: [],
            discount: 0,
            discount_type: null,
            option: [],
            option1: [],
            option2: [],
            selected_opt1: null,
            selected_opt2: null,
            selected_opt1_price: 0,
            selected_opt2_price: 0,
            cOption: null,
            option_item: 0,
            addons: [ ],
            cAddons: null,
            addon_name: '',
            category: null,
            option_id: null,
            optione_detail: '',
            sku: null,
            isZero: false,
            quantity: 0,
            cart: {
              food_id: null,
              food_name: null,
              foods: [],
              qty: 0,
              total: 0
            },
            foods: {
                kode: '',
                harga: 0,
                service_charge: 0,
                discount: 0,
                tax: 0,
                qty: 0,
                opt2: '',
                opt1: '',
                foodnote: '',
            },
            opt1: {
                kode: "",
                harga: 0,
                service_charge: 0,
                discount: 0,
                tax: 0,
                qty: 0,
                opt2: '',
                opt1: '',
                foodnote: '',
            },
            opt2: {
                kode: "",
                harga: 0,
                service_charge: 0,
                discount: 0,
                tax: 0,
                qty: 0,
                opt2: '',
                opt1: '',
                foodnote: '',
            },
            email_body: null,
            loading: false,
            video: false,
            error_sauce: '',
            error_side: '',
            error_limit: null,
            isprocessing: false,
            servers: '',
            description: '',
            gname: '',
            isAddToCart: false,
            selected_maturity: null,
            error_maturity: '',
            windowPos: null,
            maturity: [
              {id: 1, name: 'Rare'},
              {id: 2, name: 'Medium Rare'},
              {id: 3, name: 'Medium'},
              {id: 4, name: 'Medium Well'},
              {id: 5, name: 'Well Done'},
              {id: 6, name: 'Very Well Done'},
            ]
        }
    },
    mounted(){
        this.loading = true;
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';

        axios.get( this.servers + '/cart/' + this.$route.query.scr)
        .then((res) => {
            if(res.data.is_submitted) this.$router.push({name: 'Submitted', query: {scr: this.$route.query.scr}});
        });

        this.getFoodDetail();
        if(this.$route.name === 'Food'){
          window.addEventListener("scroll", function(){
            let body = document.body,
                html = document.documentElement;

            let height = Math.max( 
                            body.scrollHeight, 
                            body.offsetHeight, 
                            html.clientHeight, 
                            html.scrollHeight, 
                            html.offsetHeight,
                        );

            if(height < 1000) this.windowPos = window.scrollY * 1.5;
            else this.windowPos = window.scrollY;

            if(this.windowPos > 0) {
              if(document.getElementById('addons1')) {
                var ads1 = document.getElementById('addons1')
                ads1.style.animation = 'none';
                ads1.style.setProperty("position", "fixed");
                ads1.style.setProperty("transform", 
                  `translateX(-${this.windowPos * 2}px) 
                  rotate(${this.windowPos}deg)`
                );
              }
              
              if(document.getElementById('addons2')) {
                var ads2 = document.getElementById('addons2')
                ads2.style.animation = 'none';
                ads2.style.setProperty("position", "fixed");
                ads2.style.setProperty("transform",
                  `translateX(-${this.windowPos}px) 
                  rotate(-${this.windowPos}deg)`
                );
              }
              if(document.getElementById('addons3')) {
                var ads3 = document.getElementById('addons3')
                ads3.style.animation = 'none';
                ads3.style.setProperty("position", "fixed");
                ads3.style.setProperty("transform", 
                  `translateX(-${this.windowPos}px)
                  translateY(${this.windowPos / 2}px)
                  rotate(${this.windowPos}deg)`
                );
              }
              if(document.getElementById('addons4')) {
                var ads4 = document.getElementById('addons4')
                ads4.style.animation = 'none';
                ads4.style.setProperty("position", "fixed");
                ads4.style.setProperty("transform",
                  `translateX(${this.windowPos}px)
                  translateY(${this.windowPos / 3}px)
                  rotate(${this.windowPos}deg)`
                );
              }

              if(document.getElementById('addons5')) {
                var ads5 = document.getElementById('addons5')
                ads5.style.animation = 'none';
                ads5.style.setProperty("position", "fixed");
                ads5.style.setProperty(
                  "transform", 
                  `translateX(${this.windowPos}px)
                  rotate(${this.windowPos * 2}deg)`
                );
              }

              if(document.getElementById('addons6')) {
                var ads6 = document.getElementById('addons6')
                ads6.style.animation = 'none';
                ads6.style.setProperty("position", "fixed");
                ads6.style.setProperty("transform", 
                  `translateY(-${this.windowPos}px)
                  rotate(${this.windowPos}deg)`
                );
              }
              if(document.getElementById('addons7')) {
                var ads7 = document.getElementById('addons7')
                ads7.style.animation = 'none';
                ads7.style.setProperty("position", "fixed");
                ads7.style.setProperty("transform", 
                  `translateX(-${this.windowPos}px)
                  translateY(-${this.windowPos}px)
                  rotate(${this.windowPos}deg)`
                );
              }
            } else { 
              if(document.getElementById('addons1')) document.getElementById('addons1').style.animation = 'float1 5s ease-in-out infinite';
              if(document.getElementById('addons2')) document.getElementById('addons2').style.animation = 'float2 7s ease-in-out infinite';
              if(document.getElementById('addons3')) document.getElementById('addons3').style.animation = 'float3 8s ease-in-out infinite';
              if(document.getElementById('addons4')) document.getElementById('addons4').style.animation = 'float4 10s ease-in-out infinite';
              if(document.getElementById('addons5')) document.getElementById('addons5').style.animation = 'float5 6s ease-in-out infinite';
              if(document.getElementById('addons6')) document.getElementById('addons6').style.animation = 'float6 8s ease-in-out infinite';
              if(document.getElementById('addons7')) document.getElementById('addons7').style.animation = 'float7 10s ease-in-out infinite';
            }
          });
        }
    },
    methods: {    
        async getFoodDetail(){
          this.loading = true
          try {
            let { data } = await axios.get(this.servers + '/menu/' + this.$route.query.id + '/' + this.$route.query.scr)
            this.food = data
            this.gname = data.name
            this.cart.food_id = data.id
            this.cart.food = data.price
            this.foods.kode = data.id
            this.foods.harga = data.price
            this.foods.service_charge = data.service_charge
            this.foods.discount =  data.discount
            this.foods.tax = data.tax
            this.option = data.option
            this.quantity = data.quantity
            this.option.forEach(element => {
                  if(element.opt == 1) this.option1.push(element)
                  else this.option2.push(element)
            });
            this.loading = false
            console.log(data)
          } catch (e) {
            this.loading = true
            console.log(e)
          }
        },
        getImgOpt(filename){
            let name = String(filename).replace("JPG", "png");
            return '/assets/images/options/tamani/' + name;
        },
        getImageAddons(filename){
          return this.assets + '/images/addons/' + filename;
        },
        addQty(){
          if(this.isprocessing) return;
          this.isprocessing = true;

          this.cart.qty++
          if(this.cart.qty > this.quantity) {
            this.cart.qty = this.quantity;
            this.error_limit = 'Sorry only ' + this.quantity + ' item left!';
          }

          this.foods.qty = this.cart.qty;
          var tax_foods = this.foods.harga * this.foods.tax / 100;
          var discount_foods  = this.foods.harga * this.foods.discount / 100;
          var harga_foods = this.foods.harga + this.foods.service_charge + tax_foods - discount_foods;

          this.opt1.qty = this.cart.qty;
          var tax_opt1 = this.opt1.harga * this.opt1.tax / 100;
          var discount_opt1 = this.opt1.harga * this.opt1.discount / 100;
          var harga_opt1 = this.opt1.harga + this.opt1.service_charge + tax_opt1 - discount_opt1;

          this.opt2.qty = this.cart.qty
          var tax_opt2 = this.opt2.harga * this.opt2.tax / 100;
          var discount_opt2 = this.opt2.harga * this.opt2.discount / 100;
          var harga_opt2 = this.opt2.harga + this.opt2.service_charge + tax_opt2 - discount_opt2;

          this.cart.total = (harga_foods + harga_opt1 + harga_opt2) * this.cart.qty;
          this.email_body = 'Item : ' + this.food.name + ', Qty: ' + this.cart.qty;

          if(this.error_limit !== null){
            setTimeout(() => {
              this.error_limit = null;
              this.isprocessing = false;
            }, 3000);
          } else {
            this.isprocessing = false;
          }
        },
        subQty(){
          if(this.isprocessing) return;
          this.isprocessing = true;

          this.cart.qty--
          if(this.cart.qty <= 0) this.cart.qty = 0

          this.foods.qty = this.cart.qty;
          var tax_foods = this.foods.harga * this.foods.tax / 100;
          var discount_foods  = this.foods.harga * this.foods.discount / 100;
          var harga_foods = this.foods.harga + this.foods.service_charge + tax_foods - discount_foods;

          this.opt1.qty = this.cart.qty;
          var tax_opt1 = this.opt1.harga * this.opt1.tax / 100;
          var discount_opt1 = this.opt1.harga * this.opt1.discount / 100;
          var harga_opt1 = this.opt1.harga + this.opt1.service_charge + tax_opt1 - discount_opt1;

          this.opt2.qty = this.cart.qty;
          var tax_opt2 = this.opt2.harga * this.opt2.tax / 100;
          var discount_opt2 = this.opt2.harga * this.opt2.discount / 100;
          var harga_opt2 = this.opt2.harga + this.opt2.service_charge + tax_opt2 - discount_opt2;

          this.cart.total = (harga_foods + harga_opt1 + harga_opt2) * this.cart.qty;
          this.email_body = 'Item : ' + this.food.name + ', Qty: ' + this.cart.qty;
          this.isprocessing = false;
        },
        formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        async addToCart(){
          if(this.isAddToCart) return;
          if(this.cart.qty === 0) {
            this.isZero = true;
            setTimeout(() => {
              this.isZero = false;
            }, 2000);

            return;
          }

          this.isAddToCart = true;
          if(!this.selected_opt1 && this.option1.length > 0){
              this.error_sauce = 'Pick ' + this.food.opt1_name + '!'
          } else if(!this.selected_opt2 && this.option2.length > 0){
              this.error_side = 'Pick ' + this.food.opt2_name + '!'
          } else if(this.food.is_steak && !this.selected_maturity) {
              this.error_maturity = 'Pilih tingkat kematangan!';
          } else {
            if(this.food.is_steak) this.foods.foodnote += '. ' + this.selected_maturity;
            this.cart.foods.push(this.foods);
            if(this.opt1.kode !== '')  this.cart.foods.push(this.opt1);
            if(this.opt2.kode !== '') this.cart.foods.push(this.opt2);

            console.log(this.cart)
            await axios.post(this.servers + '/cart/' + this.$route.query.scr, this.cart)
            .then((res) => {
                console.log(res)
                this.$router.push({name: 'Cart', query: {scr: this.$route.query.scr}});
            }).catch((e) => {throw(e)});
          }

          setTimeout(() => {
            this.error_sauce = '';
            this.error_side = '';
            this.error_maturity = '';
          }, 5000);
          this.isAddToCart = false;
        },
        getFoodImg(filename){
            let name = String(filename).replace("JPG", "png");
            return '/assets/images/food/tamani/' + name;
        },
        selectOption1(id, name, price, service_charge, discount, tax){
            this.selected_opt1 = name;
            this.selected_opt1_price = price;
            var disc = discount > 0 ? (price * discount) / 100 : 0;
            
            this.foods.opt1 = id;
            this.opt1.kode = id;
            this.opt1.harga = price;
            this.opt1.service_charge = service_charge;
            this.opt1.discount = disc;
            this.opt1.tax = tax; 
        },
        selectOption2(id, name, price, service_charge, discount, tax){
            this.selected_opt2 = name;
            this.selected_opt2_price = price;
            var disc = discount > 0 ? (price * discount) / 100 : 0;
            
            this.foods.opt2 = id;
            this.opt2.kode = id;
            this.opt2.harga = price;
            this.opt2.service_charge = service_charge;
            this.opt2.discount = disc;
            this.opt2.tax = tax;          
        },
        setMaturity(name){
          this.selected_maturity = name;
        },
    }
}
</script>

<style lang="scss">
svg#playfood {
  position: relative;
  width:60px;
  height: 60px;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  display:block;
  cursor: pointer;
  transform-origin: 50% 50%;
}

svg#playfood #triangle {
  fill:rgba(22,22,22,0);
  transition:500ms;
  transform-origin: 50% 50%;
}
svg#playfood:hover #triangle {
  fill:#A3CD3A;
  transform-origin: 50% 50%;
}

 svg #lineOne, svg #lineTwo {
  transform-origin: 50% 50%;
  transition: 1s;
} 

 svg:hover #lineOne {
  transform: rotate(260deg);
   -webkit-transform: rotate(260deg);
-moz-transform: rotate(260deg);
-o-transform: rotate(260deg);
   transform-origin: 50% 50%;
} 

 svg:hover #lineTwo {
  transform: rotate(-450deg);
   transform-origin: 50% 50%;
} 
</style>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
@import url('https://fonts.cdnfonts.com/css/quadrus-semicond');

.foodpage-wrapper{
  width: 100vw;
  overflow: hidden;
}

.navigation-back{
  position: absolute;
  width: 30px;
  height: 30px;
  z-index:3;
  top:0;
  left: 0;
  margin-left:20px;
  margin-top:10px;
  background-color: #FBAB7E;
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  border-radius: 300px;
  display: flex;
  align-content: center;
  align-items: center;
  color:rgb(236, 236, 236);
  cursor: pointer
}

.navigation-back:hover{
  background-color: #a7460e;
  background-image: linear-gradient(62deg, #a43c00 0%, #ff5e00 100%);
  border-radius: 300px;
}

.playbtn-wrapper{
  position: absolute;
  z-index: 100;
  top: 150px;
  width: 80px;
  margin-left: 25px
}

.bgfood-banner{
  position: fixed;
  left:0;
  top:0;
  left:50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.food-image-wrapper{
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 100vw;
}

.food-images-thmb{
  width: 190px;
  margin-top: -31vh;
  margin-left: 100px;
  filter: contrast(150%);
  filter: brightness(80%);
  filter: drop-shadow(8px 8px 10px #00000037);
}

@media (min-width: 767px){
  .food-images-thmb{
    width: 300px;
    margin-top: -32vh;
    margin-left: 200px;
    filter: contrast(200%);
    filter: brightness(60%);
    filter: drop-shadow(8px 8px 10px #00000037);
  }

  .playbtn-wrapper{
    margin-top: 50px;
    margin-left: 50px;
  }

  .foodpage-wrapper{
    width: 100%;
  }
}

.food-name{
  margin-left: 50px;
}

.opt-name{
  position:absolute;
  margin-top: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%); 
  color: var(--white);
  font-weight: bold;
}

.food-pay-popup {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  z-index: 1000;
  max-width: 600px;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1.31%, #414449), color-stop(101.06%, #1f1f1f));
  background: linear-gradient(180deg, #414449 1.31%, #1f1f1f 101.06%);
  -webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
          box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.14);
  border-radius: 20px 20px 0px 0px;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 20px;
}

.food-pay-popup .price-items h3 {
  font-weight: 700;
  font-size: 16px;
  color: var(--basecolor);
}
.food-pay-popup .price-items h6 {
  color: var(--basecolor);
  margin-top: 6px;
}
.food-pay-popup .pay-btn {
  font-size: 14px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 7px 10px;
  margin-left: auto;
}
[dir=rtl] .food-pay-popup .pay-btn {
  margin-left: unset;
  margin-right: auto;
}

.wood-btn{
  position: relative;
  background-color: var(--basecolor);
  color: #ffffff;
  font-weight: 500;
  font-size: calc(16px + 2 * (100vw - 320px) / 1600);
  border-radius: 8px;
}

.bill-btn{
  background-color: var(--backcolor);
  color: #ffffff;
  font-weight: 500;
  font-size: calc(16px + 2 * (100vw - 320px) / 1600);
  border-radius: 8px;
  border: 1.5px solid #603939;
}

.bill-btn:hover{
  background-color: var(--backhover);
  color: #ffffff;
  border: 1.5px solid #603939;
}

.wood-btn:hover{
  background-color: #341c1c;
  color: #ffffff;
  border-radius: 8px;
}

.addons-img{
  width: 40px;
}

/* Slider */
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
.option-container{
  max-width: 767px;
  width: 100%;
}

@media only screen and (max-width: 767px){
  .option-container{
    width: 90vw;
  }  
}

/* radio-container */
.opt-soldout {
    position: absolute;
    z-index: 1000;
    height: 60px;
    width: 60px;
    margin: 0.1rem;
    background-color: #00000080;
    border-radius: 5px;
  }

  .opt-soldout h6 {
    position: relative;
    color: #fff;
    margin-top: 40%;
    font-weight: bold;
  }

 .input-container {
    position: relative;
    height: 60px;
    width: 60px;
    margin: 0.1rem;
  }
  
  .input-container .radio-button {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    cursor: pointer;
  }
  
  .input-container .radio-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 1rem;
    transition: transform 300ms ease;
  }
  
  .menu-text {
    position: relative;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    margin-top: 20px;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgb(154, 188, 22);
  }
  
  .input-container .radio-button:checked + .radio-tile {
    background-color: var(--basecolor);
    color: white;
    transform: scale(1.1, 1.1);
  }
  
  .input-container .radio-button:checked + .radio-tile .icon svg {
    fill: white;
    background-color: #38741c;
  }
  
  .input-container .radio-button:checked + .radio-tile .radio-tile-label {
    color: white;
    background-color: #38741c;
  }

/* tingkat kematangan */
.maturity-radio-group {
  display: flex;
  flex-direction: column;
}

.maturity-radio-group .radio-label {
  display: flex;
  align-items: center;
  padding: 0.5em;
  margin-bottom: 0.5em;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.2s, border-color 0.2s;
}

.maturity-radio-group .radio-label:hover {
  background-color: #e6e6e6;
}

.maturity-radio-group .radio-input {
  position: absolute;
  opacity: 0;
}

.maturity-radio-group .radio-input:checked + .radio-label {
  background-color: var(--basecolor);
  border-color: var(--basehover);
  color: var(--white);
}

.maturity-radio-group .radio-input:focus + .radio-label {
  outline: 2px solid var(--basehover);
}

.maturity-radio-group .radio-inner-circle {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid #888;
  border-radius: 50%;
  margin-right: 0.5em;
  transition: border-color 0.2s;
  position: relative;
}

.maturity-radio-group .radio-label:hover .radio-inner-circle {
  border-color: #555;
}

.maturity-radio-group .radio-input:checked + .radio-label .radio-inner-circle {
  border-color: var(--basehover);
}

.maturity-radio-group .radio-input:checked + .radio-label .radio-inner-circle::after {
  content: '';
  display: block;
  width: 0.5em;
  height: 0.5em;
  background-color: var(--basecolor);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Sold Out */
@import url('https://fonts.cdnfonts.com/css/sepet');
.sold-out-text{
  font-family: 'Sepet', sans-serif;
  color: #fff;
  font-size: 23pt;
}

.sold-out-container{
  position: relative;
  width: 100%;
}

.sold-out-item{
  position: absolute;
  left: 0;
  width: 100%;
  height: 110vh;
  z-index: 11000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.sold-out-bg{
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 50%;
  background-color: #000000c9;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  z-index: 1001;
  max-width: 600px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

/* bg-image */
.bg-overlay{
  position: absolute;
  bottom: 0;
  left:50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  height: 100vh;
  background: linear-gradient(to bottom, transparent 0%, #152400 80%);
  z-index: 99;
}

.bg-image{
  position:absolute;
  top:0;
  height: 100%;
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  z-index: 2;
  left:50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}

/* back navigation */
.navigation-item{
  position: relative;
  width: 40px;
  height: 40px;
  background: var(--basecolor);
  margin-left: 25px;
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
}

.navigation-item:hover{
  background: var(--basehover);
}

.navigation{
  position: fixed;
  top: 20px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  z-index: 1000;
}

.addons1{
  position:absolute;
  top: 40px;
  width:50px;
  animation: float1 5s ease-in-out infinite;
}

@keyframes float1{
  0% {
		transform: translatey(0px) translateX(0px) rotate(0deg);
	}
	50% {
		transform: translateY(-10px) translateX(15px) rotate(20deg);
	}
	100% {
		transform: translatey(0px) translateX(0px) rotate(0deg);    
	}
}

.addons2{
  position:absolute;
  top: 200px;
  left: 25px;
  width:50px;
  transform: rotate(45deg);
  animation: float2 7s ease-in-out infinite;
}

@keyframes float2{
  0% {
		transform: translatey(0px) translateX(0px) rotate(0deg);
	}
	50% {
		transform: translateY(10px) translateX(-25px) rotate(-45deg);
	}
	100% {
		transform: translatey(0px) translateX(0px) rotate(0deg);    
	}
}

.addons3{
  position:absolute;
  top: 49vh;
  left: 25px;
  width:80px;
  transform: rotate(45deg);
  animation: float3 8s ease-in-out infinite;
}

@keyframes float3{
  0% {
		transform: translatey(0px) rotate(0deg);
	}
	50% {
		transform: translateY(30px) rotate(-60deg);
	}
	100% {
		transform: translatey(0px) rotate(0deg);    
	}
}

.addons4{
  position:absolute;
  top: 55vh;
  right: 25px;
  width:70px;
  transform: rotate(45deg);
  animation: float4 10s ease-in-out infinite;
}

@keyframes float4{
  0% {
		transform: translateY(0px) translateX(0px) rotate(0deg);
	}
	50% {
		transform: translateY(10px) translateX(30px) rotate(-80deg);
	}
	100% {
		transform: translateY(0px) translateX(0px) rotate(0deg);    
	}
}

.addons5{
  position:absolute;
  top: 20vh;
  right: 95px;
  width:60px;
  transform: rotate(45deg);
  animation: float5 6s ease-in-out infinite;
}

@keyframes float5{
  0% {
		transform: translateY(0px) translateX(0px) rotate(0deg);
	}
	50% {
		transform: translateY(10px) translateX(-10px) rotate(20deg);
	}
	100% {
		transform: translateY(0px) translateX(0px) rotate(0deg);    
	}
}

.addons6{
  position:absolute;
  top: 5vh;
  right: 35px;
  width:60px;
  transform: rotate(45deg);
  animation: float6 8s ease-in-out infinite;
}

@keyframes float6{
  0% {
		transform: translateY(0px) translateX(0px) rotate(0deg);
	}
	50% {
		transform: translateY(-20px) translateX(10px) rotate(180deg);
	}
	100% {
		transform: translateY(0px) translateX(0px) rotate(0deg);    
	}
}

.addons7{
  position:absolute;
  top: 8vh;
  left: 35px;
  width:60px;
  transform: rotate(90deg);
  animation: float7 10s ease-in-out infinite;
}

@keyframes float7{
  0% {
		transform: translateY(0px) translateX(0px) rotate(0deg);
	}
	25% {
		transform: translateY(-35px) translateX(-10px) rotate(90deg);
	}
	75% {
		transform: translateY(0px) translateX(10px) rotate(-70deg);
	}
  100%{
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
}
</style>
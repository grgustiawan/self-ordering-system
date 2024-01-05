<template>
  <div style="overflow: hidden;">
        <!-- header start -->
        <header>
            <div v-if="loading">
                <RestaurantImageLoaderVue style="width: 100%;"/>
            </div>
        
            <div v-if="!loading" class="head-panel-lg">
                <img class="restaurant-bg" src="/assets/images/background/restaurant-bg.jpg" alt="" />
                    <div class="custom-container">
                </div>
            </div>
        </header>
        <!-- header end -->

        <!-- Restaurant details section start -->
        <section class="restaurant-detail-container">
        <div class="custom-container">
            <div v-if="loading">
                <RestaurantDetailLoaderVue style="width: 100%;" />
            </div>

            <div v-if="!loading" class="restaurant-details-card">
                <div class="restaurant-head">
                    <div class="name">
                        <img class="img-fluid restaurant-logo" 
                            src="/assets/images/logo/tamani.png" 
                            alt="tamani-logo" />
                            
                        <div class="d-block ms-2" style="text-align: start;">
                            <h3>{{ String(profile.company_name).replace('TAMANI ', '') }}</h3>
                            <h6 style="margin-left: 0px;">{{ profile.address }}</h6>
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

                <div class="restaurant-details">
                    <div class="location">
                        <h6 class="pt-2 text-white">From Our Kitchen to Your Heart.</h6>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <!-- Restaurant details section end -->

        <!-- filter section start  -->
        <section class="food-filter">
        <div class="custom-container">
            <ul class="food-symbol">
            <!-- <li>
                <a href="#" class="food-types">
                <img class="img-fluid img" src="/assets/images/icons/promotion.svg" alt="veg" />
                <h6>Promotion</h6>
                <i class="ri-close-line close"></i>
                </a>
            </li> -->
            <!-- <li>
                <a href="#" class="food-types active">
                <img class="img-fluid img" src="/assets/images/icons/new-icon.svg" alt="non-veg" />
                <h6>All Food</h6>
                <i class="ri-close-line close"></i>
                </a>
            </li> -->
            <li v-show="!loading">
                <a href="#" class="food-types active">
                <i class="ri-award-fill award"></i>
                <h6>All Food</h6>
                <i class="ri-close-line close"></i>
                </a>
            </li>
            </ul>
        </div>
        </section>
        <!-- filter section end  -->

        <!-- food section start -->
        <section class="food-list-section section-b-space">
        <div class="custom-container">
            <div class="list-box">
            <h3 class="fw-semibold dark-text">Tamani Food Menu</h3>
            <div class="accordion food-accordion" id="accordionPanelsStayOpenaccordion1">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button collapsed" 
                                type="button" data-bs-toggle="collapse" 
                                data-bs-target="#panelsStayOpen-collapseOne" 
                                aria-expanded="true" aria-controls="collapseOne">
                                Featured Food
                        </button>
                    </h2>
                
                    <div v-if="loading" style="margin-top: 35px;">
                        <RestaurantFoodLoaderVue style="width: 100%;" />
                        <RestaurantFoodLoaderVue style="width: 100%;" />
                        <RestaurantFoodLoaderVue style="width: 100%;" />
                        <RestaurantFoodLoaderVue style="width: 100%;" />
                        <RestaurantFoodLoaderVue style="width: 100%;" />
                    </div>

                    <div id="panelsStayOpen-collapseOne" 
                         class="accordion-collapse collapse show" 
                         aria-labelledby="headingOne" data-bs-parent="#accordionExample ">
                        <div class="store-card" v-for="food in foods" :key="food.id">
                            <div class="store-out-stock"
                                 v-if="food.quantity === 0">
                                <span>Out Of Stock</span>
                            </div>

                            <div class="store-image-holder">
                                <img class="store-food-image" 
                                     :src="getImageUrl(food.image)" 
                                     :alt="food.image">
                            </div>

                            <div class="store-detail-card">
                                <img v-if="food.quantity > 0" 
                                     class="stock-icon" 
                                     src="/assets/images/icons/instock.png" 
                                     alt="in-stock" />

                                <img v-if="food.quantity === 0" 
                                     class="stock-icon" 
                                     src="/assets/images/icons/outstock.png" 
                                     alt="out-stock" />

                                <span class="store-food-name">{{ food.name }}</span>
                                <span class="store-food-desc">{{ food.category }}</span>
                                <span class="store-food-price">Rp. {{ formatPrice(food.price) }}</span>
                            </div>

                            <div class="store-add-btn" 
                                 @click="addToCart(
                                    food.option, 
                                    food.id,
                                    food.price,
                                    food.service_charge,
                                    food.tax,
                                    food.discount,
                                    food.name,
                                 )">
                                
                                <div v-if="processId === food.id" class="spinner center">
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                    <div class="spinner-blade"></div>
                                </div>

                                <img v-if="processId !== food.id" 
                                     style="width: 20px;" src="/assets/images/svg/add.svg" 
                                     alt="add-btn">
                            </div>
                        </div>

                        <div style="width: 100%;height: 20px;"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- food section end -->

        <div v-if="showNotification" class="added-notification">
            <span>{{ food }} added to cart</span>
        </div>
    
        <Footer></Footer>
        <NavbarVue />
  </div>
</template>

<script>
import NavbarVue from '../components/NavbarV2.vue';
import axios from 'axios';
import RestaurantFoodLoaderVue from '../components/loader/RestaurantFoodLoader.vue';
import RestaurantDetailLoaderVue from '@/components/loader/RestaurantDetailLoader.vue';
import RestaurantImageLoaderVue from '@/components/loader/RestaurantImageLoader.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'StoreView',
    components: {
        NavbarVue,
        RestaurantFoodLoaderVue,
        RestaurantDetailLoaderVue,
        RestaurantImageLoaderVue,
        Footer,
    },
    data(){
        return {
            foods: [ ],
            profile: {},
            loading: false,
            servers: '',
            food: null,
            showNotification: false,
            isProcessing: false,
            processId: null,
            cart: {
                food_id: null,
                food_name: null,
                foods: [],
                qty: 0,
                total: 0
            },
            items: {
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
        }
    },
    mounted(){
        this.loading = true;
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';
                
        axios.get( this.servers + '/cart/' + this.$route.query.scr)
        .then((res) => {
            if(res.data.is_submitted) this.$router.push({name: 'Submitted', query:{token: this.$route.query.scr}});
        })
        .catch(() => {
            window.location.href = "/"
        });

        this.getProfile()
        this.getAllFood()
    },
    methods: {
        async getAllFood(){
            this.loading = true;
            try {
                let { data } = await axios.get(this.servers + '/menus/' + this.$route.query.scr);
                this.foods = data.food;                
                this.loading = false;
            } catch(error) { 
                console.log(error)
                this.loading = true
                window.location.href = "/"
            }
        },
        async getProfile(){
            try {
                let { data } = await axios.get(this.servers + '/profile/' + this.$route.query.scr);
                this.profile = data;
            } catch(e){ console.log(e); }
        },
        getImageUrl(filename){
            let name = filename.replace("JPG", "png");
            return '/assets/images/food/tamani/' + name;
        },
        formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        async addToCart(opt, id, price, sc, tax, disc, name){
            if(this.isProcessing) return;
            this.isProcessing = true;
            this.processId = id
            this.cart.foods = [];

            if(opt > 0) {
                this.$router.push({name: 'Food', query:{id: id, scr: this.$route.query.scr}})
            } else {
                this.items.kode = id;
                this.items.harga = price;
                this.items.service_charge = sc;
                this.items.discount = disc;
                this.items.tax = tax;
                this.items.qty = 1;

                this.cart.food_id = id;
                this.cart.food_name = name;
                this.cart.foods.push(this.items);
                this.cart.qty = 1;
                this.cart.total = parseFloat(1 * price) + parseFloat(sc) + parseFloat((price * tax) / 100) - parseFloat((price * disc) / 100)
                
                await axios.post(this.servers + '/cart/' + this.$route.query.scr, this.cart)
                .then(() => {
                    this.food = name
                    this.showNotification = true
                    this.processId = null
                    setTimeout(() => {
                        this.food = null;
                        this.showNotification = false;
                        this.isProcessing = false;
                    }, 1500);
                }).catch((e) => {
                    this.isProcessing = false;
                    throw(e)                
                });
            }
        }
    }
}
</script>

<style>
.restaurant-bg{
    width:100%;
}

.restaurant-detail-container{
    margin-top:40px;
}

@media(min-width: 767px){
    .restaurant-detail-container{
        margin-top:140px;
    }
}

.head-panel-lg {
  position: relative;
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 184px;
}

.head-panel-lg .panel {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 30px;
  width: calc(100% - 40px);
}

.header-panel-lg .panel a {
  color: rgb(225, 225, 225);
  background: rgba(0, 0, 0, 0.25);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 100%;
  width: 34px;
  height: 34px;
  -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
  border: 1px solid transparent;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  z-index: 0;
  position: relative;
}

.head-panel-lg .panel a:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 100%;
  padding: 1px;
  background: linear-gradient(128.66deg, rgba(var(--white), 1) -1.63%, rgba(var(--white), 0) 92.16%);
  -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(var(--white), 1))) content-box, -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(var(--white), 1)));
  -webkit-mask: linear-gradient(rgba(var(--white), 1) 0 0) content-box, linear-gradient(rgba(var(--white), 1) 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: 1;
}

.restaurant-details-card {
  position: relative;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1.31%, #414449), color-stop(101.06%, #1f1f1f));
  background: linear-gradient(180deg, #414449 1.31%, #1f1f1f 101.06%);
  box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 14px;
  padding: 0 12px;
  margin-top: -80px;
  z-index: 1;
}
.restaurant-details-card .restaurant-head {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border-bottom: 1px dashed rgba(var(--dashed-line), 1);
  padding: 12px 0;
}
.restaurant-details-card .restaurant-head .name {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.restaurant-details-card .restaurant-head .name .restaurant-logo {
  width: 60px;  
  object-fit: contain;
}

@media (min-width: 768px){
    .restaurant-details-card .restaurant-head .name .restaurant-logo {
        width: 100px;  
        object-fit: contain;
    }   
}

.restaurant-details-card .restaurant-head .name h3 {
  font-weight: 700;
  color: var(--white);
}
.restaurant-details-card .restaurant-head .name h6 {
  margin-top: 5px;
  color: var(--white);
}
.restaurant-details-card .restaurant-head .option {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 15px;
  font-size: 20px;
}
.restaurant-details-card .restaurant-head .option .share {
  color: rgba(var(--dark-text), 1);
}
.restaurant-details-card .restaurant-head .option .heart {
  color: rgba(var(--error-color), 1);
}
.restaurant-details-card .restaurant-details {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 12px 0;
}
.restaurant-details-card .restaurant-details .location {
  width: 100%;
  margin-right: calc(10px + 10 * (100vw - 320px) / 1600);
  padding-right: calc(10px + 10 * (100vw - 320px) / 1600);
}
[dir=rtl] .restaurant-details-card .restaurant-details .location {
  border-right: unset;
  margin-right: unset;
  padding-right: unset;
  border-left: 1px solid rgba(var(--dashed-line), 1);
  margin-left: calc(10px + 10 * (100vw - 320px) / 1600);
  padding-left: calc(10px + 10 * (100vw - 320px) / 1600);
}
.restaurant-details-card .restaurant-details .location .rating-star {
  border-bottom: 1px solid rgba(var(--dashed-line), 1);
  padding-bottom: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 5px;
  color: rgba(var(--dark-text), 1);
}
.restaurant-details-card .restaurant-details .location .rating-star .star {
  width: 12px;
  height: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 8px;
  background-color: rgba(var(--success-color), 1);
  border-radius: 100%;
}
.restaurant-details-card .restaurant-details .location .rating-star .star i {
  color: rgb(255, 255, 255);
}
.restaurant-details-card .restaurant-details .distance {
  width: 40%;
  position: relative;
  z-index: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 6px;
}
.restaurant-details-card .restaurant-details .distance::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 6px;
  width: 1px;
  height: 30%;
  border-left: 1px dashed rgba(var(--theme-color), 1);
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  z-index: -1;
}
[dir=rtl] .restaurant-details-card .restaurant-details .distance::after {
  left: unset;
  right: 6px;
  border-left: unset;
  border-right: 1px dashed rgba(var(--theme-color), 1);
}
.restaurant-details-card .restaurant-details .distance li {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 5px;
  color: rgba(var(--dark-text), 1);
}
[dir=rtl] .restaurant-details-card .restaurant-details .distance li i {
  float: right;
}

/* card */
.store-card{
    position: relative;
    width: 100%;
    height: 140px;
    background: var(--white);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    border: 1.5px solid var(--border);
    box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    overflow: hidden;
}

.store-image-holder{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}

.store-food-image{
    width: 100%;
    max-width: 160px;
    cursor: pointer;
    transition: transform .5s ease;
}

.store-food-image:hover{
    transform: scale(120%);
}

.store-detail-card{
    position: relative;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
}

.stock-icon{
    position: relative;
    width: 32px;
    margin: 0 auto;
    margin-top: 10px
}

.store-food-name{
    font-family: 'Keskiyon Lumisade', sans-serif;                                                
    font-weight: normal;
    font-size: 11pt;
    color: #000000;
    margin-top: 10px;
    color: var(--dark);
    line-height: 17px;
}

.store-food-desc{
    font-size: 11pt;
    margin: 0;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;
}

.store-food-price{
    position: absolute;
    bottom: 5px;
    left: 0;
    font-size: 12pt;
    color:var(--basecolor);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-top: 10px
}

.store-add-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 35px;
    background: var(--basecolor);
    display: flex;
    justify-content: center;
    align-content: center;
    border-top-left-radius: 10px;
    cursor: pointer;
}

.store-add-btn:hover{
    background: var(--basehover);
}

.store-out-stock{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background: var(--screenoverlay);
    z-index: 15;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 18pt;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif
}

.added-notification{
    position: fixed;
    top: 30px;
    left:50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 90%;
    max-width: 580px;
    padding: 5px;
    border-radius: 10px;
    background: var(--success);
    color: var(--dark);
    display: flex;
    justify-content: center;
    align-items: center;    
    z-index:1000;
    border: 1px solid var(--border)
}
</style>
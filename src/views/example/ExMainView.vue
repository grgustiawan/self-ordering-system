<template>
    <div class="main-view">
        <SidebarVue />

        <header class="section-t-space">
            <div class="custom-container">
            <div class="header">
                <div class="head-content">
                    <button class="sidebar-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
                        <i class="ri-menu-line"></i>
                    </button>
                    <div class="header-location">
                        <h3 class="text-bold" style="font-weight: bolder">Tamani, Tomang</h3>
                    </div>
                    <span class="ex-quantity-text">0</span>
                </div>
                <img class="ex-shopping-bag" src="/assets/images/svg/shopping-bag.svg" alt="carts">
            </div>
            </div>
        </header>

        <SearchbarVue />

        <section class="banner-section section-t-space header-margin">
            <div class="custom-container">
                <div class="swiper banner1">
                    <div class="swiper-wrapper">
                        <Carousel :autoplay="2000" :wrap-around="true">
                            <Slide v-for="slide in 1" :key="slide">
                                <div class="swiper-slide">
                                        <img class="img-fluid ex-banner-img" src="assets/images/banner/banner1.jpg" alt="banner1" />
                                </div>
                            </Slide>
                            <Slide v-for="slide in 1" :key="slide">
                                <div class="swiper-slide">
                                        <img class="img-fluid ex-banner-img" src="assets/images/banner/banner2.jpg" alt="banner1" />
                                </div>
                            </Slide>
                            <Slide v-for="slide in 1" :key="slide">
                                <div class="swiper-slide">
                                        <img class="img-fluid ex-banner-img" src="assets/images/banner/banner3.jpg" alt="banner1" />
                                </div>
                            </Slide>
                            <Slide v-for="slide in 1" :key="slide">
                                <div class="swiper-slide">
                                        <img class="img-fluid ex-banner-img" src="assets/images/banner/banner4.jpg" alt="banner1" />
                                </div>
                            </Slide>
                            <Slide v-for="slide in 1" :key="slide">
                                <div class="swiper-slide">
                                        <img class="img-fluid ex-banner-img" src="assets/images/banner/banner5.jpg" alt="banner1" />
                                </div>
                            </Slide>

                            <template #addons>
                                <Pagination />
                            </template>
                        </Carousel>

                    <div class="swiper-pagination"></div>

                    </div>
                </div>
            </div>
        </section>

        <section class="section-t-space">
            <div class="custom-container">
            <div class="title">
                <h5 class="mt-0" style="font-weight: bold">Food Categories</h5>
                <a href="" ><h5>See All</h5></a>
            </div>

                <div class="ex-category-bg">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                        <Splide :options="{ rewind: true, 
                                            perPage: 5,
                                            type: 'loop', 
                                            drag: 'free',
                                            arrows: false,
                                            width: '100%',
                                            pagination: false,
                                            }" aria-label="Category Slider">
                            <SplideSlide v-for="ctg in category" :key="ctg.id">
                                <div class="ex-category-products mx-1">
                                    <div class="swiper-slide"> 
                                        <div class="product-box product-box-bg"> 
                                            <a href="" class="product-box-img">
                                                <img class="img-fluid ex-ctg-props" :src="getCategoryImg(ctg.image)" alt="p1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-t-space">
            <div class="custom-container">
                <div class="title">
                    <h5 class="mt-0">Recommended For You</h5>
                    <a href=""><h5>See All</h5></a>
                </div>
                
                <div class="swiper">
                <div class="swiper-wrapper">
                <Splide class="food-slider" :options="{ rewind: true, 
                                                        perPage: 3,
                                                        type: 'loop', 
                                                        drag: 'free',
                                                        arrows: false,
                                                        width: '100%',
                                                        pagination: false,
                                                        }" aria-label="Category Slider">
                    <SplideSlide v-for="food in makanan" :key="food.id">
                        <div class="carousel__item" style="margin-left: 5px">
                            <div class="ex-food-products">
                                <div class="swiper-slide">
                                    <div class="product-box product-box-bg">
                                        <a class="product-box-img">
                                            <img class="img-fluid ex-food-props" :src="getFoodImg(food.image)" alt="p1" />
                                        </a>
                                        <div class="product-box-detail">
                                            <h6 v-text="food.name"></h6>
                                            <ul class="timing">
                                            <li>
                                                <span class="star"><i class="ri-star-s-fill"></i></span>
                                                <span v-text="food.order_count"></span> sold
                                            </li>
                                            <li></li>
                                            </ul>
                                            <div class="bottom-panel">
                                            <div class="price text-danger">{{ formatPrice(parseInt(food.price)) }}</div>
                                            <a href="" class="cart mb-0">
                                                <i class="ri-shopping-cart-2-fill"></i>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
                </div>
            </div>
            </div>
        </section>

        <section class="section-t-space" style="margin-top: -20px">
            <div class="custom-container">
                <div class="title">
                    <h5 class="mt-0">Special Combo</h5>
                    <a href=""><h5>See All</h5></a>
                </div>

                <div class="swiper">
                <div class="swiper-wrapper">
                <Splide style="margin-top: -25px" :options="{ rewind: true, 
                                    perPage: 3, 
                                    pagination: false,
                                    type: 'loop', 
                                    drag: 'free',
                                    arrows: false}" aria-label="My Favorite Images">
                    <SplideSlide v-for="cmb in combo" :key="cmb.id">
                            <div class="food-products" style="margin-left: 5px">
                                <div class="swiper-slide"> 
                                    <div class="product-box product-box-bg"> 
                                        <a href="" class="product-box-img">
                                            <img class="img-fluid food-props" :src="getFoodImg(cmb.image)" alt="p1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </SplideSlide>
                </Splide>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
import SidebarVue from '@/components/Sidebar.vue'
import SearchbarVue from '@/components/Searchbar.vue'

import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';
export default {
    name: 'ExMainView',
    components: {
        SidebarVue,
        SearchbarVue,
        Carousel,
        Pagination,
        Slide,
        Splide,
        SplideSlide
    },
    data(){
        return{
            category: [
                { id: 1, image: 'burger.png'},
                { id: 2, image: 'pizaa.png'},
                { id: 3, image: 'pasta.png'},
                { id: 4, image: 'eggs.png'},
                { id: 5, image: 'drinks.png'},
                { id: 6, image: 'chicken.png'},
                { id: 7, image: 'biryani.png'},
            ],
            makanan: [
                {id: 1, name: 'Nasi Goreng', price: 25000, order_count: 327, image: 'fried-rice.png'},
                {id: 2, name: 'Nasi Rendang', price: 30000, order_count: 451, image: 'nasi-rendang.png'},
                {id: 3, name: 'Tongseng', price: 27000, order_count: 226, image: 'tongseng.png'},
                {id: 4, name: 'Soto', price: 22000, order_count: 377, image: 'soto.png'},
            ],
            combo: [
                {id: 1, name: 'Nasi Goreng', price: 25000, order_count: 327, image: 'fried-rice.png'},
                {id: 2, name: 'Nasi Rendang', price: 30000, order_count: 451, image: 'nasi-rendang.png'},
                {id: 3, name: 'Tongseng', price: 27000, order_count: 226, image: 'tongseng.png'},
                {id: 4, name: 'Soto', price: 22000, order_count: 377, image: 'soto.png'},
            ]
        }
    },
    methods:{
        getCategoryImg(filename){
            return 'assets/images/product/' + filename;
        },
        getFoodImg(filename){
            return 'assets/images/food/thumbnails/' + filename;
        },
        formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>

<style>
.ex-shopping-bag{
    width: 30px;
    height: auto;
    margin-left: 5px;
    margin-top: -5px;
}

.ex-quantity-text{
    position: absolute;
    margin-top: 20px;
    right: -81%;
    font-size: 11pt;
    top: 10px;
    font-weight:600;
    left: -25px;
    color: rgb(255, 255, 255)
}

.main-view{
    height: 100%;
    overflow-y: scroll;
    border-radius: 25px;
}

.main-view::-webkit-scrollbar {
    width: 6px;
    height: 30px;
    opacity: 0
}
 
.main-view::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);  
    border-radius: 30px;
    opacity: 0
}
 
.main-view::-webkit-scrollbar-thumb {
    background: #91c32600;
    border-radius: 30px;  
    opacity: 0
}

.ex-banner-img{
    border-radius: 10px;
    width: 90%;
    height: auto;
}

.ex-category-bg{
background-image: linear-gradient(113deg,#c2f4ae,#55e6c9 50%,#a0efb6 85%,#a0efb6, #6fe9c1);
position: relative;
background-position: center;
margin-bottom: 3px;
padding: 0 3px;
border-radius:20px;
}

.ex-ctg-props {
margin-top: 30px;
width: 35px;
height: 35px;
}

.ex-food-slider{
margin-bottom: 3px;
}

.ex-category-products {
margin-top: 3px;
margin-bottom: 15px;
}
.ex-category-products .product-box {
position: relative;
border: 2px solid;
border-image-source: linear-gradient(180deg, rgba(var(--black), 0) -3.45%, rgba(var(--black), 0.12) 87.93%);
-webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.2);
border-radius: 10px;
overflow: visible;
}
[dir=rtl] .ex-category-products .product-box {
direction: rtl;
}
.ex-category-products .product-box-bg {
margin-top:15px;
background-image: linear-gradient(113deg,#ffffff,#ebebeb 50%,#e7e7e7 85%,#dddddd, #d9d9d9);
}
.ex-category-products .product-box-bg a {
border-radius: 8px;
margin-bottom: 8px;
}
.ex-category-products .product-box-bg .product-box-detail {
background-color: transparent !important;
padding: 0 !important;
}
.ex-category-products .product-box .product-box-img {
margin-top: -30px;
margin-bottom: 0px;
display: block;
}
.ex-category-products .product-box .product-box-detail h5 {
color: rgba(var(--dark-text), 1);
font-size: 3%;
font-weight: 600;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}

.ex-category-products .product-box .product-box-detail .timing li {
position: relative;
font-size: 13px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
gap: 5px;
color: rgba(var(--dark-text), 1);
}

/* food */
.ex-food-props {
  margin-top: 60px
}

.ex-food-slider{
  margin-top: -50px;
  margin-bottom: 8px;
}

.ex-food-products {
  padding-top: 33px;
  margin-top: 5px;
  margin-bottom: 15px;
}

.ex-food-products .product-box {
  margin: 5px 0px;
  position: relative;
  border: 2px solid;
  border-image-source: linear-gradient(180deg, rgba(var(--black), 0) -3.45%, rgba(var(--black), 0.12) 87.93%);
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.09);
          box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: visible;
}
[dir=rtl] .ex-food-products .product-box {
  direction: rtl;
}
.ex-food-products .product-box-bg {
  background-color: rgba(var(--black), 0);
  margin: 0;
}
.ex-food-products .product-box-bg a {
  border-radius: 8px;
  margin: 0;
}
.ex-food-products .product-box-bg .product-box-detail {
  background-color: transparent !important;
  padding: 0 !important;
  margin: 0;
}
.ex-food-products .product-box .product-box-img {
  margin-top: -50px;
  width: 80px;
  display: block;
}

.ex-food-products .product-box .product-box-detail h5 {
  color: rgba(var(--dark-text), 1);
  font-size: 3%;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ex-food-products .product-box .product-box-detail .timing li {
  position: relative;
  font-size: 13px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 5px;
  color: rgba(var(--dark-text), 1);
}




.ex-food-products .product-box .product-box-detail .timing li:last-child::after {
  display: none;
}

.ex-food-products .product-box .product-box-detail .timing li .star {
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

.ex-food-products .product-box .product-box-detail .timing li .star i {
  color: rgb(225, 225, 225);
}

[dir=rtl] .ex-food-products .product-box .product-box-detail .timing li::after {
  margin-left: unset;
}

.ex-food-products .product-box .product-box-detail .bottom-panel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 0;
  margin-top: 10px;
}
.ex-food-products .product-box .product-box-detail .bottom-panel .price {
  color: rgba(var(--dark-text), 1);
  font-size:7pt;
  font-weight: 600;
}
.ex-food-products .product-box .product-box-detail .bottom-panel .cart {
  width: 25px;
  height: 25px;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background: rgba(var(--theme-color), 0.2);
  border-radius: 100%;
}

.ex-food-products .product-box .product-box-detail .bottom-panel .cart i {
  color: rgba(var(--theme-color), 1);
}
</style>
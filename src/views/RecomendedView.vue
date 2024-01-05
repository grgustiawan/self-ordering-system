<template>
    <div>
      <div class="category-top-background">
          <h2 class="category-title">Recomended For You</h2>
      </div>
  
      <!-- header start -->
      <header class="section-t-space">
        <div class="custom-container">
          <div class="header-panel">
            <router-link :to="{name: 'Main', query: {scr: this.$route.query.scr}}">
              <i class="ri-arrow-left-s-line"></i>
            </router-link>
            
          </div>
        </div>
      </header>
      <!-- header end -->
  
      <!-- food section start -->
      <section class="products section-t-space section-b-space" style="margin-top: 100px;">
        <div class="custom-container">
          <div class="row gy-4">
            
              <div class="col-6 pt-4" v-for="ctg in recomended.slice(0, 6)" :key="ctg.id">
                  <div class="category-detail-wrapper">
                      <div class="category-detail-body"> 
                          <lord-icon
                              src="https://cdn.lordicon.com/rjzlnunf.json"
                              trigger="hover"
                              colors="primary:#603939,secondary:#e86830"
                              stroke="80"
                              style="position: absolute;top:5px;right:10px;width:32px;height:32px">
                          </lord-icon>
  
                          <a href="">
                              <img class="category-detail-img" :src="getFoodImg(ctg.image)" alt="">
                          </a>
  
                          <div class="category-detail-content">
                              <h2>{{ ctg.name }}</h2>
                              <div class="category-detail-rating">
                                  <lord-icon
                                      src="https://cdn.lordicon.com/snnvmbic.json"
                                      trigger="morph"
                                      colors="outline:#603939,primary:#f4f19c,secondary:#e8e230"
                                      style="width:32px;height:32px">
                                  </lord-icon>
  
                                  <span class="category-detail-ratingtext">4.7</span>
                              </div>
  
                              <div class="category-detail-footer">
                                  <a href="" class="category-detail-cart">
                                      <div class="category-detail-price">{{ formatPrice(ctg.price) }}</div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
  
              </div>
  
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
      name: 'RecomendedView',
      data(){
          return{
              recomended: [],
              loading: false
          }
      },
      mounted(){
          this.getRecomended()
      },
      methods: {
          async getRecomended(){
              this.loading = true
              try {
                  let { data } = await axios.get(this.tamani + '/menus/' + this.$route.params.token)
                  this.recomended = data
                  this.loading = false
              } catch (e) {
                  this.loading = true
              }
          },
          getFoodImg(filename){
              let name = String(filename).replace("JPG", "png");
              return '/assets/images/food/tamani/' + name;
          },
          formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
      }
  
  }
  </script>
  
  <style>
  @import url('https://fonts.cdnfonts.com/css/first-school');
  @import url('https://fonts.cdnfonts.com/css/sf-action-man');
  @import url('https://fonts.cdnfonts.com/css/xsderminatoer');
                  
  .section-t-space{
      z-index: 100;
  }
  
  .category-title{
      position: absolute;
      margin-top:40px;
      margin-left: 20px;
      font-family: 'Xsderminatoer', sans-serif;
      font-size: 31pt;
      color: #fff;
  }
  
  .category-imgs{
      position: absolute;
      bottom: 0px;
      left: 30px;
      width: 150px;
  }
  
  .category-top-background{
      position: absolute;
      top: -20px;
      left:50%;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
      margin-left: 45px;
      max-width: 600px;
      width: 100%;
      height: 220px;
      background-color: #f5835e;
      background-image: url('@/assets/backgrounds/pink-doodl-banner.png');
      background-size: 100% ;
      object-fit: cover;
      background-position: center;
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
  }
  
  .category-detail-wrapper{
      position: relative;
      width: 250px;
      height: 350px;
      background-color: #fff9f4;
      background-image: url('@/assets/backgrounds/fast-food-doodle.png');
      background-size: 100%;
      object-fit: cover;
      border-radius: 20px;
      border: 2.5px solid #603939;
      margin: 5px 50px;
      overflow: hidden;
  }
  
  .category-detail-body{
      position: relative;
      top: 5%;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
      left: 50%;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
      width: 90%;
      height: 90%;
      background-color: #efe1d3;
      border: .5px solid #603939;
      box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: .3s ease;
      border-radius: 20px;
      overflow: hidden;
  }
  
  .category-detail-img{
      position: relative;
      top: 0px;
      width: 220px;
      filter: drop-shadow(5px 5px 2px #00000079);
      transition: .3s ease;
  }
  
  .category-detail-img:hover{
      transform: scale(120%);
  }
  
  .category-detail-content{
      display: flex;
      flex-direction: column;
  }
  
  .category-detail-content h2{
      width: 200px;
      left:50%;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
      position: relative;
      top: -5px;
      font-family: 'First School', sans-serif;
      font-size: 12pt;                                                
      color: #603939;
  }
  
  .category-detail-rating{
      position: absolute;
      bottom: 15px;
      left: 10px;
  }
  
  .category-detail-ratingtext{
      position: absolute;
      margin-top: 2px;
      margin-left: 5px;
      font-family: 'SF Action Man', sans-serif;
      font-size: 15pt;
      color: #f5835e;
  }
  
  .category-detail-cart{
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: 35px;
      background-color: #ff875fa4;
      border-radius: 30px;
      text-align: center;
      padding-top: 2px ;
      font-family: 'SF Action Man', sans-serif;
      color: #603939;
      font-size: 15pt;
  }
  .category-detail-cart:hover{
      background-color: #ff875f;
      border-radius: 30px;
  }
  </style>
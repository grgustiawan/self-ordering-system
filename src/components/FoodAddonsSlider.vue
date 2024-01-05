<template>
    <div>
      
      <section class="section-t-space">
          <div class="custom-container">
              <div class="options">
                  <div class="title">
                      <h3 class="mt-0">Addons</h3>
                  </div>
  
                  <div class="swiper">
                      <div class="options-wrapper ratio_square">
                          <Carousel :itemsToShow="4" :snapAlign="start" :transition="500">
                              <Slide v-for="opt in addons" :key="opt.id">
  
                                      <div class="containers">
                                          <label class="option_item food-categories">
                                              <input name="addons" id="addons" type="radio" class="radio" :value="opt.id">
                                              <div class="option_inner reddit p-0">
                                                  <img class="img-fluid categories-img mt-2" :src="getImgUrl(opt.image)" alt="image" />
                                              </div>
                                              <h5 v-text="opt.name"></h5>
                                          </label>    
                                      </div>          
  
                              </Slide>
                          </Carousel>
                      </div>
                  </div>
                              
              </div>
          </div>
      </section>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { Carousel, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  
  export default {
      name: 'FoodAddonsSlider',
      components: {
          Carousel,
          Slide
      },
      data(){
          return {
              addons: [ ],
          }
      },
      beforeMount(){
          axios.get('http://tamani-app.test/api/v1/food/addons/'+ this.$route.params.id + '/' + this.$route.params.token)
          .then((res) => {
              this.addons = res.data.data
              console.log(this.addons)
          })
          .catch((err) => {
              console.log(err)
          });
      },
      methods: {
          getImgUrl(filename){
              return 'http://tamani-app.test/assets/images/addons/' + filename;
          }
      }
  }
  </script>
  
  <style>
  
  .options-wrapper{
      direction: ltr;
      margin-top: 8px;
      padding-bottom: 20px;
  }
  
  .options-wrapper .food-categories{
      -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.2);
      padding: 5px 5px;
  }
  
  .options-wrapper .food-categories .categories-img {
      width: 300px;
  }
  
  
  .containers {
  display: flex;
  width: 65px;
  flex-wrap: wrap;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-top:0px;
  }
  
  .containers .food-categories{
      background: linear-gradient(113deg,#c2f4ae,#a0efb6 85%,#a0efb6, #6fe9c1);
      border-radius: 5px
  }
  
  .containers .option_item {
  padding: 0;
  display: block;
  position: relative;
  width: 65px;
  height: 65px;
  color: rgb(154,188,22);
  }
  
  .containers .option_item .radio {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  }
  
  .option_item .option_inner {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  color: rgb(56, 56, 56);
  display: block;
  border: 2px solid transparent;
  position: relative;
  }
  
  .option_item .option_inner .icon {
  margin-bottom: 10px;
  }
  
  .option_item .option_inner .icon .fab {
  font-size: 32px;
  }
  
  .option_item .option_inner .name {
  user-select: none;
  }
  
  .option_item .radio:checked ~ .option_inner.facebook {
  border-color: #3b5999;
  color: #3b5999;
  }
  
  .option_item .radio:checked ~ .option_inner.twitter {
  border-color: #55acee;
  color: #55acee;
  }
  
  .option_item .radio:checked ~ .option_inner.instagram {
  border-color: #e4405f;
  color: #e4405f;
  }
  
  .option_item .radio:checked ~ .option_inner.linkedin {
  border-color: #0077b5;
  color: #0077b5;
  }
  
  .option_item .radio:checked ~ .option_inner.whatsapp {
  border-color: #25d366;
  color: #25d366;
  }
  
  .option_item .radio:checked ~ .option_inner.google {
  border-color: #dd4b39;
  color: #dd4b39;
  }
  
  .option_item .radio:checked ~ .option_inner.reddit {
  border-color: #ff5700;
  color: #ff5700;
  }
  
  .option_item .radio:checked ~ .option_inner.quora {
  border-color: #b92b27;
  color: #b92b27;
  }
  
  .option_item .option_inner .tickmark {
  position: absolute;
  top: 0;
  left: 0;
  border: 20px solid;
  border-color: #000 transparent transparent #000;
  display: none;
  }
  
  .option_item .option_inner .tickmark:before {
  content: "";
  position: absolute;
  top: -18px;
  left: -18px;
  width: 15px;
  height: 5px;
  border: 3px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-45deg);
  }
  
  .option_item .radio:checked ~ .option_inner .tickmark {
  display: block;
  }
  
  .option_item .option_inner.facebook .tickmark {
  border-color: #3b5999 transparent transparent #3b5999;
  }
  
  .option_item .option_inner.twitter .tickmark {
  border-color: #55acee transparent transparent #55acee;
  }
  
  .option_item .option_inner.instagram .tickmark {
  border-color: #e4405f transparent transparent #e4405f;
  }
  
  .option_item .option_inner.linkedin .tickmark {
  border-color: #0077b5 transparent transparent #0077b5;
  }
  
  .option_item .option_inner.whatsapp .tickmark {
  border-color: #25d366 transparent transparent #25d366;
  }
  
  .option_item .option_inner.google .tickmark {
  border-color: #dd4b39 transparent transparent #dd4b39;
  }
  
  .option_item .option_inner.reddit .tickmark {
  border-color: #ff5700 transparent transparent #ff5700;
  }
  
  .option_item .option_inner.quora .tickmark {
  border-color: #b92b27 transparent transparent #b92b27;
  }
  
  </style>
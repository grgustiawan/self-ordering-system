<template>
  <div v-show="explorePromotion.is_reserv === false">
    <divider></divider>
    <section class="section-t-space">
        <div class="w-100" v-if="loading">
            <PromotionLoader />
        </div>

        <div v-if="!loading" class="custom-container">
        <div class="title">
            <h3 class="mt-0">Explore Promotions</h3>
        </div>
        <div class="row gy-3">
            <div v-for="promotion in explorePromotion.food.slice(21, 28)" :key="promotion.id">
                <div class="col-12">
                  <div class="promotion-container" style="width: 100%;background-color: #fffaf6;border: 1px solid #603939;border-radius: 15px;overflow: hidden;">
                      <div class="row col-12">
                          <div class="promotion-image" style="width: 40%">
                              <div class="col position-relative" style="height: 100%;">
                                  <img class="foodpromo-img" :src="getImageUrl(promotion.image)" alt="">
                                  <div class="foodpromo-disc">
                                      <span class="text-white" style="position: relative;top: 12px">50% OFF</span>
                                  </div>  
                              </div>
                          </div>
                          <div style="width: 60%">
                              <div class="col">
                                  <div class="col-12" style="padding-top: 15px;padding-left: 10px;">
                                      <h5 style="font-size: 13pt;font-weight: bold;">{{ promotion.name }}</h5>
     
                                      <div class="container__text__star">
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                          <span class="fa fa-star checked"></span>
                                      </div>

                                      <p class="text-start" style="width: 100%;margin: 0;margin-top: 10px;padding: 0;">
                                          If you're fan of caramel cake, then you'll love our Caramel Cake Pancakes.
                                      </p>
                                      
                                      <div class="d-flex justify-content-between">
                                          <div style="width: 70%;">
                                              <h4 class="text-start mt-3 mb-1 text-secondary">Promotion End</h4>
                                              <div class="row text-danger" style="width: 90%;">
                                                  <div style="width: 30%;">
                                                      <h2>24</h2>
                                                  </div>
                                                  <div style="width: 40%;">
                                                      <h2>Jul</h2>
                                                  </div>
                                                  <div style="width: 30%">
                                                      <h1>2023</h1>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="add-button">
                                              <a class="btn btn-outline" style="border: 1px solid #603939;padding: 0;width: 100%;background-color: #fffaf6;">
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/ejxwvtlg.json"
                                                    trigger="hover"
                                                    colors="outline:#603939,primary:#109121,secondary:#faefd1"
                                                    stroke="100"
                                                    style="width:30px;left: -20px;top: 3px">
                                                </lord-icon>
                                                <span style="position: absolute;margin-top: 8px;margin-left: -20px;">ADD</span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
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
import PromotionLoader from './loader/PromotionLoader.vue'
import Divider from './Divider.vue'
export default {
    name: 'ExplorePromotion',
    components: {
        PromotionLoader, Divider
    },
    data(){
        return {
            explorePromotion: [ ],
            loading: false,
            servers: '',
        }
    },
    beforeMount(){
        this.loading = true;
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';

        this.getPromotion()
    },
    methods: {
        async getPromotion(){
            this.loading = true;
            try {
                let { data } = await axios.get(this.servers + '/menus/' + this.$route.query.scr);
                this.explorePromotion = data;
                this.loading = false;
            } catch (e) { 
                this.loading = true;
            }
        },
        getImageUrl(filename){
          let name = String(filename).replace("JPG", "png");
          return '/assets/images/food/tamani/' + name;
        },
        formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    },
}
</script>

<style>
.promotion-image{
  height: 225px;
  background-image: url('../assets/backgrounds/promotion-background.jpg');  
  background-repeat: no-repeat;
  background-size: cover;
}

.container__text__star span {
  font-size: 0.8rem;
  color: #ffa800;
  margin: -5px 0 0px;
}

.add-button{
    width: 30%;
    margin-top: 30px
}

.foodpromo-img{
    width: 100%;
}

.foodpromo-disc{
    position: absolute;
    bottom: 0;
    width: 106%;
    height: 50px;
    background-color: #343434ab;
    z-index: 100;padding: 0;
}

@media only screen and (max-width: 767px){
    .promotion-image{
        height: 230px;
    }

    .foodpromo-img{
        width: 100%;
        margin-top: 40%;
    }

    .foodpromo-disc{
        width: 110%;
    }

    .add-button{
        position: absolute;
        right: 10px;
        width: 70px;
        margin-top: 10px;
        margin-left: 10px;
    }   
}
</style>
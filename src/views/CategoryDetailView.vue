<template>
  <div class="foodpage-wrapper">
    <div v-show="loading" style="width: 100%; 
                                background-size: cover;
                                background-repeat: no-repeat;
                                border-bottom-left-radius: 30px;
                                border-bottom-right-radius: 30px;
                                overflow: hidden;
                                padding: 0;">
        <banner-loader-vue style="width: 100%"></banner-loader-vue>
        
        <div class="row" style="margin-left: 0px;">
            <div class="pt-4" style="width: 50%;">
                <NewComingLoader />
            </div>
            <div class="pt-4" style="width: 50%;">
                <NewComingLoader />
            </div>
            <div class="pt-4" style="width: 50%;">
                <NewComingLoader />
            </div>
            <div class="pt-4" style="width: 50%;">
                <NewComingLoader />
            </div>
            <div class="pt-4" style="width: 50%;">
                <NewComingLoader />
            </div>
            <div class="pt-4" style="width: 50%;">
                <NewComingLoader />
            </div>
        </div>
    </div>

    <div v-show="!loading" class="category-banner-wrapper">
        <img class="bg-category-detail" 
             id="bg-image" 
             alt="bg">
        <div style="position: absolute;
                    bottom: 0;
                    left:0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, transparent 0%, #0019179a 100%);
                    z-index: 2;">
        </div>

        <div class="ctg-navigation">
            <div class="ctg-navigation-item" @click="$router.go(-1)">
            <i class="ri-arrow-left-s-line" style="font-size: 22pt;font-weight:bolder"></i>
            </div>
        </div>

        <div style="z-index: 10;">
            <div style="position: absolute;width: 100%;text-align:center;z-index: 12;top: 25px">
                <h1 class="category-text">{{ category.name }}</h1>    
            </div>
        </div>
    </div>

    <div class="row fooddetail-container col-12">
        <div class="col-lg-6 fooddetail-card" v-for="ctg in category.menu" :key="ctg.id">
            <div class="fooddetail-sold" v-show="ctg.quantity == 0 || getWeekdays(ctg.weekday)">
                <h1 class="text-white">Out Of Stock</h1>
                <h1 v-show="getWeekdays(ctg.weekday)" class="text-white">Item Closed Today</h1>
            </div>
            <div class="fooddetail-body"> 
                <router-link :to="{name: 'Food', query: {id: ctg.id, scr: this.$route.query.scr}}">
                    <img class="fooddetail-img" :src="getCategoryImg(ctg.image)" alt="">
                </router-link>

                <div class="col mt-4">
                    <h2 class="fooddetail-name">{{ ctg.name }}</h2>
                    <span class="text-danger" 
                          style="font-size: 15pt;
                          font-family: 'SF Action Man', sans-serif;">
                          {{ formatPrice(ctg.price) }}
                    </span>
                </div>

                <div class="col">
                    
                </div>

            </div>
        </div>
    </div>

  </div>
</template>

<script>
import BannerLoaderVue from '@/components/loader/BannerLoader.vue'
import NewComingLoader from '@/components/loader/NewComingLoader.vue'
import axios from 'axios'
export default {
    name: 'CategoryDetailView',
    components: {
        BannerLoaderVue,
        NewComingLoader,
    },
    data(){
        return{
            category: [],
            loading: false,
            servers: '',
        }
    },
    mounted(){
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';
        
        this.loading = true;
        this.getValidate();
        axios.get( this.servers + '/cart/' + this.$route.query.scr)
        .then((res) => {
            if(res.data.is_submitted) this.$router.push({name: 'Submitted', params: {token: this.$route.query.scr}});
        });

        this.getCategory()  
    },
    methods: {
        async getValidate(){
            try {await axios.get(this.servers + '/home/' + this.$route.query.scr);} 
            catch(e){this.$router.push('/')}
        },
        async getCategory(){
            this.loading = true
            try {
                let { data } = await axios.get(this.servers + '/category/' + this.$route.query.id + '/' + this.$route.query.scr)
                this.category = data

                const bg = document.getElementById('bg-image')
                if(this.category.name == 'SOUP & SALADS') bg.src = '/assets/images/background/fresh.jpg'
                else if (this.category.name == 'WESTERN FAVOURITES') bg.src = '/assets/images/background/meat.jpg'
                else if (this.category.name == 'BURGER') bg.src = '/assets/images/background/burger.jpg'
                else if (this.category.name == 'TASTE OF ASIA') bg.src = '/assets/images/background/asia.jpg'
                else if (this.category.name == 'APPETIZER') bg.src ='/assets/images/background/appetizer.jpg'
                else if (this.category.name == 'DRINK & DESSERT') bg.src = '/assets/images/background/drink.jpg'
                else bg.src = '/assets/images/background/side.jpg'

                this.loading = false
            }catch(e){console.log(e.response.data)}
        },
        getCategoryImg(filename){
            let name = String(filename).replace("JPG", "png");
            return '/assets/images/food/tamani/' + name;
        },
        getImg(filename){
            let name = String(filename).replace("JPG", "png");
            return '/assets/images/product/tamani/' + name;
        },
        formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        getWeekdays(days){
            const array = String(days).split(",").slice(0, -1);
            const convert = [];
            array.forEach(element => {
                convert.push(parseInt(element))
            });
            
            const day = new Date().getDay();
            let number = day + 1;
            const filter = convert.includes(number);
            return filter;
        }
    }

}
</script>

<style>
.bg-category-detail{
    position: absolute;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.category-text{
    margin-left: 22px;
    font-family: 'Quadrus Semicond', sans-serif;
    text-shadow: -1px -1px 0 var(--dark), 3px -1px 0 var(--dark), -1px 3px 0 var(--dark), 3px 3px 0 var(--dark);
    font-size: 20pt;
    color: var(--white);
}

.category-back{
    margin-top: -16px;
    font-size: 30pt;
    font-weight: bolder;
    color: var(--basecolor);
}

.category-back:hover{
    color: #fff;
}

.category-banner-wrapper{
    position: relative;
    width: 100%;
    height: 250px; 
    background-color: beige;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;
    box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.category-images{
    position: relative;
    width: 150px;
    top: 100px;
    z-index: 11;
}

.category-eat{
    position: relative;
    bottom: 0;
    top: 57px;
    width: 200px;
    right: -30px;
    z-index: 10;
}

@media (max-width: 767px){
    .category-eat{
        position: relative;
        bottom: 0;
        top: 57px;
        width: 200px;
        margin-left: 0;
        right: -30px;
    }   
}


.fooddetail-container{
    width: 100%;
    padding: 0px 10px;
    margin: 0 auto;
    margin-top: 10px;
}

.fooddetail-sold{
    position: absolute;
    background-color: #00000080;
    background-size: cover;
    width: 46%;
    height: 280px;
    border-radius: 20px;
    margin: 10px 1%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
}

.fooddetail-card{
    background-color: antiquewhite;
    background-image: url('../assets/backgrounds/fast-food-doodle.jpg');
    background-size: cover;
    box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 48%;
    height: 280px;
    border-radius: 20px;
    margin: 10px 1%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fooddetail-body{
    background-color: var(--white);
    border: 1px solid var(--gray);
    border-radius: 20px;
    height: 100%;
    width: 100%;
}

.fooddetail-img{
    position: relative;
    top: 20px;
    width: 90%;
    filter: drop-shadow(5px 5px 2px #00000079);
    transition: .3s ease;
}

.fooddetail-img:hover{
    transform: scale(120%);
}

.fooddetail-content{
    display: flex;
    flex-direction: column;
}

.fooddetail-name{
    width: 100%;
    left:50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    position: relative;
    top: -5px;
    font-family: 'First School', sans-serif;
    font-size: 12pt;                                                
    color: #603939;
}

.basket-icon{
    position: absolute;
    width:40px;
    height:40px;
    margin: 0;
}

@media (min-width: 480px){
    .fooddetail-container{
        padding-left: 1%;
    }

    .fooddetail-card{
        margin: 10px 1%;
        height: 350px;
    }

    .basket-wrapper{
        margin-top: 20px;
        margin-left: 60px;
    }

    .fooddetail-sold{
        width: 280px;
        height: 350px;
    }
}

/* back navigation */
.ctg-navigation-item{
  position: relative;
  width: 40px;
  height: 40px;
  background: var(--basecolor);
  margin-left: 5px;
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
}

.ctg-navigation-item:hover{
    background: var(--basehover);
}

@media(min-width: 768px){
  .ctg-navigation-item{
    margin-left: 15px;
  }
}

.ctg-navigation{
  position: absolute;
  top: 20px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  max-width: 640px;
  z-index: 1000;
}
</style>
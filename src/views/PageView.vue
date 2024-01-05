<template>
    <div>
        <div class="page-header">
            <header class="section-t-space">
                <div class="navigation-container">
                    <div class="header-panel">
                    <router-link :to="{name: 'Main', params: { token: this.$route.params.token}}">
                        <i class="ri-arrow-left-s-line"></i>
                    </router-link>
                    <h2 v-text="page.promotion_name"></h2>
                    </div>
                </div>
            </header>
            <div v-if="loading" class="loader-container">
                <BannerLoader />
            </div>
            <div v-if="!loading">
                <img class="page-img" :src="getImageUrl(page.image)" alt="image" />
            </div>
        </div>
       
        
        <div class="page-description">
            <p v-text="page.description"></p>
            <div class="active-time">
                <img class="img-time" src="/assets/images/svg/times.svg" alt="clock">
                <h3 class="text-danger"><span v-text="page.start_date"></span> s/d <span v-text="page.end_date"></span></h3>
            </div>
            <router-link :to="{name: 'Main', params: { token: this.$route.params.token}}" class="btn-shop">Start Order</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BannerLoader from '@/components/loader/BannerLoader.vue';

export default {
    name: 'PageView',
    components: {
        BannerLoader
    },
    data(){
        return {
            page: [],
            loading: false
        }
    },
    mounted(){
        this.loading = true;
        axios.get( this.tamani + '/cart/' + this.$route.params.token)
        .then((res) => {
            if(res.data.is_submitted) this.$router.push({name: 'Submitted', params: {token: this.$route.params.token}});
        });

        this.getPageInformation()
    },
    methods: {
        async getPageInformation(){
            this.loading = true
            try {
                let { data } = await axios.get('http://tamani-app.test/api/v1/header-banner/' + this.$route.params.id + '/' + this.$route.params.token)
                this.page = data.data
                this.loading = false
            } catch (e) {
                this.loading = true
            }
            
        },
        getImageUrl(filename){
            return 'http://tamani-app.test/assets/images/banner/' + filename;
        }
    }
}
</script>

<style>
.navigation-container {
  padding: 0 20px;
}

.loader-container{
    margin-left: 19px;
    width: 102%;
}

.page-header{
    width: 100%;
    background-image: linear-gradient(113deg,#c2f4ae,#55e6c9 50%,#a0efb6 85%,#a0efb6, #6fe9c1);
    padding-bottom: 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}

.page-name{
    margin-top:20px;
}

.page-img{
    width: 95%;
    border-radius: 20px;
    margin-top:10px;
    align-self: center;
}

.page-description {
    margin-top: 20px;
    text-align: left;
    padding: 0px 15px;
}

.page-description p {
    font-size: 11pt;
    font-weight: 500;

}
.active-time{
    margin-top: 30px;
    display: flex;
    justify-content: start;
    align-content: center;
    align-items: center;
}

.active-time h3{
    font-weight: bold;

}

.img-time{
    width: 25px;
    margin-right: 10px;
}

.page-description .promo-btn{
    align-self: center;
    width: 100%;
    margin-top: 50px;
    font-weight: bold;
}


/* Button */
.btn-shop {
 padding: 1.1em 2em;
 background: none;
 border: 2px solid #fff;
 font-size: 15px;
 color: #131313;
 cursor: pointer;
 position: relative;
 overflow: hidden;
 transition: all 0.3s;
 border-radius: 12px;
 background-color: #ecd448;
 font-weight: bolder;
 box-shadow: 0 2px 0 2px #000;
 width: 100%;
 display: block;
 text-align: center;
 margin-top: 30px;
}

.btn-shop:before {
 content: "";
 position: absolute;
 width: 100px;
 height: 120%;
 background-color: #ff6700;
 top: 50%;
 left: 0;
 transform: skewX(30deg) translate(600%, -50%);
 transition: all 0.5s;
}

.btn-shop:hover {
 background-color: #4cc9f0;
 color: #fff;
 box-shadow: 0 2px 0 2px #0d3b66;
}

.btn-shop:hover::before {
 transform: skewX(30deg) translate(150%, -50%);
 transition-delay: 0.1s;
}

.btn-shop:active {
 transform: scale(0.9);
}
</style>
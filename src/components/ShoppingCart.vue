<template>
  <div v-if="loading" class="cart-icon-loaders">
    <div class="wrapper">
        <div class="circle"></div>
    </div>
  </div>
  <div v-if="!loading">
    <router-link v-show="cart_qty > 0 && !is_submitted" :to="{name: 'Cart', query:{ scr: this.$route.query.scr}}">    
        <img class="shopping-bag" src="/assets/images/svg/shopping-bag-fill.svg" alt="carts">
        <span v-if="cart_qty >= 10" class="quantity-text-more">{{ cart_qty }}</span>
        <span v-if="cart_qty <= 9" class="quantity-text">{{ cart_qty }}</span>
    </router-link>
    <router-link v-show="cart_qty === 0 || is_submitted" :to="{name: 'CartEmpty', query:{scr: this.$route.query.scr}}">    
        <img class="shopping-bag" src="/assets/images/svg/shopping-bag.svg" alt="carts">
        <span class="quantity-text">{{ cart_qty }}</span>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ShoppingCart',
    data(){
        return {
            cartitem: [],
            cart_qty: 0,
            loading: false,
            is_submitted: false,
            servers: '',
        }
    },
    mounted(){
        this.loading = true;
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';
        this.getCartItem()
    },
    methods: {
        async getCartItem(){
            this.loading = true
            try { 
                let { data } = await axios.get(this.servers + '/cart/' + this.$route.query.scr)
                this.cartitem = data.cart_item
                this.is_submitted = data.is_submitted
                if(this.cartitem){
                    this.cartitem.forEach(element => {
                        this.cart_qty += element.qorder;
                    });
                }

                if(this.is_submitted){
                    this.cart_qty = 0;
                }
                this.loading = false
            } catch (e) {
                this.loading = true
                throw e;
            }
        },
    }
}
</script>

<style>
.shopping-bag{
    width:40px;
    height: auto;
    margin-left: 5px;
    margin-top: -5px;
}

.quantity-text{
    position: relative;
    font-size: 13pt;
    top: 10px;
    font-weight:600;
    left: -25px;
    color: white
}

.quantity-text-more{
    position: relative;
    font-size: 13pt;
    top: 10px;
    font-weight:600;
    left: -30px;
    color: white
}

/* Loader */
.cart-icon-loaders {
position: relative;
width: 40px;
height: 35px;
margin-bottom: 10px;
padding: 15px;
background-color: #f7f7f7;
overflow: hidden;
margin: 0px 5px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
-webkit-box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
}

.cart-icon-loaders:after {
content: "";
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: linear-gradient(120deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgb(255, 255, 255) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
animation: gradient-animation_2 1s linear infinite;
}

.cart-iconloaders .wrapper {
width: 100%;
height: 100%;
position: relative;
}

.cart-icon-loaders .wrapper > div {
  background-color: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
}

.cart-icon-loaders .circle {
position: absolute;
top: 10px;
width: 25px;
height: 8px;
left: 7px;
border-radius: 15px;
}

.cart-icon-loaders .button {
display: inline-block;
height: 32px;
width: 75px;
}

@keyframes gradient-animation_2 {
0% {
    transform: translateX(-100%);
}

100% {
    transform: translateX(100%);
}
}
</style>
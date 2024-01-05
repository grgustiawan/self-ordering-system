<template>
    <div>
       
        
        <!-- header start -->
        <header class="section-t-space">
        <div class="custom-container">
            <div class="header-panel">
            <router-link :to="{name: 'Main'}">
                <i class="ri-arrow-left-s-line"></i>
            </router-link>
            <h2>Food Categories</h2>
            </div>
        </div>
        </header>
        <!-- header end -->

        <!-- food section start -->
        <section class="products section-t-space section-b-space">
        <div class="custom-container">
                <div v-for="category in category" :key="category.Nogrp">
                    <div v-for="food in category.Detail" :key="food.Kode">
                        <div class="row gy-4">
                        <div class="col-6 pt-4">
                            <div class="product-box product-box-bg">
                            <a href="" class="product-box-img">
                                <img class="img-fluid" :src="getImgUrl(food.Images)" alt="p1" />
                            </a>
                            <div class="product-box-detail">
                                <h6>{{ food.Nama }}</h6>
                                <ul class="timing">
                                <li>
                                    <span class="star"><i class="ri-star-s-fill"></i></span> 3.7
                                </li>
                                <li>20 min</li>
                                </ul>
                                <div class="bottom-panel">
                                <div class="price">Rp. {{ formatPrice(food.Harga) }}</div>
                                <a href="#" class="cart mb-0">
                                    <i class="ri-shopping-cart-2-fill"></i>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            
        </div>
        </section>
        <!-- food section start -->
    </div>
</template>

<script>
export default {
    name: 'ListingView',
    data(){
        return {
            category: [

            ]
        }
    },
    mounted(){
      axios.get('http://tamani-app.test/api/v1/food')
      .then((response) => {
          this.category = response.data[0].Menu;
          console.log(this.category)
      }).catch((err) => {
          console.log(err)
      })
    },
    methods: {
        getImgUrl: function (imagePath) {
            return 'assets/images/tamani/' + imagePath;
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
  }
}
</script>

<style>
.image-tamani{
    width: 200px;
    height: auto;
    object-fit:cover;
    margin-top:10px;
    margin-bottom: 10px
}

.products {
  padding-top: 33px;
  margin: 5px;
}
.products .product-box {
  position: relative;
  border: 2px solid;
  border-image-source: linear-gradient(180deg, rgba(var(--black), 0) -3.45%, rgba(var(--black), 0.12) 87.93%);
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
          box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: visible;
  text-align: center;
}
[dir=rtl] .products .product-box {
  direction: rtl;
}
.products .product-box-bg {
  padding: 8px;
  background-color: rgba(var(--black), 0);
  margin-bottom: 5px;
}
.products .product-box-bg a {
  border-radius: 8px;
  margin-bottom: 8px;
}
.products .product-box-bg .product-box-detail {
  background-color: transparent !important;
  padding: 0 !important;
}
.products .product-box .product-box-img {
  margin-top: -50px;
  display: block;
}
.products .product-box .product-box-detail h5 {
  color: rgba(var(--dark-text), 1);
  font-size: 3%;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.products .product-box .product-box-detail .timing {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 12px;
  margin-top: 3px;
}
.products .product-box .product-box-detail .timing li {
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
.products .product-box .product-box-detail .timing li:last-child::after {
  display: none;
}
.products .product-box .product-box-detail .timing li .star {
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
.products .product-box .product-box-detail .timing li .star i {
  color: rgb(225, 225, 225);
}
.products .product-box .product-box-detail .timing li::after {
  content: "";
  position: absolute;
  margin-left: 40px;
  -webkit-transform: translateY(-50%) rotate(90deg);
          transform: translateY(-50%) rotate(90deg);
  top: 50%;
  background-color: rgba(var(--dashed-line), 1);
  width: 30%;
  height: 1px;
}
[dir=rtl] .products .product-box .product-box-detail .timing li::after {
  margin-left: unset;
  margin-right: 44px;
}
.products .product-box .product-box-detail .bottom-panel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: 10px;
}
.products .product-box .product-box-detail .bottom-panel .price {
  color: rgba(var(--dark-text), 1);
  font-weight: 600;
}
.products .product-box .product-box-detail .bottom-panel .cart {
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
.products .product-box .product-box-detail .bottom-panel .cart i {
  color: rgba(var(--theme-color), 1);
}

</style>
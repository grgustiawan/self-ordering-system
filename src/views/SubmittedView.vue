<template>
  <div class="foodpage-wrapper">      
    <div v-show="!loading" class="custom-container" style="background: transparent;">
      <div class="empty-tab">
        <div style="width: 100%;height: 70%;border-radius: 30px;overflow: hidden;padding: 0;margin-top: 50px">
          <lottie-player src="https://lottie.host/c95d32bb-b190-45b5-b21a-f8a0bcd0ecf0/pfi9xYsn9t.json" 
                         background="transparent" speed="1" style="width: 100%" loop autoplay>
          </lottie-player>
        </div>

        <h2 class="text-dark coomingsoon-title">Order Placed</h2>
        <h3 class="mt-3 text-danger" v-show="message !== 'Cart Submitted'">{{ message }}</h3>
        <h5 class="mt-3">Please Wait, Your Foods is Being Prepared!</h5>

        <button class="btn login-btn" style="background-color: var(--basecolor);width: 90%;" role="button" @click="setUpdate">
            ADD MORE
        </button>

        <div style="width: 100%;display: flex;flex-direction: row;justify-content: space-around;">
            <button @click="viewdetail = true" class="btn login-btn w-45" style="background-color: var(--basecolor);" role="button">
                VIEW DETAIL
            </button>
            <button @click="showAlert = true" class="btn login-btn w-45" role="button">
                REQ BILL
            </button>
        </div>

        <div v-if="viewdetail" class="viewdetail-modal">
            <div class="viewdetail-overlay" @click="viewdetail = false"></div>
            <div class="viewdetail-content">
                  <h2 class="mt-1">No Meja: {{ cart.meja }}</h2>
                  <span style="position: relative;font-size: 10pt;">Total <span class="viewdetail-money">: Rp. {{ formatPrice(cart.total - cancel_total) }}</span></span>
                  <span style="position: relative;margin-top: -5px;font-size: 10pt;">Tax <span class="viewdetail-money">: Rp. {{ formatPrice(cart.ttax - cancel_tax) }}</span></span>
                  <span style="position: relative;margin-top: -5px;font-size: 10pt;">Grand Total <span class="viewdetail-money">: Rp. {{ formatPrice(cart.grand - cancel_price) }}</span></span>

                  <div class="viewdetail-item" v-for="item in cart.cart_item" :key="item.id">
                      <div class="viewdetail-image">
                          <div class="viewdetail-sold" v-if="countCancel(item.qorder, item.qty_cancel)">
                              <i class="fas fa-ban"></i>
                          </div>

                          <img style="width: 100%;object-fit: contain;" :src="getFoodImg(item.image)" alt="">
                      </div>
                      <div class="viewdetail-desc">
                          <h5 style="margin-top: 0;font-weight: bolder;color: #603939">{{ item.nama }}</h5>
                          <span>{{ item.qorder }} x {{ formatPrice(item.nharga) }}</span>
                          <span style="color: red;" v-if="item.cancel">-{{ item.qty_cancel }} item cancel (Rp. {{ formatPrice(item.nharga * item.qty_cancel) }})</span>
                          <span class="mt-2">Note : {{ item.catat }}</span>
                          <span class="viewdetail-total">Rp. {{ formatPrice(item.harga - (item.nharga * item.qty_cancel)) }}</span>
                      </div>
                  </div>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showAlert" class="confirm-request-modal">
        <div class="confirm-overlayer" @click="showAlert = false"></div>
        <div class="confirm-wrapper">
            <div class="confirm-title">
                <span style="font-size: 14pt;font-weight: bolder;">
                  Anda Yakin untuk Request Bill ?
                </span>

                <span style="margin-top: 20px;">
                    Pesanan yang sudah request bill tidak bisa gabung bill.
                </span>
            </div>

            <div class="confirm-request-button">
              <button class="btn login-btn" 
                      @click="reqBill">
                      Confirm
              </button>

              <button class="btn login-btn"
                      style="font-family: 'walkway_ultraboldregular';
                      font-size: 15pt;
                      background-color: var(--basecolor);"
                      @click="showAlert = false">
                      Cancel
              </button>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SubmittedView',
    props: ['message'],
    data(){
      return {
        loading: true,
        cartid: '',
        viewdetail: false,
        cart: [],
        cartitem: [],
        cancel_total: 0,
        cancel_tax: 0,
        cancel_price: 0,
        showAlert: false,
      }
    },
    mounted(){
      this.loading = true
      const decode = atob(this.$route.query.scr);
      const arrData = decode.split(";");
      this.servers = 'https://' + arrData[0] + '/api/web';

      this.getCart();
      setTimeout(() => {
        this.loading = false;
      }, 500);

      setInterval(() => {
        this.getRequestBill()
      }, 2000);
    },
    methods: {
      countCancel(qorder, qty){
        if(qorder - qty == 0){
          return true
        } else {
          return false
        }
      },
      setUpdate(){
        axios.post(this.servers + '/update_submit/' + this.$route.query.scr)
        .then(() => {
            this.$router.push({name: 'Main', query:{scr: this.$route.query.scr}});
        })
        .catch((e) => {
            throw(e)
        })
      },
      async getRequestBill(){
          try {
            const { data } = await axios.get(this.servers + '/bill/' + this.$route.query.scr)
            if(data.is_cetak == 1){
              this.$router.push({name: ''})
              this.$router.push({name: 'Receipt', query: {scr: this.$route.query.scr}});
            }
          } catch(error){
            console.log(error)
          }
      },
      async getCart(){
        try {
          let { data } = await axios.get( this.servers + '/cart/' + this.$route.query.scr)
          if(data.is_completed) this.$router.push({name: 'Receipt', query: {scr: this.$route.query.scr}});
          if(!data.is_submitted) this.$router.push({name: 'Main', query: {scr: this.$route.query.scr}});
          this.cartid = data.id
          this.cart = data
          this.cartitem = data.cart_item
          this.cartitem.forEach((el) => {
            const sum = el.qty_cancel
            if(el.qty_cancel > 0){
                const total = sum * el.nharga
                const tax = (el.nharga * el.ntax / 100) * sum
                const grand = total + tax

                this.cancel_total += total
                this.cancel_tax += tax
                this.cancel_price += grand
            }
          })

          console.log(this.cart)
        } catch(e) { 
          console.log(e)
          window.location.href = "/"
        }
      },
      reqBill(){
        const data = {
          cartid: this.cartid
        }
        axios.post(this.servers + '/bill/' + this.$route.query.scr, data)
        .then(() => {
            this.$router.push({name: 'Receipt', query: {scr: this.$route.query.scr}});
        }).catch((e) => {throw(e)});
      },
      formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      getFoodImg(filename){
          let name = String(filename).replace("JPG", "png");
          return '/assets/images/food/tamani/' + name;
      },
    }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/airfactoryrounded');
.viewdetail-modal{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
}

.viewdetail-overlay{
	position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
	background: #000000b8;
}

.viewdetail-content{
	position: relative;
	width: 90%;
	max-width: 340px;
	height: 500px;
	margin: 0 auto;
	top: 15vh;
	background: #fffaf6;
	border-radius: 10px;
	border: 1px solid #acacac;
	padding: 10px;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: scroll;
	text-align: left;
}

.viewdetail-item{
	position: relative;
	border-bottom: 1px solid #e0e0e0;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	padding-bottom: 10px;
	margin-top: 10px;
}

.viewdetail-sold{
	position: absolute;
	width: 100%;
	height: 100%;
	background: #000000c0;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 21pt;
	color: #fff;
	border-radius: 5px;
	flex-direction: column;
	gap: 5px
}

.viewdetail-image{
	position: relative;
	width: 80px;
	height: 80px;
	background: #c9e36c;
	border-radius: 5px;
	overflow: hidden;
}

.viewdetail-total{
	position: absolute;
	bottom: 5px;
	right: 10px;
	color: rgb(var(--theme-color));
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
}

.viewdetail-desc{
	display: flex;
	flex-direction: column;
	margin-left: 15px;
	text-align: left;
	font-size: 10pt;
}

.viewdetail-money{
	position: absolute;
	left: 100px;
	font-weight: bold;
}


.confirm-request-modal{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.confirm-request-modal .confirm-overlayer{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: #00000090;
}

.confirm-wrapper{
  position: relative;
  width: 80%;
  max-width: 400px;
  padding: 20px 0;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 8px 4px rgba(0,0,0,0.1);
}

.confirm-wrapper .confirm-title{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: 'AirFactoryRounded', sans-serif;
  font-size: 13pt;
}

.confirm-wrapper .confirm-request-button{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: -10px;
}
</style>
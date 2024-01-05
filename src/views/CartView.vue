<template>
  <submitted-view v-if="cart.is_submitted" :message="message"></submitted-view>

  <div v-show="!cart.is_submitted" class="foodpage-wrapper">
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Main', query: {scr: this.$route.query.scr}}">
            <i class="ri-arrow-left-s-line"></i>
          </router-link>
          <h2>{{ branch.company_name }}</h2>
        </div>
      </div>
    </header>
    <!-- header end -->

    <!-- Add Cart section start -->
    <section>
      <div class="custom-container" >
        <h3 class="fw-semibold dark-text">Food Items</h3>
        <div v-for="carts in cart.cart_item" :key="carts.id">
          <div class="horizontal-product-box mt-3" 
               :class="{'border border-danger' : carts.limit === 0 && !carts.is_submitted, 
               'bg-submitted' : carts.is_submitted}">

            <div class="product-img">
              <div v-if="carts.limit === 0 && !carts.is_submitted" 
                   class="cart-limit"><h6>Sold Out</h6></div>
                <img class="img-fluid img" :src="getImageUrl(carts.image)" alt="rp1" />
            </div>

            <div class="product-content">
              <router-link :to="{name: 'Food', query: {id: carts.kode, scr: this.$route.query.scr}}" 
                            class="text-dark">
                  <h4 class="mb-2 position-relative" 
                      :class="{'text-danger' : carts.limit === 0 && !carts.is_submitted,
                                'text-white' : carts.is_submitted}" 
                      style="width: 95%;font-weight: bold;" v-text="carts.nama">
                  </h4>
              </router-link>

              <div v-for="opt in carts.options" :key="opt.id" 
                   class="d-flex justify-content-start" 
                   style="width: 70%;">
                  <span style="font-size: 9pt;font-weight: bold;" 
                       :class="{'text-white': carts.is_submitted}">
                       {{ opt.nama }} x{{ opt.qorder }}
                  </span>
              </div>

              <span style="font-size: 9pt; margin-left: 10px;color: var(--basecolor)" 
                    v-if="carts.limit > 0 && carts.limit <= 10 && !carts.is_submitted">
                    Remaining food stock {{ carts.limit }} left!
              </span>

              <span style="font-size: 9pt; margin-left: 10px;color: var(--basecolor)" 
                    v-if="carts.limit == 0 && !carts.is_submitted">
                    Sorry, Item out of stock!
              </span>

              <div v-if="carts.is_submitted" style="width: 100%;height: 30px;background: transparent;"></div><br>
              <span v-if="carts.catat" style="width: 100%;margin-left: -105px;" 
                    :class="{'mt-x20 text-white': carts.is_submitted}">
                    Note: {{ carts.catat }}
              </span>
              
              <div v-if="!carts.is_submitted && carts.limit > 0" 
                   class="plus-minus position-relative" 
                   :class="{'mt-3' : carts.options.length <= 0}"
                   style="width: 90px;border: 2px solid var(--dark);">
                    <i class="ri-subtract-line sub" @click="subQty(carts.id, carts.qorder)"></i>
                    <input type="number" :value="carts.qorder" :min="countMinQty(carts.qorder)" max="100" readonly />
                    <i class="ri-add-line add" @click="addQty(carts.id, carts.qorder)"></i>
              </div>

              <a class="red-symbol" v-if="!carts.is_submitted" 
                 @click="deleteItem(carts.id, carts.kode)" 
                 style="cursor: pointer;">
                 <i class="ri-delete-bin-fill"></i>
              </a>

              <span class="red-symbol" 
                    v-if="carts.is_submitted" 
                    style="font-weight: bolder;font-size: 13pt;color: var(--basecolor);">
                    {{ carts.qorder }}
              </span>

              <span class="red-symbol mt-3 text-white" 
                    v-if="carts.cancel" style="font-weight: bolder;font-size: 13pt;">
                    -{{ carts.qty_cancel }}
              </span>
              
              <span style="position: absolute;
                           right: 0;
                           bottom:-5px;
                           color: rgb(var(--theme-color), 1);
                           font-weight: bolder;
                           font-size: 10pt;" 
                    :class="{'text-danger' : carts.limit === 0 && !carts.is_submitted}">
                    Rp. {{formatPrice(parseFloat(carts.harga - (carts.qty_cancel * carts.nharga))) }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- Add Cart section end -->

    <!-- Bill details section start -->
    <section class="bill-details">
      <div class="custom-container">
        <h3 class="fw-semibold dark-text">Bill Details</h3>
        <div class="total-detail mt-3">
          <div class="sub-total">
            <h5>Sub Total</h5>
            <h5 class="fw-semibold text-danger" v-text="'Rp. ' + formatPrice(parseFloat(cart.total - cancel_total))"></h5>
          </div>
          <div class="sub-total mt-2"  v-if="parseFloat(cart.tcharge) > 0">
            <h5>Service Charge</h5>
            <h5 class="fw-semibold text-danger" v-text="'Rp. ' + formatPrice(parseFloat(cart.tcharge))"></h5>
          </div>
          <div class="sub-total mt-2" v-if="parseFloat(cart.tdisc) > 0">
            <h5>Discount</h5>
            <h5 class="fw-semibold" v-text="'Rp. ' + formatPrice(cart.tdisc)"></h5>
          </div>
          <div class="sub-total mt-2 pb-3">
            <h5>Tax</h5>
            <h5 class="fw-semibold" v-text="'Rp. ' + formatPrice(parseFloat(cart.ttax - cancel_tax))"></h5>
          </div>
          <div class="grand-total">
            <h5 class="fw-semibold">Grand Total</h5>
            <h5 class="fw-semibold amount" v-text="'Rp. ' + formatPrice(cart.grand - cancel_price)"></h5>
          </div>
          <img class="dots-design" src="/assets/images/svg/dots-design.svg" alt="dots" />
        </div>
      </div>
    </section>
    <!-- Bill details section end -->

    <!-- delivery address section start -->
    <section class="delivery address section-lg-b-space">
      <div class="custom-container">
          <h3 class="fw-semibold dark-text">Customer Detail</h3>
          <div class="cart-add-box mt-3 mb-5">
            <div class="add-img">
                <img class="img" style="width: 30px;height: 30px;" 
                  src="/assets/images/icons/profile.png" alt="rp1" />
            </div>
            <div class="add-content">
                <h5 class="fw-semibold dark-text text-start">Deliver to : {{ branch.table }}</h5>
                <h6 class="address light-text mt-1 text-start">{{ branch.company_name }}</h6>
            </div>
          </div>
      </div>
    </section>
    <!-- delivery address section end -->

    <!-- pay popup start -->
    <div class="food-pay-popup">
      <div class="price-items">
          <h3 v-text="'Rp. ' + formatPrice(parseFloat(cart.grand - cancel_price))"></h3>
          <h6 v-text="qty + ' item Added'"></h6>
      </div>

      <button class="btn wood-btn pay-btn mt-0" 
              style="width: 95px;height: 36px;"
              v-if="submitted_count > 0" 
              @click="placeorder">
          <div v-if="isSubmitting" class="spinner center">
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

          <span v-if="!isSubmitting"
                style="width: 100%;
                font-size: 10pt;">
            Place Order
          </span>
      </button>

      <button class="btn bill-btn pay-btn mt-0" 
              v-if="submitted_count == 0" 
              @click="reqBill">
              Request Bill
      </button>
    </div>

    <form ref="form">
        <input type="text" name="to_name" :value="branch.company_name" hidden>
        <input type="text" name="table" :value="branch.table" hidden>
        <input type="text" name="address_to" value="galihgustiawan24@gmail.com" hidden>
        <input type="text" name="message" v-model="email_body" hidden>
    </form>
  </div>

  <div style="position: fixed;
              top: 0;
              left: 50%;
              -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
              width: 100%;
              max-width: 600px;
              height: 100vh;
              z-index: 100;"
              v-if="showError">
        <div style="position: absolute;left:0;top:0;width: 100%;height: 100%;background: var(--screenoverlay);" 
             @click="closeError">
        </div>
        <div style="position: relative;
                    top:25vh;
                    width: 90%;
                    height: 250px;
                    border-radius: 5px;
                    background: #fff;
                    margin: 0 auto;">
              <div style="position: absolute;
                          top:0;
                          left: 0;
                          width: 100%;
                          height: 50px;
                          background: var(--gray);
                          border-top-right-radius: 5px;
                          border-top-left-radius: 5px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          font-size: 16pt;
                          font-weight: bold;
                          color: var(--white)">
                          <span>Error</span>
              </div>
              <div style="position: absolute;
                          top: 5px;
                          right: 10px;
                          color: var(--melawai);
                          z-index: 101;">
                    <i style="cursor: pointer;font-size: 25pt;" 
                       class="ri-close-circle-fill" 
                       @click="closeError"></i>
              </div>
              <div style="position: relative;
                          width: 100%;
                          height: 100%;
                          display: flex;
                          flex-direction: column;
                          font-size: 13pt;
                          font-weight: bold;
                          color: var(--dark);">
                    <i class="ri-error-warning-fill" style="font-size: 100px;margin-top: 40px;color: var(--backhover);"></i>
                    <span>Sorry, Item sold out, Remove it first!</span>
              </div>
        </div>
  </div>
</template>

<script>
import SubmittedView from './SubmittedView.vue';
import axios from 'axios';

export default {
    name: 'CartView',
    components: {
      SubmittedView,
    },
    data(){
      return {
        cart: [ ],
        isDeleting: false,
        isSubmitting: false,
        maxProcessing: 0,
        quantity: 0,
        opt: [],
        qty: 0,
        jumorang: 1,
        cancel_total: 0,
        cancel_price: 0,
        cancel_tax: 0,
        submitted_count: 0,
        carts: {
          foods: [],
        },
        foods: {
            kode: '',
            harga: 0,
            service_charge: 0,
            discount: 0,
            tax: 0,
            qty: 0,
            opt2: '',
            opt1: '',
        },
        opt1: {
            kode: "",
            harga: 0,
            service_charge: 0,
            discount: 0,
            tax: 0,
            qty: 0,
            opt2: '',
            opt1: '',
        },
        opt2: {
            kode: "",
            harga: 0,
            service_charge: 0,
            discount: 0,
            tax: 0,
            qty: 0,
            opt2: '',
            opt1: '',
        },
        branch: [],
        mainfoods: [],
        options: [],
        email_body: '',
        message: '',
        servers: '',
        showError: false,
        error_message: null,
      }
    },
    mounted(){
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';
        
        this.getCartItem();
        this.getBranch();
    },
    methods: {
      subjuml(){
        this.jumorang--
        if(this.jumorang <= 1) this.jumorang = 1;
      },
      closeError(){
        this.showError = false
        window.location.reload();
      },
      countMinQty(value){
        if(value <= 0) {
          return 0
        } else {
          return value
        }
      },
      async getCartItem(){
        try{
          let { data } = await axios.get( this.servers + '/cart/' + this.$route.query.scr);
          if(data.message === 'Cart Empty'){
            this.$router.push({name: 'CartEmpty', query: {scr: this.$route.query.scr}})
          } else {
            console.log(data);
            this.cart = data;
            this.opt  = data.cart_item;
            let i = 1;
            this.opt.forEach(element => {
                this.qty += element.qorder
                if(!element.is_submitted) {
                  this.submitted_count += 1;
                  this.email_body += '(' + String(i) + ')' + '. ' + element.nama + ', Qty: ' + element.qorder + '. ';
                }
                i++;
            });

            this.opt.forEach((el) => {
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
          }
        } catch{
          this.$router.push('/')
        }
      },
      async getBranch(){
        try{
          let { data } = await axios.get(this.servers + '/profile/' + this.$route.query.scr);
          this.branch = data;
        } catch(e){console.log(e)}
      },
      getImageUrl(filename){
        let name = String(filename).replace("JPG", "png");
        return '/assets/images/food/tamani/' + name;
      },
      formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      async deleteItem(id, kode){
        if(this.isDeleting) return;
        this.isDeleting = true;
        await axios.delete(this.servers + '/cart/' + this.$route.query.scr, {
          headers: { "Content-Type": "application/json" },
          data: { id: id, kode: kode }
        }).then((res) => {
            this.isDeleting = false;
            if(res.data.message === 'Cart Empty') { 
              this.$router.push({name: 'CartEmpty', query: {scr: this.$route.query.scr}})
            } else {
              this.qty = 0;
              this.cart = res.data
              this.opt  = res.data.cart_item;
              this.opt.forEach(element => {
                  this.qty += element.qorder
              });
            }
        }).catch((e) => {
            this.isDeleting = false;
            throw e;
        });
      },
      async placeorder(){
        if(this.isSubmitting) return;
        this.isSubmitting = true;
        try{
          let { data } = await axios.post(this.servers + '/order/' + this.$route.query.scr);
          this.message = data.message;
          this.getCartItem();
          this.isSubmitting = false
        } catch(e){
          console.log(e)
          this.isSubmitting = false
          if(e.response.status == 406){
            this.showError = true
          }
        }
      },
      async addQty(id, qty) {
        if(this.maxProcessing === 1) return;
        this.maxProcessing = 1;
        this.carts.foods = [];
        this.cleanObject(this.foods);
        this.cleanObject(this.opt1);
        this.cleanObject(this.opt2);

        const quantity = parseInt(qty) + 1;
        console.log(id + ' ' + qty)
        let mainfoods = this.opt.find(element => element.id === id);
        this.foods.kode = mainfoods.kode;
        this.foods.harga = mainfoods.nharga;
        this.foods.qty = quantity;
        this.foods.service_charge = mainfoods.ncharge;
        this.foods.discount = mainfoods.ndisc;
        this.foods.tax = mainfoods.ntax;

        let options = mainfoods.options;
        let len = options.length;
        if(len === 1){
          this.foods.opt1 =options[0].kode; 
          this.opt1.kode = options[0].kode;
          this.opt1.harga = options[0].nharga;
          this.opt1.service_charge = options[0].ncharge;
          this.opt1.discount = options[0].ndisc;
          this.opt1.tax = options[0].ntax;
          this.opt1.qty = quantity;
          this.opt1.opt2 = '';
          this.opt1.opt1 = '';
        } else if(len === 2){
          this.foods.opt1 =options[0].kode; 
          this.opt1.kode = options[0].kode;
          this.opt1.harga = options[0].nharga;
          this.opt1.service_charge = options[0].ncharge;
          this.opt1.discount = options[0].ndisc;
          this.opt1.tax = options[0].ntax;
          this.opt1.qty = quantity;
          this.opt1.opt2 = '';
          this.opt1.opt1 = '';

          this.foods.opt2 =options[1].kode;
          this.opt2.kode = options[1].kode;
          this.opt2.harga = options[1].nharga;
          this.opt2.service_charge = options[1].ncharge;
          this.opt2.discount = options[1].ndisc;
          this.opt2.tax = options[1].ntax;
          this.opt2.qty = quantity;
          this.opt2.opt2 = '';
          this.opt2.opt1 = '';
        }

        this.carts.foods.push(this.foods);
        if(this.opt1.kode !== '') this.carts.foods.push(this.opt1);
        if (this.opt2.kode !== '') this.carts.foods.push(this.opt2);

        await axios.post(this.servers + '/update_cart/' + this.$route.query.scr, this.carts)
        .then((data) => {
          console.log(data.data)
          this.qty = 0;
          this.cart = data.data;
          this.opt  = data.data.cart_item;
          this.opt.forEach(element => {
              this.qty += element.qorder
          });
          this.maxProcessing = 0;
        }).catch((e) => {
          console.log(e)
          this.qty = 0;
          this.maxProcessing = 0;
        })
    },
    async subQty(id, qty) {
        if(this.maxProcessing === 1) return;
        this.maxProcessing = 1;
        this.carts.foods = [];
        this.cleanObject(this.foods);
        this.cleanObject(this.opt1);
        this.cleanObject(this.opt2);

        let quantity = parseInt(qty) <= 1 ? 1 : parseInt(qty) - 1;
        let mainfoods = this.opt.find(element => element.id === id);
        this.foods.kode = mainfoods.kode;
        this.foods.harga = mainfoods.nharga;
        this.foods.qty = quantity;
        this.foods.service_charge = mainfoods.ncharge;
        this.foods.discount = mainfoods.ndisc;
        this.foods.tax = mainfoods.ntax;
        
        let options = mainfoods.options;
        let len = options.length;
        if(len === 1){
          this.foods.opt1 =options[0].kode; 
          this.opt1.kode = options[0].kode;
          this.opt1.harga = options[0].nharga;
          this.opt1.service_charge = options[0].ncharge;
          this.opt1.discount = options[0].ndisc;
          this.opt1.tax = options[0].ntax;
          this.opt1.qty = quantity;
          this.opt1.opt2 = '';
          this.opt1.opt1 = '';
        } else if(len === 2){
          this.foods.opt1 =options[0].kode; 
          this.opt1.kode = options[0].kode;
          this.opt1.harga = options[0].nharga;
          this.opt1.service_charge = options[0].ncharge;
          this.opt1.discount = options[0].ndisc;
          this.opt1.tax = options[0].ntax;
          this.opt1.qty = quantity;
          this.opt1.opt2 = '';
          this.opt1.opt1 = '';

          this.foods.opt2 =options[1].kode;
          this.opt2.kode = options[1].kode;
          this.opt2.harga = options[1].nharga;
          this.opt2.service_charge = options[1].ncharge;
          this.opt2.discount = options[1].ndisc;
          this.opt2.tax = options[1].ntax;
          this.opt2.qty = quantity;
          this.opt2.opt2 = '';
          this.opt2.opt1 = '';
        }

        this.carts.foods.push(this.foods);
        if(this.opt1.kode !== '') this.carts.foods.push(this.opt1);
        if(this.opt2.kode !== '') this.carts.foods.push(this.opt2);

        await axios.post(this.servers + '/update_cart/' + this.$route.query.scr, this.carts)
        .then((data) => {
            this.qty = 0;
            this.cart = data.data
            this.opt  = data.data.cart_item;
            this.opt.forEach(element => {
                this.qty += element.qorder
            })

            this.maxProcessing = 0;
        })
        .catch((e) => {
            console.log(e)
            this.qty = 0;
            this.maxProcessing = 0;
        })
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
    cleanObject(objVal){
      Object.keys(objVal).forEach(key => {
          if (typeof objVal[key] === 'string' || objVal[key] instanceof String) objVal[key] = '';
          else if (typeof objVal[key] === 'number' || objVal[key] instanceof Number) objVal[key] = 0;
      });
    },
  }
}
</script>

<style>
.mt-x20{
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 50px;
}

.foodnote{
  width: 100%;
  border-radius: 7px;
  padding: 5px;
  font-weight: 400;
  font-size: 10pt;
}

.bg-submitted{
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1.31%, #414449), color-stop(101.06%, #1f1f1f));
  background: linear-gradient(180deg, #414449 1.31%, #1f1f1f 101.06%);
  border: 2px solid var(--basecolor);
}

.pay-popup{
    z-index: 1000;
}

.red-symbol {
    color: red;
}

.cart-limit{
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 1000;
  background-color: #00000080;
  -webkit-box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
          box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
}

.cart-limit h6{
  color: #fff;
  margin-top: 40%;
  font-size: 12pt;
  font-weight: bold;
}
</style>
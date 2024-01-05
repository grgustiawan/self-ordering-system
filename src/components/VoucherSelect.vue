<template>
  <div>
    <section>
    <div class="custom-container">
        <router-link :to="{name: 'Voucher'}" class="apply-voucher">
          <img class="voucher-select" src="/assets/images/svg/coupon-select.svg" alt="cart" />
          <div>
              <h3 class="coupon-code">Find Exclusive Offer For You</h3>
          </div>
          <img src="/assets/images/svg/right-arrow.png" alt="right">
        </router-link>
    </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'VoucherSelect'
}
</script>

<style>
.voucher-select{
    width: 35px;
}

.apply-voucher {
  padding: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border: 2px dashed #603939;
  background-color: rgb(241, 255, 205);
  border-radius: 10px;
}
.apply-voucher .coupon-code {
  color: #a81f00;
  padding-top: 5px;
}
.apply-voucher i {
  color: rgba(var(--light-text), 1);
  font-size: 20px;
}
</style>
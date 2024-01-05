<template>
  <div>
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Profile'}">
            <i class="ri-arrow-left-s-line"></i>
          </router-link>
          <h2>Payment Options</h2>
        </div>
      </div>
    </header>
    <!-- header end -->

    <!-- payment method section start -->
    <section class="payment method section-lg-b-space">
      <div class="custom-container">
        <h3 class="fw-semibold dark-text">Credit / Debit Card</h3>
        <div class="payment-list">
          <ul class="cart-add-box payment-card-box gap-0 mt-3">
            <li class="w-100">
              <div class="payment-detail">
                <div class="add-img">
                  <img class="img-fluid img" src="assets/images/icons/svg/mastercard.svg" alt="mastercard" />
                </div>
                <div class="add-content">
                  <div>
                    <h5 class="fw-semibold dark-text">Mastercard **** **** 4589</h5>
                    <h6 class="mt-1 light-text">Expires on 16/24</h6>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                  </div>
                </div>
              </div>
            </li>

            <li class="new-card w-100">
              <a href="#" class="payment-detail">
                <div class="add-img">
                  <i class="ri-add-line theme-color add-square-img"></i>
                </div>
                <div class="add-content">
                  <div>
                    <h5 class="fw-semibold dark-text">Add New Card</h5>
                    <h6 class="mt-1 light-text">Save and Pay via Cards.</h6>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <h3 class="fw-semibold dark-text section-t-space">Credit / Debit Card</h3>

        <ul class="payment-list section-lg-b-space">
          <li class="cart-add-box payment-card-box gap-0 mt-3">
            <div class="payment-detail">
              <div class="add-img">
                <img class="img-fluid img" src="assets/images/icons/svg/paypal.svg" alt="mastercard" />
              </div>
              <div class="add-content">
                <div>
                  <h5 class="fw-semibold">Pay Pal</h5>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" />
                </div>
              </div>
            </div>
          </li>
          <li class="cart-add-box payment-card-box gap-0 mt-3">
            <div class="payment-detail">
              <div class="add-img">
                <img class="img-fluid img img1" src="assets/images/svg/qr-code.svg" alt="apple-pay" />
              </div>
              <div class="add-content">
                <div>
                  <h5 class="fw-semibold">QR Code</h5>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" />
                </div>
              </div>
            </div>
          </li>
          <li class="cart-add-box payment-card-box gap-0 mt-3">
            <div class="payment-detail">
              <div class="add-img">
                <img class="img-fluid img" src="assets/images/icons/svg/cash.svg" alt="cash" />
              </div>
              <div class="add-content">
                <div>
                  <h5 class="fw-semibold">Cash on Delivery</h5>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'ManagePaymentView',
}
</script>

<style>

</style>
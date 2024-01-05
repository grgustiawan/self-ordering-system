<template>
  <div>
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Cart'}">
            <i class="ri-arrow-left-s-line"></i>
          </router-link>
          <h2>Apply Coupon</h2>
        </div>
      </div>
    </header>
    <!-- header end -->

    <!-- search section starts -->
    <section class="search-section">
      <div class="custom-container">
        <form class="auth-form search-head" target="_blank">
          <div class="form-group">
            <div class="form-input w-100">
              <input type="text" class="form-control search" id="inputusername" placeholder="Restaurant, item & more" />
              <i class="ri-search-line search-icon"></i>
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- search section end -->

    <!-- coupon section start -->
    <section class="section-lg-b-space">
      <div class="custom-container">
        <h3 class="mb-3 dark-text">Available Coupons</h3>
        <div class="row gy-3">
          <div class="col-12">
            <div class="coupon-box">
              <div class="coupon-discount color-1">20% OFF</div>
              <div class="coupon-details">
                <div class="coupon-content">
                  <div class="coupon-name">
                    <img class="img-fluid coupon-img" src="assets/images/icons/google-pay.png" alt="c1" />
                    <div>
                      <h5 class="fw-semibold dark-text">Google Pay</h5>
                      <h6 class="light-text mt-1">Use Gpay</h6>
                    </div>
                  </div>
                  <div class="coupon-code">
                    <h6 class="light-text">#GOOGLE20</h6>
                  </div>
                </div>
                <p>Valid on order with items wroth $10 or more.<span>More Details</span></p>
                <div class="coupon-apply">
                  <h6 class="unlock">Add item wroth $20 more to unlock</h6>
                </div>
              </div>
              <img class="img-fluid coupon-left" src="assets/images/svg/coupon-left.svg" alt="right-border" />
              <img class="img-fluid coupon-right" src="assets/images/svg/coupon-right.svg" alt="right-border" />
            </div>
          </div>
          <div class="col-12">
            <div class="coupon-box">
              <div class="coupon-discount color-2">20% OFF</div>
              <div class="coupon-details">
                <div class="coupon-content">
                  <div class="coupon-name">
                    <img class="img-fluid coupon-img" src="assets/images/icons/one-card.png" alt="c1" />
                    <div>
                      <h5 class="fw-semibold dark-text">OneCard</h5>
                      <h6 class="light-text mt-1">Use onecard</h6>
                    </div>
                  </div>
                  <div class="coupon-code">
                    <h6 class="light-text">#ONE1CARD</h6>
                  </div>
                </div>
                <p>Valid on order with items wroth $10 or more.<span>More Details</span></p>
                <div class="coupon-apply">
                  <h6 class="unlock">Add item wroth $20 more to unlock</h6>
                  <a href="cart.html" class="theme-color fw-semibold">Apply</a>
                </div>
              </div>
              <img class="img-fluid coupon-left" src="assets/images/svg/coupon-left.svg" alt="right-border" />
              <img class="img-fluid coupon-right" src="assets/images/svg/coupon-right.svg" alt="right-border" />
            </div>
          </div>
          <div class="col-12">
            <div class="coupon-box">
              <div class="coupon-discount color-3">20% OFF</div>
              <div class="coupon-details">
                <div class="coupon-content">
                  <div class="coupon-name">
                    <img class="img-fluid coupon-img" src="assets/images/icons/citi-bank.png" alt="c1" />
                    <div>
                      <h5 class="fw-semibold dark-text">Citi Bank</h5>
                      <h6 class="light-text mt-1">Use citibank card</h6>
                    </div>
                  </div>
                  <div class="coupon-code">
                    <h6 class="light-text">#CITI0012</h6>
                  </div>
                </div>
                <p>Valid on order with items wroth $10 or more.<span>More Details</span></p>
                <div class="coupon-apply">
                  <h6 class="unlock">Add item wroth $20 more to unlock</h6>
                  <a href="cart.html" class="theme-color fw-semibold">Apply</a>
                </div>
              </div>
              <img class="img-fluid coupon-left" src="assets/images/svg/coupon-left.svg" alt="right-border" />
              <img class="img-fluid coupon-right" src="assets/images/svg/coupon-right.svg" alt="right-border" />
            </div>
          </div>
          <div class="col-12">
            <div class="coupon-box">
              <div class="coupon-discount color-4">20% OFF</div>
              <div class="coupon-details">
                <div class="coupon-content">
                  <div class="coupon-name">
                    <img class="img-fluid coupon-img" src="assets/images/icons/simpla.png" alt="c1" />
                    <div>
                      <h5 class="fw-semibold dark-text">Simpl</h5>
                      <h6 class="light-text mt-1">Use simpl</h6>
                    </div>
                  </div>
                  <div class="coupon-code">
                    <h6 class="light-text">#SIM100</h6>
                  </div>
                </div>
                <p>Valid on order with items wroth $10 or more.<span>More Details</span></p>
                <div class="coupon-apply">
                  <h6 class="unlock">Add item wroth $20 more to unlock</h6>
                  <a href="cart.html" class="theme-color fw-semibold">Apply</a>
                </div>
              </div>
              <img class="img-fluid coupon-left" src="assets/images/svg/coupon-left.svg" alt="right-border" />
              <img class="img-fluid coupon-right" src="assets/images/svg/coupon-right.svg" alt="right-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'CouponsView'
}
</script>

<style>

</style>
<template>
  <div>
        <!-- header start -->
        <header class="section-t-space">
        <div class="custom-container">
            <div class="header-panel">
            <router-link :to="{name: 'Main'}">
                <i class="ri-arrow-left-s-line"></i>
            </router-link>
            <h2>My Voucher</h2>
            </div>
        </div>
        </header>
        <!-- header end -->

        <!-- tab section start -->
        <section class="section-t-space">
        <div class="custom-container">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="new-tab" data-bs-toggle="pill" data-bs-target="#new" type="button" role="tab">New</button>
            </li>

            <li class="nav-item" role="presentation">
                <button class="nav-link" id="used-tab" data-bs-toggle="pill" data-bs-target="#used" type="button" role="tab">Used</button>
            </li>

            <li class="nav-item" role="presentation">
                <button class="nav-link" id="expired-tab" data-bs-toggle="pill" data-bs-target="#expired" type="button" role="tab">Expired</button>
            </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="new" role="tabpanel" tabindex="0">
                <section class="section-b-space">
                <div class="row g-3 gx-3">
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/c1.png" alt="c1" />
                        </div>
                        <div class="voucher-content">
                        <h5>Dunkin Donuts</h5>
                        <p>Buy 1 donut and get 20% off on second donut</p>
                        </div>
                        <div class="voucher-discount color-5">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>20% OFF</h2>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/brand1.png" alt="brand1" />
                        </div>
                        <div class="voucher-content">
                        <h5>La Pino’z</h5>
                        <p>Buy 1 pizza and get 50% off on second pizza</p>
                        </div>
                        <div class="voucher-discount color-2">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>50% OFF</h2>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/c3.png" alt="c3" />
                        </div>
                        <div class="voucher-content">
                        <h5>KFC Chicken</h5>
                        <p>Buy 1 order and get 30% off on second order</p>
                        </div>
                        <div class="voucher-discount color-3">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>30% OFF</h2>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/brand9.png" alt="c1" />
                        </div>
                        <div class="voucher-content">
                        <h5>Taco Bell</h5>
                        <p>Buy 1 order and get 10% off on second order</p>
                        </div>
                        <div class="voucher-discount color-4">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>10% OFF</h2>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/brand2.png" alt="brand2" />
                        </div>
                        <div class="voucher-content">
                        <h5>McDonals</h5>
                        <p>Buy 1 burger and get 50% off on second burger</p>
                        </div>
                        <div class="voucher-discount color-1">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>50% OFF</h2>
                        </div>
                    </div>
                    </div>
                </div>
                <a href="profile.html" class="btn theme-btn add-select w-100" role="button">Use Now</a>
                </section>
            </div>
            <div class="tab-pane fade" id="used" role="tabpanel" tabindex="0">
                <section class="section-b-space">
                <div class="row g-3 gx-3">
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/c1.png" alt="c1" />
                        </div>
                        <div class="voucher-content">
                        <h5>Dunkin Donuts</h5>
                        <p>Buy 1 donut and get 20% off on second donut</p>
                        </div>
                        <div class="voucher-discount color-5">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>20% OFF</h2>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/brand1.png" alt="brand1" />
                        </div>
                        <div class="voucher-content">
                        <h5>La Pino’z</h5>
                        <p>Buy 1 pizza and get 50% off on second pizza</p>
                        </div>
                        <div class="voucher-discount color-2">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>50% OFF</h2>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/c3.png" alt="c3" />
                        </div>
                        <div class="voucher-content">
                        <h5>KFC Chicken</h5>
                        <p>Buy 1 order and get 30% off on second order</p>
                        </div>
                        <div class="voucher-discount color-3">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>30% OFF</h2>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/brand9.png" alt="c1" />
                        </div>
                        <div class="voucher-content">
                        <h5>Taco Bell</h5>
                        <p>Buy 1 order and get 10% off on second order</p>
                        </div>
                        <div class="voucher-discount color-4">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>10% OFF</h2>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="voucher-box">
                        <div class="voucher-img">
                        <img class="img-fluid voucher-icon" src="assets/images/icons/brand2.png" alt="brand2" />
                        </div>
                        <div class="voucher-content">
                        <h5>McDonals</h5>
                        <p>Buy 1 burger and get 50% off on second burger</p>
                        </div>
                        <div class="voucher-discount color-1">
                        <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                        <h2>50% OFF</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
            <div class="tab-pane fade" id="expired" role="tabpanel" tabindex="0">
                <section class="section-b-space">
                <div class="row g-3 gx-3">
                    <div class="col-6">
                    <div class="expired-box">
                        <div class="expired-tag">
                        <p>Expired</p>
                        </div>
                        <div class="voucher-box expired-voucher">
                        <div class="voucher-img">
                            <img class="img-fluid voucher-icon" src="assets/images/icons/c1.png" alt="c1" />
                        </div>
                        <div class="voucher-content">
                            <h5>Dunkin Donuts</h5>
                            <p>Buy 1 donut and get 20% off on second donut</p>
                        </div>
                        <div class="voucher-discount">
                            <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                            <h2>20% OFF</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="expired-box">
                        <div class="expired-tag">
                        <p>Expired</p>
                        </div>
                        <div class="voucher-box expired-voucher">
                        <div class="expired-tag">
                            <p>Expired</p>
                        </div>
                        <div class="voucher-img">
                            <img class="img-fluid voucher-icon" src="assets/images/icons/brand1.png" alt="brand1" />
                        </div>
                        <div class="voucher-content">
                            <h5>La Pino’z</h5>
                            <p>Buy 1 pizza and get 50% off on second pizza</p>
                        </div>
                        <div class="voucher-discount">
                            <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                            <h2>50% OFF</h2>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-6">
                    <div class="expired-box">
                        <div class="expired-tag">
                        <p>Expired</p>
                        </div>

                        <div class="voucher-box expired-voucher">
                        <div class="expired-tag">
                            <p>Expired</p>
                        </div>
                        <div class="voucher-img">
                            <img class="img-fluid voucher-icon" src="assets/images/icons/c3.png" alt="c3" />
                        </div>
                        <div class="voucher-content">
                            <h5>KFC Chicken</h5>
                            <p>Buy 1 order and get 30% off on second order</p>
                        </div>
                        <div class="voucher-discount">
                            <img class="img-fluid top-vector" src="assets/images/svg/vvt.svg" alt="top-design" />
                            <h2>30% OFF</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
            </div>
        </div>
        </section>
        <!-- tab section end -->
  </div>
</template>

<script>
export default {
    name: 'VoucherView'
}
</script>

<style>

</style>
<template>
  <div class="filterbar">
    <div class="modal search-filter" id="search-filter" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-title">
            <h3 class="fw-semibold">Filter</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <section class="section-b-space pt-0">
            <div class="custom-container">
                <ul class="payment-card-box search-categories">
                <li class="mt-0">
                    <div class="payment-detail">
                    <div class="add-img">
                        <img class="img-fluid img" src="assets/images/svg/summary.svg" alt="truck" />
                    </div>
                    <div class="form-check radio-btn">
                        <label class="form-check-label" for="btn-3">Previous Orders</label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="btn-3" />
                    </div>
                    </div>
                </li>
                <li class="mt-0">
                    <div class="payment-detail">
                    <div class="add-img">
                        <img class="img-fluid img" src="assets/images/svg/star.svg" alt="truck" />
                    </div>
                    <div class="form-check radio-btn">
                        <label class="form-check-label" for="btn-4">Popular Order</label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="btn-4" />
                    </div>
                    </div>
                </li>
                </ul>
                <section class="pt-0">
                <div class="amount-range">
                    <div class="range">
                    <label class="form-label">Min Order Amount</label>
                    <output class="range-amount" id="rangevalue">$100</output>
                    </div>
                    <input type="range" value="100" min="0" max="500" oninput="rangevalue.value=value" />
                </div>
                </section>
                <section class="pt-0">
                <div class="amount-range">
                    <div class="range">
                    <label class="form-label">Location Between</label>
                    <output class="range-amount" id="rangevalue1">2km</output>
                    </div>
                    <input type="range" value="2" min="0" max="10" oninput="rangevalue1.value=value" />
                </div>
                </section>
                <section class="pt-0">
                <div class="order-options">
                    <h3 class="mt-3 mb-3 dark-text fw-semibold">Order Type</h3>
                    <div class="order-type">
                    <div class="auth-form search-form">
                        <div class="form-check">
                        <label class="form-check-label" for="fixed1">Delivery</label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="fixed1" checked />
                        </div>
                    </div>
                    <div class="auth-form search-form">
                        <div class="form-check">
                        <label class="form-check-label" for="fixed2">Pick Up</label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="fixed2" />
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <section class="pt-0 section-lg-b-space">
                <div class="order-options">
                    <h3 class="mb-3 dark-text fw-semibold">Veg/Non-Veg</h3>
                    <div class="order-type">
                    <div class="auth-form search-form">
                        <div class="form-check">
                        <label class="form-check-label" for="fixed3">Pure Veg</label>
                        <input class="form-check-input" type="radio" name="RadioDefault" id="fixed3" />
                        </div>
                    </div>
                    <div class="auth-form search-form section-b-space">
                        <div class="form-check">
                        <label class="form-check-label" for="fixed4">Non Veg</label>
                        <input class="form-check-input" type="radio" name="RadioDefault" id="fixed4" checked />
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
            </section>

            <div class="footer-modal d-flex">
            <a href="landing.html" class="btn btn-link btn-inline mt-0 w-50">Clear Filter</a>
            <a href="search.html" class="theme-btn btn btn-inline mt-0 w-50">Apply</a>
            </div>
        </div>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
    name: 'FilterBar'
}
</script>

<style>
.filterbar{
    background-color: white;
    position: absolute;
    z-index: 10000;
}
</style>
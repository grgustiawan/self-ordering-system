<template>
  <div>
    <section>
      <div class="custom-container">
        <router-link :to="{name : 'Coupon'}" class="apply-coupon">
          <div>
            <h5 class="dark-text">Apply Coupon</h5>
            <h6 class="coupon-code">#GOOGLE20</h6>
          </div>
          <i class="ri-arrow-right-s-line"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'CouponsSelectVue'
}
</script>

<style>

</style>
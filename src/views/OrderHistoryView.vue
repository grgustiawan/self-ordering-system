<template>
  <div>
    <!-- header start -->
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Profile'}">
            <i class="ri-arrow-left-s-line"></i>
          </router-link>
          <h2>Order History</h2>
        </div>
      </div>
    </header>
    <!-- header end -->

    <OrderHistory />
  </div>
</template>

<script>
import OrderHistory from '@/components/OrderHistory.vue';
export default {
    name: 'OrderHistoryView',
    components: {
      OrderHistory
    }
}
</script>

<style>

</style>
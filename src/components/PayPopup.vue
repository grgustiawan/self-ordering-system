<template>
   <div class="pay-popup">
      <div class="price-items">
        <h3>Rp. {{ pAmount }}</h3>
        <h6>{{ pQuantity }} item Added</h6>
      </div>
      <router-link :to="{name: pRoute}" class="btn theme-btn pay-btn mt-0">{{ pAction }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'PayPoup',
    props: ['pAmount', 'pQuantity', 'pAction', 'pRoute'],
}
</script>

<style>
.pay-popup{
    z-index: 1000;
}
</style>
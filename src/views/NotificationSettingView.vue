<template>
  <div>
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Profile'}">
            <i class="ri-arrow-left-s-line"></i>
          </router-link>
          <h2>Notification Setting</h2>
        </div>
      </div>
    </header>
    <!-- header end -->

    <!-- notification section start -->
    <section>
      <div class="custom-container">
        <ul class="notification-setting">
          <li>
            <div class="notification pt-0">
              <h5 class="fw-semibold dark-text">Offer Update</h5>
              <div class="switch-btn">
                <input type="checkbox" checked />
              </div>
            </div>
          </li>

          <li>
            <div class="notification">
              <h5 class="fw-semibold dark-text">Order Update</h5>
              <div class="switch-btn">
                <input type="checkbox" />
              </div>
            </div>
          </li>

          <li>
            <div class="notification pb-0">
              <h5 class="fw-semibold dark-text">New Update</h5>
              <div class="switch-btn">
                <input type="checkbox" checked />
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
    name: 'NotificationSettingView'
}
</script>

<style>

</style>
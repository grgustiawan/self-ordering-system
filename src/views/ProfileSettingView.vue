<template>
  <div>
    <!-- header start -->
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Profile', params: {token: this.$route.params.token}}">
            <i class="ri-arrow-left-s-line"></i>
          </router-link>
          <h2>Profile Setting</h2>
        </div>
      </div>
    </header>
    <!-- header end -->

    <!-- profile info start -->
    <section>
      <div class="profile-image-container">
        <div class="profile-img">
          <img class="img-fluid img" src="/assets/images/icons/profile.png" alt="profile" />
          <input type="file" class="form-control mt-2">
        </div>
      </div>
    </section>
    <!-- profile info end -->

    <!-- profile listing start -->
    <section class="section-b-space mt-3">
      <div class="custom-container">
        <form class="auth-form profile-form" target="_blank">
          <div class="form-group">
            <label class="form-label fw-semibold">My Name</label>
            <div class="form-input mb-4">
              <input type="text" class="form-control" placeholder="Enter your name" value="Galih Raka Gustiawan" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label fw-semibold">Phone Number</label>
            <div class="form-input mb-4">
              <input type="text" class="form-control" placeholder="Enter phone number" value="08381263xxxx" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label fw-semibold">Email</label>
            <div class="form-input mb-4">
              <input type="text" class="form-control" placeholder="Enter email" value="prog5@optmlw.com" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label fw-semibold">My Address</label>
            <div class="form-input mb-4">
              <textarea class="form-control" rows="2" placeholder="Enter address">Walantaka, Serang - Banten</textarea>
            </div>
          </div>
          <a href="profile.html" class="btn theme-btn save-address w-100">Save </a>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'ProfileSettingView'
}
</script>

<style>
.profile-image-container {
  display: flex;
  left: 0;
  min-width: 360px;
  padding: 0 20px;
  margin: auto 5px;
  background-color: rgba(var(--white), 1);
}

.profile-img {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
}
</style>
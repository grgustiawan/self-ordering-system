<template>
  <div>

    <header class="section-t-space" v-show="!is_member">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Main', params: { token: this.$route.params.token}}">
            <i class="ri-arrow-left-s-line"></i>
          </router-link>
          <h2>Settings</h2>
        </div>
      </div>
    </header>

    <forbidden-view-vue v-show="is_member"></forbidden-view-vue>

    <!-- profile listing start -->
    <!-- <section v-show="!is_member">
      <div class="custom-container">
        <ul class="settings-list">
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/coin.svg" alt="location" />
              </div>
              <a href="manage-delivery-address.html" class="profile-box-name">
                <h6>My Point</h6>
                <span class="text-secondary">0 Point</span>
              </a>
            </div>
          </li>
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/profile.svg" alt="profile" />
              </div>
              <router-link :to="{name: 'Profile-Setting', params: { token: this.$route.params.token}}" class="profile-box-name">
                <h6>Profile Setting</h6>
              </router-link>
            </div>
          </li>
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/whishlist.svg" alt="wishlist" />
              </div>
              <router-link :to="{name: 'Whistlist', params: { token: this.$route.params.token}}" class="profile-box-name">
                <h6>My Wishlist</h6>
              </router-link>
            </div>
          </li>
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/manage-payment.svg" alt="Payment" />
              </div>
              <router-link :to="{name: 'Manage-Payment'}" class="profile-box-name">
                <h6>Manage Payment</h6>
              </router-link>
            </div>
          </li>
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/my-order.svg" alt="order" />
              </div>
              <router-link :to="{name: 'Order-History'}" class="profile-box-name">
                <h6>My Orders History</h6>
              </router-link>
            </div>
          </li>
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/ticket.svg" alt="ticket" />
              </div>
              <a href="voucher.html" class="profile-box-name">
                <h6>My Voucher</h6>
              </a>
            </div>
          </li>
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/setting.svg" alt="setting" />
              </div>
              <router-link :to="{name: 'Other-Setting'}" class="profile-box-name">
                <h6>Other Settings</h6>
              </router-link>
            </div>
          </li>
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/notification-bing.svg" alt="bell" />
              </div>
              <router-link :to="{name: 'Notification-Setting'}" class="profile-box-name">
                <h6>Notification Setting</h6>
              </router-link>
            </div>
          </li>
          <li>
            <div class="profile-box">
              <div class="profile-icon">
                <img class="img-fluid icon" src="/assets/images/svg/logout.svg" alt="logout" />
              </div>
              <router-link :to="{name: 'Login'}" class="profile-box-name">
                <h6>Log Out</h6>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </section> -->

  </div>
</template>

<script>
import ForbiddenViewVue from './ForbiddenView.vue'
import axios from 'axios';

export default {
    name: 'ProfileView',
    data(){
      return {
          is_member: true,
          servers: '',
      }
    },
    components: {
      ForbiddenViewVue,
    },
    mounted(){
      const decode = atob(this.$route.query.scr);
      const arrData = decode.split(";");
      this.servers = 'https://' + arrData[0] + '/api/web';
        
      axios.get( this.servers + '/cart/' + this.$route.query.scr)
      .then((res) => {
          if(res.data.is_submitted) this.$router.push({name: 'Submitted', query:{scr: this.$route.query.scr}});
      });
    }
}
</script>

<style>

.settings-list li {
  width: 100%;
  padding-bottom: 15px;
}
.settings-list li .profile-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 60px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 15px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 10px;
  color: #000;
  border: 2.5px solid #603939;
  background-image: linear-gradient(180deg, #efe1d3 0%, #fff9f4 100%);
  margin: -3px auto;
}
[dir=rtl] .settings-list li .profile-box {
  border-radius: 10px;
}
.settings-list li .profile-box .profile-icon {
  height: 44px;
  width: 44px;
  border-radius: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-transform: scale(1.4);
          transform: scale(1.4);
  font-size: 22px;
  margin-left: 5px;
}
.settings-list li .profile-box .profile-icon .icon {
  width: 25px;
  height: 25px;
}
.settings-list li .profile-box .profile-box-name {
  width: calc(100% - 40px - 15px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 10px;
  margin-left: 6px;
  color: #000;
}
[dir=rtl] .settings-list li .profile-box .profile-box-name {
  margin-left: unset;
  margin-right: 6px;
}
.settings-list li .profile-box .profile-box-name h6 {
  font-weight: bold;
  font-size: 11pt;
  color: rgb(100, 100, 100);
}
.settings-list li .profile-box .profile-box-name h6 .arrow {
  margin-left: auto;
  font-size: 14px;
}
[dir=rtl] .settings-list li .profile-box .profile-box-name h6 .arrow {
  margin-left: unset;
  margin-right: auto;
}
.settings-list li .profile-box .profile-box-name i {
  font-size: 16px;
}
[dir=rtl] .settings-list li .profile-box .profile-box-name i {
  -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
  margin-left: 8px;
}
</style>
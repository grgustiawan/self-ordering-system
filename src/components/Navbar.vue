<template>
  <div class="">
    <div class="navbar-menu">
        <ul>
        <li :class="{active: $route.name==='Store'}">
            <router-link :to="{name: 'Store', params: {token: this.$route.params.token}}">
                <div class="icon">
                    <img class="unactive nav-icon" src="/assets/images/svg/location-pin.svg" alt="home" />
                    <img class="active nav-icon" src="/assets/images/svg/location-pin-fill.svg" alt="home" />
                </div>
                <span>Store</span>
            </router-link>
        </li>
        <li :class="{active: $route.name==='Offer'}">
            <router-link :to="{name: 'Offer', params: {token: this.$route.params.token}}">
                <div class="icon">
                    <img class="unactive nav-icon-coupon" src="/assets/images/svg/coupon.svg" alt="offer" />
                    <img class="active nav-icon-coupon" src="/assets/images/svg/coupon-fill.svg" alt="offer" />
                </div>
                <span class="nav-title">Offer</span>
            </router-link>
        </li>

        <li :class="{active: $route.name==='Main'}">
            <router-link :to="{name: 'Main', params: {token: this.$route.params.token}}">
                <div class="icon">
                    <img class="unactive main-logo" src="/assets/images/svg/main.png" alt="menu" />
                    <img class="active main-logo" src="/assets/images/svg/main-fill.png" alt="menu" />
                </div>
                <span class="main-text">Menu</span>
            </router-link>
        </li>

        <li>
            <router-link :to="{name: 'Notification', params: { token: this.$route.params.token}}">
                <div class="icon">
                    <img class="unactive nav-icon" src="/assets/images/svg/notification.svg" alt="cart" />
                    <img class="active nav-icon" src="/assets/images/svg/notification-fill.svg" alt="cart" />
                </div>
                <!-- <span>News</span> -->
            </router-link>
        </li>
        <li :class="{active: $route.name==='Profile'}">
            <router-link :to="{name: 'Profile', params: {token: this.$route.params.token}}">
                <div class="icon">
                    <img class="unactive nav-icon" src="/assets/images/svg/settings.svg" alt="user.svg" />
                    <img class="active nav-icon" src="/assets/images/svg/settings.svg" alt="user-fill.svg" />
                </div>
                <span>Settings</span>
            </router-link>
        </li>
        </ul>
    </div>

  </div>
</template>

<script>

export default {
    name: 'NavbarVue',
}
</script>

<style>

.navbar-menu{
    z-index:5000;
}
.main-logo{
    width:100px;
    position:absolute;
    margin-top:-65px;
    z-index:1000
}

.nav-title{
    display: flex;
    margin-top: 25px;
}

.nav-icon{
    margin-top:5px;
    width: 22px;
    color: #999999;
}

.nav-icon-coupon{
    position: absolute;
    top: 0;
    width: 27px;
    color: #999999;
}

.main-text{
    display: flex;
    margin-top:25px
}
</style>
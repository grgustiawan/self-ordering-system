<template>
  <div class="foodpage-wrapper">
    <header class="section-t-space">
      <div class="custom-container">
        <div class="header-panel">
          <router-link :to="{name: 'Main', query:{ scr: this.$route.query.scr}}">
            <i class="ri-arrow-left-s-line"></i>
          </router-link>
          <h2>News</h2>
        </div>
      </div>
    </header>

    <section>
      <div class="custom-container" style="width: 100%;">
        <ul class="news" v-for="notif in news" :key="notif.id">

          <li class="news-box">
            <div class="news-content news-content-unread" :class="{'bg-warning' : notif.priority === 'low'}">
              <div class="d-flex flex-row justify-content-between align-items-center">
                <h5 class="text-secondary" style="font-weight: bolder;">{{ notif.titles }}</h5>
                <h6>{{ notif.crDate }}</h6>
              </div>
              <p class="text-white" style="font-size: 11pt;">{{ notif.msg }}</p>
            </div>
          </li>

        </ul>
      </div>
    </section>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'newsView',
  data(){
    return {
      news: [],
      servers: '',
    }
  },
  mounted(){
    const decode = atob(this.$route.query.scr);
    const arrData = decode.split(";");
    this.servers = 'https://' + arrData[0] + '/api/web';

    axios.get( this.servers + '/cart/' + this.$route.query.scr)
    .then((res) => {
        if(res.data.is_submitted) this.$router.push({name: 'Submitted', query:{scr: this.$route.query.scr}});
    }).catch(() =>  { window.location.href = "/" })

    this.getNotification();
  },
  methods: {
    async getNotification(){
      try{
        let { data } = await axios.get(this.servers + '/notificationdtl/' + this.$route.query.scr)
        this.news = data
      } catch(e){
        console.log(e)
      }
    }
  }
}
</script>

<style>
.news .news-box {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 110%;
  margin-top: 70px;
}

.news .news-box .news-icon {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px dashed rgba(var(--light-text), 1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.news .news-box.unread .news-content p {
  color: rgba(var(--dark-text), 1);
}
.news .news-box.unread .news-content h5 {
  font-weight: 600;
}
.news .news-box .news-content {
  width: calc(100% - 60px);
  margin-left: 10px;
  margin-top: -50px;
  background: rgba(var(--white), 1);
  border: 1px solid rgba(var(--black), 0.05);
  border-radius: 8px;
  padding: 12px 12px 12px 18px;
  -webkit-box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
}

.news .news-box .news-content-unread{
  background: rgb(234, 255, 152);
  border: 1px solid rgba(var(--black), 0.05);
}

[dir=rtl] .news .news-box .news-content {
  margin-left: unset;
  margin-right: 10px;
  padding: 12px 18px 12px 12px;
}
.news .news-box .news-content h5 {
  color: rgba(var(--dark-text), 1);
  font-size: 14px;
  line-height: 1.2;
}
.news .news-box .news-content h6 {
  color: rgba(var(--light-text), 1);
}
.news .news-box .news-content p {
  color: rgba(var(--light-text), 1);
  border-top: 1px dashed rgba(var(--dashed-line), 1);
  padding: 8px 0 0 0;
  margin: 8px 0 0 0;
}

.news-setting {
  background: rgba(var(--white), 1);
  border: 1px solid rgba(var(--black), 0.05);
  -webkit-box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
          box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 15px;
}
.news-setting li {
  display: block;
  border-bottom: 1px solid rgba(var(--dashed-line), 0.5);
}
.news-setting li:last-child {
  border-bottom: none;
}
.news-setting li .news {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100%;
  padding: 15px 0;
}
.news-setting li .news input[type=checkbox] {
  position: relative;
  width: 37px;
  height: 22px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: rgba(var(--box-bg), 1);
  outline: none;
  border-radius: 50px;
  cursor: pointer;
}
.news-setting li .news input[type=checkbox]:checked {
  background: rgba(var(--theme-color), 0.1);
}
.news-setting li .news input[type=checkbox]:checked::before {
  -webkit-transform: translateX(80%) translateY(-50%);
          transform: translateX(80%) translateY(-50%);
  background: rgba(var(--theme-color), 1);
}
.news-setting li .news input[type=checkbox]:before {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(var(--light-text), 1);
  position: absolute;
  top: 50%;
  left: 5px;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
</style>
<template>
  <div>
    <section class="section-b-space pt-0">
      <img class="img-fluid login-img" src="/assets/images/background/login-img.jpg" alt="login-img" />
      
      <div class="custom-container">
          <form class="login-form">
              <p class="login-title">Signin </p>
              <p class="login-message">Signin now and get full access to our app. </p>
                      
              <label>
                  <input required="" placeholder="" type="email" class="input">
                  <span>Email</span>
              </label> 
                  
              <label>
                  <input required="" placeholder="" type="password" class="input">
                  <span>Password</span>
              </label>

              <div class="col col-12">
                <div class="col-lg-12">
                  <button class="login-button type1"></button>
                </div>
                <div class="col-lg-12 mt-2">
                  <router-link :to="{name: 'Branch', query: {scr: this.$route.query.scr}}" class="btn theme-btn" 
                                style="margin-top: -1px;height: 99%;width: 100%;">Back</router-link>
                </div>
              </div>
              <p class="signin">Dont have an acount ? <router-link :to="{name: 'Register', query: {scr: this.$route.query.scr}}">Signup</router-link></p>
          </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginView',
    data(){
      return {
        servers: '',
      }
    },
    mounted(){
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';

        axios.get( this.servers + '/cart/' + this.$route.query.scr)
        .then((res) => {
            if(res.data.is_submitted) this.$router.push({name: 'Submitted', query: {scr: this.$route.query.scr}});
        }).catch(() => { window.location.href = "/" });
    }
}
</script>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  margin-top: 0px ;
}

.login-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  --mask:
    radial-gradient(34.99px at 50% calc(100% - 48.00px),#000 99%,#0000 101%) calc(50% - 60px) 0/120px 100%,
    radial-gradient(34.99px at 50% calc(100% + 18.00px),#0000 99%,#000 101%) 50% calc(100% - 30px)/120px 100% repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}

.login-title {
  font-size: 28px;
  color: #8abfb0;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.login-title::before,.login-title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #8abfb0;
}

.login-title::before {
  width: 18px;
  height: 18px;
  background-color: #8abfb0;
}

.login-title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.login-message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.login-form label {
  position: relative;
}

.login-form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 2.5px solid #603939;
  border-radius: 10px;
}

.login-form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.login-form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.login-form label .input:focus + span,.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.login-form label .input:valid + span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}

.login-button {
  height: 50px;
  width: 100%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  display: block;
}

.login-button:hover {
  box-shadow: .5px .5px 150px rgba(255, 132, 0, 0.601);
}

.type1::after {
  content: "Submit";
  height: 50px;
  width: 100%;
  background-color: #f5835e;
  color: #fff;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(50px);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.type1::before {
  content: "Login";
  height: 50px;
  width: 100%;
  background-color: #8abfb0;
  color: #fff;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(0px);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.type1:hover::after {
  transform: translateY(0) scale(1.2);
}

.type1:hover::before {
  transform: translateY(-50px) scale(1.2);
}
</style>
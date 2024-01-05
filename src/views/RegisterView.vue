<template>
    <div>
      <section class="section-b-space pt-0">
        <div class="register-img-wrapper">
            <img class="img-fluid register-img" src="/assets/images/background/login-img.jpg" alt="register-img" />
            <h1 class="signin-logo">Tamani</h1>
        </div>
  
        <div class="custom-container">
            <form class="register-form">
                <p class="register-title">Signup</p>
                <p class="register-message">Signup now and get full access to our app. </p>
                        
                <div class="flex">
                    <label>
                        <input required="" placeholder="" type="text" class="input">
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" class="input">
                        <span>Lastname</span>
                    </label>
                </div>  
                        
                <label>
                    <input required="" placeholder="" type="email" class="input">
                    <span>Email</span>
                </label> 
                    
                <label>
                    <input required="" placeholder="" type="password" class="input">
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" class="input">
                    <span>Confirm password</span>
                </label>
  
                <button class="register-button type2"></button>
                <p class="signin">Already have an acount ? <router-link :to="{name: 'Login', query: {scr: this.$route.query.scr}}">Signin</router-link></p>
            </form>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
      name: 'ResgiterView',
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
  @import url('https://fonts.cdnfonts.com/css/the-heart-chakra');
  .signin-logo{
    position: fixed;
    top: 190px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    font-family: 'The Heart Chakra', sans-serif;
    font-size: 40pt;
    font-weight: lighter;
    color: #716b53;
  }

  .register-img-wrapper{
    width: 100%;
    height: 400px;
    margin-bottom: 0;
  }

  .register-img{
    width: 100%;
    height: 400px;
    margin-bottom: 0;
    object-fit: cover;
    object-position: center top;  
    --mask:
      radial-gradient(34.99px at 50% calc(100% - 48.00px),#000 99%,#0000 101%) calc(50% - 60px) 0/120px 100%,
      radial-gradient(34.99px at 50% calc(100% + 18.00px),#0000 99%,#000 101%) 50% calc(100% - 30px)/120px 100% repeat-x;
    -webkit-mask: var(--mask);
            mask: var(--mask);
  }

  .register-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    margin-top: -20px ;
  }
  
  .register-title {
    font-size: 28px;
    color: #f5835e;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  
  .register-title::before,.register-title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #f5835e;
  }
  
  .register-title::before {
    width: 18px;
    height: 18px;
    background-color: #f5835e;
  }
  
  .register-title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }
  
  .register-message, .signin {
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
  
  .register-form label {
    position: relative;
  }
  
  .register-form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 2.5px solid #603939;
    border-radius: 10px;
  }
  
  .register-form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }
  
  .register-form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }
  
  .register-form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  
  .register-form label .input:valid + span {
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
  
  .register-button {
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
  
  .register-button:hover {
    box-shadow: .5px .5px 150px rgba(255, 132, 0, 0.601);
  }
  
  .type2::after {
    content: "Submit";
    height: 50px;
    width: 100%;
    background-color: #8abfb0;
    color: #fff;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(-50px);
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }
  
  .type2::before {
    content: "Register";
    height: 50px;
    width: 100%;
    background-color: #f5835e;
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
  
  .type2:hover::after {
    transform: translateY(0) scale(1.2);
  }
  
  .type2:hover::before {
    transform: translateY(50px) scale(1.2);
  }
  </style>
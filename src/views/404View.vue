<template>
  <div> 
    <section class="home">

    <div class="theme-content">
    <div class="custom-container">
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <span style="font-size:100px;font-weight:bolder">4<img class="forbidden-img" src="assets/images/forbidden.png" alt="forbidden.png">4</span>
                </div>
                <h2>Oops! Page Not Be Found</h2>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
            </div>
        </div>
    </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
    name: '404View'
}
</script>

<style>
 * {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    }

    .forbidden-img{
        width:85px;
        position:absolute;
        margin-top:-20px
    }

    #notfound {
    position: relative;
    height: 100vh;
    }

    #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    }

    .notfound {
    max-width: 520px;
    width: 100%;
    text-align: center;
    line-height: 1.4;
    }

    .notfound .notfound-404 {
    height: 190px;
    }

    .notfound .notfound-404 h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 146px;
    font-weight: 700;
    margin: 0px;
    color: #232323;
    }

    .notfound .notfound-404 h1>span {
    display: inline-block;
    width: 120px;
    height: 120px;
    background-size: cover;
    -webkit-transform: scale(1.4);
        -ms-transform: scale(1.4);
            transform: scale(1.4);
    z-index: -1;
    }

    .notfound h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
    color: #232323;
    }

    .notfound p {
    font-family: 'Montserrat', sans-serif;
    color: #787878;
    font-weight: 300;
    }

    .notfound a {
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    padding: 12px 30px;
    font-weight: 700;
    background-color: #f99827;
    color: #fff;
    border-radius: 40px;
    text-decoration: none;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    }

    .notfound a:hover {
    opacity: 0.8;
    }

    @media only screen and (max-width: 767px) {
    .notfound .notfound-404 {
        height: 115px;
    }
    .notfound .notfound-404 h1 {
        font-size: 86px;
    }
    .notfound .notfound-404 h1>span {
        width: 86px;
        height: 86px;
    }
    }
</style>
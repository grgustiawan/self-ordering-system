<template>
  <div class="swiper-slide">
        <div class="containers">
            <label class="option_item food-categories">
                <input name="option" id="option" type="radio" class="radio" :value="this.cardPrice">
                <div class="option_inner linkedin p-0">
                    <img class="img-fluid categories-img mt-2" :src="getImgUrl(this.cardImage)" alt="image" />
                </div>
            </label>    
            <h5>{{ this.cardName }}</h5>
        </div>          
    </div>
</template>

<script>

export default {
    name: 'SelectableCard',
    props: ['cardID', 'cardName', 'cardPrice', 'cardImage'],
    methods: {
        getImgUrl(filename){
            return 'http://tamani-app.test/assets/images/product/' + filename;
        }
    }
}
</script>

<style>
.containers {
display: flex;
width: 65px;
flex-wrap: wrap;
border-top-right-radius: 30px;
border-bottom-left-radius: 30px;
margin: 20px 5px;
}

.containers .food-categories{
    background: linear-gradient(113deg,#c2f4ae,#a0efb6 85%,#a0efb6, #6fe9c1);
    border-radius: 5px
}

.containers .option_item {
padding: 0;
display: block;
position: relative;
width: 65px;
height: 65px;
color: rgb(154,188,22);
}

.containers .option_item .radio {
position: absolute;
top: 0;
left: 0;
z-index: 1;
opacity: 0;
}

.option_item .option_inner {
width: 100%;
height: 100%;
border-radius: 5px;
text-align: center;
cursor: pointer;
color: rgb(56, 56, 56);
display: block;
border: 2px solid transparent;
position: relative;
}

.option_item .option_inner .icon {
margin-bottom: 10px;
}

.option_item .option_inner .icon .fab {
font-size: 32px;
}

.option_item .option_inner .name {
user-select: none;
}

.option_item .radio:checked ~ .option_inner.facebook {
border-color: #3b5999;
color: #3b5999;
}

.option_item .radio:checked ~ .option_inner.twitter {
border-color: #55acee;
color: #55acee;
}

.option_item .radio:checked ~ .option_inner.instagram {
border-color: #e4405f;
color: #e4405f;
}

.option_item .radio:checked ~ .option_inner.linkedin {
border-color: #0077b5;
color: #0077b5;
}

.option_item .radio:checked ~ .option_inner.whatsapp {
border-color: #25d366;
color: #25d366;
}

.option_item .radio:checked ~ .option_inner.google {
border-color: #dd4b39;
color: #dd4b39;
}

.option_item .radio:checked ~ .option_inner.reddit {
border-color: #ff5700;
color: #ff5700;
}

.option_item .radio:checked ~ .option_inner.quora {
border-color: #b92b27;
color: #b92b27;
}

.option_item .option_inner .tickmark {
position: absolute;
top: 0;
left: 0;
border: 20px solid;
border-color: #000 transparent transparent #000;
display: none;
}

.option_item .option_inner .tickmark:before {
content: "";
position: absolute;
top: -18px;
left: -18px;
width: 15px;
height: 5px;
border: 3px solid;
border-color: transparent transparent #fff #fff;
transform: rotate(-45deg);
}

.option_item .radio:checked ~ .option_inner .tickmark {
display: block;
}

.option_item .option_inner.facebook .tickmark {
border-color: #3b5999 transparent transparent #3b5999;
}

.option_item .option_inner.twitter .tickmark {
border-color: #55acee transparent transparent #55acee;
}

.option_item .option_inner.instagram .tickmark {
border-color: #e4405f transparent transparent #e4405f;
}

.option_item .option_inner.linkedin .tickmark {
border-color: #0077b5 transparent transparent #0077b5;
}

.option_item .option_inner.whatsapp .tickmark {
border-color: #25d366 transparent transparent #25d366;
}

.option_item .option_inner.google .tickmark {
border-color: #dd4b39 transparent transparent #dd4b39;
}

.option_item .option_inner.reddit .tickmark {
border-color: #ff5700 transparent transparent #ff5700;
}

.option_item .option_inner.quora .tickmark {
border-color: #b92b27 transparent transparent #b92b27;
}
</style>
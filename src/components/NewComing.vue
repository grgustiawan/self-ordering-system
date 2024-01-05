<template>
  <div v-if="newcoming.is_reserv == false">
    <divider></divider>
    <section class="section-t-space">
        <div v-if="loading" class="row">
            <div class="row" style="margin-left: 0px;">
                <div class="pt-4" style="width: 50%;">
                    <NewComingLoader />
                </div>
                <div class="pt-4" style="width: 50%;">
                    <NewComingLoader />
                </div>
                <div class="pt-4" style="width: 50%;">
                    <NewComingLoader />
                </div>
                <div class="pt-4" style="width: 50%;">
                    <NewComingLoader />
                </div>
                <div class="pt-4" style="width: 50%;">
                    <NewComingLoader />
                </div>
                <div class="pt-4" style="width: 50%;">
                    <NewComingLoader />
                </div>
            </div>
        </div>

        <div v-if="!loading" class="custom-container">
            <div class="title">
                <h3 class="mt-0">New Arrival</h3>
                <!-- <a href="brand-list.html" style="color: #8abfb0;font-weight: bold;">See All</a> -->
            </div>

            <div class="new-products row gy-4">
              <div class="col-6 pt-4" v-for="newc in newcoming.food.slice(12, 20)" :key="newc.id">
                  <div class="newcard">
                    <div class="content">
                      <div class="back">
                        <div class="back-content">
                          <div class="bg-animation">
                              <div id="stars"></div>
                              <div id="stars2"></div>
                              <div id="stars3"></div>
                              <div id="stars4"></div>
                          </div>

                          <div class="star-shine">
                              <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_Nkj9jcgJSR.json"
                                             background="transparent" speed="1" class="star-icon" loop  autoplay>
                              </lottie-player>
                          </div>

                          <img class="img-fluid" style="filter: drop-shadow(5px 5px 3px #00000079);" :src="getImageUrl(newc.image)" alt="p1" />
                          <strong class="text-dark" style="margin-top: -30px;font-weight: bolder;background-color: #fff;padding: 5px;border-radius: 20px;">{{ newc.name }}</strong>
                        </div>
                      </div>
                      <div class="front">
                        <div class="img">
                          <img class="img-fluid" style="filter: drop-shadow(5px 5px 3px #00000079);" :src="getImageUrl(newc.image)" alt="p1" />
                        </div>

                        <div class="front-content">
                          <small class="badge">New</small>
                            <div class="description">
                                <div class="cardtitle">
                                  <strong class="text-dark" style="font-size: .9rem;">{{ newc.name }}</strong>
                                </div>
                                <strong class="text-danger" style="font-size: 13pt;">{{ formatPrice(parseFloat(newc.price)) }}</strong>
                                <p class="newcard-footer text-dark" style="font-size: .7rem;">
                                   30 Mins
                                </p>

                                <div class="addcart-btn">
                                    <router-link :to="{name: 'Food', query: { id: newc.id, scr: this.$route.query.scr}}">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/qzwudxpy.json"
                                            trigger="hover"
                                            colors="outline:#603939,primary:#ebe6ef,secondary:#ffc738,tertiary:#86922c"
                                            class="addcart-icon">
                                        </lord-icon>
                                    </router-link>
                                </div>

                            </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
              </div>

            </div>
        </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import NewComingLoader from './loader/NewComingLoader.vue'
import Divider from './Divider.vue'

export default {
    name: 'NewComing',
    components: {
      NewComingLoader, Divider
    },  
    data(){
      return {
        newcoming: [ ],
        loading: false,
        servers: '',
      }
    },
    mounted(){
        this.loading = true;
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';

        this.getNewComing()
    },
    methods: {
        async getNewComing(){
          this.loading = true;
          try {
            let { data } = await axios.get(this.servers + '/menus/' + this.$route.query.scr);
            this.newcoming = data;
            this.loading = false;
          } catch (e) { 
            this.loading = true;
          }
        },
        getImageUrl(filename){
          let name = String(filename).replace("JPG", "png");
          return '/assets/images/food/tamani/' + name;
        },
        formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>

<style>
.newcoming-img{
  filter: drop-shadow(7px 5px 2px #00000079);
}

.new-label{
    position: absolute;   
    width: 32px;
    z-index: 2;
    right:0;
    margin-top:105%;
    margin-right: 5px;
}
.new-products {
  padding-top: 33px;
  margin-top:-60px;
  margin-bottom: 20px;
}

.addcart-btn{
  position: absolute;
  bottom:0;
  right:0;
  width: 45px;
  height: 35px;
  z-index: 10000;
  display: flex;
  border-top-left-radius: 10px;
  background-color: #A9C932;
  cursor: pointer;
}

.addcart-icon{
  width:35px;
  height:35px;
  margin-left: 5px;
}

.star-shine{
  position:absolute;
  z-index:50;
  top: 40px;
  left: 30px;
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.star-icon{
  width:100px;
  height:100px;
  opacity: 0.9
}

@media (min-width: 768px){
    .addcart-btn{
      width: 65px;
      height: 50px;
    }

    .addcart-icon{
      width:50px;
      height:50px;
      margin-left: 7.5px;
    }

    .star-shine{
      top: 50px;
      width: 150px;
      height: 150px;
    }

    .star-icon{
      width:150px;
      height:150px;
      opacity: 0.5
    }
}

.addcart-btn:hover{
    background-color: #d2b71e;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

/* cards */
.newcard {
  overflow: visible;
  width: 100%;
  height: 354px;
}

@media (max-width: 767px){
  .newcard {
    overflow: visible;
    width: 100%;
    height: 254px;
  } 
}

.newcard .content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border: 2px solid #603939;
  border-radius: 5px;
}

.newcard .front, .back {
  position: absolute;
  background-image: url('../assets//backgrounds/promotion-background.jpg');
  background-size: contain;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.newcard .back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.newcard .back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(90deg, transparent, #fffc66, #efe147, #d2b71e, #f2d845, transparent);
  animation: rotation_481 5000ms infinite linear;
}

.newcard .back-content {
  position: absolute;
  width: 97%;
  height: 98%;
  background-image: url('../assets//backgrounds/cream-doodle.png');
  background-size: cover;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}


.newcard .back-content:after {
	content:'';
  top:0;
	transform:translateX(100%);
	width:100%;
	height:100%;
	position: absolute;
	z-index:100;
	animation: slide 2s infinite;
  background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,0.8)), color-stop(99%,rgba(128,186,232,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */
	background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
  opacity: 0.5;
}

@keyframes slide {
	0% {transform:translateX(-100%);}

	20%, 100% {transform:translateX(100%);}
}

.newcard:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.newcard .front {
  transform: rotateY(180deg);
  color: white;
}

.newcard .front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.newcard .front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.newcard .description {
  box-shadow: 0px 0px 10px 5px #00000025;
  width: 100%;
  padding: 10px;
  background-color: #ffffff21;
  backdrop-filter: blur(5px);
  border-radius: 5px;
}

.newcard .cardtitle {
  font-size: 3rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
}

.cardtitle p {
  width: 50%;
}

.newcard-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
}

.newcard .front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.newcard .img .circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: #ff8866;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: #ff2233;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}

/* stars */
.bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
}

#stars {
    width: 5px;
    height: 5px;
    border-radius: 30px;
    background: transparent;
    box-shadow: 117px 1613px #d2b71e, 1488px 635px #d2b71e, 944px 914px #d2b71e, 647px 277px #d2b71e, 1792px 1205px #d2b71e, 656px 1517px #d2b71e, 820px 1839px #d2b71e, 1153px 1400px #d2b71e, 870px 13px #d2b71e, 550px 702px #d2b71e, 1155px 1056px #d2b71e, 88px 1709px #d2b71e, 1450px 1090px #d2b71e, 1929px 457px #d2b71e, 1390px 905px #d2b71e, 1771px 269px #d2b71e, 1741px 669px #d2b71e, 432px 64px #d2b71e, 563px 996px #d2b71e, 1918px 1873px #d2b71e, 1845px 1211px #d2b71e, 231px 1503px #d2b71e, 37px 220px #d2b71e, 1970px 495px #d2b71e, 1812px 925px #d2b71e, 67px 1398px #d2b71e, 535px 279px #d2b71e, 1837px 829px #d2b71e, 1945px 685px #d2b71e, 1677px 1817px #d2b71e, 1317px 1415px #d2b71e, 1785px 905px #d2b71e, 1787px 1554px #d2b71e, 802px 1296px #d2b71e, 512px 1101px #d2b71e, 583px 1364px #d2b71e, 336px 558px #d2b71e, 979px 334px #d2b71e, 106px 792px #d2b71e, 204px 34px #d2b71e, 1845px 1763px #d2b71e, 445px 1599px #d2b71e, 386px 453px #d2b71e, 471px 952px #d2b71e, 1466px 1676px #d2b71e, 1885px 303px #d2b71e, 51px 1717px #d2b71e, 1211px 299px #d2b71e, 1546px 1887px #d2b71e, 1067px 33px #d2b71e, 1088px 1326px #d2b71e, 1938px 760px #d2b71e, 470px 648px #d2b71e, 1213px 269px #d2b71e, 1767px 78px #d2b71e, 977px 976px #d2b71e, 1926px 175px #d2b71e, 722px 1512px #d2b71e, 945px 227px #d2b71e, 1811px 99px #d2b71e, 1912px 1406px #d2b71e, 1602px 1243px #d2b71e, 610px 449px #d2b71e, 654px 1393px #d2b71e, 1930px 1193px #d2b71e, 258px 1184px #d2b71e, 89px 265px #d2b71e, 824px 1494px #d2b71e, 1506px 1435px #d2b71e, 1027px 753px #d2b71e, 1px 1197px #d2b71e, 530px 1161px #d2b71e, 864px 1555px #d2b71e, 1610px 1604px #d2b71e, 1035px 1114px #d2b71e, 1456px 133px #d2b71e, 1196px 1253px #d2b71e, 361px 1037px #d2b71e, 834px 351px #d2b71e, 436px 1676px #d2b71e, 1194px 1007px #d2b71e, 1141px 647px #d2b71e, 319px 454px #d2b71e, 937px 1769px #d2b71e, 1872px 1013px #d2b71e, 733px 643px #d2b71e, 1250px 511px #d2b71e, 189px 296px #d2b71e, 1639px 163px #d2b71e, 1584px 336px #d2b71e, 1912px 1343px #d2b71e, 1298px 1307px #d2b71e, 1750px 902px #d2b71e, 1129px 845px #d2b71e, 1899px 1470px #d2b71e, 1427px 232px #d2b71e, 1391px 838px #d2b71e, 1225px 1819px #d2b71e, 190px 1366px #d2b71e, 1865px 518px #d2b71e, 203px 1383px #d2b71e, 1455px 614px #d2b71e, 423px 354px #d2b71e, 1678px 1790px #d2b71e, 241px 608px #d2b71e, 1089px 730px #d2b71e, 1342px 38px #d2b71e, 1848px 249px #d2b71e, 1874px 1785px #d2b71e, 1040px 1837px #d2b71e, 751px 261px #d2b71e, 510px 1975px #d2b71e, 52px 795px #d2b71e, 1786px 1310px #d2b71e, 498px 712px #d2b71e, 190px 375px #d2b71e, 1341px 722px #d2b71e, 43px 1394px #d2b71e, 1821px 1687px #d2b71e, 106px 130px #d2b71e, 1717px 1978px #d2b71e, 168px 151px #d2b71e, 183px 740px #d2b71e, 945px 1381px #d2b71e, 669px 1170px #d2b71e, 1285px 1816px #d2b71e, 110px 1217px #d2b71e, 1623px 813px #d2b71e, 869px 647px #d2b71e, 867px 582px #d2b71e, 735px 1240px #d2b71e, 519px 1896px #d2b71e, 132px 156px #d2b71e, 1649px 193px #d2b71e, 241px 1109px #d2b71e, 643px 484px #d2b71e, 574px 1282px #d2b71e, 1952px 564px #d2b71e, 1978px 145px #d2b71e, 329px 903px #d2b71e, 1674px 617px #d2b71e, 1978px 558px #d2b71e, 1808px 1715px #d2b71e, 1526px 1238px #d2b71e, 475px 1330px #d2b71e, 810px 425px #d2b71e, 1709px 634px #d2b71e, 1658px 336px #d2b71e, 425px 194px #d2b71e, 352px 96px #d2b71e, 148px 180px #d2b71e, 1139px 1046px #d2b71e, 1809px 1233px #d2b71e, 1669px 171px #d2b71e, 263px 1394px #d2b71e, 534px 715px #d2b71e, 396px 1008px #d2b71e, 589px 1445px #d2b71e, 1190px 381px #d2b71e, 1709px 279px #d2b71e, 520px 891px #d2b71e, 1136px 1867px #d2b71e, 1280px 1233px #d2b71e, 836px 296px #d2b71e, 1348px 646px #d2b71e, 1539px 913px #d2b71e, 423px 781px #d2b71e, 1271px 1805px #d2b71e, 696px 564px #d2b71e, 1549px 804px #d2b71e, 303px 1555px #d2b71e, 1449px 1903px #d2b71e, 66px 687px #d2b71e, 1164px 856px #d2b71e, 1958px 1326px #d2b71e, 125px 157px #d2b71e, 508px 1669px #d2b71e, 465px 725px #d2b71e, 1925px 1440px #d2b71e, 405px 793px #d2b71e, 278px 110px #d2b71e, 1084px 1065px #d2b71e, 1077px 705px #d2b71e, 663px 1844px #d2b71e, 734px 263px #d2b71e, 870px 1761px #d2b71e, 103px 1169px #d2b71e, 1506px 1295px #d2b71e, 1883px 926px #d2b71e, 335px 1361px #d2b71e, 1126px 1284px #d2b71e, 257px 1165px #d2b71e, 837px 580px #d2b71e, 1211px 1362px #d2b71e, 1137px 1380px #d2b71e, 135px 632px #d2b71e, 1491px 1965px #d2b71e, 1098px 195px #d2b71e, 506px 417px #d2b71e, 693px 1243px #d2b71e, 622px 1862px #d2b71e, 1412px 1343px #d2b71e, 948px 1894px #d2b71e, 1315px 1363px #d2b71e, 754px 1098px #d2b71e, 1931px 930px #d2b71e, 1831px 342px #d2b71e, 1751px 1839px #d2b71e, 84px 775px #d2b71e, 1662px 1488px #d2b71e, 617px 1769px #d2b71e, 1869px 1292px #d2b71e, 963px 432px #d2b71e, 371px 1114px #d2b71e, 37px 642px #d2b71e, 21px 1184px #d2b71e, 602px 366px #d2b71e, 414px 524px #d2b71e, 282px 244px #d2b71e, 1689px 868px #d2b71e, 943px 681px #d2b71e, 898px 679px #d2b71e, 449px 1774px #d2b71e, 1678px 1313px #d2b71e, 475px 1811px #d2b71e, 1146px 1509px #d2b71e, 1151px 1863px #d2b71e, 1617px 846px #d2b71e, 82px 1077px #d2b71e, 324px 1317px #d2b71e, 1516px 885px #d2b71e, 1706px 1526px #d2b71e, 1925px 1180px #d2b71e, 553px 967px #d2b71e, 1072px 536px #d2b71e, 1715px 1816px #d2b71e, 185px 286px #d2b71e, 1362px 1600px #d2b71e, 628px 1938px #d2b71e, 1187px 412px #d2b71e, 569px 211px #d2b71e, 1959px 1356px #d2b71e, 1571px 105px #d2b71e, 319px 1111px #d2b71e, 36px 1364px #d2b71e, 502px 1788px #d2b71e, 1051px 1993px #d2b71e, 1617px 773px #d2b71e, 424px 1507px #d2b71e, 1623px 1955px #d2b71e, 307px 662px #d2b71e, 183px 1048px #d2b71e, 1919px 1453px #d2b71e, 1006px 1817px #d2b71e, 468px 673px #d2b71e, 1142px 1375px #d2b71e, 1228px 443px #d2b71e, 1734px 552px #d2b71e, 20px 1041px #d2b71e, 1783px 334px #d2b71e, 98px 1237px #d2b71e, 1356px 1940px #d2b71e, 853px 1779px #d2b71e, 1910px 560px #d2b71e, 1174px 1656px #d2b71e, 110px 1724px #d2b71e, 542px 1771px #d2b71e, 1758px 1931px #d2b71e, 1463px 1401px #d2b71e, 1155px 84px #d2b71e, 1504px 835px #d2b71e, 750px 322px #d2b71e, 407px 1900px #d2b71e, 1600px 1141px #d2b71e, 657px 886px #d2b71e, 526px 714px #d2b71e, 18px 836px #d2b71e, 1546px 1548px #d2b71e, 22px 469px #d2b71e, 594px 1466px #d2b71e, 1160px 1078px #d2b71e, 627px 1055px #d2b71e, 195px 699px #d2b71e, 1099px 684px #d2b71e, 530px 551px #d2b71e, 1160px 1325px #d2b71e, 894px 727px #d2b71e, 1157px 98px #d2b71e, 136px 1483px #d2b71e, 1875px 1975px #d2b71e, 1803px 566px #d2b71e, 318px 1073px #d2b71e, 1866px 1656px #d2b71e, 543px 414px #d2b71e, 719px 474px #d2b71e, 1115px 738px #d2b71e, 353px 875px #d2b71e, 184px 1938px #d2b71e, 1854px 1534px #d2b71e, 420px 1698px #d2b71e, 1480px 1550px #d2b71e, 522px 203px #d2b71e, 1897px 1904px #d2b71e, 975px 1708px #d2b71e, 1774px 602px #d2b71e, 1908px 274px #d2b71e, 61px 715px #d2b71e, 983px 1156px #d2b71e, 326px 1013px #d2b71e, 641px 290px #d2b71e, 1522px 120px #d2b71e, 405px 1637px #d2b71e, 1021px 1099px #d2b71e, 631px 1145px #d2b71e, 982px 1967px #d2b71e, 200px 651px #d2b71e, 795px 351px #d2b71e, 790px 1082px #d2b71e, 144px 1572px #d2b71e, 1542px 901px #d2b71e, 158px 1524px #d2b71e, 849px 1843px #d2b71e, 1807px 203px #d2b71e, 1747px 45px #d2b71e, 1603px 1738px #d2b71e, 617px 1966px #d2b71e, 342px 748px #d2b71e, 1779px 1173px #d2b71e, 1428px 152px #d2b71e, 589px 1998px #d2b71e, 1940px 1838px #d2b71e, 115px 272px #d2b71e, 1217px 1395px #d2b71e, 1402px 1491px #d2b71e, 1833px 1814px #d2b71e, 243px 966px #d2b71e, 319px 578px #d2b71e, 813px 364px #d2b71e, 669px 882px #d2b71e, 551px 134px #d2b71e, 1819px 920px #d2b71e, 740px 1826px #d2b71e, 1021px 952px #d2b71e, 1575px 453px #d2b71e, 324px 419px #d2b71e, 929px 417px #d2b71e, 885px 1112px #d2b71e, 503px 187px #d2b71e, 1908px 362px #d2b71e, 1063px 1601px #d2b71e, 169px 1792px #d2b71e, 789px 963px #d2b71e, 1697px 948px #d2b71e, 1761px 1810px #d2b71e, 1844px 1591px #d2b71e, 1709px 949px #d2b71e, 1402px 1396px #d2b71e, 1037px 225px #d2b71e, 1832px 518px #d2b71e, 1728px 1782px #d2b71e, 194px 1421px #d2b71e, 1395px 742px #d2b71e, 1478px 1325px #d2b71e, 40px 593px #d2b71e, 1732px 117px #d2b71e, 51px 158px #d2b71e, 1598px 1672px #d2b71e, 701px 849px #d2b71e, 1403px 1979px #d2b71e, 145px 1414px #d2b71e, 550px 906px #d2b71e, 1366px 460px #d2b71e, 142px 1379px #d2b71e, 34px 1864px #d2b71e, 1346px 308px #d2b71e, 293px 998px #d2b71e, 21px 1868px #d2b71e, 540px 1033px #d2b71e, 60px 746px #d2b71e, 1602px 1476px #d2b71e, 180px 804px #d2b71e, 345px 1982px #d2b71e, 1439px 640px #d2b71e, 939px 1834px #d2b71e, 20px 432px #d2b71e, 492px 1549px #d2b71e, 109px 1579px #d2b71e, 1796px 1403px #d2b71e, 1079px 519px #d2b71e, 1664px 389px #d2b71e, 1627px 1061px #d2b71e, 823px 419px #d2b71e, 1399px 1882px #d2b71e, 1906px 344px #d2b71e, 1189px 848px #d2b71e, 117px 882px #d2b71e, 1262px 33px #d2b71e, 1048px 434px #d2b71e, 1208px 1309px #d2b71e, 1616px 408px #d2b71e, 1833px 853px #d2b71e, 1433px 1656px #d2b71e, 811px 1861px #d2b71e, 439px 1672px #d2b71e, 1105px 248px #d2b71e, 328px 1652px #d2b71e, 13px 1658px #d2b71e, 685px 987px #d2b71e, 985px 403px #d2b71e, 1664px 1206px #d2b71e, 1993px 1925px #d2b71e, 440px 917px #d2b71e, 1835px 319px #d2b71e, 1404px 1907px #d2b71e, 624px 1443px #d2b71e, 843px 954px #d2b71e, 478px 1567px #d2b71e, 895px 1602px #d2b71e, 1231px 871px #d2b71e, 1267px 1646px #d2b71e, 475px 334px #d2b71e, 784px 796px #d2b71e, 1294px 199px #d2b71e, 109px 702px #d2b71e, 1978px 362px #d2b71e, 291px 940px #d2b71e, 971px 1343px #d2b71e, 74px 719px #d2b71e, 36px 715px #d2b71e, 1007px 1423px #d2b71e, 860px 314px #d2b71e, 631px 177px #d2b71e, 1900px 1590px #d2b71e, 1239px 1348px #d2b71e, 1346px 1270px #d2b71e, 1934px 1475px #d2b71e, 1553px 559px #d2b71e, 588px 1969px #d2b71e, 670px 1269px #d2b71e, 1484px 376px #d2b71e, 20px 1424px #d2b71e, 1396px 8px #d2b71e, 969px 244px #d2b71e, 1807px 538px #d2b71e, 1873px 891px #d2b71e, 636px 1142px #d2b71e, 1474px 1562px #d2b71e, 763px 350px #d2b71e, 663px 700px #d2b71e, 500px 1469px #d2b71e, 1302px 722px #d2b71e, 181px 291px #d2b71e, 266px 893px #d2b71e, 1403px 654px #d2b71e, 492px 460px #d2b71e, 1503px 1369px #d2b71e, 23px 1662px #d2b71e, 349px 333px #d2b71e, 1435px 1017px #d2b71e, 1441px 705px #d2b71e, 1708px 1446px #d2b71e, 1041px 911px #d2b71e, 1063px 780px #d2b71e, 1158px 1356px #d2b71e, 767px 1454px #d2b71e, 1912px 797px #d2b71e, 1731px 1759px #d2b71e, 1378px 1390px #d2b71e, 1815px 1364px #d2b71e, 960px 270px #d2b71e, 1343px 427px #d2b71e, 275px 203px #d2b71e, 1319px 1092px #d2b71e, 1455px 770px #d2b71e, 283px 1503px #d2b71e, 1505px 901px #d2b71e, 1738px 1561px #d2b71e, 1526px 1935px #d2b71e, 1757px 669px #d2b71e, 1640px 620px #d2b71e, 1750px 722px #d2b71e, 748px 66px #d2b71e, 1149px 540px #d2b71e, 159px 953px #d2b71e, 200px 1426px #d2b71e, 515px 1110px #d2b71e, 1552px 737px #d2b71e, 1094px 1459px #d2b71e, 778px 799px #d2b71e, 1031px 523px #d2b71e, 743px 1825px #d2b71e, 1100px 882px #d2b71e, 1088px 1836px #d2b71e, 255px 599px #d2b71e, 67px 1361px #d2b71e, 247px 1721px #d2b71e, 1722px 346px #d2b71e, 1822px 155px #d2b71e, 452px 1973px #d2b71e, 415px 1960px #d2b71e, 1109px 57px #d2b71e, 273px 1392px #d2b71e, 404px 1071px #d2b71e, 1212px 353px #d2b71e, 370px 460px #d2b71e, 795px 1523px #d2b71e, 1932px 340px #d2b71e, 51px 1473px #d2b71e, 1268px 364px #d2b71e, 1512px 1862px #d2b71e, 1678px 1801px #d2b71e, 1796px 579px #d2b71e, 254px 251px #d2b71e, 1466px 1717px #d2b71e, 893px 379px #d2b71e, 1153px 923px #d2b71e, 913px 1808px #d2b71e, 791px 789px #d2b71e, 417px 1924px #d2b71e, 1336px 1599px #d2b71e, 1695px 908px #d2b71e, 1120px 114px #d2b71e, 493px 1949px #d2b71e, 68px 1905px #d2b71e, 969px 481px #d2b71e, 1420px 1095px #d2b71e, 800px 1117px #d2b71e, 390px 234px #d2b71e, 356px 1644px #d2b71e, 1098px 1486px #d2b71e, 1360px 521px #d2b71e, 149px 1198px #d2b71e, 354px 747px #d2b71e, 1749px 487px #d2b71e, 470px 76px #d2b71e, 1672px 289px #d2b71e, 1731px 545px #d2b71e, 1547px 1590px #d2b71e, 498px 692px #d2b71e, 398px 1592px #d2b71e, 1846px 1237px #d2b71e, 1537px 1474px #d2b71e, 1726px 1374px #d2b71e, 1922px 858px #d2b71e, 376px 321px #d2b71e, 985px 227px #d2b71e, 234px 1421px #d2b71e, 760px 745px #d2b71e, 1990px 1132px #d2b71e, 1560px 1597px #d2b71e, 338px 1310px #d2b71e, 1924px 1664px #d2b71e, 547px 1747px #d2b71e, 1639px 1282px #d2b71e, 1202px 337px #d2b71e, 1985px 779px #d2b71e, 737px 456px #d2b71e, 89px 501px #d2b71e, 963px 792px #d2b71e, 655px 1447px #d2b71e, 1492px 1994px #d2b71e, 1171px 254px #d2b71e, 892px 827px #d2b71e, 1735px 442px #d2b71e, 1474px 1187px #d2b71e, 846px 1518px #d2b71e, 557px 1805px #d2b71e, 738px 945px #d2b71e, 795px 68px #d2b71e, 663px 1956px #d2b71e, 1607px 290px #d2b71e, 1524px 15px #d2b71e, 1097px 1911px #d2b71e, 157px 1939px #d2b71e, 935px 1065px #d2b71e, 1809px 1708px #d2b71e, 164px 1157px #d2b71e, 83px 855px #d2b71e, 625px 501px #d2b71e, 814px 398px #d2b71e, 552px 695px #d2b71e, 597px 1546px #d2b71e, 1237px 1417px #d2b71e, 628px 284px #d2b71e, 866px 767px #d2b71e, 1403px 1394px #d2b71e, 765px 1563px #d2b71e, 1648px 109px #d2b71e, 1205px 1659px #d2b71e, 921px 1313px #d2b71e, 1319px 243px #d2b71e, 18px 125px #d2b71e, 7px 777px #d2b71e, 181px 418px #d2b71e, 1062px 1892px #d2b71e, 382px 106px #d2b71e, 994px 751px #d2b71e, 964px 234px #d2b71e, 40px 118px #d2b71e, 278px 706px #d2b71e, 1540px 1978px #d2b71e, 425px 1661px #d2b71e, 1050px 321px #d2b71e, 735px 1729px #d2b71e, 1438px 260px #d2b71e, 1229px 1109px #d2b71e, 186px 1041px #d2b71e, 244px 1184px #d2b71e, 392px 1472px #d2b71e, 670px 1249px #d2b71e, 1260px 1443px #d2b71e, 1977px 1511px #d2b71e, 1240px 773px #d2b71e, 303px 513px #d2b71e, 63px 1530px #d2b71e, 610px 792px #d2b71e, 1987px 1647px #d2b71e, 676px 1597px #d2b71e, 1740px 1244px #d2b71e, 816px 1661px #d2b71e, 351px 802px #d2b71e, 252px 1082px #d2b71e, 31px 365px #d2b71e, 1453px 984px #d2b71e, 667px 1233px #d2b71e, 1247px 1800px #d2b71e, 839px 270px #d2b71e, 775px 913px #d2b71e, 1966px 1398px #d2b71e, 499px 813px #d2b71e, 922px 1982px #d2b71e, 1409px 1902px #d2b71e, 1499px 1766px #d2b71e, 721px 899px #d2b71e, 788px 807px #d2b71e, 989px 1355px #d2b71e, 1248px 1274px #d2b71e, 849px 1091px #d2b71e, 1799px 1036px #d2b71e, 1486px 700px #d2b71e, 170px 1989px #d2b71e, 1275px 799px #d2b71e, 772px 2000px #d2b71e, 1642px 362px #d2b71e, 216px 940px #d2b71e, 1893px 281px #d2b71e, 1944px 1298px #d2b71e, 1294px 400px #d2b71e, 1523px 441px #d2b71e, 1829px 340px #d2b71e, 468px 170px #d2b71e, 1099px 967px #d2b71e, 1331px 665px #d2b71e, 1174px 1553px #d2b71e, 1567px 325px #d2b71e, 1028px 1399px #d2b71e, 781px 1451px #d2b71e, 1912px 1954px #d2b71e, 874px 873px #d2b71e, 1298px 1722px #d2b71e, 1879px 706px #d2b71e, 57px 1221px #d2b71e, 1116px 1432px #d2b71e, 48px 811px #d2b71e, 101px 916px #d2b71e, 677px 304px #d2b71e, 1203px 639px #d2b71e, 1391px 199px #d2b71e, 1895px 1988px #d2b71e, 1462px 1023px #d2b71e, 1216px 1751px #d2b71e, 1261px 663px #d2b71e, 1290px 1119px #d2b71e, 137px 1793px #d2b71e, 1052px 1470px #d2b71e, 1561px 226px #d2b71e, 1156px 402px #d2b71e, 709px 693px #d2b71e, 1040px 1911px #d2b71e, 1624px 1115px #d2b71e, 551px 475px #d2b71e, 416px 1090px #d2b71e, 1183px 451px #d2b71e, 58px 765px #d2b71e, 743px 1016px #d2b71e, 198px 369px #d2b71e, 1645px 1503px #d2b71e, 997px 22px #d2b71e, 1447px 1323px #d2b71e, 379px 883px #d2b71e, 1171px 1195px #d2b71e, 919px 133px #d2b71e, 1400px 517px #d2b71e, 725px 804px #d2b71e, 1600px 699px #d2b71e, 357px 581px #d2b71e, 266px 1713px #d2b71e, 848px 1749px #d2b71e, 1963px 1045px #d2b71e, 119px 1136px #d2b71e;
    -webkit-animation: animStar 50s linear infinite;
    -moz-animation: animStar 50s linear infinite;
    -ms-animation: animStar 50s linear infinite;
    animation: animStar 50s linear infinite;
}

#stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    border-radius: 30px;
    box-shadow: 117px 1613px #d2b71e, 1488px 635px #d2b71e, 944px 914px #d2b71e, 647px 277px #d2b71e, 1792px 1205px #d2b71e, 656px 1517px #d2b71e, 820px 1839px #d2b71e, 1153px 1400px #d2b71e, 870px 13px #d2b71e, 550px 702px #d2b71e, 1155px 1056px #d2b71e, 88px 1709px #d2b71e, 1450px 1090px #d2b71e, 1929px 457px #d2b71e, 1390px 905px #d2b71e, 1771px 269px #d2b71e, 1741px 669px #d2b71e, 432px 64px #d2b71e, 563px 996px #d2b71e, 1918px 1873px #d2b71e, 1845px 1211px #d2b71e, 231px 1503px #d2b71e, 37px 220px #d2b71e, 1970px 495px #d2b71e, 1812px 925px #d2b71e, 67px 1398px #d2b71e, 535px 279px #d2b71e, 1837px 829px #d2b71e, 1945px 685px #d2b71e, 1677px 1817px #d2b71e, 1317px 1415px #d2b71e, 1785px 905px #d2b71e, 1787px 1554px #d2b71e, 802px 1296px #d2b71e, 512px 1101px #d2b71e, 583px 1364px #d2b71e, 336px 558px #d2b71e, 979px 334px #d2b71e, 106px 792px #d2b71e, 204px 34px #d2b71e, 1845px 1763px #d2b71e, 445px 1599px #d2b71e, 386px 453px #d2b71e, 471px 952px #d2b71e, 1466px 1676px #d2b71e, 1885px 303px #d2b71e, 51px 1717px #d2b71e, 1211px 299px #d2b71e, 1546px 1887px #d2b71e, 1067px 33px #d2b71e, 1088px 1326px #d2b71e, 1938px 760px #d2b71e, 470px 648px #d2b71e, 1213px 269px #d2b71e, 1767px 78px #d2b71e, 977px 976px #d2b71e, 1926px 175px #d2b71e, 722px 1512px #d2b71e, 945px 227px #d2b71e, 1811px 99px #d2b71e, 1912px 1406px #d2b71e, 1602px 1243px #d2b71e, 610px 449px #d2b71e, 654px 1393px #d2b71e, 1930px 1193px #d2b71e, 258px 1184px #d2b71e, 89px 265px #d2b71e, 824px 1494px #d2b71e, 1506px 1435px #d2b71e, 1027px 753px #d2b71e, 1px 1197px #d2b71e, 530px 1161px #d2b71e, 864px 1555px #d2b71e, 1610px 1604px #d2b71e, 1035px 1114px #d2b71e, 1456px 133px #d2b71e, 1196px 1253px #d2b71e, 361px 1037px #d2b71e, 834px 351px #d2b71e, 436px 1676px #d2b71e, 1194px 1007px #d2b71e, 1141px 647px #d2b71e, 319px 454px #d2b71e, 937px 1769px #d2b71e, 1872px 1013px #d2b71e, 733px 643px #d2b71e, 1250px 511px #d2b71e, 189px 296px #d2b71e, 1639px 163px #d2b71e, 1584px 336px #d2b71e, 1912px 1343px #d2b71e, 1298px 1307px #d2b71e, 1750px 902px #d2b71e, 1129px 845px #d2b71e, 1899px 1470px #d2b71e, 1427px 232px #d2b71e, 1391px 838px #d2b71e, 1225px 1819px #d2b71e, 190px 1366px #d2b71e, 1865px 518px #d2b71e, 203px 1383px #d2b71e, 1455px 614px #d2b71e, 423px 354px #d2b71e, 1678px 1790px #d2b71e, 241px 608px #d2b71e, 1089px 730px #d2b71e, 1342px 38px #d2b71e, 1848px 249px #d2b71e, 1874px 1785px #d2b71e, 1040px 1837px #d2b71e, 751px 261px #d2b71e, 510px 1975px #d2b71e, 52px 795px #d2b71e, 1786px 1310px #d2b71e, 498px 712px #d2b71e, 190px 375px #d2b71e, 1341px 722px #d2b71e, 43px 1394px #d2b71e, 1821px 1687px #d2b71e, 106px 130px #d2b71e, 1717px 1978px #d2b71e, 168px 151px #d2b71e, 183px 740px #d2b71e, 945px 1381px #d2b71e, 669px 1170px #d2b71e, 1285px 1816px #d2b71e, 110px 1217px #d2b71e, 1623px 813px #d2b71e, 869px 647px #d2b71e, 867px 582px #d2b71e, 735px 1240px #d2b71e, 519px 1896px #d2b71e, 132px 156px #d2b71e, 1649px 193px #d2b71e, 241px 1109px #d2b71e, 643px 484px #d2b71e, 574px 1282px #d2b71e, 1952px 564px #d2b71e, 1978px 145px #d2b71e, 329px 903px #d2b71e, 1674px 617px #d2b71e, 1978px 558px #d2b71e, 1808px 1715px #d2b71e, 1526px 1238px #d2b71e, 475px 1330px #d2b71e, 810px 425px #d2b71e, 1709px 634px #d2b71e, 1658px 336px #d2b71e, 425px 194px #d2b71e, 352px 96px #d2b71e, 148px 180px #d2b71e, 1139px 1046px #d2b71e, 1809px 1233px #d2b71e, 1669px 171px #d2b71e, 263px 1394px #d2b71e, 534px 715px #d2b71e, 396px 1008px #d2b71e, 589px 1445px #d2b71e, 1190px 381px #d2b71e, 1709px 279px #d2b71e, 520px 891px #d2b71e, 1136px 1867px #d2b71e, 1280px 1233px #d2b71e, 836px 296px #d2b71e, 1348px 646px #d2b71e, 1539px 913px #d2b71e, 423px 781px #d2b71e, 1271px 1805px #d2b71e, 696px 564px #d2b71e, 1549px 804px #d2b71e, 303px 1555px #d2b71e, 1449px 1903px #d2b71e, 66px 687px #d2b71e, 1164px 856px #d2b71e, 1958px 1326px #d2b71e, 125px 157px #d2b71e, 508px 1669px #d2b71e, 465px 725px #d2b71e, 1925px 1440px #d2b71e, 405px 793px #d2b71e, 278px 110px #d2b71e, 1084px 1065px #d2b71e, 1077px 705px #d2b71e, 663px 1844px #d2b71e, 734px 263px #d2b71e, 870px 1761px #d2b71e, 103px 1169px #d2b71e, 1506px 1295px #d2b71e, 1883px 926px #d2b71e, 335px 1361px #d2b71e, 1126px 1284px #d2b71e, 257px 1165px #d2b71e, 837px 580px #d2b71e, 1211px 1362px #d2b71e, 1137px 1380px #d2b71e, 135px 632px #d2b71e, 1491px 1965px #d2b71e, 1098px 195px #d2b71e, 506px 417px #d2b71e, 693px 1243px #d2b71e, 622px 1862px #d2b71e, 1412px 1343px #d2b71e, 948px 1894px #d2b71e, 1315px 1363px #d2b71e, 754px 1098px #d2b71e, 1931px 930px #d2b71e, 1831px 342px #d2b71e, 1751px 1839px #d2b71e, 84px 775px #d2b71e, 1662px 1488px #d2b71e, 617px 1769px #d2b71e, 1869px 1292px #d2b71e, 963px 432px #d2b71e, 371px 1114px #d2b71e, 37px 642px #d2b71e, 21px 1184px #d2b71e, 602px 366px #d2b71e, 414px 524px #d2b71e, 282px 244px #d2b71e, 1689px 868px #d2b71e, 943px 681px #d2b71e, 898px 679px #d2b71e, 449px 1774px #d2b71e, 1678px 1313px #d2b71e, 475px 1811px #d2b71e, 1146px 1509px #d2b71e, 1151px 1863px #d2b71e, 1617px 846px #d2b71e, 82px 1077px #d2b71e, 324px 1317px #d2b71e, 1516px 885px #d2b71e, 1706px 1526px #d2b71e, 1925px 1180px #d2b71e, 553px 967px #d2b71e, 1072px 536px #d2b71e, 1715px 1816px #d2b71e, 185px 286px #d2b71e, 1362px 1600px #d2b71e, 628px 1938px #d2b71e, 1187px 412px #d2b71e, 569px 211px #d2b71e, 1959px 1356px #d2b71e, 1571px 105px #d2b71e, 319px 1111px #d2b71e, 36px 1364px #d2b71e, 502px 1788px #d2b71e, 1051px 1993px #d2b71e, 1617px 773px #d2b71e, 424px 1507px #d2b71e, 1623px 1955px #d2b71e, 307px 662px #d2b71e, 183px 1048px #d2b71e, 1919px 1453px #d2b71e, 1006px 1817px #d2b71e, 468px 673px #d2b71e, 1142px 1375px #d2b71e, 1228px 443px #d2b71e, 1734px 552px #d2b71e, 20px 1041px #d2b71e, 1783px 334px #d2b71e, 98px 1237px #d2b71e, 1356px 1940px #d2b71e, 853px 1779px #d2b71e, 1910px 560px #d2b71e, 1174px 1656px #d2b71e, 110px 1724px #d2b71e, 542px 1771px #d2b71e, 1758px 1931px #d2b71e, 1463px 1401px #d2b71e, 1155px 84px #d2b71e, 1504px 835px #d2b71e, 750px 322px #d2b71e, 407px 1900px #d2b71e, 1600px 1141px #d2b71e, 657px 886px #d2b71e, 526px 714px #d2b71e, 18px 836px #d2b71e, 1546px 1548px #d2b71e, 22px 469px #d2b71e, 594px 1466px #d2b71e, 1160px 1078px #d2b71e, 627px 1055px #d2b71e, 195px 699px #d2b71e, 1099px 684px #d2b71e, 530px 551px #d2b71e, 1160px 1325px #d2b71e, 894px 727px #d2b71e, 1157px 98px #d2b71e, 136px 1483px #d2b71e, 1875px 1975px #d2b71e, 1803px 566px #d2b71e, 318px 1073px #d2b71e, 1866px 1656px #d2b71e, 543px 414px #d2b71e, 719px 474px #d2b71e, 1115px 738px #d2b71e, 353px 875px #d2b71e, 184px 1938px #d2b71e, 1854px 1534px #d2b71e, 420px 1698px #d2b71e, 1480px 1550px #d2b71e, 522px 203px #d2b71e, 1897px 1904px #d2b71e, 975px 1708px #d2b71e, 1774px 602px #d2b71e, 1908px 274px #d2b71e, 61px 715px #d2b71e, 983px 1156px #d2b71e, 326px 1013px #d2b71e, 641px 290px #d2b71e, 1522px 120px #d2b71e, 405px 1637px #d2b71e, 1021px 1099px #d2b71e, 631px 1145px #d2b71e, 982px 1967px #d2b71e, 200px 651px #d2b71e, 795px 351px #d2b71e, 790px 1082px #d2b71e, 144px 1572px #d2b71e, 1542px 901px #d2b71e, 158px 1524px #d2b71e, 849px 1843px #d2b71e, 1807px 203px #d2b71e, 1747px 45px #d2b71e, 1603px 1738px #d2b71e, 617px 1966px #d2b71e, 342px 748px #d2b71e, 1779px 1173px #d2b71e, 1428px 152px #d2b71e, 589px 1998px #d2b71e, 1940px 1838px #d2b71e, 115px 272px #d2b71e, 1217px 1395px #d2b71e, 1402px 1491px #d2b71e, 1833px 1814px #d2b71e, 243px 966px #d2b71e, 319px 578px #d2b71e, 813px 364px #d2b71e, 669px 882px #d2b71e, 551px 134px #d2b71e, 1819px 920px #d2b71e, 740px 1826px #d2b71e, 1021px 952px #d2b71e, 1575px 453px #d2b71e, 324px 419px #d2b71e, 929px 417px #d2b71e, 885px 1112px #d2b71e, 503px 187px #d2b71e, 1908px 362px #d2b71e, 1063px 1601px #d2b71e, 169px 1792px #d2b71e, 789px 963px #d2b71e, 1697px 948px #d2b71e, 1761px 1810px #d2b71e, 1844px 1591px #d2b71e, 1709px 949px #d2b71e, 1402px 1396px #d2b71e, 1037px 225px #d2b71e, 1832px 518px #d2b71e, 1728px 1782px #d2b71e, 194px 1421px #d2b71e, 1395px 742px #d2b71e, 1478px 1325px #d2b71e, 40px 593px #d2b71e, 1732px 117px #d2b71e, 51px 158px #d2b71e, 1598px 1672px #d2b71e, 701px 849px #d2b71e, 1403px 1979px #d2b71e, 145px 1414px #d2b71e, 550px 906px #d2b71e, 1366px 460px #d2b71e, 142px 1379px #d2b71e, 34px 1864px #d2b71e, 1346px 308px #d2b71e, 293px 998px #d2b71e, 21px 1868px #d2b71e, 540px 1033px #d2b71e, 60px 746px #d2b71e, 1602px 1476px #d2b71e, 180px 804px #d2b71e, 345px 1982px #d2b71e, 1439px 640px #d2b71e, 939px 1834px #d2b71e, 20px 432px #d2b71e, 492px 1549px #d2b71e, 109px 1579px #d2b71e, 1796px 1403px #d2b71e, 1079px 519px #d2b71e, 1664px 389px #d2b71e, 1627px 1061px #d2b71e, 823px 419px #d2b71e, 1399px 1882px #d2b71e, 1906px 344px #d2b71e, 1189px 848px #d2b71e, 117px 882px #d2b71e, 1262px 33px #d2b71e, 1048px 434px #d2b71e, 1208px 1309px #d2b71e, 1616px 408px #d2b71e, 1833px 853px #d2b71e, 1433px 1656px #d2b71e, 811px 1861px #d2b71e, 439px 1672px #d2b71e, 1105px 248px #d2b71e, 328px 1652px #d2b71e, 13px 1658px #d2b71e, 685px 987px #d2b71e, 985px 403px #d2b71e, 1664px 1206px #d2b71e, 1993px 1925px #d2b71e, 440px 917px #d2b71e, 1835px 319px #d2b71e, 1404px 1907px #d2b71e, 624px 1443px #d2b71e, 843px 954px #d2b71e, 478px 1567px #d2b71e, 895px 1602px #d2b71e, 1231px 871px #d2b71e, 1267px 1646px #d2b71e, 475px 334px #d2b71e, 784px 796px #d2b71e, 1294px 199px #d2b71e, 109px 702px #d2b71e, 1978px 362px #d2b71e, 291px 940px #d2b71e, 971px 1343px #d2b71e, 74px 719px #d2b71e, 36px 715px #d2b71e, 1007px 1423px #d2b71e, 860px 314px #d2b71e, 631px 177px #d2b71e, 1900px 1590px #d2b71e, 1239px 1348px #d2b71e, 1346px 1270px #d2b71e, 1934px 1475px #d2b71e, 1553px 559px #d2b71e, 588px 1969px #d2b71e, 670px 1269px #d2b71e, 1484px 376px #d2b71e, 20px 1424px #d2b71e, 1396px 8px #d2b71e, 969px 244px #d2b71e, 1807px 538px #d2b71e, 1873px 891px #d2b71e, 636px 1142px #d2b71e, 1474px 1562px #d2b71e, 763px 350px #d2b71e, 663px 700px #d2b71e, 500px 1469px #d2b71e, 1302px 722px #d2b71e, 181px 291px #d2b71e, 266px 893px #d2b71e, 1403px 654px #d2b71e, 492px 460px #d2b71e, 1503px 1369px #d2b71e, 23px 1662px #d2b71e, 349px 333px #d2b71e, 1435px 1017px #d2b71e, 1441px 705px #d2b71e, 1708px 1446px #d2b71e, 1041px 911px #d2b71e, 1063px 780px #d2b71e, 1158px 1356px #d2b71e, 767px 1454px #d2b71e, 1912px 797px #d2b71e, 1731px 1759px #d2b71e, 1378px 1390px #d2b71e, 1815px 1364px #d2b71e, 960px 270px #d2b71e, 1343px 427px #d2b71e, 275px 203px #d2b71e, 1319px 1092px #d2b71e, 1455px 770px #d2b71e, 283px 1503px #d2b71e, 1505px 901px #d2b71e, 1738px 1561px #d2b71e, 1526px 1935px #d2b71e, 1757px 669px #d2b71e, 1640px 620px #d2b71e, 1750px 722px #d2b71e, 748px 66px #d2b71e, 1149px 540px #d2b71e, 159px 953px #d2b71e, 200px 1426px #d2b71e, 515px 1110px #d2b71e, 1552px 737px #d2b71e, 1094px 1459px #d2b71e, 778px 799px #d2b71e, 1031px 523px #d2b71e, 743px 1825px #d2b71e, 1100px 882px #d2b71e, 1088px 1836px #d2b71e, 255px 599px #d2b71e, 67px 1361px #d2b71e, 247px 1721px #d2b71e, 1722px 346px #d2b71e, 1822px 155px #d2b71e, 452px 1973px #d2b71e, 415px 1960px #d2b71e, 1109px 57px #d2b71e, 273px 1392px #d2b71e, 404px 1071px #d2b71e, 1212px 353px #d2b71e, 370px 460px #d2b71e, 795px 1523px #d2b71e, 1932px 340px #d2b71e, 51px 1473px #d2b71e, 1268px 364px #d2b71e, 1512px 1862px #d2b71e, 1678px 1801px #d2b71e, 1796px 579px #d2b71e, 254px 251px #d2b71e, 1466px 1717px #d2b71e, 893px 379px #d2b71e, 1153px 923px #d2b71e, 913px 1808px #d2b71e, 791px 789px #d2b71e, 417px 1924px #d2b71e, 1336px 1599px #d2b71e, 1695px 908px #d2b71e, 1120px 114px #d2b71e, 493px 1949px #d2b71e, 68px 1905px #d2b71e, 969px 481px #d2b71e, 1420px 1095px #d2b71e, 800px 1117px #d2b71e, 390px 234px #d2b71e, 356px 1644px #d2b71e, 1098px 1486px #d2b71e, 1360px 521px #d2b71e, 149px 1198px #d2b71e, 354px 747px #d2b71e, 1749px 487px #d2b71e, 470px 76px #d2b71e, 1672px 289px #d2b71e, 1731px 545px #d2b71e, 1547px 1590px #d2b71e, 498px 692px #d2b71e, 398px 1592px #d2b71e, 1846px 1237px #d2b71e, 1537px 1474px #d2b71e, 1726px 1374px #d2b71e, 1922px 858px #d2b71e, 376px 321px #d2b71e, 985px 227px #d2b71e, 234px 1421px #d2b71e, 760px 745px #d2b71e, 1990px 1132px #d2b71e, 1560px 1597px #d2b71e, 338px 1310px #d2b71e, 1924px 1664px #d2b71e, 547px 1747px #d2b71e, 1639px 1282px #d2b71e, 1202px 337px #d2b71e, 1985px 779px #d2b71e, 737px 456px #d2b71e, 89px 501px #d2b71e, 963px 792px #d2b71e, 655px 1447px #d2b71e, 1492px 1994px #d2b71e, 1171px 254px #d2b71e, 892px 827px #d2b71e, 1735px 442px #d2b71e, 1474px 1187px #d2b71e, 846px 1518px #d2b71e, 557px 1805px #d2b71e, 738px 945px #d2b71e, 795px 68px #d2b71e, 663px 1956px #d2b71e, 1607px 290px #d2b71e, 1524px 15px #d2b71e, 1097px 1911px #d2b71e, 157px 1939px #d2b71e, 935px 1065px #d2b71e, 1809px 1708px #d2b71e, 164px 1157px #d2b71e, 83px 855px #d2b71e, 625px 501px #d2b71e, 814px 398px #d2b71e, 552px 695px #d2b71e, 597px 1546px #d2b71e, 1237px 1417px #d2b71e, 628px 284px #d2b71e, 866px 767px #d2b71e, 1403px 1394px #d2b71e, 765px 1563px #d2b71e, 1648px 109px #d2b71e, 1205px 1659px #d2b71e, 921px 1313px #d2b71e, 1319px 243px #d2b71e, 18px 125px #d2b71e, 7px 777px #d2b71e, 181px 418px #d2b71e, 1062px 1892px #d2b71e, 382px 106px #d2b71e, 994px 751px #d2b71e, 964px 234px #d2b71e, 40px 118px #d2b71e, 278px 706px #d2b71e, 1540px 1978px #d2b71e, 425px 1661px #d2b71e, 1050px 321px #d2b71e, 735px 1729px #d2b71e, 1438px 260px #d2b71e, 1229px 1109px #d2b71e, 186px 1041px #d2b71e, 244px 1184px #d2b71e, 392px 1472px #d2b71e, 670px 1249px #d2b71e, 1260px 1443px #d2b71e, 1977px 1511px #d2b71e, 1240px 773px #d2b71e, 303px 513px #d2b71e, 63px 1530px #d2b71e, 610px 792px #d2b71e, 1987px 1647px #d2b71e, 676px 1597px #d2b71e, 1740px 1244px #d2b71e, 816px 1661px #d2b71e, 351px 802px #d2b71e, 252px 1082px #d2b71e, 31px 365px #d2b71e, 1453px 984px #d2b71e, 667px 1233px #d2b71e, 1247px 1800px #d2b71e, 839px 270px #d2b71e, 775px 913px #d2b71e, 1966px 1398px #d2b71e, 499px 813px #d2b71e, 922px 1982px #d2b71e, 1409px 1902px #d2b71e, 1499px 1766px #d2b71e, 721px 899px #d2b71e, 788px 807px #d2b71e, 989px 1355px #d2b71e, 1248px 1274px #d2b71e, 849px 1091px #d2b71e, 1799px 1036px #d2b71e, 1486px 700px #d2b71e, 170px 1989px #d2b71e, 1275px 799px #d2b71e, 772px 2000px #d2b71e, 1642px 362px #d2b71e, 216px 940px #d2b71e, 1893px 281px #d2b71e, 1944px 1298px #d2b71e, 1294px 400px #d2b71e, 1523px 441px #d2b71e, 1829px 340px #d2b71e, 468px 170px #d2b71e, 1099px 967px #d2b71e, 1331px 665px #d2b71e, 1174px 1553px #d2b71e, 1567px 325px #d2b71e, 1028px 1399px #d2b71e, 781px 1451px #d2b71e, 1912px 1954px #d2b71e, 874px 873px #d2b71e, 1298px 1722px #d2b71e, 1879px 706px #d2b71e, 57px 1221px #d2b71e, 1116px 1432px #d2b71e, 48px 811px #d2b71e, 101px 916px #d2b71e, 677px 304px #d2b71e, 1203px 639px #d2b71e, 1391px 199px #d2b71e, 1895px 1988px #d2b71e, 1462px 1023px #d2b71e, 1216px 1751px #d2b71e, 1261px 663px #d2b71e, 1290px 1119px #d2b71e, 137px 1793px #d2b71e, 1052px 1470px #d2b71e, 1561px 226px #d2b71e, 1156px 402px #d2b71e, 709px 693px #d2b71e, 1040px 1911px #d2b71e, 1624px 1115px #d2b71e, 551px 475px #d2b71e, 416px 1090px #d2b71e, 1183px 451px #d2b71e, 58px 765px #d2b71e, 743px 1016px #d2b71e, 198px 369px #d2b71e, 1645px 1503px #d2b71e, 997px 22px #d2b71e, 1447px 1323px #d2b71e, 379px 883px #d2b71e, 1171px 1195px #d2b71e, 919px 133px #d2b71e, 1400px 517px #d2b71e, 725px 804px #d2b71e, 1600px 699px #d2b71e, 357px 581px #d2b71e, 266px 1713px #d2b71e, 848px 1749px #d2b71e, 1963px 1045px #d2b71e, 119px 1136px #d2b71e;
}

#stars2 {
    width: 4px;
    height: 4px;
    border-radius: 30px;
    background: transparent;
    box-shadow: 1117px 1306px #d2b71e, 1078px 1783px #d2b71e, 1179px 1085px #d2b71e, 1145px 920px #d2b71e, 422px 1233px #d2b71e, 387px 98px #d2b71e, 1153px 637px #d2b71e, 1084px 782px #d2b71e, 476px 453px #d2b71e, 926px 1306px #d2b71e, 60px 1086px #d2b71e, 753px 1575px #d2b71e, 272px 1684px #d2b71e, 1285px 750px #d2b71e, 1416px 1327px #d2b71e, 1931px 473px #d2b71e, 736px 1395px #d2b71e, 1816px 763px #d2b71e, 438px 879px #d2b71e, 665px 1902px #d2b71e, 1341px 677px #d2b71e, 1404px 1073px #d2b71e, 100px 597px #d2b71e, 357px 1689px #d2b71e, 1044px 1342px #d2b71e, 1954px 502px #d2b71e, 1192px 1308px #d2b71e, 540px 1239px #d2b71e, 1360px 552px #d2b71e, 89px 752px #d2b71e, 659px 1253px #d2b71e, 62px 517px #d2b71e, 1375px 1705px #d2b71e, 1343px 1511px #d2b71e, 1659px 1922px #d2b71e, 1560px 289px #d2b71e, 1362px 1799px #d2b71e, 1886px 1480px #d2b71e, 1718px 1885px #d2b71e, 824px 738px #d2b71e, 1060px 1370px #d2b71e, 1781px 1171px #d2b71e, 255px 273px #d2b71e, 1197px 120px #d2b71e, 213px 7px #d2b71e, 1226px 1920px #d2b71e, 1844px 207px #d2b71e, 1675px 970px #d2b71e, 1435px 1283px #d2b71e, 37px 353px #d2b71e, 59px 417px #d2b71e, 921px 1602px #d2b71e, 1549px 1490px #d2b71e, 638px 1845px #d2b71e, 1328px 198px #d2b71e, 1050px 1149px #d2b71e, 1884px 711px #d2b71e, 333px 263px #d2b71e, 342px 1508px #d2b71e, 1388px 1810px #d2b71e, 1377px 1558px #d2b71e, 890px 487px #d2b71e, 1081px 759px #d2b71e, 890px 1515px #d2b71e, 911px 1284px #d2b71e, 335px 735px #d2b71e, 1140px 549px #d2b71e, 1239px 1064px #d2b71e, 226px 71px #d2b71e, 1100px 1278px #d2b71e, 1851px 1805px #d2b71e, 1370px 1999px #d2b71e, 1008px 1122px #d2b71e, 785px 813px #d2b71e, 1358px 601px #d2b71e, 1833px 1305px #d2b71e, 1768px 1304px #d2b71e, 1303px 532px #d2b71e, 860px 598px #d2b71e, 1329px 593px #d2b71e, 1038px 1088px #d2b71e, 408px 405px #d2b71e, 965px 82px #d2b71e, 1483px 1438px #d2b71e, 310px 1479px #d2b71e, 1786px 1500px #d2b71e, 1866px 852px #d2b71e, 18px 1757px #d2b71e, 1473px 1004px #d2b71e, 1542px 1933px #d2b71e, 633px 1970px #d2b71e, 1334px 1713px #d2b71e, 175px 28px #d2b71e, 592px 894px #d2b71e, 121px 1162px #d2b71e, 1601px 1567px #d2b71e, 1095px 657px #d2b71e, 640px 1233px #d2b71e, 1073px 1255px #d2b71e, 840px 1087px #d2b71e, 718px 250px #d2b71e, 967px 709px #d2b71e, 731px 239px #d2b71e, 1623px 593px #d2b71e, 1058px 1820px #d2b71e, 516px 1898px #d2b71e, 666px 12px #d2b71e, 1997px 1382px #d2b71e, 112px 1690px #d2b71e, 687px 1309px #d2b71e, 63px 539px #d2b71e, 185px 1897px #d2b71e, 1055px 1691px #d2b71e, 435px 1517px #d2b71e, 1175px 1119px #d2b71e, 1721px 133px #d2b71e, 1212px 47px #d2b71e, 166px 18px #d2b71e, 1416px 1652px #d2b71e, 1409px 1745px #d2b71e, 1357px 1232px #d2b71e, 1677px 1998px #d2b71e, 448px 1415px #d2b71e, 705px 1736px #d2b71e, 1031px 1466px #d2b71e, 543px 1651px #d2b71e, 1592px 1888px #d2b71e, 1749px 1175px #d2b71e, 639px 1114px #d2b71e, 1591px 508px #d2b71e, 759px 1244px #d2b71e, 824px 380px #d2b71e, 942px 955px #d2b71e, 723px 732px #d2b71e, 113px 1369px #d2b71e, 203px 1739px #d2b71e, 868px 733px #d2b71e, 713px 971px #d2b71e, 341px 833px #d2b71e, 762px 824px #d2b71e, 1359px 310px #d2b71e, 1858px 1349px #d2b71e, 1531px 692px #d2b71e, 1075px 1512px #d2b71e, 1677px 142px #d2b71e, 1912px 1478px #d2b71e, 1810px 1078px #d2b71e, 426px 844px #d2b71e, 1426px 588px #d2b71e, 1909px 654px #d2b71e, 1107px 295px #d2b71e, 1351px 527px #d2b71e, 1393px 599px #d2b71e, 1379px 1068px #d2b71e, 228px 1846px #d2b71e, 1271px 374px #d2b71e, 1348px 612px #d2b71e, 7px 1301px #d2b71e, 1501px 1782px #d2b71e, 1795px 423px #d2b71e, 1475px 1918px #d2b71e, 1328px 1861px #d2b71e, 1624px 51px #d2b71e, 1791px 672px #d2b71e, 1594px 1467px #d2b71e, 1655px 1603px #d2b71e, 919px 850px #d2b71e, 523px 609px #d2b71e, 1196px 207px #d2b71e, 753px 410px #d2b71e, 686px 1097px #d2b71e, 1570px 133px #d2b71e, 1996px 1137px #d2b71e, 361px 116px #d2b71e, 1015px 462px #d2b71e, 76px 1143px #d2b71e, 491px 1818px #d2b71e, 1563px 795px #d2b71e, 982px 1721px #d2b71e, 831px 1204px #d2b71e, 1737px 589px #d2b71e, 861px 1579px #d2b71e, 1666px 130px #d2b71e, 698px 1799px #d2b71e, 726px 1519px #d2b71e, 109px 1208px #d2b71e, 1184px 1057px #d2b71e, 835px 451px #d2b71e, 896px 594px #d2b71e, 35px 893px #d2b71e, 895px 542px #d2b71e, 706px 225px #d2b71e, 56px 1040px #d2b71e, 1954px 108px #d2b71e, 1439px 1423px #d2b71e, 26px 1881px #d2b71e, 802px 1564px #d2b71e, 273px 708px #d2b71e, 40px 31px #d2b71e, 859px 108px #d2b71e;
    -webkit-animation: animStar 100s linear infinite;
    -moz-animation: animStar 100s linear infinite;
    -ms-animation: animStar 100s linear infinite;
    animation: animStar 100s linear infinite;
}

#stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 4px;
    height: 4px;
    background: transparent;
    border-radius: 30px;
    box-shadow: 1117px 1306px #d2b71e, 1078px 1783px #d2b71e, 1179px 1085px #d2b71e, 1145px 920px #d2b71e, 422px 1233px #d2b71e, 387px 98px #d2b71e, 1153px 637px #d2b71e, 1084px 782px #d2b71e, 476px 453px #d2b71e, 926px 1306px #d2b71e, 60px 1086px #d2b71e, 753px 1575px #d2b71e, 272px 1684px #d2b71e, 1285px 750px #d2b71e, 1416px 1327px #d2b71e, 1931px 473px #d2b71e, 736px 1395px #d2b71e, 1816px 763px #d2b71e, 438px 879px #d2b71e, 665px 1902px #d2b71e, 1341px 677px #d2b71e, 1404px 1073px #d2b71e, 100px 597px #d2b71e, 357px 1689px #d2b71e, 1044px 1342px #d2b71e, 1954px 502px #d2b71e, 1192px 1308px #d2b71e, 540px 1239px #d2b71e, 1360px 552px #d2b71e, 89px 752px #d2b71e, 659px 1253px #d2b71e, 62px 517px #d2b71e, 1375px 1705px #d2b71e, 1343px 1511px #d2b71e, 1659px 1922px #d2b71e, 1560px 289px #d2b71e, 1362px 1799px #d2b71e, 1886px 1480px #d2b71e, 1718px 1885px #d2b71e, 824px 738px #d2b71e, 1060px 1370px #d2b71e, 1781px 1171px #d2b71e, 255px 273px #d2b71e, 1197px 120px #d2b71e, 213px 7px #d2b71e, 1226px 1920px #d2b71e, 1844px 207px #d2b71e, 1675px 970px #d2b71e, 1435px 1283px #d2b71e, 37px 353px #d2b71e, 59px 417px #d2b71e, 921px 1602px #d2b71e, 1549px 1490px #d2b71e, 638px 1845px #d2b71e, 1328px 198px #d2b71e, 1050px 1149px #d2b71e, 1884px 711px #d2b71e, 333px 263px #d2b71e, 342px 1508px #d2b71e, 1388px 1810px #d2b71e, 1377px 1558px #d2b71e, 890px 487px #d2b71e, 1081px 759px #d2b71e, 890px 1515px #d2b71e, 911px 1284px #d2b71e, 335px 735px #d2b71e, 1140px 549px #d2b71e, 1239px 1064px #d2b71e, 226px 71px #d2b71e, 1100px 1278px #d2b71e, 1851px 1805px #d2b71e, 1370px 1999px #d2b71e, 1008px 1122px #d2b71e, 785px 813px #d2b71e, 1358px 601px #d2b71e, 1833px 1305px #d2b71e, 1768px 1304px #d2b71e, 1303px 532px #d2b71e, 860px 598px #d2b71e, 1329px 593px #d2b71e, 1038px 1088px #d2b71e, 408px 405px #d2b71e, 965px 82px #d2b71e, 1483px 1438px #d2b71e, 310px 1479px #d2b71e, 1786px 1500px #d2b71e, 1866px 852px #d2b71e, 18px 1757px #d2b71e, 1473px 1004px #d2b71e, 1542px 1933px #d2b71e, 633px 1970px #d2b71e, 1334px 1713px #d2b71e, 175px 28px #d2b71e, 592px 894px #d2b71e, 121px 1162px #d2b71e, 1601px 1567px #d2b71e, 1095px 657px #d2b71e, 640px 1233px #d2b71e, 1073px 1255px #d2b71e, 840px 1087px #d2b71e, 718px 250px #d2b71e, 967px 709px #d2b71e, 731px 239px #d2b71e, 1623px 593px #d2b71e, 1058px 1820px #d2b71e, 516px 1898px #d2b71e, 666px 12px #d2b71e, 1997px 1382px #d2b71e, 112px 1690px #d2b71e, 687px 1309px #d2b71e, 63px 539px #d2b71e, 185px 1897px #d2b71e, 1055px 1691px #d2b71e, 435px 1517px #d2b71e, 1175px 1119px #d2b71e, 1721px 133px #d2b71e, 1212px 47px #d2b71e, 166px 18px #d2b71e, 1416px 1652px #d2b71e, 1409px 1745px #d2b71e, 1357px 1232px #d2b71e, 1677px 1998px #d2b71e, 448px 1415px #d2b71e, 705px 1736px #d2b71e, 1031px 1466px #d2b71e, 543px 1651px #d2b71e, 1592px 1888px #d2b71e, 1749px 1175px #d2b71e, 639px 1114px #d2b71e, 1591px 508px #d2b71e, 759px 1244px #d2b71e, 824px 380px #d2b71e, 942px 955px #d2b71e, 723px 732px #d2b71e, 113px 1369px #d2b71e, 203px 1739px #d2b71e, 868px 733px #d2b71e, 713px 971px #d2b71e, 341px 833px #d2b71e, 762px 824px #d2b71e, 1359px 310px #d2b71e, 1858px 1349px #d2b71e, 1531px 692px #d2b71e, 1075px 1512px #d2b71e, 1677px 142px #d2b71e, 1912px 1478px #d2b71e, 1810px 1078px #d2b71e, 426px 844px #d2b71e, 1426px 588px #d2b71e, 1909px 654px #d2b71e, 1107px 295px #d2b71e, 1351px 527px #d2b71e, 1393px 599px #d2b71e, 1379px 1068px #d2b71e, 228px 1846px #d2b71e, 1271px 374px #d2b71e, 1348px 612px #d2b71e, 7px 1301px #d2b71e, 1501px 1782px #d2b71e, 1795px 423px #d2b71e, 1475px 1918px #d2b71e, 1328px 1861px #d2b71e, 1624px 51px #d2b71e, 1791px 672px #d2b71e, 1594px 1467px #d2b71e, 1655px 1603px #d2b71e, 919px 850px #d2b71e, 523px 609px #d2b71e, 1196px 207px #d2b71e, 753px 410px #d2b71e, 686px 1097px #d2b71e, 1570px 133px #d2b71e, 1996px 1137px #d2b71e, 361px 116px #d2b71e, 1015px 462px #d2b71e, 76px 1143px #d2b71e, 491px 1818px #d2b71e, 1563px 795px #d2b71e, 982px 1721px #d2b71e, 831px 1204px #d2b71e, 1737px 589px #d2b71e, 861px 1579px #d2b71e, 1666px 130px #d2b71e, 698px 1799px #d2b71e, 726px 1519px #d2b71e, 109px 1208px #d2b71e, 1184px 1057px #d2b71e, 835px 451px #d2b71e, 896px 594px #d2b71e, 35px 893px #d2b71e, 895px 542px #d2b71e, 706px 225px #d2b71e, 56px 1040px #d2b71e, 1954px 108px #d2b71e, 1439px 1423px #d2b71e, 26px 1881px #d2b71e, 802px 1564px #d2b71e, 273px 708px #d2b71e, 40px 31px #d2b71e, 859px 108px #d2b71e;
}

#stars3 {
    width: 3px;
    height: 3px;
    border-radius: 30px;
    background: transparent;
    box-shadow: 940px 1360px #d2b71e, 1071px 539px #d2b71e, 1710px 1414px #d2b71e, 836px 299px #d2b71e, 1944px 1420px #d2b71e, 253px 1449px #d2b71e, 1257px 1250px #d2b71e, 1588px 1830px #d2b71e, 1077px 1204px #d2b71e, 273px 1081px #d2b71e, 1993px 766px #d2b71e, 1808px 479px #d2b71e, 917px 263px #d2b71e, 663px 1820px #d2b71e, 342px 1988px #d2b71e, 727px 1250px #d2b71e, 636px 1666px #d2b71e, 692px 1112px #d2b71e, 248px 1211px #d2b71e, 1422px 1121px #d2b71e, 881px 46px #d2b71e, 1531px 1977px #d2b71e, 1643px 1023px #d2b71e, 684px 1071px #d2b71e, 1142px 1873px #d2b71e, 292px 1313px #d2b71e, 256px 1237px #d2b71e, 89px 912px #d2b71e, 964px 1783px #d2b71e, 877px 760px #d2b71e, 1641px 1474px #d2b71e, 1492px 24px #d2b71e, 1776px 1642px #d2b71e, 183px 602px #d2b71e, 1998px 62px #d2b71e, 1560px 367px #d2b71e, 1333px 995px #d2b71e, 704px 1815px #d2b71e, 1809px 712px #d2b71e, 1503px 288px #d2b71e, 630px 556px #d2b71e, 1715px 125px #d2b71e, 353px 1878px #d2b71e, 975px 333px #d2b71e, 1740px 1409px #d2b71e, 1341px 1871px #d2b71e, 1279px 1064px #d2b71e, 169px 874px #d2b71e, 161px 528px #d2b71e, 1671px 1669px #d2b71e, 169px 632px #d2b71e, 547px 1724px #d2b71e, 1904px 110px #d2b71e, 679px 1670px #d2b71e, 196px 123px #d2b71e, 786px 871px #d2b71e, 1840px 324px #d2b71e, 356px 967px #d2b71e, 61px 549px #d2b71e, 99px 677px #d2b71e, 1719px 87px #d2b71e, 1713px 1990px #d2b71e, 1717px 1358px #d2b71e, 108px 1187px #d2b71e, 51px 869px #d2b71e, 1461px 902px #d2b71e, 1034px 891px #d2b71e, 962px 1881px #d2b71e, 1723px 595px #d2b71e, 479px 901px #d2b71e, 1546px 1823px #d2b71e, 285px 1208px #d2b71e, 1056px 347px #d2b71e, 261px 988px #d2b71e, 466px 990px #d2b71e, 1657px 648px #d2b71e, 1249px 933px #d2b71e, 1552px 1555px #d2b71e, 147px 62px #d2b71e, 292px 1157px #d2b71e, 1816px 423px #d2b71e, 1714px 757px #d2b71e, 1036px 961px #d2b71e, 1955px 710px #d2b71e, 1842px 516px #d2b71e, 479px 1870px #d2b71e, 1579px 1445px #d2b71e, 1225px 1309px #d2b71e, 1965px 566px #d2b71e, 1575px 1072px #d2b71e, 923px 329px #d2b71e, 651px 1514px #d2b71e, 865px 1100px #d2b71e, 782px 1873px #d2b71e, 115px 299px #d2b71e, 14px 1668px #d2b71e, 1666px 1817px #d2b71e, 1096px 1068px #d2b71e, 1462px 742px #d2b71e, 1384px 1750px #d2b71e;
    -webkit-animation: animStar 150s linear infinite;
    -moz-animation: animStar 150s linear infinite;
    -ms-animation: animStar 150s linear infinite;
    animation: animStar 150s linear infinite;
}

#stars3:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    border-radius: 30px;
    box-shadow: 940px 1360px #d2b71e, 1071px 539px #d2b71e, 1710px 1414px #d2b71e, 836px 299px #d2b71e, 1944px 1420px #d2b71e, 253px 1449px #d2b71e, 1257px 1250px #d2b71e, 1588px 1830px #d2b71e, 1077px 1204px #d2b71e, 273px 1081px #d2b71e, 1993px 766px #d2b71e, 1808px 479px #d2b71e, 917px 263px #d2b71e, 663px 1820px #d2b71e, 342px 1988px #d2b71e, 727px 1250px #d2b71e, 636px 1666px #d2b71e, 692px 1112px #d2b71e, 248px 1211px #d2b71e, 1422px 1121px #d2b71e, 881px 46px #d2b71e, 1531px 1977px #d2b71e, 1643px 1023px #d2b71e, 684px 1071px #d2b71e, 1142px 1873px #d2b71e, 292px 1313px #d2b71e, 256px 1237px #d2b71e, 89px 912px #d2b71e, 964px 1783px #d2b71e, 877px 760px #d2b71e, 1641px 1474px #d2b71e, 1492px 24px #d2b71e, 1776px 1642px #d2b71e, 183px 602px #d2b71e, 1998px 62px #d2b71e, 1560px 367px #d2b71e, 1333px 995px #d2b71e, 704px 1815px #d2b71e, 1809px 712px #d2b71e, 1503px 288px #d2b71e, 630px 556px #d2b71e, 1715px 125px #d2b71e, 353px 1878px #d2b71e, 975px 333px #d2b71e, 1740px 1409px #d2b71e, 1341px 1871px #d2b71e, 1279px 1064px #d2b71e, 169px 874px #d2b71e, 161px 528px #d2b71e, 1671px 1669px #d2b71e, 169px 632px #d2b71e, 547px 1724px #d2b71e, 1904px 110px #d2b71e, 679px 1670px #d2b71e, 196px 123px #d2b71e, 786px 871px #d2b71e, 1840px 324px #d2b71e, 356px 967px #d2b71e, 61px 549px #d2b71e, 99px 677px #d2b71e, 1719px 87px #d2b71e, 1713px 1990px #d2b71e, 1717px 1358px #d2b71e, 108px 1187px #d2b71e, 51px 869px #d2b71e, 1461px 902px #d2b71e, 1034px 891px #d2b71e, 962px 1881px #d2b71e, 1723px 595px #d2b71e, 479px 901px #d2b71e, 1546px 1823px #d2b71e, 285px 1208px #d2b71e, 1056px 347px #d2b71e, 261px 988px #d2b71e, 466px 990px #d2b71e, 1657px 648px #d2b71e, 1249px 933px #d2b71e, 1552px 1555px #d2b71e, 147px 62px #d2b71e, 292px 1157px #d2b71e, 1816px 423px #d2b71e, 1714px 757px #d2b71e, 1036px 961px #d2b71e, 1955px 710px #d2b71e, 1842px 516px #d2b71e, 479px 1870px #d2b71e, 1579px 1445px #d2b71e, 1225px 1309px #d2b71e, 1965px 566px #d2b71e, 1575px 1072px #d2b71e, 923px 329px #d2b71e, 651px 1514px #d2b71e, 865px 1100px #d2b71e, 782px 1873px #d2b71e, 115px 299px #d2b71e, 14px 1668px #d2b71e, 1666px 1817px #d2b71e, 1096px 1068px #d2b71e, 1462px 742px #d2b71e, 1384px 1750px #d2b71e;
}

#stars4 {
    width: 2px;
    height: 2px;
    border-radius: 30px;
    background: transparent;
    box-shadow: 233px 1976px #d2b71e, 1196px 1119px #d2b71e, 646px 740px #d2b71e, 335px 645px #d2b71e, 1119px 1452px #d2b71e, 176px 1870px #d2b71e, 639px 1711px #d2b71e, 647px 1388px #d2b71e, 1516px 1108px #d2b71e, 464px 66px #d2b71e, 331px 344px #d2b71e, 772px 1189px #d2b71e, 1516px 1850px #d2b71e, 1500px 1463px #d2b71e, 1275px 876px #d2b71e, 1107px 645px #d2b71e, 977px 478px #d2b71e, 583px 1179px #d2b71e, 284px 395px #d2b71e, 1220px 461px #d2b71e, 1160px 249px #d2b71e, 196px 865px #d2b71e, 670px 1915px #d2b71e, 1449px 382px #d2b71e, 1191px 546px #d2b71e, 1329px 605px #d2b71e, 1945px 458px #d2b71e, 995px 749px #d2b71e, 1495px 861px #d2b71e, 708px 1731px #d2b71e, 348px 653px #d2b71e, 548px 1298px #d2b71e, 1606px 990px #d2b71e, 1049px 1204px #d2b71e, 253px 1501px #d2b71e, 1154px 166px #d2b71e, 1087px 104px #d2b71e, 1034px 1161px #d2b71e, 1681px 462px #d2b71e, 577px 1897px #d2b71e, 193px 1901px #d2b71e, 1701px 1755px #d2b71e, 864px 1297px #d2b71e, 800px 1289px #d2b71e, 676px 28px #d2b71e, 185px 1341px #d2b71e, 379px 1151px #d2b71e, 1224px 1725px #d2b71e, 280px 541px #d2b71e, 473px 1196px #d2b71e, 921px 1628px #d2b71e, 969px 432px #d2b71e, 1475px 758px #d2b71e, 1195px 993px #d2b71e, 876px 1840px #d2b71e, 1274px 1689px #d2b71e, 1977px 1101px #d2b71e, 837px 527px #d2b71e, 1785px 1610px #d2b71e, 1650px 1843px #d2b71e, 1127px 1508px #d2b71e, 401px 1050px #d2b71e, 51px 1105px #d2b71e, 545px 880px #d2b71e, 1786px 1672px #d2b71e, 318px 260px #d2b71e, 568px 254px #d2b71e, 1026px 1527px #d2b71e, 1242px 852px #d2b71e, 1785px 982px #d2b71e, 1318px 1071px #d2b71e, 398px 1061px #d2b71e, 1509px 257px #d2b71e, 599px 928px #d2b71e, 1195px 1800px #d2b71e, 1254px 906px #d2b71e, 141px 26px #d2b71e, 1384px 1502px #d2b71e, 476px 767px #d2b71e, 1973px 722px #d2b71e, 1339px 1031px #d2b71e, 778px 818px #d2b71e, 213px 1320px #d2b71e, 184px 221px #d2b71e, 983px 1911px #d2b71e, 923px 1439px #d2b71e, 1936px 581px #d2b71e, 1105px 625px #d2b71e, 325px 729px #d2b71e, 1475px 204px #d2b71e, 1483px 1564px #d2b71e, 1327px 1272px #d2b71e, 1187px 1944px #d2b71e, 1945px 1471px #d2b71e, 116px 960px #d2b71e, 1660px 1610px #d2b71e, 412px 1022px #d2b71e, 1552px 1516px #d2b71e, 1517px 1892px #d2b71e, 306px 829px #d2b71e, 1416px 462px #d2b71e, 1575px 1460px #d2b71e, 424px 1500px #d2b71e, 1530px 1169px #d2b71e, 1388px 1608px #d2b71e, 185px 416px #d2b71e, 634px 1446px #d2b71e, 767px 479px #d2b71e, 71px 426px #d2b71e, 1937px 145px #d2b71e, 1955px 1312px #d2b71e, 1811px 611px #d2b71e, 1145px 569px #d2b71e, 1460px 676px #d2b71e, 131px 1858px #d2b71e, 1557px 473px #d2b71e, 735px 130px #d2b71e, 112px 1531px #d2b71e, 1312px 305px #d2b71e, 409px 1032px #d2b71e, 149px 1964px #d2b71e, 535px 1215px #d2b71e, 1382px 630px #d2b71e, 1437px 1368px #d2b71e, 362px 1181px #d2b71e, 388px 181px #d2b71e, 274px 1287px #d2b71e, 1858px 1414px #d2b71e, 661px 1935px #d2b71e, 675px 1205px #d2b71e, 1829px 1725px #d2b71e, 1937px 1145px #d2b71e, 237px 908px #d2b71e, 1059px 1185px #d2b71e, 824px 1248px #d2b71e, 1167px 1730px #d2b71e, 180px 1961px #d2b71e, 1663px 203px #d2b71e, 374px 221px #d2b71e, 724px 1883px #d2b71e, 970px 1362px #d2b71e, 832px 505px #d2b71e, 313px 233px #d2b71e, 1909px 597px #d2b71e, 434px 201px #d2b71e, 587px 995px #d2b71e, 1833px 623px #d2b71e, 1464px 561px #d2b71e, 231px 593px #d2b71e, 1558px 1433px #d2b71e, 1986px 1767px #d2b71e, 1753px 1728px #d2b71e, 1153px 1623px #d2b71e, 249px 229px #d2b71e, 1503px 1186px #d2b71e, 1784px 137px #d2b71e, 841px 403px #d2b71e, 1400px 354px #d2b71e, 197px 499px #d2b71e, 1188px 681px #d2b71e, 158px 391px #d2b71e, 443px 1099px #d2b71e, 723px 1445px #d2b71e, 1408px 1235px #d2b71e, 1908px 195px #d2b71e, 271px 891px #d2b71e, 469px 1693px #d2b71e, 580px 11px #d2b71e, 1533px 70px #d2b71e, 859px 761px #d2b71e, 1510px 1844px #d2b71e, 421px 558px #d2b71e, 1132px 1453px #d2b71e, 757px 1987px #d2b71e, 212px 293px #d2b71e, 569px 323px #d2b71e, 1404px 1394px #d2b71e, 252px 1386px #d2b71e, 1668px 1857px #d2b71e, 123px 1684px #d2b71e, 105px 490px #d2b71e, 1083px 1769px #d2b71e, 1071px 1953px #d2b71e, 1271px 1159px #d2b71e, 699px 1491px #d2b71e, 1744px 1997px #d2b71e, 1868px 1973px #d2b71e, 1438px 1449px #d2b71e, 1222px 1921px #d2b71e, 1328px 1210px #d2b71e, 438px 873px #d2b71e, 809px 780px #d2b71e, 491px 1524px #d2b71e, 447px 1830px #d2b71e, 927px 1936px #d2b71e, 564px 691px #d2b71e, 1784px 1747px #d2b71e, 1978px 1722px #d2b71e, 1599px 1480px #d2b71e, 1276px 729px #d2b71e, 731px 1174px #d2b71e, 1586px 1711px #d2b71e, 451px 1340px #d2b71e, 1075px 1899px #d2b71e, 13px 575px #d2b71e, 309px 1340px #d2b71e, 981px 183px #d2b71e, 248px 1315px #d2b71e, 849px 80px #d2b71e, 1754px 1540px #d2b71e, 73px 1432px #d2b71e, 1208px 1828px #d2b71e, 65px 575px #d2b71e, 1098px 730px #d2b71e, 127px 1358px #d2b71e, 185px 19px #d2b71e, 1222px 1679px #d2b71e, 1122px 315px #d2b71e, 1906px 452px #d2b71e, 761px 284px #d2b71e, 813px 492px #d2b71e, 1344px 843px #d2b71e, 118px 1834px #d2b71e, 1620px 359px #d2b71e, 1755px 1246px #d2b71e, 299px 1076px #d2b71e, 1746px 158px #d2b71e, 6px 1635px #d2b71e, 143px 190px #d2b71e, 101px 468px #d2b71e, 137px 971px #d2b71e, 1221px 1929px #d2b71e, 1752px 650px #d2b71e, 1635px 1761px #d2b71e, 1522px 833px #d2b71e, 908px 153px #d2b71e, 1044px 350px #d2b71e, 1151px 1940px #d2b71e, 822px 210px #d2b71e, 1774px 310px #d2b71e, 796px 1447px #d2b71e, 1069px 1903px #d2b71e, 217px 565px #d2b71e, 662px 1370px #d2b71e, 1876px 1570px #d2b71e, 847px 46px #d2b71e, 1042px 1689px #d2b71e, 1584px 1434px #d2b71e, 1791px 908px #d2b71e, 973px 908px #d2b71e, 793px 747px #d2b71e, 122px 483px #d2b71e, 1137px 1374px #d2b71e, 1757px 1791px #d2b71e, 513px 225px #d2b71e, 63px 731px #d2b71e, 1179px 1926px #d2b71e, 346px 18px #d2b71e, 589px 175px #d2b71e, 87px 302px #d2b71e, 380px 1295px #d2b71e, 450px 921px #d2b71e, 1667px 1973px #d2b71e, 1495px 1373px #d2b71e, 1462px 1850px #d2b71e, 540px 288px #d2b71e, 1208px 1051px #d2b71e, 1554px 1095px #d2b71e, 1009px 1516px #d2b71e, 181px 572px #d2b71e, 165px 387px #d2b71e, 549px 1835px #d2b71e, 960px 16px #d2b71e, 1360px 403px #d2b71e, 1251px 43px #d2b71e, 1905px 1813px #d2b71e, 1106px 866px #d2b71e, 1809px 277px #d2b71e, 1828px 1720px #d2b71e, 295px 1610px #d2b71e, 523px 166px #d2b71e, 1069px 692px #d2b71e, 1292px 217px #d2b71e, 11px 1721px #d2b71e, 99px 1045px #d2b71e, 51px 1584px #d2b71e, 1053px 266px #d2b71e, 1287px 1235px #d2b71e, 747px 1722px #d2b71e, 1542px 736px #d2b71e, 1256px 18px #d2b71e, 102px 609px #d2b71e, 586px 1339px #d2b71e, 1843px 1697px #d2b71e, 824px 1687px #d2b71e, 1124px 882px #d2b71e, 395px 501px #d2b71e, 1456px 672px #d2b71e, 1472px 1648px #d2b71e, 1326px 1164px #d2b71e, 777px 1672px #d2b71e, 81px 345px #d2b71e, 91px 386px #d2b71e, 243px 411px #d2b71e, 1560px 90px #d2b71e, 6px 1771px #d2b71e, 1601px 616px #d2b71e, 1220px 1808px #d2b71e, 1160px 836px #d2b71e, 246px 1777px #d2b71e, 456px 863px #d2b71e, 97px 1138px #d2b71e, 1811px 942px #d2b71e, 213px 414px #d2b71e, 891px 392px #d2b71e, 1044px 927px #d2b71e, 1856px 216px #d2b71e, 957px 347px #d2b71e, 1486px 406px #d2b71e, 838px 912px #d2b71e, 803px 361px #d2b71e, 564px 826px #d2b71e, 1597px 949px #d2b71e, 1206px 289px #d2b71e, 33px 1035px #d2b71e, 1762px 1377px #d2b71e, 789px 1815px #d2b71e, 1594px 1342px #d2b71e, 1668px 880px #d2b71e, 1539px 1581px #d2b71e, 1547px 53px #d2b71e, 861px 1433px #d2b71e, 693px 1618px #d2b71e, 1762px 782px #d2b71e, 1568px 682px #d2b71e, 1126px 1762px #d2b71e, 1242px 134px #d2b71e, 495px 959px #d2b71e, 1606px 219px #d2b71e, 1878px 1415px #d2b71e, 1652px 797px #d2b71e, 782px 1903px #d2b71e, 1774px 1133px #d2b71e, 1430px 408px #d2b71e, 265px 394px #d2b71e, 890px 336px #d2b71e, 1051px 311px #d2b71e, 461px 1559px #d2b71e, 1931px 91px #d2b71e, 1160px 380px #d2b71e, 1442px 1058px #d2b71e, 1157px 364px #d2b71e, 586px 227px #d2b71e, 1365px 715px #d2b71e, 1658px 1655px #d2b71e, 1923px 1664px #d2b71e, 1023px 1844px #d2b71e, 1939px 1367px #d2b71e, 1203px 1305px #d2b71e, 359px 642px #d2b71e, 1056px 425px #d2b71e, 787px 202px #d2b71e, 1609px 1850px #d2b71e, 1964px 200px #d2b71e, 1537px 586px #d2b71e, 1589px 903px #d2b71e, 1063px 1694px #d2b71e, 760px 1185px #d2b71e, 597px 1396px #d2b71e, 294px 452px #d2b71e, 433px 818px #d2b71e, 199px 840px #d2b71e, 1332px 1937px #d2b71e, 169px 1907px #d2b71e, 591px 834px #d2b71e, 1716px 1032px #d2b71e, 45px 1879px #d2b71e, 686px 1469px #d2b71e, 1520px 475px #d2b71e, 1122px 859px #d2b71e, 973px 1541px #d2b71e, 269px 477px #d2b71e, 1390px 716px #d2b71e, 1791px 783px #d2b71e, 824px 2000px #d2b71e, 1211px 1717px #d2b71e, 1008px 1587px #d2b71e, 1422px 204px #d2b71e, 234px 556px #d2b71e, 506px 550px #d2b71e, 942px 1670px #d2b71e, 397px 853px #d2b71e, 599px 795px #d2b71e, 762px 1926px #d2b71e, 1202px 1424px #d2b71e, 135px 1316px #d2b71e, 1442px 1692px #d2b71e, 977px 652px #d2b71e, 564px 1648px #d2b71e, 997px 1474px #d2b71e, 67px 1366px #d2b71e, 1860px 1451px #d2b71e, 1105px 772px #d2b71e, 1886px 1396px #d2b71e, 1510px 658px #d2b71e, 976px 1544px #d2b71e, 894px 543px #d2b71e, 1098px 1189px #d2b71e, 690px 77px #d2b71e, 770px 733px #d2b71e, 557px 1403px #d2b71e, 1758px 1623px #d2b71e, 1341px 812px #d2b71e, 699px 967px #d2b71e, 277px 866px #d2b71e, 1526px 1828px #d2b71e, 8px 977px #d2b71e, 1707px 952px #d2b71e, 12px 1900px #d2b71e, 72px 921px #d2b71e, 496px 1067px #d2b71e, 1288px 1749px #d2b71e, 273px 984px #d2b71e, 1197px 1991px #d2b71e, 242px 789px #d2b71e, 903px 1035px #d2b71e, 480px 1492px #d2b71e, 102px 1331px #d2b71e, 738px 1343px #d2b71e, 560px 1475px #d2b71e, 367px 846px #d2b71e, 1420px 962px #d2b71e, 1976px 892px #d2b71e, 1911px 1763px #d2b71e, 1639px 1002px #d2b71e, 437px 1522px #d2b71e, 1906px 1025px #d2b71e, 730px 1364px #d2b71e, 1127px 521px #d2b71e, 1401px 1792px #d2b71e, 1954px 1066px #d2b71e, 232px 250px #d2b71e, 1685px 660px #d2b71e, 1011px 999px #d2b71e, 1970px 790px #d2b71e, 750px 499px #d2b71e, 1738px 660px #d2b71e, 1621px 1849px #d2b71e, 446px 52px #d2b71e, 1055px 1396px #d2b71e, 1165px 1497px #d2b71e, 1740px 1425px #d2b71e, 1012px 1920px #d2b71e, 1258px 1560px #d2b71e, 1020px 1152px #d2b71e, 362px 673px #d2b71e, 1065px 975px #d2b71e, 582px 755px #d2b71e, 1271px 1479px #d2b71e, 719px 548px #d2b71e, 1602px 879px #d2b71e, 590px 499px #d2b71e, 721px 1412px #d2b71e, 1180px 113px #d2b71e, 1801px 1961px #d2b71e, 589px 941px #d2b71e, 883px 476px #d2b71e, 214px 890px #d2b71e, 1028px 892px #d2b71e, 1107px 1832px #d2b71e, 944px 361px #d2b71e, 480px 1453px #d2b71e, 1466px 683px #d2b71e, 981px 745px #d2b71e, 1968px 828px #d2b71e, 657px 1830px #d2b71e, 11px 1338px #d2b71e, 179px 730px #d2b71e, 1713px 197px #d2b71e, 51px 955px #d2b71e, 1243px 319px #d2b71e, 1175px 624px #d2b71e, 446px 46px #d2b71e, 5px 1158px #d2b71e, 82px 1352px #d2b71e, 1877px 402px #d2b71e, 708px 1778px #d2b71e, 903px 1625px #d2b71e, 1824px 352px #d2b71e, 1229px 140px #d2b71e, 1518px 24px #d2b71e, 1017px 512px #d2b71e, 515px 699px #d2b71e, 295px 265px #d2b71e, 69px 1773px #d2b71e, 1640px 1163px #d2b71e, 536px 342px #d2b71e, 970px 1766px #d2b71e, 560px 1416px #d2b71e, 577px 193px #d2b71e, 469px 9px #d2b71e, 466px 276px #d2b71e, 711px 853px #d2b71e, 401px 685px #d2b71e, 85px 506px #d2b71e, 865px 558px #d2b71e, 631px 105px #d2b71e, 887px 866px #d2b71e, 1704px 1001px #d2b71e, 1051px 1199px #d2b71e, 275px 1909px #d2b71e, 1462px 829px #d2b71e, 375px 1057px #d2b71e, 1531px 1501px #d2b71e, 205px 403px #d2b71e, 33px 1869px #d2b71e, 967px 1176px #d2b71e, 376px 863px #d2b71e, 1769px 1545px #d2b71e, 535px 51px #d2b71e, 1972px 1569px #d2b71e, 1773px 960px #d2b71e, 487px 620px #d2b71e, 1660px 687px #d2b71e, 1632px 972px #d2b71e, 1362px 42px #d2b71e, 479px 1655px #d2b71e, 1531px 1808px #d2b71e, 1450px 1412px #d2b71e, 1549px 170px #d2b71e, 1904px 1305px #d2b71e, 1209px 48px #d2b71e, 1933px 820px #d2b71e, 1623px 595px #d2b71e, 48px 643px #d2b71e, 179px 1754px #d2b71e, 589px 1032px #d2b71e, 1199px 356px #d2b71e, 1755px 1418px #d2b71e, 780px 1174px #d2b71e, 1905px 758px #d2b71e, 1567px 713px #d2b71e, 1372px 705px #d2b71e, 456px 654px #d2b71e, 759px 690px #d2b71e, 452px 673px #d2b71e, 993px 1610px #d2b71e, 1271px 188px #d2b71e, 343px 1750px #d2b71e, 1943px 1735px #d2b71e, 1717px 853px #d2b71e, 1247px 303px #d2b71e, 1314px 1895px #d2b71e, 1203px 489px #d2b71e, 741px 469px #d2b71e, 4px 246px #d2b71e, 1515px 115px #d2b71e, 606px 218px #d2b71e, 1966px 1471px #d2b71e, 177px 87px #d2b71e, 1575px 588px #d2b71e, 1136px 1386px #d2b71e, 70px 1868px #d2b71e, 1053px 18px #d2b71e, 1124px 721px #d2b71e, 1748px 1181px #d2b71e, 191px 1387px #d2b71e, 1931px 840px #d2b71e, 1088px 1603px #d2b71e, 634px 1255px #d2b71e, 814px 1434px #d2b71e, 585px 64px #d2b71e, 1074px 1618px #d2b71e, 1692px 761px #d2b71e, 651px 643px #d2b71e, 193px 335px #d2b71e, 1103px 1447px #d2b71e, 491px 1142px #d2b71e, 521px 408px #d2b71e, 536px 340px #d2b71e, 411px 1091px #d2b71e, 1646px 193px #d2b71e, 1595px 1285px #d2b71e, 870px 1349px #d2b71e, 1085px 1013px #d2b71e, 204px 1864px #d2b71e, 1359px 299px #d2b71e, 807px 964px #d2b71e, 219px 509px #d2b71e, 36px 1227px #d2b71e, 702px 1873px #d2b71e, 1471px 934px #d2b71e, 1763px 792px #d2b71e, 973px 1957px #d2b71e, 987px 68px #d2b71e, 593px 1282px #d2b71e, 1900px 607px #d2b71e, 407px 1659px #d2b71e, 587px 17px #d2b71e, 632px 158px #d2b71e;
    -webkit-animation: animStar 600s linear infinite;
    -moz-animation: animStar 600s linear infinite;
    -ms-animation: animStar 600s linear infinite;
    animation: animStar 600s linear infinite;
}

#stars4:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    border-radius: 30px;
    box-shadow: 233px 1976px #d2b71e, 1196px 1119px #d2b71e, 646px 740px #d2b71e, 335px 645px #d2b71e, 1119px 1452px #d2b71e, 176px 1870px #d2b71e, 639px 1711px #d2b71e, 647px 1388px #d2b71e, 1516px 1108px #d2b71e, 464px 66px #d2b71e, 331px 344px #d2b71e, 772px 1189px #d2b71e, 1516px 1850px #d2b71e, 1500px 1463px #d2b71e, 1275px 876px #d2b71e, 1107px 645px #d2b71e, 977px 478px #d2b71e, 583px 1179px #d2b71e, 284px 395px #d2b71e, 1220px 461px #d2b71e, 1160px 249px #d2b71e, 196px 865px #d2b71e, 670px 1915px #d2b71e, 1449px 382px #d2b71e, 1191px 546px #d2b71e, 1329px 605px #d2b71e, 1945px 458px #d2b71e, 995px 749px #d2b71e, 1495px 861px #d2b71e, 708px 1731px #d2b71e, 348px 653px #d2b71e, 548px 1298px #d2b71e, 1606px 990px #d2b71e, 1049px 1204px #d2b71e, 253px 1501px #d2b71e, 1154px 166px #d2b71e, 1087px 104px #d2b71e, 1034px 1161px #d2b71e, 1681px 462px #d2b71e, 577px 1897px #d2b71e, 193px 1901px #d2b71e, 1701px 1755px #d2b71e, 864px 1297px #d2b71e, 800px 1289px #d2b71e, 676px 28px #d2b71e, 185px 1341px #d2b71e, 379px 1151px #d2b71e, 1224px 1725px #d2b71e, 280px 541px #d2b71e, 473px 1196px #d2b71e, 921px 1628px #d2b71e, 969px 432px #d2b71e, 1475px 758px #d2b71e, 1195px 993px #d2b71e, 876px 1840px #d2b71e, 1274px 1689px #d2b71e, 1977px 1101px #d2b71e, 837px 527px #d2b71e, 1785px 1610px #d2b71e, 1650px 1843px #d2b71e, 1127px 1508px #d2b71e, 401px 1050px #d2b71e, 51px 1105px #d2b71e, 545px 880px #d2b71e, 1786px 1672px #d2b71e, 318px 260px #d2b71e, 568px 254px #d2b71e, 1026px 1527px #d2b71e, 1242px 852px #d2b71e, 1785px 982px #d2b71e, 1318px 1071px #d2b71e, 398px 1061px #d2b71e, 1509px 257px #d2b71e, 599px 928px #d2b71e, 1195px 1800px #d2b71e, 1254px 906px #d2b71e, 141px 26px #d2b71e, 1384px 1502px #d2b71e, 476px 767px #d2b71e, 1973px 722px #d2b71e, 1339px 1031px #d2b71e, 778px 818px #d2b71e, 213px 1320px #d2b71e, 184px 221px #d2b71e, 983px 1911px #d2b71e, 923px 1439px #d2b71e, 1936px 581px #d2b71e, 1105px 625px #d2b71e, 325px 729px #d2b71e, 1475px 204px #d2b71e, 1483px 1564px #d2b71e, 1327px 1272px #d2b71e, 1187px 1944px #d2b71e, 1945px 1471px #d2b71e, 116px 960px #d2b71e, 1660px 1610px #d2b71e, 412px 1022px #d2b71e, 1552px 1516px #d2b71e, 1517px 1892px #d2b71e, 306px 829px #d2b71e, 1416px 462px #d2b71e, 1575px 1460px #d2b71e, 424px 1500px #d2b71e, 1530px 1169px #d2b71e, 1388px 1608px #d2b71e, 185px 416px #d2b71e, 634px 1446px #d2b71e, 767px 479px #d2b71e, 71px 426px #d2b71e, 1937px 145px #d2b71e, 1955px 1312px #d2b71e, 1811px 611px #d2b71e, 1145px 569px #d2b71e, 1460px 676px #d2b71e, 131px 1858px #d2b71e, 1557px 473px #d2b71e, 735px 130px #d2b71e, 112px 1531px #d2b71e, 1312px 305px #d2b71e, 409px 1032px #d2b71e, 149px 1964px #d2b71e, 535px 1215px #d2b71e, 1382px 630px #d2b71e, 1437px 1368px #d2b71e, 362px 1181px #d2b71e, 388px 181px #d2b71e, 274px 1287px #d2b71e, 1858px 1414px #d2b71e, 661px 1935px #d2b71e, 675px 1205px #d2b71e, 1829px 1725px #d2b71e, 1937px 1145px #d2b71e, 237px 908px #d2b71e, 1059px 1185px #d2b71e, 824px 1248px #d2b71e, 1167px 1730px #d2b71e, 180px 1961px #d2b71e, 1663px 203px #d2b71e, 374px 221px #d2b71e, 724px 1883px #d2b71e, 970px 1362px #d2b71e, 832px 505px #d2b71e, 313px 233px #d2b71e, 1909px 597px #d2b71e, 434px 201px #d2b71e, 587px 995px #d2b71e, 1833px 623px #d2b71e, 1464px 561px #d2b71e, 231px 593px #d2b71e, 1558px 1433px #d2b71e, 1986px 1767px #d2b71e, 1753px 1728px #d2b71e, 1153px 1623px #d2b71e, 249px 229px #d2b71e, 1503px 1186px #d2b71e, 1784px 137px #d2b71e, 841px 403px #d2b71e, 1400px 354px #d2b71e, 197px 499px #d2b71e, 1188px 681px #d2b71e, 158px 391px #d2b71e, 443px 1099px #d2b71e, 723px 1445px #d2b71e, 1408px 1235px #d2b71e, 1908px 195px #d2b71e, 271px 891px #d2b71e, 469px 1693px #d2b71e, 580px 11px #d2b71e, 1533px 70px #d2b71e, 859px 761px #d2b71e, 1510px 1844px #d2b71e, 421px 558px #d2b71e, 1132px 1453px #d2b71e, 757px 1987px #d2b71e, 212px 293px #d2b71e, 569px 323px #d2b71e, 1404px 1394px #d2b71e, 252px 1386px #d2b71e, 1668px 1857px #d2b71e, 123px 1684px #d2b71e, 105px 490px #d2b71e, 1083px 1769px #d2b71e, 1071px 1953px #d2b71e, 1271px 1159px #d2b71e, 699px 1491px #d2b71e, 1744px 1997px #d2b71e, 1868px 1973px #d2b71e, 1438px 1449px #d2b71e, 1222px 1921px #d2b71e, 1328px 1210px #d2b71e, 438px 873px #d2b71e, 809px 780px #d2b71e, 491px 1524px #d2b71e, 447px 1830px #d2b71e, 927px 1936px #d2b71e, 564px 691px #d2b71e, 1784px 1747px #d2b71e, 1978px 1722px #d2b71e, 1599px 1480px #d2b71e, 1276px 729px #d2b71e, 731px 1174px #d2b71e, 1586px 1711px #d2b71e, 451px 1340px #d2b71e, 1075px 1899px #d2b71e, 13px 575px #d2b71e, 309px 1340px #d2b71e, 981px 183px #d2b71e, 248px 1315px #d2b71e, 849px 80px #d2b71e, 1754px 1540px #d2b71e, 73px 1432px #d2b71e, 1208px 1828px #d2b71e, 65px 575px #d2b71e, 1098px 730px #d2b71e, 127px 1358px #d2b71e, 185px 19px #d2b71e, 1222px 1679px #d2b71e, 1122px 315px #d2b71e, 1906px 452px #d2b71e, 761px 284px #d2b71e, 813px 492px #d2b71e, 1344px 843px #d2b71e, 118px 1834px #d2b71e, 1620px 359px #d2b71e, 1755px 1246px #d2b71e, 299px 1076px #d2b71e, 1746px 158px #d2b71e, 6px 1635px #d2b71e, 143px 190px #d2b71e, 101px 468px #d2b71e, 137px 971px #d2b71e, 1221px 1929px #d2b71e, 1752px 650px #d2b71e, 1635px 1761px #d2b71e, 1522px 833px #d2b71e, 908px 153px #d2b71e, 1044px 350px #d2b71e, 1151px 1940px #d2b71e, 822px 210px #d2b71e, 1774px 310px #d2b71e, 796px 1447px #d2b71e, 1069px 1903px #d2b71e, 217px 565px #d2b71e, 662px 1370px #d2b71e, 1876px 1570px #d2b71e, 847px 46px #d2b71e, 1042px 1689px #d2b71e, 1584px 1434px #d2b71e, 1791px 908px #d2b71e, 973px 908px #d2b71e, 793px 747px #d2b71e, 122px 483px #d2b71e, 1137px 1374px #d2b71e, 1757px 1791px #d2b71e, 513px 225px #d2b71e, 63px 731px #d2b71e, 1179px 1926px #d2b71e, 346px 18px #d2b71e, 589px 175px #d2b71e, 87px 302px #d2b71e, 380px 1295px #d2b71e, 450px 921px #d2b71e, 1667px 1973px #d2b71e, 1495px 1373px #d2b71e, 1462px 1850px #d2b71e, 540px 288px #d2b71e, 1208px 1051px #d2b71e, 1554px 1095px #d2b71e, 1009px 1516px #d2b71e, 181px 572px #d2b71e, 165px 387px #d2b71e, 549px 1835px #d2b71e, 960px 16px #d2b71e, 1360px 403px #d2b71e, 1251px 43px #d2b71e, 1905px 1813px #d2b71e, 1106px 866px #d2b71e, 1809px 277px #d2b71e, 1828px 1720px #d2b71e, 295px 1610px #d2b71e, 523px 166px #d2b71e, 1069px 692px #d2b71e, 1292px 217px #d2b71e, 11px 1721px #d2b71e, 99px 1045px #d2b71e, 51px 1584px #d2b71e, 1053px 266px #d2b71e, 1287px 1235px #d2b71e, 747px 1722px #d2b71e, 1542px 736px #d2b71e, 1256px 18px #d2b71e, 102px 609px #d2b71e, 586px 1339px #d2b71e, 1843px 1697px #d2b71e, 824px 1687px #d2b71e, 1124px 882px #d2b71e, 395px 501px #d2b71e, 1456px 672px #d2b71e, 1472px 1648px #d2b71e, 1326px 1164px #d2b71e, 777px 1672px #d2b71e, 81px 345px #d2b71e, 91px 386px #d2b71e, 243px 411px #d2b71e, 1560px 90px #d2b71e, 6px 1771px #d2b71e, 1601px 616px #d2b71e, 1220px 1808px #d2b71e, 1160px 836px #d2b71e, 246px 1777px #d2b71e, 456px 863px #d2b71e, 97px 1138px #d2b71e, 1811px 942px #d2b71e, 213px 414px #d2b71e, 891px 392px #d2b71e, 1044px 927px #d2b71e, 1856px 216px #d2b71e, 957px 347px #d2b71e, 1486px 406px #d2b71e, 838px 912px #d2b71e, 803px 361px #d2b71e, 564px 826px #d2b71e, 1597px 949px #d2b71e, 1206px 289px #d2b71e, 33px 1035px #d2b71e, 1762px 1377px #d2b71e, 789px 1815px #d2b71e, 1594px 1342px #d2b71e, 1668px 880px #d2b71e, 1539px 1581px #d2b71e, 1547px 53px #d2b71e, 861px 1433px #d2b71e, 693px 1618px #d2b71e, 1762px 782px #d2b71e, 1568px 682px #d2b71e, 1126px 1762px #d2b71e, 1242px 134px #d2b71e, 495px 959px #d2b71e, 1606px 219px #d2b71e, 1878px 1415px #d2b71e, 1652px 797px #d2b71e, 782px 1903px #d2b71e, 1774px 1133px #d2b71e, 1430px 408px #d2b71e, 265px 394px #d2b71e, 890px 336px #d2b71e, 1051px 311px #d2b71e, 461px 1559px #d2b71e, 1931px 91px #d2b71e, 1160px 380px #d2b71e, 1442px 1058px #d2b71e, 1157px 364px #d2b71e, 586px 227px #d2b71e, 1365px 715px #d2b71e, 1658px 1655px #d2b71e, 1923px 1664px #d2b71e, 1023px 1844px #d2b71e, 1939px 1367px #d2b71e, 1203px 1305px #d2b71e, 359px 642px #d2b71e, 1056px 425px #d2b71e, 787px 202px #d2b71e, 1609px 1850px #d2b71e, 1964px 200px #d2b71e, 1537px 586px #d2b71e, 1589px 903px #d2b71e, 1063px 1694px #d2b71e, 760px 1185px #d2b71e, 597px 1396px #d2b71e, 294px 452px #d2b71e, 433px 818px #d2b71e, 199px 840px #d2b71e, 1332px 1937px #d2b71e, 169px 1907px #d2b71e, 591px 834px #d2b71e, 1716px 1032px #d2b71e, 45px 1879px #d2b71e, 686px 1469px #d2b71e, 1520px 475px #d2b71e, 1122px 859px #d2b71e, 973px 1541px #d2b71e, 269px 477px #d2b71e, 1390px 716px #d2b71e, 1791px 783px #d2b71e, 824px 2000px #d2b71e, 1211px 1717px #d2b71e, 1008px 1587px #d2b71e, 1422px 204px #d2b71e, 234px 556px #d2b71e, 506px 550px #d2b71e, 942px 1670px #d2b71e, 397px 853px #d2b71e, 599px 795px #d2b71e, 762px 1926px #d2b71e, 1202px 1424px #d2b71e, 135px 1316px #d2b71e, 1442px 1692px #d2b71e, 977px 652px #d2b71e, 564px 1648px #d2b71e, 997px 1474px #d2b71e, 67px 1366px #d2b71e, 1860px 1451px #d2b71e, 1105px 772px #d2b71e, 1886px 1396px #d2b71e, 1510px 658px #d2b71e, 976px 1544px #d2b71e, 894px 543px #d2b71e, 1098px 1189px #d2b71e, 690px 77px #d2b71e, 770px 733px #d2b71e, 557px 1403px #d2b71e, 1758px 1623px #d2b71e, 1341px 812px #d2b71e, 699px 967px #d2b71e, 277px 866px #d2b71e, 1526px 1828px #d2b71e, 8px 977px #d2b71e, 1707px 952px #d2b71e, 12px 1900px #d2b71e, 72px 921px #d2b71e, 496px 1067px #d2b71e, 1288px 1749px #d2b71e, 273px 984px #d2b71e, 1197px 1991px #d2b71e, 242px 789px #d2b71e, 903px 1035px #d2b71e, 480px 1492px #d2b71e, 102px 1331px #d2b71e, 738px 1343px #d2b71e, 560px 1475px #d2b71e, 367px 846px #d2b71e, 1420px 962px #d2b71e, 1976px 892px #d2b71e, 1911px 1763px #d2b71e, 1639px 1002px #d2b71e, 437px 1522px #d2b71e, 1906px 1025px #d2b71e, 730px 1364px #d2b71e, 1127px 521px #d2b71e, 1401px 1792px #d2b71e, 1954px 1066px #d2b71e, 232px 250px #d2b71e, 1685px 660px #d2b71e, 1011px 999px #d2b71e, 1970px 790px #d2b71e, 750px 499px #d2b71e, 1738px 660px #d2b71e, 1621px 1849px #d2b71e, 446px 52px #d2b71e, 1055px 1396px #d2b71e, 1165px 1497px #d2b71e, 1740px 1425px #d2b71e, 1012px 1920px #d2b71e, 1258px 1560px #d2b71e, 1020px 1152px #d2b71e, 362px 673px #d2b71e, 1065px 975px #d2b71e, 582px 755px #d2b71e, 1271px 1479px #d2b71e, 719px 548px #d2b71e, 1602px 879px #d2b71e, 590px 499px #d2b71e, 721px 1412px #d2b71e, 1180px 113px #d2b71e, 1801px 1961px #d2b71e, 589px 941px #d2b71e, 883px 476px #d2b71e, 214px 890px #d2b71e, 1028px 892px #d2b71e, 1107px 1832px #d2b71e, 944px 361px #d2b71e, 480px 1453px #d2b71e, 1466px 683px #d2b71e, 981px 745px #d2b71e, 1968px 828px #d2b71e, 657px 1830px #d2b71e, 11px 1338px #d2b71e, 179px 730px #d2b71e, 1713px 197px #d2b71e, 51px 955px #d2b71e, 1243px 319px #d2b71e, 1175px 624px #d2b71e, 446px 46px #d2b71e, 5px 1158px #d2b71e, 82px 1352px #d2b71e, 1877px 402px #d2b71e, 708px 1778px #d2b71e, 903px 1625px #d2b71e, 1824px 352px #d2b71e, 1229px 140px #d2b71e, 1518px 24px #d2b71e, 1017px 512px #d2b71e, 515px 699px #d2b71e, 295px 265px #d2b71e, 69px 1773px #d2b71e, 1640px 1163px #d2b71e, 536px 342px #d2b71e, 970px 1766px #d2b71e, 560px 1416px #d2b71e, 577px 193px #d2b71e, 469px 9px #d2b71e, 466px 276px #d2b71e, 711px 853px #d2b71e, 401px 685px #d2b71e, 85px 506px #d2b71e, 865px 558px #d2b71e, 631px 105px #d2b71e, 887px 866px #d2b71e, 1704px 1001px #d2b71e, 1051px 1199px #d2b71e, 275px 1909px #d2b71e, 1462px 829px #d2b71e, 375px 1057px #d2b71e, 1531px 1501px #d2b71e, 205px 403px #d2b71e, 33px 1869px #d2b71e, 967px 1176px #d2b71e, 376px 863px #d2b71e, 1769px 1545px #d2b71e, 535px 51px #d2b71e, 1972px 1569px #d2b71e, 1773px 960px #d2b71e, 487px 620px #d2b71e, 1660px 687px #d2b71e, 1632px 972px #d2b71e, 1362px 42px #d2b71e, 479px 1655px #d2b71e, 1531px 1808px #d2b71e, 1450px 1412px #d2b71e, 1549px 170px #d2b71e, 1904px 1305px #d2b71e, 1209px 48px #d2b71e, 1933px 820px #d2b71e, 1623px 595px #d2b71e, 48px 643px #d2b71e, 179px 1754px #d2b71e, 589px 1032px #d2b71e, 1199px 356px #d2b71e, 1755px 1418px #d2b71e, 780px 1174px #d2b71e, 1905px 758px #d2b71e, 1567px 713px #d2b71e, 1372px 705px #d2b71e, 456px 654px #d2b71e, 759px 690px #d2b71e, 452px 673px #d2b71e, 993px 1610px #d2b71e, 1271px 188px #d2b71e, 343px 1750px #d2b71e, 1943px 1735px #d2b71e, 1717px 853px #d2b71e, 1247px 303px #d2b71e, 1314px 1895px #d2b71e, 1203px 489px #d2b71e, 741px 469px #d2b71e, 4px 246px #d2b71e, 1515px 115px #d2b71e, 606px 218px #d2b71e, 1966px 1471px #d2b71e, 177px 87px #d2b71e, 1575px 588px #d2b71e, 1136px 1386px #d2b71e, 70px 1868px #d2b71e, 1053px 18px #d2b71e, 1124px 721px #d2b71e, 1748px 1181px #d2b71e, 191px 1387px #d2b71e, 1931px 840px #d2b71e, 1088px 1603px #d2b71e, 634px 1255px #d2b71e, 814px 1434px #d2b71e, 585px 64px #d2b71e, 1074px 1618px #d2b71e, 1692px 761px #d2b71e, 651px 643px #d2b71e, 193px 335px #d2b71e, 1103px 1447px #d2b71e, 491px 1142px #d2b71e, 521px 408px #d2b71e, 536px 340px #d2b71e, 411px 1091px #d2b71e, 1646px 193px #d2b71e, 1595px 1285px #d2b71e, 870px 1349px #d2b71e, 1085px 1013px #d2b71e, 204px 1864px #d2b71e, 1359px 299px #d2b71e, 807px 964px #d2b71e, 219px 509px #d2b71e, 36px 1227px #d2b71e, 702px 1873px #d2b71e, 1471px 934px #d2b71e, 1763px 792px #d2b71e, 973px 1957px #d2b71e, 987px 68px #d2b71e, 593px 1282px #d2b71e, 1900px 607px #d2b71e, 407px 1659px #d2b71e, 587px 17px #d2b71e, 632px 158px #d2b71e;
}

@-webkit-keyframes animStar {
    from {
        -webkit-transform: translateY(0px);
    }
    to {
        -webkit-transform: translateY(-2000px);
    }
}

@-moz-keyframes animStar {
    from {
        -moz-transform: translateY(0px);
    }
    to {
        -moz-transform: translateY(-2000px);
    }
}

@-ms-keyframes animStar {
    from {
        -ms-transform: translateY(0px);
    }
    to {
        -ms-transform: translateY(-2000px);
    }
}

@keyframes animStar {
    from {
        transform: translateY(0px);
        opacity: 1;
    }
    to {
        transform: translateY(-2000px);
        opacity: 0;
    }
}
</style>
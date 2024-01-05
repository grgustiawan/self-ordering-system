<template>
    <div class="under-wrapper" style="padding-top: 30px;padding-bottom: 30px;">
        <div v-show="bill.nobill !== ''" class="position-relative" style="width: 90%;margin: 0 auto">
            <button class="ms-download" @click="exportToPDF">
                <a class="ms-button" download><span>PDF</span><span>PDF</span></a>
            </button>
        </div>
        <div id="invoice-POS" style="background-color: #fff">
            <div id="top" style="width: 100%;display: flex;flex-direction: row;">
                <div class="logo" style="padding: 5px">
                    <img style="width: 100px" src="/assets/images/logo/logo_bg.png" alt="">
                </div>
                <div class="info"> 
                    <h1 class="mt-2">{{ bill.company_name }}</h1>
                    <p style="font-size: 10pt;margin-top: 2px"> 
                        {{ bill.company_address }}<br>
                        {{ bill.company_address2 }}<br>
                    <strong>{{ bill.company_email }}</strong><br>
                    <strong>{{ bill.company_phone }}</strong><br>
                    </p>
                </div>
            </div>
        
            <div class="text-start row" style="width: 100%;margin: 0;">
                <table style="border: none">
                    <tr v-show="bill.nobill !== ''">
                        <td style="padding-left: 10px">No Bill</td>
                        <td>:</td>
                        <td><strong>{{ bill.nobill }}</strong></td>
                    </tr>
                    <tr>
                        <td style="padding-left: 10px">Date</td>
                        <td>:</td>
                        <td><strong>{{ bill.tanggal }}</strong></td>
                    </tr>
                    <tr>
                        <td style="padding-left: 10px">Table</td>
                        <td>:</td>
                        <td><strong>{{ bill.meja }}</strong>  <strong v-show="bill.nobill === ''">{{ bill.pesanan }}</strong></td>
                    </tr>
                </table>
            </div>
            
            <div id="bot">
                <div id="table">
                    <table>
                        <tr class="tabletitle">
                            <td class="item"><h2>Item</h2></td>
                            <td class="Hours"><h2>Qty</h2></td>
                            <td class="Rate"><h2>Sub Total</h2></td>
                        </tr>

                        <tr class="service" v-for="itms in  bill.item" :key="itms.nourut">
                            <td class="tableitem itemtitle" style="padding-left: 10px" v-if="itms.type !== 'D'">
                                <p class="itemtext text-start">{{ itms.nama }}</p>
                            </td>
                            <td class="tableitem" v-if="itms.type !== 'D'">
                                <p class="itemtext">{{ itms.quantity }}</p>
                            </td>
                            <td class="tableitem" v-if="itms.harga > 0 && itms.type !== 'D'">
                                <p class="itemtext">Rp. {{ formatPrice(itms.harga) }}</p>
                            </td>
                        </tr>    
                        
                        <tr class="service" style="border-top: 2px solid #707070;" >
                            <td class="tableitem itemtitle">Quantity Order</td>
                            <td class="tableitem"><p class="itemtext" style="margin-top: -1px;">{{ bill.qcount }}</p></td>
                        </tr> 

                        <!-- Payment Detail -->
                        <tr class="tabletitle">
                            <td colspan="2" style="padding-left: 90px;padding-top: 10px;" class="Rate text-start" :class="{'text-success' : bill.nobill !== '', 'text-danger' : bill.nobill === ''}"><h2>Total</h2></td>
                            <td class="payment text-end" style="padding-top: 10px;"><h2 style="padding-right: 10px;">{{ formatPrice(bill.total) }}</h2></td>
                        </tr>

                        <tr class="tabletitle">
                            <td colspan="2" style="padding-left: 90px;" class="Rate text-start" :class="{'text-success' : bill.nobill !== '', 'text-danger' : bill.nobill === ''}"><h2>Tax</h2></td>
                            <td class="payment text-end"><h2 style="padding-right: 10px;">{{ formatPrice(bill.tax) }}</h2></td>
                        </tr>

                        <tr class="tabletitle">
                            <td colspan="2" style="padding-left: 90px;" class="Rate text-start" :class="{'text-success' : bill.nobill !== '', 'text-danger' : bill.nobill === ''}"><h2>Discount</h2></td>
                            <td class="payment text-end"><h2 style="padding-right: 10px;">{{ formatPrice(bill.discount) }}</h2></td>
                        </tr>

                        <tr class="tabletitle">
                            <td colspan="2" style="padding-left: 90px;padding-bottom: 10px;" class="Rate text-start" :class="{'text-success' : bill.nobill !== '', 'text-danger' : bill.nobill === ''}">
                                <h2>Grand Total</h2>
                            </td>
                            <td class="payment text-end" style="padding-bottom: 10px;"><h2 style="padding-right: 10px;">{{ formatPrice(bill.grand) }}</h2></td>
                        </tr>

                    </table>
                    <div v-show="bill.nobill !== ''" style="position: relative;">
                        <img class="paidstamp" src="/assets/images/icons/paid.png" alt="paidstamp">
                    </div>
                </div>

                <div id="legalcopy" style="display: flex;flex-direction: column;justify-content: center;">
                    <vue-barcode style="position: relative;width: 250px;left: 50%;-webkit-transform: translateX(-50%); transform: translateX(-50%);" v-if="bill.nobill !== ''" :value="bill.nobill" :options="{ displayValue: false }"></vue-barcode>
                    <p class="legal" style="font-size: 11pt;text-align: center;">
                        <strong v-show="bill.nobill !== ''" style="font-size: 13pt;">Thank You For Dinning With Us!</strong>
                        <strong v-show="bill.nobill === ''" style="font-size: 13pt;">Waiting For Payment</strong><br>
                        <span v-show="bill.nobill === ''">Payment is expected within 31 minutes, please process this invoice within that time. The payment is made at the cashier.</span>
                        <span v-show="bill.nobill !== ''">Please comeback again</span>
                    </p>
                </div>
                <h1 v-if="bill.nobill === ''" class="mt-2 text-danger text-center">NOT PAID</h1><br>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import html2pdf from "html2pdf.js";
import VueBarcode from '@chenfengyuan/vue-barcode';
export default {
    name: 'BillView',
    components: {
        VueBarcode,
    },
    data(){
        return {
            isPaid: 'false',
            servers: '',
            bill: {},
            nobill: '',
        }
    },
    mounted(){
        const decode = atob(this.$route.query.scr);
        const arrData = decode.split(";");
        this.servers = 'https://' + arrData[0] + '/api/web';

        setInterval(() => {
            if(this.nobill === '') this.getBill();
        }, 1000);
    },
    methods: {
        exportToPDF() {
            html2pdf(document.getElementById("invoice-POS"), {
                margin: 1,
                filename: "invoice" + this.nobill + ".pdf",
            });
        },
        async getBill(){
            try {
                let { data } = await axios.get(this.servers + '/bill/' + this.$route.query.scr)
                this.bill = data;
                this.nobill = data.nobill;
                console.log(this.bill);
            } catch(e){ 
                console.log(e)
                // window.location.href = "/"
            }
        },
        formatPrice(value) {
          let val = (value/1).toFixed(0).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
    }
}
</script>

<style lang="scss">
#invoice-POS{
  box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin: 0 auto;
  width: 90%;
  background: #FFF;
  border: 1px solid #603939;
  margin-bottom: 30px;
  
::selection {background: #f31544; color: #FFF;}
::moz-selection {background: #f31544; color: #FFF;}
h1{
  font-size: 14pt;
  color: #222;
}
h2{font-size: .9em;}
h3{
  font-size: 1.2em;
  font-weight: 300;
  line-height: 2em;
}
p{
  font-size: .7em;
  color: #666;
  line-height: 1.2em;
}
 
#top, #mid,#bot{ /* Targets all id with 'col-' */
  border-bottom: 1px solid #EEE;
  background-color: #fff;
}

#top{min-height: 100px;}
#mid{min-height: 80px;} 
#bot{ min-height: 50px;}

#top .logo{
	height: 100px;
    width: 100px;
    object-fit: contain;
}
.clientlogo{
  float: left;
	height: 60px;
	width: 60px;
	background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;
	background-size: 60px 60px;
  border-radius: 50px;
}
.info{
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2vh;
}
.title{
  float: right;
}
.title p{text-align: right;} 
table{
  width: 100%;
  border-collapse: collapse;
  background-color: #FFF;
  margin: 0;
}
td{
  border-bottom: 1px solid #EEE
}
.tabletitle{
  font-size: 13pt;
  background: #EEE;
}
.service{border-bottom: 1px solid #EEE;}
.item{width: 24mm;}
.itemtext{font-size: 11pt;}

#legalcopy{
  margin-top: 5mm;
}
}
</style>

<style>
.paidstamp{
    position: absolute;
    margin-top: -130px;
    right:20px;
    width:150px;
    opacity: 0.5;
    mix-blend-mode: multiply;
    transform: rotate(-15deg);
    z-index: 1000;
}

.itemtitle{
    width: 50%;
}

.ms-download {
    position: absolute;
    top: 0px;
    right: 0;
    font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
    border: none;
    background: transparent;
}

.ms-download .ms-button {
    background: #ffffff;
    border: solid 1px #e6e6e6;
    border-radius: 2px;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin: 5px;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 50px;
}

.ms-download .ms-button span {
    background: #f2594b;
    border-radius: 4px;
    color: #ffffff;
    display: inline-block;
    font-size: 8pt;
    font-weight: 700;
    line-height: normal;
    padding: 5px 10px;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
}

.ms-download .ms-button span:last-child {
	margin-left: -20px;
}

.ms-download .ms-button:before, .ms-button:after {
    background: #ffffff;
    border: solid 3px #9fb4cc;
    border-radius: 4px;
    content: '';
    display: block;
    height: 35px;
    left: 50%;
    margin: -17px 0 0 -12px;
    position: absolute;
    top: 50%;
    width: 25px;
}

.ms-download .ms-button:hover:before, .ms-button:hover:after {
	background: #e2e8f0;
}

.ms-download .ms-button:before {
	margin: -23px 0 0 -5px;
}

.ms-download .ms-button:hover {
    background: #e2e8f0;
    border-color: #9fb4cc;
}

.ms-download .ms-button:active {
    background: #dae0e8;
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, .25);
}

.ms-download .ms-button span:first-child {
	display: none;
}

.ms-download .ms-button:hover span:first-child {
	display: inline-block;
}

.ms-download .ms-button:hover span:last-child {
	display: none;
}
</style>
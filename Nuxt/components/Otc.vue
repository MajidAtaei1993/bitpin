<template>
    <section class="otc-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <v-row class="position-relative" justify="center">
            <v-card light class="card" flat v-if="section == 1">
                <v-card-title>
                    <div class="otc-tabs">
                        <div :class="buy ? 'active-buy' : 'tab'" @click="buy = 1">خرید</div>
                        <div :class="!buy ? 'active-sell' : 'tab'" @click="buy = 0">فروش</div>
                    </div>
                </v-card-title>
                <v-card-text>
                    <v-row justify="space-between" align="center">
                        <v-col class="text-right pl-0">
                            <div class="font-lg gray--text" v-if="buy">خرید</div>
                            <div class="font-lg gray--text" v-if="!buy">فروش</div>
                            <div class="coin-input cursor-pointer d-flex" @click="section = 2">
                                <img :src="selectedCoin ? selectedCoin.icon : null" width="40px" height="40px" >
                                <div class="coin-name mr-3">{{ selectedCoin ? selectedCoin.text : '' }}</div>
                                <v-spacer />
                                <v-icon>mdi-menu-down</v-icon>
                            </div>
                        </v-col>
                        <div class="pt-6">
                            <v-icon large>mdi-arrow-left-thin</v-icon>
                        </div>
                        <v-col class="text-right pr-0">
                            <div class="font-lg gray--text" v-if="buy">با</div>
                            <div class="font-lg gray--text" v-if="!buy">به</div>
                            <div class="coin-input">
                                <img width="40px" height="40px" class="ml-4" src="https://cdn.bitpin.ir/media/market/currency/1610698086.png" />
                                <div class="coin-name">تومان</div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-text>
                    <div class="otc-choice-price">
                        <v-text-field filled rounded hide-details="" background-color="transparent" label="مبلغ کل (تومان)" color="#e6e8ea" v-model="price.tomanUnit" @input="changeToman"/>
                        <span class="select-all-amount">همه پول</span>
                    </div>
                    <div class="otc-choice-coin-quantity">
                        <span class="font-md mr-6">مقدار</span>
                        <v-text-field filled rounded hide-details="" background-color="transparent" :label="selectedCoin ? selectedCoin.text : ''" color="#e6e8ea" v-model="price.coinUnit" @input="changeCoin" />
                        <span class="coin-symbol">{{ selectedCoin ? selectedCoin.usd : '' }}</span>
                    </div>
                </v-card-text>
                <v-card-text class="d-flex">
                    <span style="color:#848e9x; font-weight:300" class="font-md">قیمت</span>
                    <v-spacer />
                    <span style="color:#101010; font-weight:500" class="font-lg" v-if="buy">{{ trimFarsi(selectedCoin ? (selectedCoin.price.buy).toFixed(0) : null) }} تومان</span>
                    <span style="color:#101010; font-weight:500" class="font-lg" v-if="!buy">{{ trimFarsi(selectedCoin ? (selectedCoin.price.sell).toFixed(0) : null) }} تومان</span>
                </v-card-text>
                <v-card-text class="d-flex">
                    <span style="color:#848e9x; font-weight:300" class="font-md">موجودی کیف پول شما</span>
                    <v-spacer />
                    <span style="color:#101010; font-weight:500" class="font-lg" v-if="buy">{{ wallet.total }} تومان</span>
                    <span style="color:#101010; font-weight:500" class="font-lg" v-if="!buy">{{ selectedCoin.usd }} {{ wallet.total }}</span>
                </v-card-text>
                <v-card-actions class="px-2">
                    <v-btn block color="secondary" class="rounded-20 font-xl transition transform" height="70" depressed v-if="buy" :to="{name: 'signin'}">ثبت سفارش خرید</v-btn>
                    <v-btn block color="error" class="rounded-20 font-xl transition transform" height="70" depressed v-if="!buy" :to="{name: 'signin'}">ثبت سفارش فروش</v-btn>
                </v-card-actions>
            </v-card>
            <v-card light class="card" flat v-if="section == 2">
                <v-card-title class="d-flex">
                    <v-text-field append-icon="mdi-magnify" label="نام ارز دیجیتال را جستجو کنید" class="rounded-lg font-md" filled rounded background-color="#fafafa" color="#a5acb6" hide-details="" v-model="search" />
                    <v-btn icon @click="section = 1">
                        <v-icon large color="black">mdi-menu-left</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-row class="coin-list-scroll">
                        <v-col cols="12" v-for="coin in searchCoin" :key="coin.id" @change="updatePrice" v-model="selectedCoin">
                            <div class="coin-list cursor-pointer" @click="getCoin(coin), section = 1">
                                <img :src="coin.icon" height="50px" width="50px" alt="">
                                <div class="coin-detail mr-2">
                                    <div class="coin-name">{{ coin.text }}</div>
                                    <div class="coin-symbol">{{ coin.usd }}</div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <v-btn depressed class="guide-btn">
                راهنما
            </v-btn>
        </v-row>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                buy: 1,
                section:[1,2],
                localCurrencies: [],
                test:[],
                search:'',
                selectedCoin: null,
                number:123456,
                price: {
                    tomanUnit: null,
                    coinUnit: null,
                },
                wallet:{
                    total:0
                },                
            }
        },
        props: ['currencies'],
        mounted(){
            this.getCurrencies()
            this.section = 1
        },
        watch: { 
            currencies: function(newVal, oldVal) {
                this.getCurrencies(newVal)
                for (let i = 0; i < this.localCurrencies.length; i++) {
                    const coin = this.localCurrencies[i];
                    if (coin.value == this.selectedCoin) {
                        if (this.buy)
                            this.price.tomanUnit = this.price.coinUnit * this.trimFarsi(this.buy ? coin.price.buy : coin.price.sell)
                        else
                            this.price.coinUnit = this.price.tomanUnit / this.trimFarsi(this.buy ? coin.price.buy : coin.price.sell)
                    }
                }
            },            
        },

        methods:{
            getCoin(i){
                this.selectedCoin = i
            },
            updatePrice(data){
                // this.price.coinUnit = 1
                for (let index = 0; index < this.localCurrencies.length; index++) {
                    const coin = this.localCurrencies[index];
                    if (coin.value == data) {
                        this.price.tomanUnit = this.price.coinUnit * this.trimFarsi(this.buy ? coin.price.buy : coin.price.sell)
                    }
                }
            },

            getCurrencies(newList){
                let temp = []
                const irt = 'IRT'
                for (const key in newList) {
                    if (Object.hasOwnProperty.call(newList, key)) {
                        const coin = newList[key];
                        let data = {
                            value:          key,
                            text:           coin.currency1.title_fa,
                            icon:           coin.currency1.image,
                            price:          {
                                buy: (parseInt(coin.price) * parseFloat(coin.otc_buy_percent)) + parseInt(coin.price),
                                sell: parseInt(coin.price) - (parseInt(coin.price) * parseFloat(coin.otc_sell_percent))
                            },
                            code:           coin.code,
                            currency1:      coin.currency1, 
                            currency2:      coin.currency2,
                            usd:            coin.currency1.code,
                        }
                        if (coin.code.includes(irt)) {
                            temp.push(data)
                        }
                        if (!this.selectedCoin) {
                            this.selectedCoin = data
                            // this.price.coinUnit = 1
                        }
                    }
                }
                this.localCurrencies = temp
                if (this.selectedCoin){
                    for (let index = 0; index < temp.length; index++) {
                        const el = temp[index];
                        if (el.value == this.selectedCoin.value) this.selectedCoin = temp[index]
                    }
                }
            },


            trimFarsi(text){
                return text ? new Intl.NumberFormat().format(text) : 0
            },

            getBuyCoin(){
                for (const key in this.localCurrencies) {
                    if (Object.hasOwnProperty.call(this.localCurrencies, key)) {
                        const data = this.localCurrencies[key];
                        if(this.selectedCoin == data.value){
                            return data.buy
                        }
                        return this.selectedCoin.buy
                    }
                }
            },

            getSellCoin(){
                for (const key in this.localCurrencies) {
                    if (Object.hasOwnProperty.call(this.localCurrencies, key)) {
                        const data = this.localCurrencies[key];
                        if(this.selectedCoin == data.value){
                            return data.sell
                        }
                        return this.selectedCoin.sell
                    }
                }
            },

            changeCoin(newVal) {
                for (let i = 0; i < this.localCurrencies.length; i++) {
                    const coin = this.localCurrencies[i];
                    if (coin.usd == this.selectedCoin.usd) {
                        this.price.tomanUnit = (newVal * parseFloat(this.buy ? coin.price.buy : coin.price.sell)).toFixed(0)
                    }
                }
            },
            changeToman(newVal) {
                for (let i = 0; i < this.localCurrencies.length; i++) {
                    const coin = this.localCurrencies[i];
                    if (coin.usd == this.selectedCoin.usd) {
                        this.price.coinUnit = (newVal / parseFloat(this.buy ? coin.price.buy : coin.price.sell)).toFixed(6)
                    }
                }
            },
        },
        computed:{
            searchCoin(){
                if(this.search){
                    return this.localCurrencies.filter(coin=>{
                        return this.search.toLowerCase().split(" ").every(v=>coin.text.toLowerCase().includes(v))
                    })
                }
                else{
                    return this.localCurrencies
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>

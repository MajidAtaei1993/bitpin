<template>
    <section class="home-navigation">
        <v-row justify="space-between" class="flex-nowrap">
            <v-col cols="auto" class="banner">
                <v-card color="transparent" flat class="card">
                    <v-card-title class="card-title">بازار حرفه ای خرید و فروش ارز دیجیتال</v-card-title>
                    <v-card-text class="card-text">
                        بیت پین آسان ترین مکان برای خرید، فروش و مدیریت ارزهای دیجیتال به شکل امن و مطمعن
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="secondary" height="50px" width="100%" depressed class="rounded-15 transition transform" :to="{name: 'signin'}">
                            <span class="primary--text font-md">ثبت نام</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <!-- <v-img :src="banner">
                    <v-row class="ma-0 fill-height" justify="center" align="center">
                        <v-col class="auto">
                        </v-col>
                    </v-row>
                </v-img> -->
            </v-col>
            <v-col cols="5" class="left">
                <img :src="bitcoin" alt="" class="bitcoin">
                <img :src="dolar" alt="" class="dolar">
                <v-img :src="mobile" class="img-mobile">
                    <v-row class="na-0 fill-height pa-4" justify="center" align="start">
                        <v-col cols="12">
                            <v-card flat class="card" light color="transparent" min-width="100%">
                                <v-card-title class="card-text">ساده تبدیل کن، ساده بخر</v-card-title>
                                <v-card-text>
                                    <v-select :menu-props="{offsetY:true, contentClass:'elevation-1 menu-content', light:true}" outlined hide-details="" class="rounded-15" append-icon="mdi-chevron-down" :items="[
                                        {
                                            value: 0,
                                            text: 'تومان',
                                            icon: 'https://cdn.bitpin.ir/media/market/currency/1610698086.png'
                                        },
                                        {
                                            value: 1,
                                            text: 'تتر',
                                            icon: 'https://cdn.bitpin.ir/media/market/currency/1628416117.svg'
                                        }
                                    ]" v-model="selectedCash">
                                        <template v-slot:item="{ item }">
                                            <div class="select-lists" >
                                                <div class="list" dense>
                                                    <v-img class="img" :src="item.icon" />
                                                    <div class="text">{{ item.text }}</div>
                                                </div>
                                            </div>
                                        </template>
                                    </v-select>
                                    <v-text-field :disabled="!selectedCoin" dir="ltr" hide-details="" outlined class="rounded-15 mt-1 text-center" label="پرداخت کنید" flat background-color="#fafafa" color="#e6e8ea" @input="calculatorFromToman" :value="pay"/>
                                </v-card-text>
                                <v-card-text class="text-center py-0 font-md" v-if="coin" dir="ltr">
                                 {{ '1 '+ coin.code.replace('_IRT', '').replace('_USDT', '') }} = {{ (formatNumber(selectedCash == 0 ? coin.price.toFixed(0) : coin.price)) }}  {{ selectedCash == 0 ? 'IRT' : 'USDT' }}
                                </v-card-text>
                                <v-card-text>
                                    <v-select :menu-props="{offsetY:true, contentClass:'elevation-1 menu-content', light:true}" outlined hide-details="" class="rounded-15" append-icon="mdi-chevron-down" :items="searchCoin" v-model="selectedCoin">
                                        <template v-slot:prepend-item>
                                            <v-text-field hide-details="" dense outlined class="rounded-lg mt-1 mx-4" append-icon="mdi-magnify" label="جستجوی رمز ارز" flat background-color="#fafafa" color="#e6e8ea" v-model="search" />
                                        </template>
                                        <template v-slot:item="{ item }">
                                            <v-list dense light min-width="100%">
                                                <v-list-item class="pr-0" dense @click="getCoin(item)">
                                                    <v-list-item-avatar size="24">
                                                        <v-img :src="item.icon" />
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </template>
                                    </v-select>
                                    <v-text-field :disabled="!selectedCoin" dir="ltr" hide-details="" outlined class="rounded-15 mt-1 text-center" label="دریافت می کنید" flat background-color="#fafafa" color="#e6e8ea" @input="calculatorFromCoin" :value="paid"/>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn block height="50" class="rounded-15 transition transform" color="primary" depressed :to="{name: 'signin'}">
                                        <span class="secondary--text font-xl">می خرم</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                localCurrencies:[],
                stableCoin:[],
                banner:'/assets/images/home-top-banner.svg',
                mobile:'/assets/images/mobile.svg',
                bitcoin:'/assets/images/bitcoin.svg',
                dolar:'/assets/images/dolar.svg',
                search:'',
                selectedCash: 0,
                selectedCoin:null,
                cash:'',
                coin:'',
                payment:'',
                receipt:'',
                pay: null,
                paid: null,
                coins_irt: [],
                coins_usdt: []
            }
        },

        props: ['currencies', 'currenciesTehter'],
        mounted(){
            this.getCurrencies()
            // this.getLocalCurrencies()
        },
        watch: { 
            currencies(newVal, oldVal) {
                // this.getLocalCurrencies(newVal)
                for (let i = 0; i < this.localCurrencies.length; i++) {
                    const coin = this.localCurrencies[i];
                }
            },
            'selectedCash': function (newVal, oldVal){}
            // currenciesTehter(newVal, oldVal) {
            //     this.getLocalCurrencies(newVal)
            //     for (let i = 0; i < this.localCurrencies.length; i++) {
            //         const coin = this.localCurrencies[i];
            //     }
            // },
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
            // calculator(){
            //     if (this.payment) {
            //         return parseInt(this.selectedCoin.price) / parseInt(this.payment)
            //     }
            // },
        },
        methods:{
            // updatePrice(data){
            //     for (let i = 0; i < this.localCurrencies.length; i++) {
            //         const coin = this.localCurrencies[i];
            //         if (coin.value == data) {
            //             this.selectedCoin = data
            //         }
            //     }
            // },
            formatNumber(text){
                return new Intl.NumberFormat().format(text)
            },
            // getLocalCurrencies(data){
            //     let temp = []
            //     for(const key in data){
            //         if (Object.hasOwnProperty.call(data, key)) {
            //             const coin = data[key]
            //             // console.log(coin)
            //             temp.push(coin)
            //             if (!this.selectedCoin) {
            //                 this.selectedCoin = coin
            //                 this.selectedCash = 1
            //             }
            //         }
            //     }
            //     this.localCurrencies = temp
            //     if (this.selectedCoin) {
            //         for (let i = 0; i < temp.length; i++) {
            //             const el = temp[i];
            //             if (el.value == this.selectedCoin.value) {
            //                 this.selectedCoin = el
            //             }
            //         }
            //     }
            // },
            getCurrencies(){
                this.$store.dispatch('getCurrency')
                .then(resp=>{
                    let irts = []
                    let usds = []
                    for (let i = 0; i < resp.results.length; i++) {
                        const el = resp.results[i];
                        if (el.code.includes('_IRT'))
                            irts.push(
                                {
                                    value:      el.id,
                                    text:       el.currency1.title_fa,
                                    icon:       el.currency1.image,
                                    price:      (parseInt(el.price) * parseFloat(el.otc_buy_percent)) + parseInt(el.price),
                                    code:       el.code,
                                    currency1:  el.currency1, 
                                    currency2:  el.currency2,
                                }
                            )
                        else if (el.code.includes('_USDT'))
                            usds.push(
                                {
                                    value:      el.id,
                                    text:       el.currency1.title_fa,
                                    icon:       el.currency1.image,
                                    price:      (parseInt(el.price) * parseFloat(el.otc_buy_percent)) + parseInt(el.price),
                                    code:       el.code,
                                    currency1:  el.currency1, 
                                    currency2:  el.currency2,
                                }
                            )
                    }
                    this.coins_irt = irts
                    this.coins_usdt = usds
                    this.localCurrencies = this.selectedCash == 0 ? this.coins_irt : this.coins_usdt

                    setTimeout(() => {
                        this.getCurrencies()
                    }, 1500);
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            getCoin(data){
                this.coin = data
            },

            calculatorFromToman(value){
                // coin                            cash
                // 1                               this.selectedCoin.price
                // x                               value
                // x = (value / this.selectedCoin.price) / 1

                this.paid = (value / parseFloat(this.coin.price)).toFixed(6)
            },

            calculatorFromCoin(value){
                // coin                            cash
                // 1                               this.selectedCoin.price
                // value                           x
                // x = (value / this.selectedCoin.price) / 1
                this.pay = (value * parseFloat(this.coin.price)).toFixed(0)
            },

            changeCash(event){
                this.localCurrencies = event == 0 ? this.coins_irt : this.coins_usdt
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
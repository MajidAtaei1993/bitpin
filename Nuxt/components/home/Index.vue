<template>
    <section class="index-section">
        <Navigation :currencies="currencies" :currenciesTehter="currenciesTehter" />
        <DataTable :currencies="currencies" :currenciesTehter="currenciesTehter" />
        <Banner />
        <Facility />
        <Applications />
        <AboutUs />
        <MiddleBanner />
        <LastBanner />
    </section>
</template>

<script>
import Navigation from './Navigation.vue'
import DataTable from './DataTable.vue'
import Banner from './Banner.vue'
import Facility from './Facility.vue'
import Applications from './Applications.vue'
import AboutUs from './AboutUs.vue'
import MiddleBanner from './MiddleBanner.vue'
import LastBanner from './LastBanner.vue'
    export default {
        components:{
            Navigation,
            DataTable,
            Banner,
            Facility,
            Applications,
            AboutUs,
            MiddleBanner,
            LastBanner,
        },
        data(){
            return{
                currencies:[],
                currenciesTehter:[]
            }
        },
        mounted(){
            this.getCurrencys()
        },
        methods:{
            getCurrencys(){
                const irt = "IRT"
                const usdt = "USDT"
                let tempIrt = []
                let tempUsdt = []
                this.$store.dispatch('getCurrency')
                .then(resp=>{
                    for (let i = 0; i < resp.results.length; i++) {
                        const coin = resp.results[i];
                        if(coin.code.includes(irt)){
                            tempIrt.push({
                                text:coin.currency1.title_fa,
                                value:coin.id,
                                icon: coin.currency1.image,
                                code: coin.currency1.code,
                                codeFull: coin.code,
                                price:coin.order_book_info.price,
                                percent: coin.price_info.change
                            })
                            this.currencies = tempIrt
                        }
                        if(coin.code.includes(usdt)){
                            tempUsdt.push({
                                text:coin.currency1.title_fa,
                                value:coin.id,
                                icon: coin.currency1.image,
                                code: coin.currency1.code,
                                codeFull: coin.code,
                                price:coin.order_book_info.price,
                                percent: coin.price_info.change
                            })
                            this.currenciesTehter = tempUsdt
                        }
                    }
                    setTimeout(() => {
                        this.getCurrencys()
                    }, 3000);
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <section class="main-state">
        <div class="main-state-body">
            <div class="head">
                <div class="th">رمز ارز</div>
                <div class="th">قیمت</div>
                <div class="th">تغییرات</div>
                <div class="th">نمودار 24 ساعت</div>
                <div class="tabs">
                    <div :class="tab == 'toman' ? 'active-tab' : 'tab'" @click="tab = 'toman'">تومان</div>
                    <div :class="tab == 'tether' ? 'active-tab' : 'tab'" @click="tab = 'tether'">تتر</div>
                </div>
            </div>
            <div class="tr" v-for="row in tab == 'toman' ? currencies.slice(0, 6) : currenciesTehter.slice(0, 6) " :key="row.value">
                <div class="td">
                    <div class="coin-details d-flex">
                        <img :src="row.icon" width="40px" height="40px" alt="" class="ml-2">
                        <div>
                            <div class="code">{{ row.code }}</div>
                            <div class="name">{{ row.text }}</div>
                        </div>
                    </div>
                </div>
                <div class="td">
                    <div class="price">{{ new Intl.NumberFormat().format(row.price) }}</div>
                </div>
                <div class="td">
                    <div dir="ltr" :class="row.percent >0 ? 'precent' : 'percentMinus'">{{ row.percent }}</div>
                </div>
                <div class="td">
                    <v-card :href="`https://bitpin.ir/coin/${ row.code }`" width="100" height="50" color="white" flat>
                        <v-sparkline :gradient="gradient" fill color="primary" :value="value" radius="10" padding="8" smooth="25" auto-draw width="100" height="50" />
                    </v-card>
                </div>
                <div class="td">
                    <v-btn depressed color="rgb(230, 232, 234)" class="btn rounded-15" height="50px" width="120px" :href="`https://bitpin.ir/trade/${ row.codeFull }`">
                        <span class="primary--text font-lg">خرید / فروش</span>
                    </v-btn>
                </div>
            </div>
            <div class="btn-show-all">
                <v-btn height="70" width="338" color="#1d1e65" class="rounded-20 transition transform" @click="$router.push({name:'coin-list'})">
                    <span class="secondary--text font-lg">نمایش همه ارزها</span>
                </v-btn>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        mounted(){
            this.tab = 'toman'
        },
        props:['currencies', 'currenciesTehter'],
        data(){
            return{
                tab:['toman', 'tether'],
                // value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
                value: [this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt()],
                gradient:['#8586bc', '#c9c9e0', '#fff']
            }
        },
        methods:{
            randomInt(){
                return Math.floor(Math.random()*(50-5+1))+5
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="coin-list-section">
        <v-container>
            <!-- table header -->
            <v-row justify="space-between" class="coin-list-wrapper hidden-sm-and-down" align="end">
                <v-col cols="12" lg="3" md="4">
                    <div class="coin-list-wrapper-title">قیمت ارزهای دیجیتال</div>
                    <div class="input d-flex align-center">
                        <v-text-field hide-details="" filled rounded color="secondary" height="60" background-color="transparent" append-icon="mdi-magnify" label="جستجو رمز ارز" v-model="search" />
                    </div>
                </v-col>
                <v-col cols="auto">
                    <div class="coin-table-grid-tools">
                        نمایش
                        <v-btn icon :color="activeGrid" class="mx-1">
                            <v-icon size="30">mdi-format-list-bulleted</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon size="30">mdi-widgets</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>

            <!-- table body -->
            <v-row>
                <v-col cols="12" class="sticky-header">
                    <v-tabs v-model="tab" slider-color="secondary" color="secondary" background-color="transparent">
                        <v-tab class="font-lg">دیدبان</v-tab>
                        <v-tab class="font-lg">تومان</v-tab>
                        <v-tab class="font-lg"> تتر</v-tab>
                        <v-tab class="font-lg"> دسته بندی</v-tab>
                    </v-tabs>
                    <v-divider />
                </v-col>
                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <v-tab-item></v-tab-item>
                        <v-tab-item>
                            <v-data-table hide-default-footer :search="search" :items="currenciesToman" item-key="id" :headers="header" class="data-table primary" fixed-header :items-per-page="currenciesToman.length">
                                <template v-slot:item.title="{item}">
                                    <div class="d-flex align-center data-table-rows">
                                        <img width="30" height="30" :src="item.icon" :alt="item.code" :title="item.title">
                                        <div class="font-xl mx-6">{{ item.title }}</div>
                                        <div class="code">{{ item.code }}</div>
                                    </div>
                                </template>
                                <template v-slot:item.change="{item}">
                                    <div dir="ltr" :class="item.change >0 ? 'data-table-rows-change-up' : 'data-table-rows-change-down' ">{{ String(parseFloat(item.change)) }}</div>
                                </template>
                                <template v-slot:item.price="{item}">
                                    <div >{{ Intl.NumberFormat().format(item.price) }}</div>
                                </template>
                                <template v-slot:item.action="{item}">
                                    <div class="data-table-action">
                                        <v-btn class="data-table-action-btn" height="50" depressed @click="buy(item)">خرید / فروش</v-btn>
                                    </div>
                                </template>
                            </v-data-table>
                        </v-tab-item>
                        <v-tab-item>
                            <v-data-table hide-default-footer :search="search" :items="currenciesUSDT" item-key="id" :headers="header" class="data-table primary" dark>
                                <template v-slot:item.title="{item}">
                                    <div class="d-flex align-center data-table-rows">
                                        <img width="30" height="30" :src="item.icon" :alt="item.code" :title="item.title">
                                        <div class="font-xl mx-6">{{ item.title }}</div>
                                        <div class="code">{{ item.code }}</div>
                                    </div>
                                </template>
                                <template v-slot:item.change="{item}">
                                    <div dir="ltr" :class="item.change >0 ? 'data-table-rows-change-up' : 'data-table-rows-change-down' ">{{ String(parseFloat(item.change)) }}</div>
                                </template>
                                <template v-slot:item.price="{item}">
                                    <div >{{ Intl.NumberFormat().format(item.price) }}</div>
                                </template>
                                <template v-slot:item.action="{item}">
                                    <div class="data-table-action">
                                        <v-btn class="data-table-action-btn" height="50" depressed @click="buy(item)">خرید / فروش</v-btn>
                                    </div>
                                </template>
                            </v-data-table>
                        </v-tab-item>
                        <v-tab-item class="primary">
                            <div class="data-table-currencies-tags">
                                <div @click="value = 0, tag == value, change(value)" :class="value == 0 ? 'currencies-tag-btn-active' : 'currencies-tag-btn' ">استیبل کوین</div>
                                <div @click="value = 1, tag == value, change(value)" :class="value == 1 ? 'currencies-tag-btn-active' : 'currencies-tag-btn' ">دیفای</div>
                                <div @click="value = 2, tag == value, change(value)" :class="value == 2 ? 'currencies-tag-btn-active' : 'currencies-tag-btn' ">میم کوین</div>
                                <div @click="value = 3, tag == value, change(value)" :class="value == 3 ? 'currencies-tag-btn-active' : 'currencies-tag-btn' ">متاورس</div>
                                <div @click="value = 4, tag == value, change(value)" :class="value == 4 ? 'currencies-tag-btn-active' : 'currencies-tag-btn' ">ان اف تی</div>
                                <div @click="value = 5, tag == value, change(value)" :class="value == 5 ? 'currencies-tag-btn-active' : 'currencies-tag-btn' ">توکن هواداری</div>
                            </div>
                            <v-data-table hide-default-footer :search="search" :items="tags.length ? tags : currencies" item-key="id" :headers="header" class="data-table primary" dark :items-per-page="currencies.length">
                                <template v-slot:item.title="{item}">
                                    <div class="d-flex align-center data-table-rows">
                                        <img width="30" height="30" :src="item.icon" :alt="item.code" :title="item.title">
                                        <div class="font-xl mx-6">{{ item.title }}</div>
                                        <div class="code">{{ item.code }}</div>
                                    </div>
                                </template>
                                <template v-slot:item.change="{item}">
                                    <div class="font-lg" dir="ltr" :class="item.change >0 ? 'data-table-rows-change-up' : 'data-table-rows-change-down' ">{{ String(parseFloat(item.change)) }}</div>
                                </template>
                                <template v-slot:item.price="{item}">
                                    <div class="font-lg">{{ new Intl.NumberFormat().format(item.price) }}</div>
                                </template>
                                <template v-slot:item.sparkline="{item}">
                                    <v-card :href="`https://bitpin.ir/trade/${ item.code2 }`" width="100" height="50" color="transparent" flat v-if="item">
                                        <v-sparkline
                                            :value="value"
                                            color="white"
                                            line-width="1"
                                            padding="16"
                                        ></v-sparkline>
                                    </v-card>
                                </template>
                                <template v-slot:item.action="{item}">
                                    <div class="data-table-action col-auto">
                                        <v-btn class="data-table-action-btn" height="50" depressed @click="buy(item)" :href="`https://bitpin.ir/trade/${ item.code2 }`">خرید / فروش</v-btn>
                                    </div>
                                </template>
                            </v-data-table>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.getCurrency()
        },
        data(){
            return{
                activeGrid:'secondary',
                tab:3,
                search:'',
                loading:true,
                localCurrencies:[],
                currencies:[],
                currenciesToman:[],
                currenciesUSDT:[],
                tags:[],
                tag:null,
                value:[ 1,2,3,4,5 ],
                header:[
                    { text:'ارزدیجیتال', value:'title', align:'right', sortable: true },
                    { text:'قیمت', value:'price', align:'center', sortable: true },
                    { text:'تغییر 24 ساعت', value:'change', align:'right', sortable: true },
                    { text:'نمودار 24 ساعت', value:'sparkline', align:'right', sortable: false },
                    { text:'', value:'action', align:'left', sortable: false }
                ],
                value: [this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt()],
                gradient:['#050846']
            }
        },
        methods:{
            randomInt(){
                return Math.floor(Math.random()*(50-5+1))+5
            },

            change(value){
                if (value == 0) {
                    const stableCoin = "استیبل کوین"
                    for (let i = 0; i < this.localCurrencies.length; i++) {
                        const el = this.localCurrencies[i];
                        // el.forEach(el => {
                        //     console.log(el)
                        // });
                    }
                }
            },
            async getCurrency(){
                let temp = []
                let temp1 = []
                let temp2 = []
                const irt = "IRT"
                const usdt = "USDT"
                this.$store.dispatch('getCurrency')
                .then(resp=>{
                    this.localCurrencies = resp.results
                    for (let i = 0; i < Object.entries(resp.results).length; i++) {
                        const el = Object.entries(resp.results)[i][1];
                        temp2.push({
                            icon:el.currency1.image,
                            title:el.currency1.title_fa,
                            code:el.currency1.code,
                            code2:el.code,
                            price:el.price,
                            change:el.price_info.change,
                            color:el.currency1.color,
                        })
                        this.currencies = temp2
                        if (el.code.includes(irt)) {
                            temp.push({
                                icon:el.currency1.image,
                                title:el.currency1.title_fa,
                                code:el.currency1.code,
                                price:el.price,
                                code2:el.code,
                                change:el.price_info.change,
                                color:el.currency1.color
                            })
                        }
                        if (el.code.includes(usdt)) {
                            temp1.push({
                                icon:el.currency1.image,
                                title:el.currency1.title_fa,
                                code:el.code,
                                code2:el.code,
                                price:el.price,
                                change:el.price_info.change,
                                color:el.currency1.color
                            })
                        }
                    }
                    this.currenciesToman = temp
                    this.currenciesUSDT = temp1
                    setTimeout(() => {
                        this.getCurrency()
                    }, 3000);
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            buy(){}
        }
    }
</script>

<style lang="scss" scoped>

</style>
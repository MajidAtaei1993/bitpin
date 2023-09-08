<template>
    <section class="winners-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <v-row justify="space-between" style="width:860px" class="d-flex mx-auto">
            <v-col cols="12" md="6">
                <v-card color="transparent" flat max-width="400">
                    <v-card-title class="flex-column align-start">
                        <img :src="logo" alt="">
                        <div class="font-header mr-5">بیت پین</div>
                    </v-card-title>
                    <v-card-text>
                        <div class="subject">بدون قرعه کشی <span class="secondary--text">206</span> ببر!</div>
                    </v-card-text>
                    <v-card-text class="d-flex">
                        <v-btn depressed color="#131353" class="white--text rounded-15" height="50" width="60%">
                            <span class="font-sm">
                                مشاهده تعداد شانس 206
                            </span>
                            <v-icon color="secondary" class="mr-2">mdi-eye</v-icon>
                        </v-btn>
                        <v-btn depressed color="#131353" class="white--text font-md rounded-15 mr-3" height="50" width="40%">
                            <span class="font-sm">
                                دریافت شانس بیشتر
                            </span>
                            <v-icon color="secondary" class="mr-2">mdi-trophy-variant</v-icon>
                        </v-btn>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn block height="50" class="rounded-15 primary--text transition transform" depressed color="secondary">
                            <span class="font-lg">
                                چگونه بدون قرعه کشی جلایزه ببریم
                            </span>
                        </v-btn>
                    </v-card-actions>  
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-img :src="giftCar" width="500px" alt="" />
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="d-flex mx-auto" style="width:860px">
            <v-col cols="12">
                <v-img :src="inviteBg" alt="">
                    <v-row class="ma-0 fill-height" justify="center" align="center">
                        <v-col class="d-flex justify-center align-center">
                            <div class="secondary--text ml-10">چگونه دوستان بیشتری دعوت کنیم ؟</div>
                            <div class="d-flex">
                                <v-btn outlined class="rounded-lg transition transform" color="secondary" width="50%" height="45">
                                    <span class="font-lg font-weight-bold white--text">دعوت از دوستان</span>
                                </v-btn>
                                <v-btn outlined class="rounded-lg mr-5 transition transform" color="secondary" width="60%" height="45">
                                    <span class="font-lg font-weight-bold white--text">مشاهده آخرین برنده ها</span>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
            <!-- winner road -->
            <v-col cols="12" class="road-map-hader">
                <div class="road-start">
                    <img :src="start" alt="">
                    <span class="start">شروع</span>
                </div>
                <div class="road-end">
                    <img :src="end" alt="">
                    <span class="end">پایان</span>
                </div>
            </v-col>
            <v-col cols="12" class="road-map">
                <img width="900px" :src="winnerRoad" class="d-flex mx-auto position-absolute">
                    <v-row class="ma-0 road-map-items" v-for="(item, i) in aims" :key="i">
                        <div v-for="(item1, j) in item.child" :key="j" class="item">
                            <v-img :src="roadCircle" alt="">
                                <v-row class="ma-0 fill-height" justify="center" align="center">
                                    <img width="60" height="60" :src="item1.step" alt="">
                                </v-row>
                            </v-img>
                            <v-btn block class="mt-n5 btn-bordered" color="#1d1e65">
                                <v-icon color="#ffc538">mdi-star-shooting</v-icon>
                                {{ item1.btn }}
                            </v-btn>
                            <span class="position-absolute text-center d-flex align-center justify-center pt-2 px-6">
                                {{ item1.aim }}
                            </span>
                        </div>
                    </v-row>
            </v-col>
            <!-- winner road -->
        </v-row>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                giftCar:'/assets/images/gift-box.webp',
                giftCar1:'/assets/images/gift-box2.webp',
                logo:'/assets/images/gift-logo.svg',
                inviteBg:'/assets/images/invite-bg.svg',
                winnerRoad:'/assets/images/road-map.svg',
                start:'/assets/images/road/start.svg',
                end:'/assets/images/road/end.svg',
                roadCircle:'/assets/images/road/card-circles.svg',
                aims:[
                    {
                        child:[
                            {
                                step:'/assets/images/road/step1.png', btn:'1 دعوت', aim:'یک شانس در قرعه کشی 206 سفید'
                            },
                            {
                                step:'/assets/images/road/step2.png', btn:'160 دعوت', aim:'Airpods New Generation'
                            },
                            {
                                step:'/assets/images/road/step3.png', btn:'320 دعوت', aim:'شیائومی پوکو x3 پرو'
                            },
                            {
                                step:'/assets/images/road/step4.png', btn:'10000 دعوت', aim:'یک دستگاه 206 مشکی'
                            }
                        ]
                    },
                    {
                        child:[
                            {
                                step:'/assets/images/road/step5.png', btn:'3 دعوت', aim:'80 هزار واحد شیبا'
                            },
                            {
                                step:'/assets/images/road/step6.png', btn:'80 دعوت', aim:'هارد اکسترنال یک ترابایت'
                            },
                            {
                                step:'/assets/images/road/step7.png', btn:'640 دعوت', aim:'سامسونگ گلکسی S20 FE'
                            },
                            {
                                step:'/assets/images/road/step8.png', btn:'6000 دعوت', aim:'1 واحد ارتیوم'
                            }
                        ]
                    },
                    {
                        child:[
                            {
                                step:'/assets/images/road/step9.png', btn:'5 دعوت', aim:'130 هزار واحد شیبا'
                            },
                            {
                                step:'/assets/images/road/step10.png', btn:'40 دعوت', aim:'شیائومی می بند 6'
                            },
                            {
                                step:'/assets/images/road/step11.png', btn:'1280 دعوت', aim:'ایفون 13'
                            },
                            {
                                step:'/assets/images/road/step12.png', btn:'3000 دعوت', aim:'آی مک سری جدید'
                            },
                        ]
                    },
                    {
                        child:[
                            {
                                step:'/assets/images/road/step13.png', btn:'10 دعوت', aim:'پاوربانک'
                            },
                            {
                                step:'/assets/images/road/step14.png', btn:'20 دعوت', aim:'5 واحد مانا'
                            },
                            {
                                step:'/assets/images/road/step15.png', btn:'1500 دعوت', aim:'مک بوک ایر'
                            }
                        ]
                    },
                ]

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
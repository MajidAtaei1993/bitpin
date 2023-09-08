<template>
    <section class="main-about">
        <div class="head">درباره ما بیشتر بدانید</div>
        <div class="body">
            <v-img :src="aboutBg" class="flex-wrap">
                <v-row class="ma-0" justify="center" align="center">
                    <v-col cols="12" class=" row-first">
                        <v-row justify="space-around" align="center">
                            <v-col cols="12" sm="6" class="item">
                                <img src="/assets/images/about/about.svg" alt="">
                                <v-card flat width="215" height="215" color="#1d1e65" rounded="circle" link class="card" :to="{name: 'aboutus'}">
                                    <div class="head">درباره ما</div>
                                    <div class="text">بیشتر درباره بیت‌پین و روش کارکرد تیم بدانید</div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" class="item">
                                <img src="/assets/images/about/social-network.svg" alt="">
                                <v-card flat width="215" height="215" color="#1d1e65" rounded="circle" link class="card">
                                    <div class="head">شبکه های اجتماعی</div>
                                    <div class="d-flex align-center mt-4">
                                        <v-btn fab depressed small color="#6566b0">
                                            <v-icon color="white">mdi-twitter</v-icon>
                                        </v-btn>
                                        <v-btn fab depressed small color="#6566b0" class="mx-3">
                                            <v-icon color="white">mdi-send</v-icon>
                                        </v-btn>
                                        <v-btn fab depressed small color="#6566b0">
                                            <v-icon color="white">mdi-instagram</v-icon>
                                        </v-btn>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" class="row-second">
                        <v-row justify="space-around" align="center">
                            <v-col cols="12" sm="6" class="item">
                                <img src="/assets/images/about/support.svg" alt="">
                                <v-card flat width="215" height="215" color="#1d1e65" rounded="circle" link class="card" :to="{name: 'support'}">
                                    <div class="head">پشتیبانی 24 ساعته</div>
                                    <div class="text">مشکلی رخ داده؟ تیم پشتیبانی ما ۲۴/۷ در دسترس شماست</div>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" class="item">
                                <img src="/assets/images/about/career.svg" alt="">
                                <v-card flat width="215" height="215" color="#1d1e65" rounded="circle" link class="card" :to="{name: 'career'}">
                                    <div class="head">موقعیت شغلی</div>
                                    <div class="text">به آینده فناوری کمک کنید. کار جدید خود را شروع کنید</div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-img>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                aboutBg:'/assets/images/main-about.svg'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
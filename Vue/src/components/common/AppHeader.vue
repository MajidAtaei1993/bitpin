<template>
    <div>
        <v-app-bar height="70px" class="white--text" flat fixed>
            <v-row class="hidden-sm-and-down" align="center">
                <v-col cols="auto">
                    <a href="#" class="d-flex align-center">
                        <img :src="logo" alt="">
                        <h1 class="app-header-title">بیت پین</h1>
                    </a>
                </v-col>
                <v-col>
                    <div class="header-links">
                        <a href="#" class="header-link col-auto" v-for="(link, i) in headerLinks" :key="i">{{ link.text }}</a>
                    </div>
                </v-col>
                <v-col cols="auto">
                    <v-menu open-on-hover :close-on-content-click="false" offset-y right content-class="rounded-b-xl mt-3 elevation-2" transition="slide-x-reverse-transition">
                        <template v-slot:activator="{on, attrs}">
                            <v-btn v-on="on" v-bind="attrs" color="rgba(149,150,245,.2)" height="44" depressed class="rounded-20">
                                <span class="secondary--text font-md">دانلود اپلیکیشن</span>
                                <v-icon class="mr-3" color="secondary">mdi-download</v-icon>
                            </v-btn>
                        </template>
                        <v-list class="rounded-b-xl" color="#000231" max-width="340">
                            <v-list-item>
                                <v-list-item-avatar size="95" tile>
                                    <v-img :src="logo" />
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <div class="font-lg mb-4">
                                        برای دانلود اپلیکیشن، کد را اسکن کنید.
                                    </div>
                                    <v-btn depressed color="rgba(149,150,245,.2)" class="rounded-20" width="90%">
                                        <span class="font-md secondary--text">لینک های دانلود</span>
                                    </v-btn>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
                <v-col cols="auto">
                    <v-btn color="secondary" class="rounded-15 font-xl black--text transition transform" depressed height="50">ورود / ثبت نام</v-btn>
                </v-col>
            </v-row>
            <!-- <v-row class="hidden-md-and-up">
                <v-btn icon @click="drawer =! drawer">
                    <v-icon color="white">mdi-microsoft</v-icon>
                </v-btn>
            </v-row> -->
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                logo:'/assets/images/logo.svg',
                headerLinks:[
                    { text:'خرید آسان', link:'' },
                    { text:'پلتفرم خرید و فروش', link:'' },
                    { text:'قیمت ارز دیجیتال', link:'coin-list' },
                    { text:'راهنمای استفاده', link:'' },
                    { text:'آکادمی', link:'' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
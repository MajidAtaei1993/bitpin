<template>
    <div>
        <v-app-bar height="70px" class="white--text" :color="$route.name == 'gift' ? '#050846' : '' || $route.name == 'career' ? 'rgba(5,8,70,.501960)' : '' || $route.name == 'support' ? 'rgba(5,8,70,.501960)' : '' || $route.name == 'aboutus' ? 'rgba(5,8,70,.501960)' : '' || $route.name == 'invitation' ? 'rgba(5,8,70,.501960)' : '' || $route.name == 'aboutus' ? 'rgba(5,8,70,.501960)' : '' || $route.name == 'otc' ? 'rgba(5,8,70,.501960)' : '' || $route.name == 'heatmap' ? 'rgb(5,8,70)' : '' || $route.name == 'coin-list' ? 'rgb(29,30,101)' : '' || $route.name == 'contact-us' ? 'primary' : '' || $route.name == 'rules' ? 'rgba(5,8,70,.501960)' : '' || $route.name == 'user-levels' ? 'primary' : '' || $route.name == 'index' ? 'rgb(29,30,101)' : ''" flat fixed>
            <v-row class="hidden-sm-and-down" align="center">
                <v-col cols="auto">
                    <nuxt-link :to="{ name: 'index'}" class="d-flex align-center">
                        <img :src="logo" alt="">
                        <h1 class="app-header-title">بیت پین</h1>
                    </nuxt-link>
                </v-col>
                <v-col>
                    <div class="header-links">
                        <nuxt-link class="header-link col-auto" :class="$route.name == link.link ? 'header-link-active' : 'header-link' " v-for="(link, i) in headerLinks" :key="i" :to="{ name: link.link }">{{ link.text }}</nuxt-link>
                    </div>
                </v-col>
                <v-col cols="auto" v-if="$route.name == 'index'">
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
                    <v-btn color="secondary" class="rounded-15 font-xl black--text transition transform" depressed height="50" :to="{ name: 'signin'}">ورود / ثبت نام</v-btn>
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
                    { text:'خرید آسان', link:'otc' },
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
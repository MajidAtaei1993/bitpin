<template>
    <v-footer tile inset padless class="footer">
        <div class="top">
            <div class="col" v-for="(col, i) in cols" :key="i">
                <div class="head">{{ col.head }}</div>
                <ul>
                    <li class="list" v-for="(item1, j) in col.child" :key="j">
                        <nuxt-link :to="{name: item1.link}">{{ item1.text }}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="logo-desc">
                <img :src="logo" alt="">
                <div class="head">بیت پین</div>
                <div class="text">بازار حرفه ای ازر دیجیتال</div>
                <div class="socials">
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
                <div class="call">
                    <div class="text1">تماس با ما: support@bitpin.ir</div>
                    <div class="text2">0218428602</div>
                </div>
                <div class="desc">تلفن صرفاً برای امور اداری از شنبه تا چهارشنبه ساعت ۹ تا ۱۷ در دسترس است. لطفا برای پشتیبانی از طریق چت آنلاین با ما در تماس باشید.
                </div>
                <div class="version"> v 3.21.0</div>
            </div>
        </div>
        <div class="bottom">
            <v-row justify="space-between" align="center">
                <v-col cols="12" sm="3" v-for="(item, i) in logos" :key="i">
                    <v-card class="card" color="#050846" :to="{name: item.link}" width="220" height="65">
                        <div class="text">دانلود</div>
                        <img class="d-flex mr-auto" :src="item.img" alt="">
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div class="mt-10">کلیه حقوق این سایت متعلق به بیت پین است. طراحی و توسعه 
            <a class="azerColor--text" href="https://azarertebat.ir">(آذر ارتباط)</a>
        </div>
    </v-footer>
</template>

<script>
    export default {
        data(){
            return{
                logo:'/assets/images/logo.svg',
                logos:[
                    {img:'/assets/images/discription/mykey-hover.svg', link:'' },
                    {img:'/assets/images/discription/bazar-hover.svg', link:'' },
                    {img:'/assets/images/discription/iphone-hover.svg', link:'' },
                    {img:'/assets/images/discription/andriod-hover.svg', link:'' },
                ],
                cols:[
                    {
                        head:'بیت پین',
                        child:[
                            { text:'کارت هدیه', link:'gift' },
                            { text:'جمع برنده !', link:'landing-winners' },
                            { text:'درباره ما', link:'aboutus' },
                            { text:'تماس با ما', link:'contactus' },
                            { text:'پشتیبانی', link:'support' },
                            { text:'شرایط و مقررات استفاده', link:'rules' }
                        ]
                    },
                    {
                        head:'منابع و راهنمایی',
                        child:[
                            { text:'راهنمای کار با بیت پین', link:'' },
                            { text:'کارمزد در بیت پین', link:'' },
                            { text:'درآمدزایی با بیت پین', link:'invitation' },
                            { text:'راهنمای احراز هویت', link:'' },
                            { text:'درباره امنیت بیت پین', link:'' },
                            { text:'سطوح کاربری', link:'user-levels' }
                        ]
                    },
                    {
                        head:'آکادمی بیت پین',
                        child:[
                            { text:'از اینجا شروع کنید', link:'' },
                            { text:'دانشنامه آلت کوین ها', link:'' },
                            { text:'بیت کوین', link:'' },
                            { text:'اتریوم', link:'' },
                            { text:'مفاهیم استخراج', link:'' },
                            { text:'نقشه بازار', link:'heatmap' }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
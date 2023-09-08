<template>
    <section class="support-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <v-row class="support-body">
            <v-col cols="12" class="support-title">
                شب، روز، تعطیل و غیرتعطیل فرقی نمی‌کنه، ما در کنار شما هستیم
            </v-col>
            <v-col cols="12" class="support-top">
                <div class="support-img">
                   <img :src="supportImg" alt=""> 
                </div>
                <div class="support-box">
                    <img :src="supportBox" alt="">
                    <div class="">
                        بهترین دوستان ما در بیت‌پین، کاربران ما هستند. ما بهترین دوستان‌مان را هیچ‌وقت تنها نمی‌گذاریم. بیت‌پین با روش‌های مختلف در کنار شما است تا هر سوال، مشکل یا راهنمایی لازم باشد، در سریع‌ترین زمان به شما ارائه دهیم.
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="support-subtitle">
                به اندازه ستاره‌های کهکشان راه شیری، کانال پشتیبانی داریم
            </v-col>
            <v-col cols="12" class="align-center d-flex justify-center">
                <v-row class="container" align="center">
                    <v-col cols="12" md="4" sm="6" v-for="(card, i) in cards" :key="i">
                        <v-card class="support-card text-center" min-width="100%" min-height="285" color="transparent">
                            <v-card-title>
                                <img :src="card.icon" alt="" class="d-flex mx-auto">
                            </v-card-title>
                            <v-card-text class="card-detail">
                                <div class="head">{{ card.head }}</div>
                                <div class="subtitle">{{ card.subtitle }}</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                supportImg:'/assets/images/support-img.svg',
                supportBox:'/assets/images/support-box.png',
                cards:[
                    {
                        icon:'/assets/images/guid.svg',
                        head:'مرکز راهنمای بیت‌پین',
                        subtitle:'مرکز راهنمای بیت‌پین، اولین مکان برای حل مسائل و مشکلات شما است. در این جا، تقریبا همه سوال‌های عمومی پاسخ داده شده است. همچنین شما می‌توانند با جستجو، هر آن‌چیزی که نیاز دارید پیدا کنید.'
                    },
                    {
                        icon:'/assets/images/chat-24.svg',
                        head:'چت ۲۴ ساعته آنلاین',
                        subtitle:'پشتیبانان بیت‌پین به صورت ۲۴ ساعته در خدمت شما هستند. شما با استفاده از سیستم چت آنلاین در بیت‌پین می‌توانید از پشتیبانان ما بخواهید تا شما را راهنمایی کنند.'
                    },
                    {
                        icon:'/assets/images/social-media.svg',
                        head:'شبکه‌های اجتماعی',
                        subtitle:'ما را در تلگرام، اینستاگرام، توییتر و لینکدین دنبال کنید. اخبار، اطلاعات و سوالات شما در این شبکه‌ها پاسخ داده شده است و همیشه می‌توانید درباره آخرین اتفاقات بیت‌پین در جریان باشید.'
                    },
                    {
                        icon:'/assets/images/academy.svg',
                        head:'آکادمی بیت‌پین',
                        subtitle:'ما فقط یک پلتفرم خرید و فروش نیستیم. رسالت بیت‌پین گسترش استفاده از ارزهای دیجیتال در کشور است. آکادمی بیت‌پین، در آموزش و یادگیری درباره ارزهای دیجیتال در کنار شما خواهد بود و با انواع مقالات، ویدئوها و یادداشت‌ها، به شما آموزش ارز دیجیتال می‌دهد.'
                    },
                    {
                        icon:'/assets/images/bot.svg',
                        head:'بات تلگرامی',
                        subtitle:'بات تلگرامی بیت‌ پین به صورت ۲۴ ساعته در خدمت شما است و شما می‌توانید هر گونه سوال یا ابهامی درباره نحوه کار با بیت‌پین را بپرسید و به کارشناسان بیت‌ پین متصل شوید.                  '
                    },
                    {
                        icon:'/assets/images/email.svg',
                        head:'ایمیل',
                        subtitle:'اگر پاسخ سوال‌های خود را در چت پشتیبانی یا بات پشتیبانی دریافت نکردید، یا این کانال‌ها در دسترس نبود، به ایمیل support@bitpin.ir ایمیل بزنید؛ پشتیبانان ما سریعا پاسخ شما را می‌دهند.                  '
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
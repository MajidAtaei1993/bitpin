<template>
    <section class="main-description">
        <div class="head">راحت بخر، راحت بفروش!</div>
        <div class="subheader">پلتفرم بیت‌پین تمامی امکاناتی که شما برای تشکیل سبد سرمایه‌گذاری ارز دیجیتال خود دارید، در اختیار شما می‌گذارد.</div>
        <div class="main-discription__body">
            <v-row class="items">
                <v-col cols="12" sm="3"  v-for="(item, i) in items" :key="i">
                    <v-card flat class="item" color="white" height="260">
                        <v-card-text>
                            <img :src="item.img" alt="">
                            <div class="head">{{ item.head }}</div>
                            <div class="subtitle">{{ item.subtitle }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                    { img:'/assets/images/discription/1.svg', head:'مشاهده لحظه‌ای قیمت‌ها', subtitle:'به صورت لحظه‌ای قیمت‌ها را دنبال کنید و در بهترین قیمت بخرید یا بفروشید' },
                    { img:'/assets/images/discription/2.svg', head:'بالاترین درجه امنیت', subtitle:'بیت‌پین، با طراحی فنی قوی و خط‌مشی‌های استاندارد، امنیت کامل در خرید و فروش و نگهداری ارزهای دیجیتال به وجود می‌آورد' },
                    { img:'/assets/images/discription/3.svg', head:'پشتیبانی از جفت‌ارزها', subtitle:'بیت‌پین با پشتیبانی از ارزهای مختلف، امکان پرداخت با تومان و حتی سایر رمزارزها و خرید و فروش و تبدیل آن‌ها به یکدیگر را می‌دهد' },
                    { img:'/assets/images/discription/4.svg', head:'مدیریت ریسک', subtitle:'امکان ایجاد سفارش‌گذاری با حد ضرر و سود و OCO برای مدیریت بهتر ریسک و کسب سود بیشتر' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <section class="gift-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <v-row class="hidden-sm-and-down gift-body">
            <v-col class="right">
                <div class="header">کارت هدیه</div>
                <div class="cards">
                    <div class="card">
                        <div class="head">ساخت کارت هدیه</div>
                        <img :src="create" alt="">
                    </div>
                    <div class="card">
                        <div class="head">دریافت کارت هدیه</div>
                        <img :src="receive" alt="">
                    </div>
                </div>
            </v-col>
            <v-col class="left">
                <img :src="giftCard" alt="">
            </v-col>
        </v-row>
        <div class="create-gift">
            <img class="bg" :src="createGift" alt="">
            <div class="header">هنوز کارتی نساختی، اولین کارت خود را بساز</div>
            <div class="bottom">
                <div class="head">همین الان بساز</div>
                <img class="img" max-height="180" :src="giftArrow" alt="" />
            </div>
        </div>
        <div class="faq">
            <div class="header">سوالات متداول</div>
            <v-expansion-panels>
                <v-expansion-panel v-for="(panel, i) in panels" :key="i" class="expand-panel">
                    <v-expansion-panel-header expand-icon="mdi-menu-down" class="font-xl">{{ panel.header }}</v-expansion-panel-header>
                    <v-divider />
                    <v-expansion-panel-content class="pt-5 font-lg primary--text">{{ panel.content }}</v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                giftCard:'/assets/images/gifts-card.png',
                create:'/assets/images/create-gift.svg',
                receive:'/assets/images/receive-gift.svg',
                createGift:'/assets/images/create-gift.png',
                giftArrow:'/assets/images/gift-arrow.png',
                panels:[
                    {
                        header:'حداقل و حداکثر مبلغ ایجاد کارت هدیه چقدر است؟',
                        content:'حداقل مبلغ تعیین نشده است؛ اما حداکثر مبلغ برابر با میزان سقف قابل برداشت سطح کاربری‌تان است.'
                    },
                    {
                        header:'در چه سطوحی می‌توانیم کارت هدیه ایجاد کنیم؟',
                        content:'برای ایجاد کارت هدیه باید سطح کاربری‌ خود را حداقل تا سطح 2 ارتقاء داده باشید.'
                    },
                    {
                        header:'آیا ایجاد کارت هدیه هزینه دارد؟',
                        content:'ایجاد کارت هدیه در بیت پین هیچ هزینه‌ای برای شما ندارد و رایگان است.'
                    },
                    {
                        header:'آیا انتقال کارت هدیه، کارمزد دارد؟',
                        content:'اهدا و انتقال کارت هدیه در بیت پین، برای هیچ یک از طرفین اهدا کننده و دریافت کننده، کارمزد ندارد.'
                    },
                    {
                        header:'آیا به افرادی که در صرافی بیت پین عضو نیستند می‌توان کارت هدیه ارسال کرد؟',
                        content:'برای ایجاد، استفاده و ثبت موجودی کارت هدیه، داشتن حساب کاربری در بیت پین الزامی است.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
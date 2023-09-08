<template>
    <section class="invitation-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <div class="invitation-body">
            <div class="invitation_body_header">
                <div class="bg">
                    <div class=""></div>
                    <img :src="invitationBg" alt="">
                </div>
                <span class="sub-header">پول در بیاورید، حتی در خواب</span>
                <span class="subtitle">سیستم دعوت از دوستان بیت‌پین یک روش درآمدزایی برای کاربران است، کافی‌ است ما را به دوستانتان معرفی کنید تا ما، ۳۰ درصد از کارمزد معاملات آنها را به حساب شما واریز کنیم.</span>
                <span class="sub-subtitle">خرید و فروش ارزهای دیجیتال و درآمد حاصل از سرمایه‌گذاری در آن، یک روش درآمدزایی در بیت‌پین است. روش دیگری هم وجود دارد که در آن شما مستقیما خرید و فروش نمی‌کنید؛ بلکه از خرید و فروش دیگران کسب درآمد می‌کنید. یعنی هر کدام از دوستان و یا آشنایان شما خرید و فروش کنند، بیت‌پین، قسمتی از کارمزد دریافتی از آن‌ها را به شما هدیه می‌دهد.</span>
                <div class="box">
                    <div class="head">
                        <div class="text">چگونه دوستانم را دعوت کنم</div>
                        <v-btn @click="$router.push({ name:'signin'})" class="signin-btn transition transform" depressed>ورود / ثبت نام</v-btn>
                    </div>
                    <div class="items">
                        <div class="item" v-for="(item, i) in items" :key="i">
                            <img :src="item.img" :alt="item.title" :title="item.title">
                            <div>
                                <span>{{ item.title }}</span>
                                <span>{{ item.subTitle }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                invitationBg:'/assets/images/invitation-bg.png',
                items:[
                    { title:'دعوت از دوستان', subTitle:'دوستان خود را با استفاده از شبکه‌های اجتماعی دعوت کنید', img:'/assets/images/packet.svg' },
                    { title:'دریافت لینک', subTitle:'لینک یا کد QR دعوت با تنظیمات دلخواه را دریافت نمایید', img:'/assets/images/chain.svg' },
                    { title:'ورود به حساب  کاربری', subTitle:'وارد حساب کاربری خود شده و روی «درآمدزایی با بیت‌پین» کلیک کنید', img:'/assets/images/person.svg' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
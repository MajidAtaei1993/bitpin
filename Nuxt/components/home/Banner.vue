<template>
    <section class="main-invitaion">
        <div class="image">
            <img :src="invitaion" alt="">
        </div>
        <div class="body">
            <div class="head">پول دربیاورید، حتی در خواب!</div>
            <div class="subtitle">سیستم دعوت از دوستان بیت‌پین یک روش درآمدزایی برای کاربران است، کافی‌ است ما را به دوستانتان معرفی کنید تا ما،  ۳۰ درصد از کارمزد معاملات آنها را به حساب شما واریز کنیم.</div>
            <div class="see-more">
                <v-btn color="rgb(29,30,101)" height="60" width="280" class="transition transform rounded-20">
                    <span class="secondary--text font-xl">بیشتر بدانید</span>
                </v-btn>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                invitaion:'/assets/images/invitation.svg'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
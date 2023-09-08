<template>
    <section class="main-road-start">
        <v-row justify="space-between" align="center">
            <v-col cols="auto" class="right">
                <div class="head">به راحتی خرید و فروش کنید</div>
                <div class="text">فقط با چند کلیک، حساب کاربری خود را بسازید و وارد دنیای ارزهای دیجیتال شوید</div>
                <div class="fields">
                    <v-text-field outlined hide-details="" light flat color="primary" background-color="white" label="ایمیل یا شماره همراه خود را وار کنید" class="rounded-l-0 rounded-r-xl" />
                    <v-btn depressed class="rounded-l-xl rounded-r-0" height="55" color="primary">
                        <span class="secondary--text font-xl">ثبت نام</span>
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="auto">
                <img :src="img" alt="" width="100%">
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                img:'/assets/images/main-road/main-startsvg.svg'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
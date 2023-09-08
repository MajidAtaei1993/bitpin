<template>
    <section class="singin-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <v-card color="transparent" flat width="30%" v-if="action == 'sigin'">
            <v-card-title class="d-flex align-start mb-8">
                <nuxt-link :to="{ name:'index' }">
                    <img :src="logo">
                    <h1 class="font-h1">ورود به بیت پین</h1>
                </nuxt-link>
                <v-spacer />
                <div class="pt-3 cursor-pointer" @click="action = 'register'">
                    <span class="light-purple">عضو نیستید؟</span>
                    <span class="secondary--text font-xl">ثبت نام</span>
                </div>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" class="d-flex">
                        <div class="input align-center d-flex">
                            <v-text-field filled rounded hide-details="" prepend-inner-icon="mdi-email" autofocus background-color="transparent" label="ایمیل یا شماره تلفن" flat color="secondary" />
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div class="input d-flex align-center">
                            <v-text-field :type="show ? 'text' : 'password' " prepend-inner-icon="mdi-lock"  hide-details="" label="رمز عبور" flat filled rounded background-color="transparent" color="secondary" />
                            <v-btn icon @click="show =! show">
                                <v-icon :color="show ? 'secondary' : '#6566b0' ">mdi-eye</v-icon>
                            </v-btn>
                            <span class="secondary--text font-xl pl-4 cursor-pointer" @click="action = 'forget'">فراموش کردم!</span>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-text class="pt-1">
                <v-row>
                    <v-col class="pl-0">
                        <v-btn block height="60" color="#1d1e65" class="white--text rounded-20">ورود</v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn color="#4081ec" height="60" class="rounded-20 transition transform">
                            <v-icon color="white">mdi-google</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card color="transparent" flat width="30%" v-if="action == 'register'">
            <v-card-title class="d-flex align-start mb-8">
                <nuxt-link :to="{ name:'index' }">
                    <img :src="logo">
                    <h1 class="font-h1">ثبت نام</h1>
                </nuxt-link>
                <v-spacer />
                <div class="pt-3 cursor-pointer" @click="action = 'sigin' ">
                    <span class="light-purple">عضو هستید؟</span>
                    <span class="secondary--text font-xl">ورود</span>
                </div>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <div class="input d-flex align-center">
                            <v-text-field hide-details="" filled rounded prepend-inner-icon="mdi-email" autofocus background-color="transparent" label="ایمیل یا شماره تلفن" flat color="secondary" />
                        </div>
                    </v-col>
                    <v-col class="py-0 d-flex align-center" cols="12">
                        <v-checkbox dense off-icon="mdi-checkbox-blank" on-icon="mdi-checkbox-marked" color="secondary" class="mt-2" />
                        <div class="font-lg white--text">
                            با زدن این دکمه، <span class="secondary--text font-lg">قوانین و مقررات </span> این سایت را می پذیرم .
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div class="input d-flex align-center">
                            <v-text-field background-color="transparent" prepend-inner-icon="mdi-account-box-outline" hide-details="" label="کد دعوت (اختیاری)" filled rounded flat color="secondary" />
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-text class="pt-1">
                <v-row>
                    <v-col>
                        <v-btn block height="60" color="#1d1e65" class="white--text rounded-20">ثبت نام</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card color="transparent" flat width="30%" v-if="action == 'forget'">
            <v-card-title class="d-flex align-start pb-3">
                <nuxt-link :to="{ name:'index' }">
                    <img :src="logo">
                    <h1 class="font-h1">فراموشی رمز عبور</h1>
                </nuxt-link>
                <v-spacer />
                <div class="pt-3 cursor-pointer" @click="action = 'register'">
                    <span class="secondary--text font-xl">بازگشت</span>
                    <v-icon color="secondary">mdi-menu-left</v-icon>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="font-xl white--text">ایمیل یا شماره تلفنی که با آن ثبت نام کرده اید را وارد کنید.</div>
                <div class="font-lg mt-3 white--text">
                    <span class="error--text font-lg">توجه: </span>
                    بعد از تغییر رمز عبور، تا 24 ساعت امکان برداشت ریالی و رمزارزی نخواهید داشت.
                </div>
            </v-card-text>
            <v-card-text>
                <div class="input align-center d-flex">
                    <v-text-field filled rounded hide-details="" prepend-inner-icon="mdi-email" autofocus background-color="transparent" label="ایمیل یا شماره تلفن" flat color="secondary" v-model="forget" />
                </div>
            </v-card-text>
            <v-card-actions class="px-4">
                <v-btn block depressed :disabled="forget == ''" color="secondary" class="rounded-15" height="60">
                    <span class="primary--text font-lg">ارسال کد</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </section>
</template>

<script>
    export default {
        mounted(){
            this.action = 'sigin'
        },
        data(){
            return{
                logo:'/assets/images/logo.svg',
                show:null,
                action:[ 'sigin', 'register' , 'forget'],
                forget:'',
            }
        }
    }
</script>

<style lang="scss" scoped>
.v-label {
    color: #6566b0 !important;
}
</style>
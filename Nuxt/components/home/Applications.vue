<template>
    <section class="main-discription__body">
        <div class="bottom">
            <v-row justify="space-between" align="center">
                <v-col cols="12" sm="5">
                    <div class="head">دانلود اپلیکیشن بیت‌پین</div>
                    <v-row align="center" justify="center" class="apps">
                        <v-col cols="12" sm="6" v-for="(item, i) in apps" :key="i">
                            <v-hover v-slot="{ hover }">
                                <v-card flat color="transparent" :hover="hover">
                                    <img :src="hover ? item.imgHover : item.img" />
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="7">
                    <v-hover v-slot="{ hover }">
                        <v-card :hover="hover" color="transparent" flat>
                            <v-img :src="hover ? light : dark " />
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                dark:'/assets/images/discription/res-dark.png',
                light:'/assets/images/discription/res-light.png',
                apps:[
                    {img:'/assets/images/discription/iphone.svg', imgHover:'/assets/images/discription/iphone-hover.svg'},
                    {img:'/assets/images/discription/andriod.svg', imgHover:'/assets/images/discription/andriod-hover.svg'},
                    {img:'/assets/images/discription/myket.svg', imgHover:'/assets/images/discription/mykey-hover.svg'},
                    {img:'/assets/images/discription/bazar.svg', imgHover:'/assets/images/discription/bazar-hover.svg'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
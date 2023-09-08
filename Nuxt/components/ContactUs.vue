<template>
    <section class="contactus-section">
        <v-btn depressed color="#1ec743" fab class="sigin-support-btn">
            <v-icon color="white">mdi-message</v-icon>
        </v-btn>
        <div class="contactus-body">
            <div class="map">
                <img :src="map" alt="">
            </div>
            <div class="shadow"></div>
            <div class="blend"></div>
            <div class="gradiant"></div>
            <div class="marker">
                <img :src="location" class="mb-14" alt="">
                <v-btn depressed class="button font-lg secondary--text rounded-15 transition transform" height="50" color="rgba(149,150,245,.2)">نمایش در گوگل مپ</v-btn>
            </div>
            <div class="box">
                <div class="box-details" v-for="(box, i) in boxes" :key="i">
                    <div class="header">{{ box.header }}</div>
                    <div class="text">{{ box.subtitle }}</div>
                    <div class="text">{{ box.text }}</div>
                </div>
                <div class="error--text font-md pt-2">مراجعات حضوری صرفا با هماهنگی قبلی</div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                map:'/assets/images/map-bg.png',
                location:'/assets/images/location.svg',
                boxes:[
                    {
                        header:'  دفتر عملیات: ',
                        text:'منطقه آزاد تجاری انزلی، بلوار فاتحی'
                    },
                    {
                        header:'دفتر بازرگانی:',
                        text:'تهران، پاسداران، گلستان سوم'
                    },
                    {
                        header:'تلفن تماس (صرفا برای امور اداری) ',
                        subtitle:'۰۲۱-۲۸۴۲۸۶۰۲',
                        text:'ساعت تماس: ۹ صبح تا ۵ بعد از ظهر'
                    },
                    {
                        header:'پست الکترونیک',
                        text:'support@bitpin.ir'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
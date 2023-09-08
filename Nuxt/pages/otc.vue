<template>
    <div>
        <AppHeader />
        <Otc :currencies = "currencies"  />
    </div>
</template>

<script>
import Otc from '@/components/Otc.vue'
import AppHeader from '@/components/common/AppHeader.vue'
    export default {
        components :{ Otc, AppHeader },
        data(){
            return{
                currencies:[]
            }
        },
        mounted(){
            this.getCurrencys()
            if (this.$vuetify.breakpoint.xl) {
                return 4
            }
            if (this.$vuetify.breakpoint.lg) {
                return 3
            }
            if (this.$vuetify.breakpoint.md) {
                return 2
            }
            return 1
        },
        methods:{
            getCurrencys(){
                this.$store.dispatch('getCurrency')
                .then(resp=>{
                    this.currencies = resp.results
                    setTimeout(() => {
                        this.getCurrencys()
                    }, 3000);
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

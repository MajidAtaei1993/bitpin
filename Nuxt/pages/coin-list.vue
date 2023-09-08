<template>
    <div>
        <AppHeader />
        <CoinList />
    </div>
</template>

<script>
import CoinList from '@/components/CoinList.vue'
import AppHeader from '@/components/common/AppHeader.vue'
    export default {
        components: { CoinList, AppHeader }
    }
</script>

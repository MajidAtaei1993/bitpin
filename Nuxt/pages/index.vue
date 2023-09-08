<template>
    <div>
        <AppHeader />
        <Home />
    </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
import Home from '@/components/home/Index.vue'
    export default {
        components: {AppHeader, Home}
    }
</script>

<style lang="scss" scoped>

</style>
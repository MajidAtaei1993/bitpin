<template>
    <div>
        <AppHeader />
        <Rules />
    </div>
</template>

<script>
import Rules from '@/components/Rules.vue'
import AppHeader from '@/components/common/AppHeader.vue'
    export default {
        components :{ Rules, AppHeader }
    }
</script>

<template>
    <div>
        <AppHeader />
        <Gift />
    </div>
</template>

<script>
import Gift from '@/components/Gift.vue'
import AppHeader from '@/components/common/AppHeader.vue'
    export default {
        components :{ Gift, AppHeader }
    }
</script>

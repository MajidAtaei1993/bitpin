<template>
    <div>
        <AppHeader />
        <Career />
    </div>
</template>

<script>
import Career from '@/components/Career.vue'
import AppHeader from '@/components/common/AppHeader.vue'
    export default {
        components: { Career, AppHeader }
    }
</script>

<template>
    <div>
        <AppHeader />
        <UserLevels />
    </div>
</template>

<script>
import UserLevels from '@/components/UserLevels.vue'
import AppHeader from '@/components/common/AppHeader.vue'
    export default {
        components :{ UserLevels, AppHeader }
    }
</script>

<template>
    <div>
        <AppHeader />
        <Invitation />
    </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
import Invitation from '@/components/Invitation.vue'
    export default {
        components: {
            AppHeader,
            Invitation
        }
    }
</script>
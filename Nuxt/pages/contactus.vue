<template>
    <div>
        <AppHeader />
        <ContactUs />
    </div>
</template>

<script>
import ContactUs from '@/components/ContactUs.vue'
import AppHeader from '@/components/common/AppHeader.vue'
    export default {
        components :{ ContactUs, AppHeader }
    }
</script>

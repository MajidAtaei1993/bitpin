<template>
	<v-app>
		<v-main>
			<Nuxt />
		</v-main>
		<AppFooter v-if="routes.includes($route.name)" />
	</v-app>
</template>

<script>
import AppFooter from '@/components/common/AppFooter.vue'
  export default {
    components:{AppFooter},
	data(){
		return{
			routes:[
				'index',
				'career',
				'aboutus',
				'career',
				'contact-us',
				'rules',
				'support',
				'user-levels'
			]
		}
	}
  }
</script>

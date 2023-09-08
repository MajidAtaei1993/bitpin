import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - bitpin',
        title: 'bitpin',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/style.css',
        '@/assets/font/font.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // { src: '~/plugins/vue-graph.js' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        rtl: true,
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        options: {
            rtl: true,
            customeProperties: true
        },
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: '#050846',
                    accent: colors.grey.darken3,
                    secondary: '#48fb6f',
                    info: colors.teal.lighten1,
                    warning: '#f84960',
                    error: '#ed465c',
                    success: '#02c076',
                    azerColor: '#ff4040'
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // vendor: ['vue-graph'],

        // extend(config, ctx) {
        //     const vueLoader = config.module.rules.find(
        //         rule => rule.loader === "vue-loader"
        //     );
        //     vueLoader.options.transformToRequire = {
        //         img: "src",
        //         image: "xlink:href",
        //         "v-img": "src",
        //         "v-img-lazy": ["src", "blank-src"],
        //         "v-card": "img-src",
        //         "v-card-img": "img-src",
        //         "v-carousel-slide": "img-src",
        //         "v-embed": "src"
        //     };
        // }
    }
}
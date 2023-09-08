import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
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
});
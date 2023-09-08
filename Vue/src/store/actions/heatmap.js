import axios from 'axios'

export default {

    async getMarketCaps({ commit }) {
        return new Promise((resolve, reject) => {
            axios({
                    url: 'https://api.bitpin.ir/v1/cnt/market_caps/',
                    method: 'GET'
                })
                .then(resp => {
                    resolve(resp.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}
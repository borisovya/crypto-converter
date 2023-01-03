import axios from 'axios'


export const instance = axios.create({
    baseURL: 'https://min-api.cryptocompare.com',
    withCredentials: true,
})

export const currencyAPI = {
    getCurrencies() {
        return instance.get('/data/top/totalvolfull?limit=10&tsym=USD')
    },

}

export const utilService = {
    store,
    load,
    makeId
}

export function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function store(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}

//AXIOS API

// import axios from 'axios';
// import { utilService } from './utilService';

// const ITEM_API = 'https://blockchain.info/tobtc?currency=USD&value=1';
// const ITEM_KEY = 'Bitcoin_Rate'
// export const itemService = {
//     getRate,
//     getMarketPrice,
//     // getConfirmedTransactions
// }

// async function getRate() {
//     const rate = utilService.load(ITEM_KEY)
//     if (rate) return rate
//     try {
//         const res = await axios.get(ITEM_API)
//         utilService.store(ITEM_KEY, res.data)
//         return res.data;
//     }
//     catch (err) {
//         console.log('Cant get Rate', err)
//         throw err
//     }
// }

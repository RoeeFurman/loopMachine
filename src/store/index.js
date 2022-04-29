import { createStore } from 'vuex'
import itemStore from './modules/item-module.js'

// create a store instance
const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        itemStore,
    },
})

export default store

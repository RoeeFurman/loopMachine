import itemService from '../../services/itemService.js'

export default {
    state: {
        items: null,
        filterBy: null,
        isPlaying: false,
        isLooping: false,
        isStopped: false,
    },
    getters: {
        getItems(state) {
            return state.items
        },
        isPlaying(state) {
            return state.isPlaying
        },
        isLooping(state) {
            return state.isLooping
        },
        isStopped(state) {
            return state.isStopped
        }
    },
    mutations: {
        setIsLooping(state, { isPlaying }) {
            state.isLooping = !state.isLooping;
        },
        setIsPlaying(state, { isLooping }) {
            state.isPlaying = !state.isPlaying;
        },
        setStopPlaying(state, { isStopped }) {
            state.isStopped = !state.isStopped
        },
        setItems(state, { items }) {
            state.items = JSON.parse(JSON.stringify(items))
        },
        removeItem(state, { id }) {
            const idx = state.items.findIndex((item) => item._id === id)
            state.items.splice(idx, 1)
        },
        saveItem(state, { item }) {
            const idx = state.items.findIndex((currItem) => currItem._id === item._id)
            if (idx !== -1) state.items.splice(idx, 1, item)
            else state.items.push(item)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
    },
    actions: {
        togglePlaying({ commit, state }) {
            commit({ type: 'setIsPlaying' })
        },
        stopPlaying({ commit, state }) {
            commit({ type: 'setStopPlaying' })
        },
        toggleLoop({ commit, state }) {
            commit({ type: 'setIsLooping' })
        },
        // async muteChannel(context, { id }) {
        //     const currChannel = await itemService.muteChannel(id)
        //     context.dispatch('loadItems')
        // },
        // async loadItems({ commit, state }) {
        //     try {
        //         const items = await itemService.query(state.filterBy)
        //         commit({ type: 'setItems', items })
        //     } catch (err) {
        //         console.log('loadItems err', err);
        //     }
        // },
        muteChannel(context, { id }) {
            const currChannel = itemService.muteChannel(id)
            context.dispatch('loadItems')
        },
        loadItems({ commit, state }) {
            const items = itemService.query(state.filterBy)
            commit({ type: 'setItems', items })
        },
    },
}

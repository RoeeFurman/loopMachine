import { createStore } from 'vuex'
import layerService from '../services/layerService.js'

// create a store instance
const store = createStore({
    state: {
        layers: null,
        isPlaying: false,
        isLooping: false,
        isStopped: false,
        soundDuration: 17.487938,
        cursorMovedTo: 0,
        cursorProgress: 0
    },
    getters: {
        getlayers({ layers }) {
            return layers
        },
        isPlaying({ isPlaying }) {
            return isPlaying
        },
        isLooping({ isLooping }) {
            return isLooping
        },
        isStopped({ isStopped }) {
            return isStopped
        },
        cursorMovedTo({ cursorMovedTo }) {
            return cursorMovedTo
        },
        soundDuration({ soundDuration }) {
            return soundDuration
        },
        cursorProgress({ cursorProgress }) {
            return cursorProgress
        }
    },
    mutations: {
        setIsLooping(state) {
            state.isLooping = !state.isLooping;
        },
        setIsPlaying(state) {
            state.isPlaying = !state.isPlaying;
        },
        setStopPlaying(state) {
            state.isStopped = !state.isStopped
        },
        setLayers(state, { layers }) {
            state.layers = JSON.parse(JSON.stringify(layers))
        },
        onCursorMove(state, { currTime }) {
            state.cursorMovedTo = currTime
        },
        setProgress(state, { progress }) {
            state.cursorProgress = progress
        }
    },
    actions: {
        muteChannel(context, { id }) {
            layerService.muteChannel(id)
            context.dispatch('loadLayers')
        },
        loadLayers({ commit, state }) {
            const layers = layerService.query()
            commit({ type: 'setLayers', layers })
        },
    },
})

export default store

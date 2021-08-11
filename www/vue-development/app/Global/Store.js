import Vuex from 'vuex';

const store = new Vuex.Store({
    modules : {
        global: {
            namespaced: true,
            state: {
                api: null,
                lang: 'cz',
                storeTitle: null
            },
            mutations: {
                setApi (state, api) {
                    state.api = api;
                },
                setLang (state, lang) {
                    state.lang = lang;
                },
                setStoreTitle (state, storeTitle) {
                    state.storeTitle = storeTitle;
                }
            },
            actions: {
                init ({ commit }, payload ) {
                    commit('setApi', payload.api)
                    commit('setLang', payload.lang)
                    commit('setStoreTitle', payload.storeTitle)
                },
            }, 
            getters: {
                api: state => {
                    return state.api
                },
                lang: state => {
                    return state.lang
                },
                storeTitle: state => {
                    return state.storeTitle
                },
            }
        }
    }
}); 

export default store;
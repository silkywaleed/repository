import { createStore } from 'vuex'
import config from './modules/config'
import auth from './modules/auth'
import settings from './modules/settings'

export default createStore({
    namespaced: true,
    modules: {
        config,
        auth,
        settings
    },
});
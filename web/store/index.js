import { Store } from 'vuex'

import commonModule from './modules/common'
import workModule from './modules/work'
import innoModule from './modules/innovation'

const createStore = () => {
    return new Store({
        namespaced: true,
        modules: {
            common: commonModule,
            work: workModule,
            innovation: innoModule
        }
    })
}

export default createStore
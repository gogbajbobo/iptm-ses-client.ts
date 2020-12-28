// import { InjectionKey } from 'vue'
// import { useStore as baseUseStore, Store } from 'vuex'
import { createStore } from 'vuex'
// // import { rootStoreModule } from './root'
// import { RootState } from './root/state'
// import { counterStoreModule } from './counter'
// // import { CounterState } from './counter/state'

// export const key: InjectionKey<Store<RootState>> = Symbol()

// export const store = createStore({
//     modules: {
//         // root: rootStoreModule,
//         counter: counterStoreModule,
//     }
// })
//
// export const useStore = (): Store<RootState> => {
//     return baseUseStore(key)
// }

import { test } from './test'

export const store = createStore({

    modules: {
        test
    },

    strict: process.env.NODE_ENV !== 'production',

})

import { InjectionKey } from 'vue'
import { useStore as baseUseStore, Store } from 'vuex'
import { rootStore } from './root'
import { RootState } from './root/state'

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = rootStore

export const useStore = (): Store<RootState> => {
    return baseUseStore(key)
}

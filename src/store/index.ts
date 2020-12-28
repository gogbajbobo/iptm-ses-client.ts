import { createStore } from 'vuex'

interface IRootState {
    count: number
}

export const store = createStore({
    state(): IRootState {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state: IRootState) {
            state.count++
        }
    }
})

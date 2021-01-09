import { ActionContext, ActionTree } from 'vuex'

import { IRootState, UserType } from '@/store/interfaces'
import { StoreState } from './state'
import { ActionTypes, MutationTypes } from './types'

import { getExaminees, updateExaminee } from '@/services/network/modules/examinees'

type Context = ActionContext<StoreState, IRootState>
type Actions = ActionTree <StoreState, IRootState>

export interface IActions {
    [ActionTypes.GET_EXAMINEES]: (context: Context) => Promise<any>
    [ActionTypes.UPDATE_EXAMINEE]: (context: Context, examinee: UserType) => Promise<any>
}

export const actions: Actions & IActions = {

    [ActionTypes.GET_EXAMINEES]: ({ commit }) => {
        return getExaminees().then(data => commit(MutationTypes.SET_EXAMINEES, data))
    },

    [ActionTypes.UPDATE_EXAMINEE]: ({ commit }, examinee) => {

        return updateExaminee(examinee.id, { examinee })
            .then(examinee => commit(MutationTypes.REPLACE_EXAMINEE, examinee))

    },

}

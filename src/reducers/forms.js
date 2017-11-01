import { UPDATE_FORMS } from '../constants/actionTypes'

const defaultState = {
    signInError: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FORMS:
            return {
                ...state,
                signInError: action.error === 'signIn'
            }

        default: return state
    }
}
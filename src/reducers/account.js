import { UPDATE_ACCOUNT } from '../constants/actionTypes'

const defaultState = {
    loggedIn: false,
    screenName: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_ACCOUNT:
            return {
                ...state,
                screenName: action.screenName,
                loggedIn: (typeof action.screenName === 'string' && action.screenName.length > 0 && action.screenName !== 'false')
            }

        default: return state
    }
}
import { APP_LOADED, USER_LOGGED_IN } from '../constants/actionTypes'

const defaultState = {
    appLoaded: false,
    currentUser: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOADED:
            return {
                ...state,
                appLoaded: true
            }

        case USER_LOGGED_IN:
            return {
                ...state,
                currentUser: action.user
            }

        default: return state;
    }
}
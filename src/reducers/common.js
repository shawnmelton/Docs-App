import { APP_LOADED } from '../constants/actionTypes'

const defaultState = {
    appLoaded: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOADED:
            return {
                ...state,
                appLoaded: true
            }

        default: return state;
    }
}
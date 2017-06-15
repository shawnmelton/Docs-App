import { APP_LOADED } from '../constants/actionTypes'

const defaultState = {
    appLoaded: false
}

export default (state = {}, action) => {
    switch (action.type) {
        case APP_LOADED: 
            console.log('Action: ', action)
            console.log('State: ', state)
            return {
                ...state,
                appLoaded: true
            }

        default: return state;
    }
}
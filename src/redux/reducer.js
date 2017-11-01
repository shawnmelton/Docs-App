import { combineReducers } from 'redux'
import account from '../reducers/account'
import common from '../reducers/common'
import forms from '../reducers/forms'
import routes from '../reducers/routes'

export default combineReducers({
    account,
    common,
    forms,
    routes
})
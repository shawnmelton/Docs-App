import storage from './data/localStorage'
import store from '../redux/store'
import { UPDATE_ACCOUNT } from '../constants/actionTypes'

class AccountService {
    constructor() {
        this.token = '_docsapp_account_'
        this._update()
    }

    _update() {
        let screenName = storage.getItem(this.token)
        store.dispatch(sendAccountUpdate(screenName))
    }

    logIn(screenName) {
        storage.setItem(this.token, screenName)
        store.dispatch(sendAccountUpdate(screenName))
    }

    logOut() {
        storage.setItem(this.token, 'false')
        store.dispatch(sendAccountUpdate(null))
    }
}

const sendAccountUpdate = screenName => {
    return {
        type: UPDATE_ACCOUNT,
        screenName: screenName
    } 
}

const service = new AccountService()
export default service
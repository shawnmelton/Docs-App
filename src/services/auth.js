import AjaxMethods from './xhr/AjaxMethods'
import AjaxRequest from './xhr/AjaxRequest'
import API_URLS from '../constants/api'

class AuthService {
    async send(body) {
        const url = API_URLS.BASE + API_URLS.AUTH
        const request = new AjaxRequest(AjaxMethods.POST, url)
        request.setBody(body)
        return await request.call()
    }
}

const service = new AuthService()

export default service
import logger from '../logger'
import 'whatwg-fetch'

class AjaxRequest {
    constructor(method, url) {
        this.method = method
        this.url = url
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        this.body = ''
    }

    async call() {
        const requestObj = {
            method: this.method,
            headers: this.headers
        }

        if (this.body !== '') {
            requestObj.body = this.body
        }

        logger.log('AjaxRequest', requestObj)

        const response = await fetch(this.url, requestObj)
        const json = response.json()

        logger.log('AjaxRequest', json)

        return json
    }

    setBody(object) {
        this.body = JSON.stringify(object)
    }
}

export default AjaxRequest
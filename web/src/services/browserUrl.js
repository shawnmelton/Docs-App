import createHistory from 'history/createBrowserHistory'

class BrowserUrl {
    constructor() {
        this.history = createHistory()
    }

    update(url) {
        this.history.push(url)
    }
}

const browserUrl = new BrowserUrl()

export default browserUrl;
import createHistory from 'history/createBrowserHistory'

import { ROUTES } from '../constants/routes'

class Browser {
    constructor() {
        if (typeof window === 'object') {
            this.history = createHistory()
        } else {
            this.history = {
                location: {
                    pathname: '/'
                },
                urls: [],
                push: (url) => {
                    this.urls.push(url)
                }
            }
        }

        this.url = null
    }

    getRoute() {
        if (this.url === null) {
            this.setUrl(this.history.location.pathname)
        }

        switch (this.url) {
            case '/sign-in': return ROUTES.SIGN_IN
            default: return ROUTES.HOME
        }
    }

    navigate(url) {
        this.setUrl(url)
        this.history.push(url)
    }

    setUrl(url) {
        this.url = url
    }
}

const browser = new Browser()

export default browser
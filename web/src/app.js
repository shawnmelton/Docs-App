import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import Root from './components/root'
import Home from './components/home'

import createHistory from 'history/createBrowserHistory'
import store from './redux/store'

const routerHistory = createHistory()

ReactDOM.render((
    <Provider store={store}>
        <Router history={routerHistory}>
            <Root>
                <Route exact path="/" component={Home} />
            </Root>
        </Router>
    </Provider>
), document.getElementById('root'))
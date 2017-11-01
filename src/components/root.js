import React from 'react'
import { connect } from 'react-redux'
import { APP_LOADED } from '../constants/actionTypes'
import { ROUTES, ROUTE_CHANGE, ROUTE_INITIAL } from '../constants/routes'
import logger from '../services/logger'
import template from '../jsx/root'

export class Root extends React.Component {
    componentDidMount() {
        logger.setOutput(true)
        logger.log('Root', 'App has been loaded.')

        this.props.onLoad()
        if (this.props.userLoggedIn === null && this.props.currentRoute !== ROUTES.SIGN_IN && this.props.currentRoute !== ROUTES.HOME) {
            this.props.routeSignIn()
        }
    }

    onLogoClick() {
        this.props.routeHome()
    }

    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
    userLoggedIn: state.account.loggedIn,
    currentRoute: state.routes.currentRoute
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch({
        type: APP_LOADED
    }),

    routeHome: () => dispatch({
        type: ROUTE_CHANGE,
        route: ROUTES.HOME
    }),

    routeSignIn: () => dispatch({
        type: ROUTE_CHANGE,
        route: ROUTES.SIGN_IN
    })
})

const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)

export default RootContainer
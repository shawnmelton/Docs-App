import React from 'react'
import { connect } from 'react-redux'
import { APP_LOADED } from '../constants/actionTypes'
import { ROUTES, ROUTE_CHANGE, ROUTE_INITIAL } from '../constants/routes'

import template from '../jsx/root'

export class Root extends React.Component {
    componentDidMount() {
        this.props.onLoad()
        if (this.props.currentUser === null && this.props.currentRoute !== ROUTES.SIGN_IN && this.props.currentRoute !== ROUTES.HOME) {
            this.props.routeSignIn()
        }
    }

    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
    currentUser: state.common.currentUser,
    currentRoute: state.routes.currentRoute
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch({
        type: APP_LOADED
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
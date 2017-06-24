import React from 'react'
import { connect } from 'react-redux'

import { ROUTE_CHANGE, ROUTES } from '../../constants/routes'
import browserUrl from '../../services/browserUrl'
import template from '../../jsx/header/accountMenu'

export class AccountMenu extends React.Component {
    onSignInClick(e) {
        e.preventDefault();
        browserUrl.update('/sign-in')
        this.props.routeToSignIn()
    }

    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({
    currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
    routeToSignIn: () => dispatch({
        type: ROUTE_CHANGE,
        route: ROUTES.SIGN_IN
    })
})

const AccountMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountMenu)

export default AccountMenuContainer
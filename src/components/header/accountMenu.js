import React from 'react'
import { connect } from 'react-redux'

import browser from '../../services/browser'
import template from '../../jsx/header/accountMenu'
import { ROUTE_CHANGE } from '../../constants/routes'

export class AccountMenu extends React.Component {
    onSignInClick(e) {
        e.preventDefault();
        browser.navigate('/sign-in')
        this.props.route(browser.getRoute())
    }

    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({
    currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
    route: (route) => dispatch({
        type: ROUTE_CHANGE,
        route: route
    })
})

const AccountMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountMenu)

export default AccountMenuContainer
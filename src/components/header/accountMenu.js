import React from 'react'
import { connect } from 'react-redux'

import browser from '../../services/browser'
import template from '../../jsx/header/accountMenu'
import { ROUTE_CHANGE } from '../../constants/routes'

export class AccountMenu extends React.Component {
    onLinkClick(e) {
        e.preventDefault();
        if (this.props.userLoggedIn === false) {
            browser.navigate('/sign-in')
            this.props.route(browser.getRoute())
        } else {
            console.log('TODO - Go to account')
        }
    }

    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({
    userLoggedIn: state.account.loggedIn,
    userScreenName: state.account.screenName
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
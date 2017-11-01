import accountService from '../../services/account'
import AjaxResponse from '../../services/xhr/ajaxResponse'
import authService from '../../services/auth'
import browser from '../../services/browser'
import { connect } from 'react-redux'
import logger from '../../services/logger'
import notEmptyValidator from '../../services/validators/notEmpty'
import React from 'react'
import { ROUTES, ROUTE_CHANGE } from '../../constants/routes'
import template from '../../jsx/views/signIn'
import { UPDATE_FORMS } from '../../constants/actionTypes'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.formUsername = ''
        this.formPassword = ''
    }

    onSubmit(e) {
        e.preventDefault()

        logger.log('Login', 'Form successfully submitted.  Preparing to validate.')
        this.props.setError(false)

        if (this.validated()) {
            logger.log('Login', 'Form submission passed validation.')
            logger.log('Login', this.formUsername + ' - '+ this.formPassword)

            authService.send({
                screenName: this.formUsername,
                password: this.formPassword
            }).then(r => {
                const response = new AjaxResponse(r)
                logger.log('Login', response.getResult())
                if (response.isValid() && response.getResult().data === true) {
                    accountService.logIn(this.formUsername)
                    browser.navigate('/dashboard')
                    this.props.route(ROUTES.DASHBOARD)
                } else {
                    this.props.setError('signIn')
                }
            })
        } else {
            logger.log('Login', 'Form submission failed validation.')
            this.props.setError('signIn')
        }
    }

    render() {
        return template(this)
    }

    updatePassword(password) {
        this.formPassword = password
    }

    updateUsername(username) {
        this.formUsername = username
    }

    validated() {
        return notEmptyValidator.run(this.formUsername) &&
            notEmptyValidator.run(this.formPassword)
    }
}

const mapStateToProps = state => ({
    loggedIn: state.account.loggedIn,
    formError: state.forms.signInError
})

const mapDispatchToProps = dispatch => ({
    route: (route) => dispatch({
        type: ROUTE_CHANGE,
        route: route
    }),

    setError: (error) => dispatch({
        type: UPDATE_FORMS,
        error: error
    })
})

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)

export default SignInContainer
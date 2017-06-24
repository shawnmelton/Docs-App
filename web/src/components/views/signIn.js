import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/views/signIn'

export class SignIn extends React.Component {
    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)

export default SignInContainer
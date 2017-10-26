import React from 'react'

import { ROUTES } from '../../constants/routes'

import Home from '../../components/views/home'
import SignIn from '../../components/views/signIn'

const template = (component) => {
    return (
        <div className="p20-25">
            { component.props.currentRoute === ROUTES.HOME ? <Home /> : '' }
            { component.props.currentRoute === ROUTES.SIGN_IN ? <SignIn /> : '' }
        </div>
    )
}

export default template
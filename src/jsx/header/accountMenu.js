import React from 'react'

const template = (component) => {
    return (
        <a className="block absolute right0 top0 p15-20 clearFix cursor" onClick={component.onLinkClick.bind(component)}>
            <span className="block left mr10 material-icons fs175 txtGrey">account_circle</span>
            <strong className="block left pt5">{ component.props.userLoggedIn === true ? component.props.userScreenName : 'Log In' }</strong>
        </a>
    )
}

export default template
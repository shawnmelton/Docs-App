import React from 'react'

const template = (component) => {
    return (
        <div className="absolute right0 top0 p20-25">
            { component.props.currentUser !== null ? <strong>USERNAME</strong> : <a className="cursor" onClick={component.onSignInClick.bind(component)}>Log In</a> }
        </div>
    )
}

export default template
import React from 'react'
import AccountMenu from '../components/header/accountMenu'
import Views from '../components/views/index'

const template = (component) => {
    return (
        <div>
            <header className="bgWhite p15-20 boxShadow">
                <h1 className="fs150 cursor" onClick={component.onLogoClick.bind(component)}>
                    <span className="txtGrey">Dev</span><strong>Docs</strong>
                </h1>
                <AccountMenu />
            </header>
            <Views />
        </div>
    )
}

export default template
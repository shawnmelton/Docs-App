import React from 'react'

const template = (component) => {
    return (
        <div className={component.props.classes}>
            <label className="dBlock mb10" htmlFor={component.props.id}>{component.props.label}</label>
            <div className="border borderDkGrey bgWhite p5-10 clearFix formFieldContainer">
                <span className="material-icons dBlock left txtCenter borderBox">{component.props.icon}</span>
                <input type={component.props.validation === 'password' ? 'password' : 'text'} 
                    name={component.props.id}
                    id={component.props.id}
                    placeholder={component.props.label}
                    className="dBlock noBorder bgTransparent left fs110 p5-10 borderBox" />
            </div>
        </div>
    )
}

export default template
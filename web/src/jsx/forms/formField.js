import React from 'react'

const template = (component) => {
    return (
        <div>
            <label htmlFor={component.props.id}>{component.props.label}</label>
            <div className="border borderDkGrey bgWhite p10-15">
                <span className="material-icons">{component.props.icon}</span>
                <input type="text" name={component.props.id} id={component.props.id} className="widthFull noBorder bgTransparent" />
            </div>
        </div>
    )
}

export default template
import React from 'react'
import FormField from '../../components/forms/formField'

const template = (component) => {
    return (
        <form className="p20-25">
            <h2 className="mb25">Sign In</h2>
            <div className="bgWhite p20-25 boxShadow">
                <fieldset>
                    <FormField label="Username" validation="text" id="username" icon="account_circle" />
                </fieldset>
                <div>
                    <a className="block p20-25 bgBlue txtWhite">Submit</a>
                </div>
            </div>
        </form>
    )
}

export default template
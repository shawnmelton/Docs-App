import React from 'react'
import FormField from '../../components/forms/formField'

const template = (component) => {
    return (
        <form className="p20-25">
            <h2 className="mb25">Sign In</h2>
            <div className="bgWhite p20-25 boxShadow maxWidth400">
                <fieldset>
                    <FormField label="Username" validation="text" id="username" icon="account_circle" classes="mb15" />
                    <FormField label="Password" validation="password" id="password" icon="vpn_key" classes="mb25" />
                </fieldset>
                <div>
                    <a className="block p20-25 bgBlue txtWhite boxShadow cursor txtShadow txtUpperCase txtCenter fs110">Submit</a>
                </div>
            </div>
        </form>
    )
}

export default template
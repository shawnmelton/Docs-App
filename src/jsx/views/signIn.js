import React from 'react'
import FormField from '../../components/forms/formField'

const template = (component) => {
    return (
        <form className="p20-25" onSubmit={component.onSubmit.bind(component)}>
            <h2 className="mb25">Sign In</h2>
            { component.props.formError ? <p className="txtRed mb15 fw800">The credentials you provided are not valid.  Please try again.</p> : '' }
            <div className="bgWhite p20-25 boxShadow maxWidth400">
                <fieldset>
                    <FormField label="Username" validation="text" id="username" icon="account_circle" classes="mb15" required="true" changeAction={(e) => {
                            component.updateUsername(e.target.value)
                        }} />
                    <FormField label="Password" validation="password" id="password" icon="vpn_key" classes="mb25" required="true" changeAction={(e) => {
                            component.updatePassword(e.target.value)
                        }} />
                </fieldset>
                <div>
                    <button type="submit" className="block p15-25 bgBlue txtWhite boxShadow cursor txtShadow txtUpperCase txtCenter fs110 center">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default template
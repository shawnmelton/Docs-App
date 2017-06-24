import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/forms/formField'

export class FormField extends React.Component {
    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const FormFieldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormField)

export default FormFieldContainer
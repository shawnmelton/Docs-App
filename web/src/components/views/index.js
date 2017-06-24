import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/views/index'

class Views extends React.Component {
    componentDidMount() {
        console.log('Current route: ', this.props.currentRoute)
    }

    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({
    currentRoute: state.routes.currentRoute
})

const mapDispatchToProps = dispatch => ({})

const ViewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Views)

export default ViewsContainer
import React from 'react'
import { connect } from 'react-redux'
import { APP_LOADED } from '../constants/actionTypes'

export class Root extends React.Component {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        return (
            <div>
                { this.props.appLoaded ? <h2>Loaded!</h2> : '' }
                { this.props.children }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch({
        type: APP_LOADED
    })
})

const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)

export default RootContainer
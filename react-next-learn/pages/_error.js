import React, { Component } from 'react'

export default class Error extends Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render() {
        return <div>
            {
                JSON.stringify(this.props)
            }
        </div>
    }
}
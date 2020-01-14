import React, { Component } from 'react'
import firebase from 'firebase'
import { Redirect, Route } from 'react-router-dom'

export default class PrivateRouter extends Component {
    render() {
        const RenderChild=firebase.auth().currentUser
        ? this.props.children
        : <Redirect to="/login"/>
        return (
            <div>
                <Route>
                    {RenderChild}
                </Route>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        if(this.props.Loading) {
            return (
                <div className="Loading-Component">
                    <img src="/asset/Loading.gif" alt=""></img>
                </div>
            )
        }
        else {
            return(<div></div>)
        }
        
        
    }
}

import React, { Component } from 'react'
import {Alert,AlertContainer} from 'react-bs-notifier';

export default class AlertInfo extends Component {
    showAlertAction =(text) =>{
        if(this.props.AlerStatus) {
            return(<React.Fragment>
        <Alert onDismiss={() => this.handleDismiss()} type="success" timeout={1000}>{`${text}`}</Alert>
            </React.Fragment>)
        }
    }
    handleDismiss=() => {
        this.props.closeAlert()
    }
    render() {

        return (
            
            <AlertContainer>
                {this.showAlertAction(this.props.alertContent)}
            </AlertContainer>
        );
    }
}

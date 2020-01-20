import React, { Component } from 'react';
import formatPrice from './convertMoney';

export default class CheckoutItem extends Component {
    render() {
        return (
           
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div className="col-sm-8">
                <h6 className="my-0">{this.props.value.name}</h6>
                <small className="text-muted">{this.props.value.att1}{this.props.value.att2 ? ',' : ""} {this.props.value.att2} X {this.props.value.quantityProduct}</small>
              </div>
              <div className="col-sm-4">
                  <img src={ `https://media3.scdn.vn${this.props.value.images[0]}`} alt="" ></img>
                  <div>{formatPrice(this.props.value.final_price)} đ </div>
              </div>
            </li>
            
            
           
            
          
        )
    }
}

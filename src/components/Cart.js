import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import formatPrice from './convertMoney';
import CartItem from './CartItem'
export default class Cart extends Component {
    
    showCartItem =(dataCartItem) => {
      return dataCartItem.map((value,key) => {
        return (<CartItem key={key} data={value} setAlert={this.props.setAlert} delItem ={(a) => this.deleteItem(a)}></CartItem>)
      })
    }
    deleteItem =(key) => {
      var data = [...this.props.dataCartItem];
      data.splice(key,1)
      this.props.deleteItem(data)
    }
      totalPrice = () => {
        var dataCartItem = this.props.dataCartItem;
        var result = 0;
        for (let i = 0; i < dataCartItem.length; i++) {
            result += dataCartItem[i].final_price * dataCartItem[i].quantityProduct;
        }
        return formatPrice(result);
      }
      
    render() {
        return (
            <ul className="minicart">
                {this.showCartItem(this.props.dataCartItem)}
                  <li>
                    <div className="total-price">
                      <span className="f-left">Total:</span>
                      <span className="f-right">{this.totalPrice()} đ</span>
                    </div>
                  </li>
                  <li>
                    <div className="checkout-link">
                      <Link to="/cart" onClick={() => this.props.setAlert('ĐÂY LÀ GIỎ HÀNG')}>Shopping Cart</Link>
                      <a className="red-color" href="#ds">Checkout</a>
                    </div>
                  </li>
                </ul>
        )
    }
}

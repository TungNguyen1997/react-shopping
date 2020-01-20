import React, { Component } from 'react'
import formatPrice from './convertMoney';

 class CartItem extends Component {
  deleteItem = (key) => {
      this.props.delItem(key)
      this.props.setAlert('XÓA SẢN PHẨM THÀNH CÔNG')
  }
    render() {
    
        return (
            <li>
                    <div className="cart-img">
                      <a href="#dsd">
                        <img src={ this.props.data.images[0] ? `https://media3.scdn.vn${this.props.data.images[0]}` : ''}  alt="" />
                      </a>
                      <div className="cart-img-price">
                      <div className="new"> {formatPrice(this.props.data.final_price)}đ</div>
                        <span>
                          <del>{formatPrice(this.props.data.price)}đ</del>
                        </span>
                      </div>
                      
                    </div>
                    <div className="cart-content">
                      <h3>
                        <a href="#ds">{this.props.data.name}</a>
                      </h3>
                      <div className="cart-price">
                      <span className="">
                            Thông số : {this.props.data.att1} , {this.props.data.att2} 
                        </span>
                        
                        <span className="ml-2 float-right">
                            X{this.props.data.quantityProduct} 
                        </span>
                        
                      </div>
                      
                    </div>
                    <div className="del-icon">
                      <a href="#dsds" onClick ={() => this.deleteItem(this.props.key)}>
                        <i className="far fa-trash-alt" />
                      </a>
                    </div>
                  </li>
        )
    }
}


export default CartItem;
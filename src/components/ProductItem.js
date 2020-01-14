import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import formatPrice from './convertMoney';
export default class ProductItem extends Component {
 

    render() {
      
     
        return (
            <div className="col-xl-4 col-lg-6 col-md-6">
  <div className="product-wrapper mb-50">
    <div className="product-img mb-25">
    <Link to={'/product-detail/'+ this.props.data.product_id} >
        <img src={this.props.data.img_url} alt="" />
        </Link>
    
    </div>
    <div className="product-content pr-0">
      <div className="pro-cat mb-10">
        <a href="#ds">{this.props.data.shop_name}</a>
      </div>
      <h4>
        <a href="#ds">{this.props.data.name}</a>
      </h4>
      <div className="product-meta">
        <div className="pro-price">
          <span>{formatPrice(this.props.data.final_price)}đ</span>
          <span className="old-price">{formatPrice(this.props.data.price)}đ</span>
        </div>
      </div>
    </div>
  </div>
</div>

          
        )
    }
}

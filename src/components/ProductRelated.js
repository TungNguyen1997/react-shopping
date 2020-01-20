import React, { Component } from 'react'
import formatPrice from './convertMoney';
import { Link } from 'react-router-dom';


class ProductRelated extends Component {
  sendId = (id) => {
    this.props.testData(id)
  }
 
    render() {
   
      if(this.props.value) {
        return (
          <Link to={`/product-detail/${this.props.value.id}`} className="pro-item" onClick={(id)=>this.sendId(this.props.value.id)}>
      <div className="product-wrapper">
        <div className="product-imgg mb-25">
          <a href="product-details.html">
          <img  src={this.props.value.images? `https://media3.scdn.vn/${this.props.value.images[0]}` : 'https://media3.scdn.vn/'} alt="" />
          </a>
          <div className="product-action text-center">
            <a href="#ds" title="Shoppingb Cart">
              <i className="flaticon-shopping-cart" />
            </a>
            <a href="#ds" title="Quick View">
              <i className="flaticon-eye" />
            </a>
            <a href="#ds" data-toggle="tooltip" data-placement="right" title="Compare">
              <i className="flaticon-compare" />
            </a>
          </div>
        </div>
        <div className="product-content">
          <div className="pro-cat mb-10">
            <a href="shop.html">{this.props.value.name}</a>
          </div>
          <h4>
      <a href="product-details.html"></a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>{this.props.value.final_price && formatPrice(this.props.value.final_price)}đ</span>
              <span className="old-price">{this.props.value.price && formatPrice(this.props.value.price)}đ</span>
            </div>
          </div>
          
        </div>
      </div>
    </Link>
         
        )
      }
      else{
        return (<div></div>)
      }
      
    }
}
export default ProductRelated;
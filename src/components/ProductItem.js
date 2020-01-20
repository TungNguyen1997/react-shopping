import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import formatPrice from './convertMoney';
import StarRatings from 'react-star-ratings';

export default class ProductItem extends Component {
 
sendIdRedux = (id) => {
  this.props.getProductId(id)
}
    render() {
      

        return (
            <div className="col-xl-3 col-lg-5 col-md-5">
          
  <div className="product-wrapper mb-50">
  {this.props.data.promotion_percent_upto !== '' ?  <div className="sale-banner">
    SALE {this.props.data.promotion_percent_upto}
    </div> : ''}
   
    <div className="product-img mb-25">
    <Link to={'/product-detail/'+ this.props.data.product_id} onClick={(id)=>this.sendIdRedux(this.props.data.product_id)}>
        <img src={this.props.data.img_url} alt="" />
        </Link>
    
    </div>

    <StarRatings
          rating={this.props.data.percent_star}
          starRatedColor="red"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
        />
    <div className="product-content pr-0">
    
      <div className="pro-cat sale-text mb-10">
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

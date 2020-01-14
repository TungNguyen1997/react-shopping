import React, { Component } from 'react'

class ProductRelated extends Component {
    
  mapProductRelated = (data) => {
    return data?.map((value,key) => {
      return(  <div className="pro-item" key={key}>
      <div className="product-wrapper">
        <div className="product-img mb-25">
          <a href="product-details.html">
            <img src="img/product/pro4.jpg" alt="" />
            <img className="secondary-img" src="img/product/pro5.jpg" alt="" />
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
            <a href="shop.html">decor, </a>
            <a href="shop.html">{value}</a>
          </div>
          <h4>
      <a href="product-details.html"></a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>$119.00 USD</span>
              <span className="old-price">$230.00 USD</span>
            </div>
          </div>
          <div className="product-wishlist">
            <a href="#ds"><i className="far fa-heart" title="Wishlist" /></a>
          </div>
        </div>
      </div>
    </div>)
    })
  }
    render() {
      var a = ["dsadsa","dasdads","dsadsadsa"]
      console.log(this.props.dataRedux)
        return (
          <div> {this.mapProductRelated(a)}</div>
         
        )
    }
}
export default ProductRelated;
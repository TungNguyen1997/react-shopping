import React, { Component } from 'react'


export default class Sidebar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      SearchValue:''
    };
    
  }
  
  sortLowToHigh = () => {
    let sortArray= this.props.dataRedux;
    sortArray.sort((a,b)=>a.final_price  -  b.final_price);
    this.props.getSortDataRequest(sortArray)
    
  }
  sortHighToLow = () => {
    let sortArray= this.props.dataRedux;
    sortArray.sort((a,b)=> b.final_price  -  a.final_price);
    this.props.getSortDataRequest(sortArray)
  }
  sortAtoZ = () => {
    
    let sortArray= this.props.dataRedux;
    sortArray.sort((a,b) => 
    a.name.localeCompare(b.name)
    );
    this.props.getSortDataRequest(sortArray)

  }
  sortZtoA = () => {
    
    let sortArray= this.props.dataRedux;
    sortArray.sort((a,b) => 
    b.name.localeCompare(a.name)
     
    );
    this.props.getSortDataRequest(sortArray)

  }
  sortDiscount = (sortArray) => {
    sortArray.sort((a,b) => 
   b.promotion_percent - a.promotion_percent
    );
    this.props.getSortDataRequest(sortArray)

  }
  isChange=(e) => {
    const value = e.target.value;
   this.setState({
     SearchValue:value
   })
  }
  sendKeyWord=(e) => {
    
    this.props.getSearchData(e)
  }
  
    render() {
     var sortArray= this.props.dataRedux;
        return (
            <div className="col-xl-3 col-lg-4">
  <div className="sidebar-shop">
    <div className="shop-widget">
      <h3 className="shop-title">Bạn cần tìm gì ?</h3>
      <form action="#" className="shop-search">
        <input  onChange={ (e) => this.isChange(e)}type="text" placeholder="Your keyword...." />
        <button type="submit" onClick={(e) => this.sendKeyWord(this.state.SearchValue)}><i className="fa fa-search" /></button>
      </form>
    </div>
    
    <div className="shop-widget">
      <h3 className="shop-title">Sắp xếp theo</h3>
      <ul className="shop-link">
        <li><a href="#ds" onClick={() => this.sortAtoZ()}>Tên: A-Z</a></li>
        <li><a href="#ds" onClick={() => this.sortZtoA()} >Tên: Z-A</a></li>
        <li><a href="#ds" onClick={() => this.sortHighToLow()}>Gía: Cao đến Thấp</a></li>
        <li><a href="#ds" onClick={() => this.sortLowToHigh()}>Price: Thấp đến cao</a></li>
        <li className="shop-link-sale"><a  href="#ds" onClick={() => this.sortDiscount(sortArray)} >SẢN PHẨM GIÁ SALE !!!</a></li>
      </ul>
    </div>
    <div className="shop-widget">
      <h3 className="shop-title">Recent Product</h3>
      <ul className="shop-sidebar-product">
        <li>
          <div className="side-pro-img">
            <a href="#ds"><img src="./assets/shop-rsp3.jpg" alt="" /></a>
          </div>
          <div className="side-pro-content">
            <div className="side-pro-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h5><a href="#ds">Raglan Baseball-Style</a></h5>
            <div className="side-pro-price">
              <span>$119.00 USD</span>
            </div>
          </div>
        </li>
        <li>
          <div className="side-pro-img">
            <a href="#ds"><img src="./assets/shop-rsp2.jpg" alt="" /></a>
          </div>
          <div className="side-pro-content">
            <div className="side-pro-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h5><a href="#ds">Raglan Baseball-Style</a></h5>
            <div className="side-pro-price">
              <span>$119.00 USD</span>
            </div>
          </div>
        </li>
        <li>
          <div className="side-pro-img">
            <a href="#ds"><img src="./assets/shop-rsp4.jpg" alt="" /></a>
          </div>
          <div className="side-pro-content">
            <div className="side-pro-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h5><a href="#ds">Raglan Baseball-Style</a></h5>
            <div className="side-pro-price">
              <span>$119.00 USD</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="shop-widget">
      <div className="shop-sidebar-banner">
        <a href="#ds"><img src="./assets/shop-banner.jpg" alt="" /></a>
      </div>
    </div>
  </div>
</div>

        )
    }
}

import React, { Component } from 'react'
import NotFound from './NotFound';
import ProductItemContainer from '../container/ProductItem.Container';
import OwlCarousel from 'react-owl-carousel';
// import Pagination from "react-js-pagination";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activePage: 1
    }
  }
  
  componentDidUpdate ( prevProps)  {
    if(this.props.total_page !== prevProps.total_page){
      this.setState({activePage: 1})
    }
    
}

    showProductItem = (data) => {
      if (data) {
        return data.map((value,key) => {
          return (<ProductItemContainer setAlert={(e)=> this.props.setAlert(e)} showProductDetail={this.props.showProductDetail} addToCart={this.props.addToCart} key={key} data={value}></ProductItemContainer>)
        })
      }
      
  }
  
    componentDidMount() {
      window.scrollTo(0, 0);
      this.props.getProductList();
  }
  
  searchHint =(text) => {
    this.props.getSearchData(text)
  }
  
  a =(e) => {
    this.props.getProductList2(e,this.props.searchText)
    console.log(e)
    this.setState({
      activePage : e
    })
  }
  
    render() {
      
        return (
            <div className="col-xl-9 col-lg-8">
  {/* tab filter */}
  <div className="row mb-10">
  <div className="col-xl-12 col-lg-12 col-md-12 " >

  <OwlCarousel
      className="owl-theme"
      loop
      autoplay
      items = {1}
      autoplayTimeout={2000}    
  >
      <div class="item"><img src="./asset/slideshow1.gif" alt=""></img></div>
      <div class="item"><img src="./asset/slideshow2.webp" alt=""></img></div>
      <div class="item"><img src="./asset/slideshow3.webp" alt=""></img></div>
      <div class="item"><img src="./asset/slideshow1.gif" alt=""></img></div>
      

    
  </OwlCarousel>
  </div>
  <div className="col-xl-12 col-lg-12 col-md-12 " >
  
    
      <div className="product-hint mb-40 mt-10  ">
        <span className ="product-hint-item-iphone product-hint-item"  onClick={(text) => this.searchHint('Iphone 11')}>
        <div>  <img className="product-hint-img"src="https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn" alt=""></img></div>
        <div className ="product-hint-item-text ">Iphone 11 </div>
        </span>
        <span className ="product-hint-item-laptop product-hint-item" onClick={(text) => this.searchHint('Laptop')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn"alt=""></img></div>
        <div className ="product-hint-item-text" >Laptop </div>
 
        </span>
        <span className ="product-hint-item-watch product-hint-item" onClick={(text) => this.searchHint('Đồng hồ')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Đồng hồ </div>
       
        </span>
        <span className ="product-hint-item-sport product-hint-item" onClick={(text) => this.searchHint('Thể thao')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn" alt=""></img></div>
        <div className ="product-hint-item-text"  >Thể Thao </div>
        
        </span>
        <span className ="product-hint-item-womenFashion product-hint-item" onClick={(text) => this.searchHint('Thời trang nữ')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Thời trang nữ </div>
        
        </span>
        <span className ="product-hint-item-comestic product-hint-item" onClick={(text) => this.searchHint('Làm đẹp')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/bba68b7dc2d664748dd075d500049d72_tn"alt="" ></img></div>
        <div  className ="product-hint-item-text" >Làm đẹp </div>
        
        </span>
        <span className ="product-hint-item-bag product-hint-item" onClick={(text) => this.searchHint('Túi xách')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Túi xách </div>
        
        </span>
        <span className ="product-hint-item-book product-hint-item" onClick={(text) => this.searchHint('Sách')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Sách </div>
        
        </span>
        <span className ="product-hint-item-cook product-hint-item" onClick={(text) => this.searchHint('nội trợ')}>
        <div>  <img className="product-hint-img" src="https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn" alt=""></img></div>
        <div  className ="product-hint-item-text" >Nội trợ </div>
        
        </span>
     
      

      
      </div>
    </div>
    <div className="col-xl-5 col-lg-6 col-md-6">
      <div className="product-showing mb-40">
        <p>Sản phẩm nổi bật</p>
        
      </div>
    </div>

  </div>
  {/* tab content */}
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <div className="row">
          
          {this.showProductItem(this.props.dataRedux)}
        
      </div>
    </div>
    
  </div>
  <Pagination
          currentPage={this.state.activePage}
          changeCurrentPage={(a)=>this.a(a)}
          totalPages={this.props.total_page}
          theme="square-i"


        />
  
  
</div>


        )
    }
}


export default (ProductList)
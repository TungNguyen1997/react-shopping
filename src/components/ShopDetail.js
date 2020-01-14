import React, { Component } from 'react'
import Comments from './Comments';
import OwlCarousel from 'react-owl-carousel2';
import formatPrice from './convertMoney';
import ProductRelatedContainer from '../container/ProductRelated.Container';
import update from 'immutability-helper';

export default class ShopDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberItem :1,
      att1:'',
      att2:'',
      alert:false
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
   this.props.getShopDetailList(this.props.props.match.params.id);
   var arrayRelated = this.props.dataRedux.product_relateds;
   var array = arrayRelated?.split(",");
    console.log('====================================');
    console.log(arrayRelated);
    console.log('====================================');
   if(array) {
      array.map((value,key) => {
        this.props.getProductRelatedList(value)

      })
  }

  
}
componentDidUpdate() {
 
}


activeClass =(a) => {
a.name ? this.setState({
  att1 : a.name
}) : this.setState({att2 : a.value})

  
}
// https://media3.scdn.vn/${value}
mapImage = (product) => {
  return product.images?.map((value,key) => {
  return (< img src={`https://media3.scdn.vn/${value}` } alt="" key={key}></img>
    )
  })
}


plusItem = () => {
  var result = this.state.numberItem;
  result++
  this.setState({
    numberItem :result
  })
}
minusItem = () => {
  
  var result = this.state.numberItem;
  if(result>1) {
    result--
    this.setState({
      numberItem :result
    })
  }
  
  
}
addItem =(product,quantity) => {
  var data = [...this.props.dataCartItem]
  var index = data.findIndex(elm => elm.id === product.id && elm.att1 === this.state.att1  && elm.att2 === this.state.att2 )
  var index2 = data.findIndex(elm => elm.id === product.id )

  if (product.attribute.length === 2) {
    if(this.state.att1==='' || this.state.att2 === ''){
        this.setState({
          alert:true
        })
    }
    else if(index2 === -1) {
      product.quantity = quantity ;
      product.att1 = this.state.att1;
      product.att2 = this.state.att2;
      

      data.push(product);
      this.setState({
        alert:false
      })
    }
    else {
     
      if(index !== -1 ){
      data[index].quantity = data[index].quantity + quantity ;
    }
    else if(index === -1){
      const deepClone = update(product,{quantity:{$set:quantity},att1:{$set:this.state.att1},att2:{$set:this.state.att2}});
      data.push(deepClone)

      this.setState({
        alert:false
      })
    }
    }
   
    this.props.addToCartRedux(data)
  }
  else if (product.attribute.length === 1 && this.state.att1 ==='' && this.state.att2 ==='' ){
    alert('dsdsds');
    
    }
    else if(index2 === -1) {
      product.quantity = quantity ;
      product.att1 = this.state.att1;
      product.att2 = this.state.att2;
      data.push(product);
    }
    else {
    

      if(index !== -1 ){
        data[index].quantity = data[index].quantity + quantity ;
      }
      else if(index === -1){
        const deepClone = update(product,{quantity:{$set:quantity},att1:{$set:this.state.att1},att2:{$set:this.state.att2}});
        data.push(deepClone)
  
        this.setState({
          alert:false
        })
      }
    }
    this.props.addToCartRedux(data)
    
  }




showComment =(product) => {
  
  if(product?.length > 0 || product?.data ) {
    return product?.data.map((value,key) => {
      return(<Comments key={key} value={value}></Comments>)
    })
  }

}



showProductDetail = (data) => {
  data.map((value,key) => {
    return(<ProductRelatedContainer key={key} value ={value}> </ProductRelatedContainer>)
  })
}


showAttr=  (product) => {
  return product.attribute?.map((value,key) => {  
    return( <li className="attribute-item" key={key}><span><b>{value.name}:</b></span> 
  {
    value.value.map((data,newkey) => {return <a href="#dss" key={newkey} type="button"  className= {this.state.att1 === data.name || this.state.att2 === data.value ? 'btn btn-warning btn-color active' : 'btn btn-warning btn-color' } onClick = {(a) => this.activeClass(data)}  >{data.value? data.value : data.name}</a>})
  }
      
    </li> )
    
    
  })
}

    render() {
    
      
      const options = {
        items: 1,
        autoplay:true
       
    };
     
      var product = this.props.dataRedux;

    
      if (product) {
        setTimeout(() => this.props.hideLoading(), 1000)
        return (
          <main>
{/* breadcrumb-area-start */}
<section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="breadcrumb-text text-center">
      <h1>{product.shop_info?.shop_name}</h1>
          <ul className="breadcrumb-menu">
            <li><a href="index.html">home</a></li>
            <li><span>shop details</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
{/* breadcrumb-area-end */}
{/* shop-area start */}
 <section className="shop-details-area pt-100 pb-100">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-4">
       
    <OwlCarousel ref="car" options={options} >
          
               {this.mapImage(product)}
        </OwlCarousel> 
  

       
        <div className="shop-thumb-tab mb-30">
          <ul className="nav" id="myTab2" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-selected="true"><img src="img/product/pro1.jpg" alt="" /> </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-selected="false"><img src="img/product/pro2.jpg" alt="" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab2" data-toggle="tab" href="#profile1" role="tab" aria-selected="false"><img src="img/product/pro3.jpg" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-6 col-lg-8">
        <div className="product-details mb-30 pl-30">
          <div className="details-cat mb-20">
            <a href="#ds">{product.shop_name}</a>
           
          </div>
          <h2 className="pro-details-title mb-15">{product.name}</h2>
          <div className="details-price mb-20">
      <span>{product.final_price? formatPrice(product.final_price): product.final_price}đ</span>
            <span className="old-price">{product.price}đ</span>
          </div>
          <div className="product-variant">
            <div className="product-desc variant-item">
              <p>{product.short_description}.</p>
            </div>
            <div className="product-info-list variant-item">
              <ul>
                <li><span><b>Brands</b>:</span> Hewlett-Packard</li>
              {this.showAttr(product)}
      <li><span><b>Tình trạng</b></span> <span className="in-stock">còn {product.quantity} sản phẩm </span></li>
        <li className="text-alert">{this.state.alert ? 'MỜI NHẬP ĐẦY ĐỦ THÔNG TIN ' : ''}</li>

     


              </ul>
            </div>
            <div className="product-action-details variant-item">
              <div className="product-details-action">
                <form action="#">
                  <div className="plus-minus">
                    <div className="cart-plus-minus"><input type="text" value={this.state.numberItem} /><div className="dec qtybutton" onClick={()=> this.minusItem()}>-</div><div className="inc qtybutton" onClick={()=> this.plusItem()}>+</div></div>
                  </div>
                  <button className="details-action-icon" type="submit"><i className="fas fa-heart" /></button>
                  <div className="details-cart mt-40">
                    <p className="btn theme-btn" onClick ={(a,b) => this.addItem(product,this.state.numberItem)}>purchase now</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-50">
      <div className="col-xl-8 col-lg-8">
        <div className="product-review">
          <ul className="nav review-tab" id="myTabproduct" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab6" data-toggle="tab" href="#home6" role="tab" aria-controls="home" aria-selected="true">Description </a>
            </li>
            <li className="nav-item">
      <a className="nav-link" id="profile-tab6" data-toggle="tab" href="#profile6" role="tab" aria-controls="profile" aria-selected="false">Reviews ({product.comments?.data?.length >= 1 ? product.comments?.data?.length : 0})</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent2">
            <div className="tab-pane fade show active" id="home6" role="tabpanel" aria-labelledby="home-tab6">
              <div className="desc-text">
              <div dangerouslySetInnerHTML={{ __html: product.description }} />

              
              </div>
            </div>
            <div className="tab-pane fade" id="profile6" role="tabpanel" aria-labelledby="profile-tab6">
              <div className="desc-text review-text">
                {this.showComment(product.comments)}
                <div className="review-box mt-50">
                  <h4>Add a Review</h4>
                  <div className="your-rating mb-40">
                    <span>Your Rating:</span>
                    <div className="rating-list">
                      <a href="#ds">
                        <i className="far fa-star" />
                      </a>
                      <a href="#ds">
                        <i className="far fa-star" />
                      </a>
                      <a href="#ds">
                        <i className="far fa-star" />
                      </a>
                      <a href="#ds">
                        <i className="far fa-star" />
                      </a>
                      <a href="#ds">
                        <i className="far fa-star" />
                      </a>
                    </div>
                  </div>
                  <form className="review-form" action="#">
                    <div className="row">
                      <div className="col-xl-12">
                        <label htmlFor="message">YOUR REVIEW</label>
                        <textarea name="message" id="message" cols={30} rows={10} defaultValue={""} />
                      </div>
                      <div className="col-xl-6">
                        <label htmlFor="r-name">Name</label>
                        <input type="text" id="r-name" />
                      </div>
                      <div className="col-xl-6">
                        <label htmlFor="r-email">Email</label>
                        <input type="email" id="r-email" />
                      </div>
                      <div className="col-xl-12">
                        <button className="btn theme-btn">Add your Review</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4">
        <div className="pro-details-banner">
          <a href="shop.html"><img src="img/banner/pro-details.jpg" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="product-area pb-100"> 
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="area-title text-center mb-50">
          <h2>Releted Products</h2>
          <p>Browse the huge variety of our products</p>
        </div>
      </div>
    </div>
    <div className="product-slider-2 ">

<ProductRelatedContainer></ProductRelatedContainer>
      
      </div>
    
    
    </div>
  
</section>
</main>

      )  
      
      }
      else{
        return(<div></div>)
      }
    
   
    }
}

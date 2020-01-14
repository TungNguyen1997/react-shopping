import React, { Component } from 'react'
import { Link  } from 'react-router-dom';
import formatPrice from './convertMoney';
import { listDiscount } from '../constant/DiscountCode';

export default class CartTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountText:'',
      confirmDiscount:false,
      
  }
}

  sumPrice = () => {
    var result = 0;
    var data = [...this.props.dataCartItem]
    for (let i = 0; i < data.length; i++) {
      result += data[i].quantity * data[i].final_price
  }

  listDiscount.map ((value,key) => {
    if (this.state.discountText === value.name){
      result = result - (result * value.discount)
    }
  })
  return formatPrice(result)


  }
  isChange = (e) => {
    console.log(e)
    this.setState({
      discountText:e.target.value
    })
  }

  discount = () => {
    if(this.state.discountText === 'CONCAC')
    {
        this.setState({
          confirmDiscount:true
        })
    }
  }
  showItem = (data) => {
    return data.map((data, key) => {
      return (
        <React.Fragment key={key}>
          <tr >
            <td className="product-thumbnail"><a href="#dsds"><img src={`https://media3.scdn.vn${data.images[0]}`} alt="" /></a></td>
            <td className="product-name"><a href="#dsds">{data.name}</a></td>
            <td className="product-price"><span className="amount">{formatPrice(data.final_price)}đ</span></td>
            <td className="product-quantity">
              <div className="cart-plus-minus"><input id="text data" type="text" value={data.quantity}   /><div className="dec qtybutton" onClick={(item) => this.minusItem(key)}>-</div><div className="inc qtybutton" onClick={(item) => this.plusItem(key)}>+</div></div>
            </td>
            <td className="product-subtotal"><span className="amount">{data.att1},{data.att2}</span></td>
            <td className="product-subtotal"><span className="amount">{formatPrice(data.quantity * data.final_price)}đ</span></td>
            <td className="product-remove"><a href="#ds" onClick={() => this.deleteItem(key)}><i className="fa fa-times" /></a></td>
          </tr></React.Fragment>)
    })
  }

  deleteItem = (key) => {
    var temp = [...this.props.dataCartItem];
    temp.splice(key,1)
    this.props.deleteItem(temp)
  }


  plusItem = (item) => {
    this.props.plusItem(item)
    this.setState({
      RESET : true
    })
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  minusItem = (item) => {

    this.props.minusItem(item)
  }
  render() {
    console.log('====================================');
    console.log("ĐÃ RENDER");
    console.log('====================================');
    return (
      <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Shoping Cart</h1>
                  <ul className="breadcrumb-menu">
                    <li><a href="index.html">home</a></li>
                    <li><span>Cart</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* Cart Area Strat*/}
        <section className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Hình ảnh</th>
                          <th className="cart-product-name">Tên sản phẩm</th>
                          <th className="product-price">Giá 1 sản phẩm</th>
                          <th className="produ+ct-quantity">Số lượng </th>
                          <th className="produ+ct-quantity">Thông tin</th>
                          <th className="product-subtotal">Số tiền</th>
                          <th className="product-remove">Xóa khỏi giỏ hàng</th>
                        </tr> 
                      </thead>
                      <tbody>

                        {this.showItem(this.props.dataCartItem)}


                      </tbody>
                    </table>
                  </div>
                  <div className="row">
  <div className="col-12">

  </div>
  <div class="input-group mt-5 col-5">
  <div class="input-group-prepend">
    <label class="input-group-text" style={{backgroundColor:'#fe4536' , color:'white',fontWeight:'bold'}} for="inputGroupSelect01">LỰA CHỌN MÃ GIẢM GIÁ</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01" onChange ={(e)=>this.isChange(e)}>
    <option selected>....</option>
    <option value="WELCOME">HAPPYDAY - GIẢM GIÁ 30% GIÁ TRỊ ĐƠN HÀNG</option>
    <option value="REACTJS">WELCOMEBACK - GIẢM 50% GIÁ TRỊ ĐƠN HÀNG</option>
    <option value="HappyDay">GOLDENWEEK - GIẢM 10% GIÁ TR5 ĐƠN HÀNG</option>

  </select>
</div>
</div>

                              
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="cart-page-total">
                        <h2>Tổng tiền</h2>
                        <ul className="mb-20">
                          <li >Tổng cộng <span id="cart-page-total-text"><b style={{fontSize:'30px'}}>{this.sumPrice()}đ</b></span></li>
                        </ul>
                        {this.props.dataCartItem.length > 0 ?  <Link  to='/checkout' className="btn theme-btn" href="#dsd">THANH TOÁN</Link >:  <Link  to='/checkout' className="btn theme-btn" onClick={e => e.preventDefault()} href="#dsd">THANH TOÁN</Link >}
                        
                      </div>
                      {this.props.dataCartItem.length === 0 ? <div>Giỏ hàng đang trống không thể thanh toán </div>: ''}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Cart Area End*/}
      </main>

    )
  }
}

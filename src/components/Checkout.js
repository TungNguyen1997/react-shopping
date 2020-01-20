import React, { Component } from 'react'
import CheckoutItem from './CheckoutItem';
import formatPrice from './convertMoney';

class Checkout extends Component {
    
      componentDidMount() {
        window.scrollTo(0, 0);
      }
    showProductItem = (data) => {
        return data.map((value,key) => {
            return(<CheckoutItem key={key} value={value}></CheckoutItem>)
        })
    }
    
    render() {
        var product= this.props.dataCartItem
        return (
            <main className="mt-5 pt-4">
            <div className="container wow fadeIn">
              {/* Heading */}
              <h2 className="my-5 h2 text-center">XÁC NHẬN MUA HÀNG</h2>
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-8 mb-4">
                  {/*Card*/}
                  <div className="card">
                    {/*Card content*/}
                    <form className="card-body">
                      {/*Grid row*/}
                      <div className="row">
                        {/*Grid column*/}
                        <div className="col-md-12 mb-2">
                          {/*firstName*/}
                          <div className="md-form ">
                            <input type="text" id="firstName" className="form-control" required placeholder="Nguyễn Văn ..."/ >
                            <label ><b>Tên Người nhận</b></label>
                          </div>
                        </div>
                       
                        {/*Grid column*/}
                      </div>
                     
                      <div className="md-form mb-5">
                        <input type="text" id="address" className="form-control" required placeholder="35/54 Phan Văn Trị ..." />
                        <label htmlFor="address" ><b>Địa chỉ nhận hàng</b></label>
                      </div>
                      {/*address-2*/}
                      <div className="md-form mb-5">
                        <input type="text" id="address-2" className="form-control" required placeholder="09322..." />
                        <label htmlFor="address-2" >Số điện thoại người nhận</label>
                      </div>
                      {/*Grid row*/}
                      <div className="row">
                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-12 mb-4">
                          <label htmlFor="country">Chọn hình thức giao hàng</label>
                          <select className="custom-select d-block w-100" id="country" required>
                            <option value>Thanh toán khi nhận hàng</option>
                            <option>Thẻ Tín dụng</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                       
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-lg-8 col-md-12 mb-4">
                          <label htmlFor="zip">Các yêu cầu khác về việc giao / nhận hàng (nếu có )</label>
                          <textarea type="text" className="form-control" placeholder="..." />
                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </div>
                        {/*Grid column*/}
                      </div>
                      {/*Grid row*/}
                      <hr />
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="save-info" />
                        <label className="custom-control-label" htmlFor="save-info">Lưu thông tin cho lần mua sau</label>
                      </div>
                      <hr />
                      {/* <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                          <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                          <label className="custom-control-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                          <label className="custom-control-label" htmlFor="debit">Debit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                          <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                        </div>
                      </div> */}
                      {/* <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="cc-name">Name on card</label>
                          <input type="text" className="form-control" id="cc-name" placeholder required />
                          <small className="text-muted">Full name as displayed on card</small>
                          <div className="invalid-feedback">
                            Name on card is required
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="cc-number">Credit card number</label>
                          <input type="text" className="form-control" id="cc-number" placeholder required />
                          <div className="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="row">
                        <div className="col-md-3 mb-3">
                          <label htmlFor="cc-expiration">Expiration</label>
                          <input type="text" className="form-control" id="cc-expiration" placeholder required />
                          <div className="invalid-feedback">
                            Expiration date required
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="cc-expiration">CVV</label>
                          <input type="text" className="form-control" id="cc-cvv" placeholder required />
                          <div className="invalid-feedback">
                            Security code required
                          </div>
                        </div>
                      </div> */}
                      {/* <hr className="mb-4" /> */}
                      <button className="btn btn-primary btn-lg btn-block" disabled={true} type="submit" >XÁC NHẬN MUA HÀNG</button>
                    </form>
                  </div>
                  {/*/.Card*/}
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-4 mb-4">
                  {/* Heading */}
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">GIỎ HÀNG CỦA BẠN</span>
                    <span className="badge badge-secondary badge-pill">{product.length}</span>
                  </h4>
                  {/* Cart */}
                <ul className="list-group mb-3 z-depth-1">

                 {this.showProductItem(product)}
                 <li className="list-group-item d-flex justify-content-between">
                     <span>Tổng tiền (VND)</span>
                    <strong>{this.props.final_price}đ</strong>
                </li> 

               
               
                </ul>
                  {/* Cart */}
                  {/* Promo code */}
                  
                  {/* Promo code */}
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
          </main>
          
        )
    }
}
export default Checkout;
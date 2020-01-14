import React, { Component } from 'react'

export default class Modal extends Component {
    sumTotal =(data) => {
        var result =null;
        for (let i = 0; i < data.length; i++) {
           result += data[i].quantity * data[i].final_price
            
        }
        return result;
    }
    showModalItem =(data) => {
        if(data.length > 0) {
            return data.map((value,key)=>{
                return(  <div className="row mb-10" key={key}>
                <div className="col-xl-4 col-lg-4">
                   <img src={value.img_url} alt=""></img>
                </div>
                <div className="col-xl-8 col-lg-8">
                    {value.name}
                    <div className="row">
                        <div className="col-xl-6 col-lg-6"><del className="mr-10">₫{value.price}</del><span >₫{value.final_price}</span></div>
                        <div className="col-xl-4 col-lg-4">X {value.quantity} </div>
                        <div className="col-xl-2 col-lg-2"> <a href="#ds"onClick={(data)=>{this.deleteItem(value)}}><i className="far fa-trash-alt" /></a></div>

                    </div>
                </div>
                </div>)
            })
        }
        else {
            return (<div>Bạn chưa có sản phẩm nào trong giỏ hàng !</div>)
        }
       
    }
    deleteItem=(item) => {
        var data = [...this.props.dataCartItem];
        data = data.filter (elm => elm.product_id !== item.product_id)
        this.props.deleteItem(data)
    }
    render() {
        return (
            <React.Fragment>
            

  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title-text" id="exampleModalLongTitle">Shoping Online | Giỏ hàng của bạn</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {this.showModalItem(this.props.dataCartItem)}

        </div>
        <div className="modal-footerr">
        <hr  width="100%" />

            <div className="row">
            <div className="col-xl-6 col-lg-6 text-center "> <b className="modal-footerr-textTotal"> TỔNG TIỀN </b></div>
            <div className="col-xl-6 col-lg-6 text-center"> ₫{this.sumTotal(this.props.dataCartItem)}</div>
            </div>
    
        </div>
      </div>
    </div>
  </div>

            </React.Fragment>
          

          

        )
    }
}

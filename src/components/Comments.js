import React, { Component } from 'react'

export default class Comments extends Component {
    showComment = (data)=> {
    if(data) {
        return data.reverse().map((value,key) => {
            return(
            <React.Fragment key={key} >
            <div className="row mb-10" >
                
                <div className="col-sm-2"><img src={value.customer_logo} alt="" height="40px"></img><p>{value.customer_name}</p></div>
                <div className="col-sm-10">{value.data}</div>
                

            </div></React.Fragment>)
        })
    }
    }
    render() {
        
        return (
           <React.Fragment>
               <div className="product-commnets">
                    <div className="product-commnets-list mb-25 pb-15">
                      <div className="pro-comments-img">
                        <img src={this.props.value.customer_logo}  alt="" height="50px"/>
                      </div>
                      <div className="pro-commnets-text">
                        <h4> {this.props.value.customer_name} -
                          <span>{this.props.value.time}</span>
                        </h4>
                        <div className="pro-rating">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <p>{this.props.value.data}</p>
                      </div>
                    </div>
                    <div>
                   {this.showComment(this.props.value.sub)}
                    </div>
                  </div>
           </React.Fragment>
        )
    }
}

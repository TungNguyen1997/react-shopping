import React, { Component } from 'react'
import firebase from 'firebase'
import { Link } from 'react-router-dom';
import CartContainer from '../container/Cart.Container';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:''
    }
  }
 
  componentDidMount () {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
  
        this.setState({
          user : user.email
        })
      }
    });
  }

  signOut = () => {
    firebase.auth().signOut()
    this.setState({
      user : ''
    })
  }
  loginOrlogout = () => {
    if (this.state.user === '')
    {
      return (<li className="login-btn"><a href="#ds"><i className="far fa-user" /></a></li>)
    }
    else {
      return ( <li onClick={() => this.signOut()} className="login-btn"><a href="#gfg"><i className="fas fa-sign-out-alt" /></a></li>)
    }
  }

  numberCartItem = () => {
    var count = this.props.dataCartItem.length
    return count
  }
 

    render() {
      
    
        return (
            <header>
  <div id="header-sticky" className="header-area box-90 sticky-header">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
          <div className="logo">
            <Link to="/"><img src="/assets/LOGOSHOP.png" alt="" /></Link>
          </div>
          <div className="category-menu">
            <h4>Category</h4>
            <ul>
              <li><a href="#fd"><i className="fas fa-shopping-cart" /> Table lamp</a></li>
              <li><a href="#fd"><i className="fas fa-shopping-cart" /> Furniture</a></li>
              <li><a href="#fd"><i className="fas fa-shopping-cart" /> Chair</a></li>
              <li><a href="#fd"><i className="fas fa-shopping-cart" /> Men</a></li>
              <li><a href="#fd"><i className="fas fa-shopping-cart" /> Women</a></li>
              <li><a href="#fd"><i className="fas fa-shopping-cart" /> Cloth</a></li>
              <li><a href="#fd"><i className="fas fa-shopping-cart" /> Trend</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block">
          <div className="main-menu text-center">
            <nav id="mobile-menu" style={{display: 'block'}}>
              <ul>
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <a href="#fdfd">Pages</a>
                  <ul className="submenu">
                    <li>
                      <a href="./detail.html">Product Detail</a>
                    </li>
                    <li>
                      <a href="./login.html">login</a>
                    </li>
                    
                    <li>
                      <a href="./register.html">Register</a>
                    </li>
                    <li>
                      <a href="./cart.html">Shoping Cart</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="col-xl-3 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
          <div className="header-right f-right">
            <ul>
            <li className="search-btn">
                {this.state.user}
              </li>
              <li className="search-btn">
                <a href="#dsd" className="search-btn nav-search search-trigger" ><i className="fas fa-search" /></a>
              </li>
             {this.loginOrlogout()}
              <li className="d-shop-cart" ><a href="#dsds" data-toggle="modal" data-target="#exampleModalCenter" onClick={(e) => this.props.setAlert('ĐÂY LÀ GIỎ HÀNG')}><i className="fas fa-shopping-cart" /> <span className="cart-count">{this.numberCartItem()}</span></a>
                <CartContainer setAlert={this.props.setAlert}  ></CartContainer>
              </li>
              <li className="search-btn">
                <a className="search-btn nav-search search-trigger" href="#dsds"><i className="fas fa-heart" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 d-xl-none">
          <div className="mobile-menu" />
        </div>
      </div>
    </div>
  </div>
</header>

        )
    }
    
}

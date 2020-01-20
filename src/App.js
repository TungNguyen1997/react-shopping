import React, { Component } from 'react'

import Footer from './components/Footer';
import Layout from './components/Layout';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AlertInfo from './components/AlertInfo';
import ProductListContainer from './container/ProductList.Container';
import ShopDetailContainer from './container/ShopDetail.Container';
import SidebarContainer from './container/Sidebar.Container';
import NavbarContainer from './container/Navbar.Container';
import CartTemplateContainer from './container/CartTemplate.Container';
import ModalContainer from './container/Modal.Container';
import PrivateRouter from './components/PrivateRouter';
import Login from './components/Login';
import LoadingContainer from './container/Loading.Container';
import CheckoutContainer from './container/Checkout.Container';
import CheckOutSuccess from './components/CheckOutSuccess';
import ShopInfo from './components/ShopInfo';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AlerStatus : false,
      alertContent:''
    }
  }
  
  setAlert =(text) =>{
    this.setState({
      AlerStatus:true,
      alertContent : `${text}`
    })
  }

  closeAlert =() => {
    this.setState({
      AlerStatus:false
    })
  }
  
 

 
  render() {
 
    
    return (
    
      
      <Router>
      <div className="App">
      <LoadingContainer></LoadingContainer>
        <NavbarContainer setAlert={this.setAlert}  > </NavbarContainer>
        <ModalContainer></ModalContainer>
        <AlertInfo closeAlert={this.closeAlert} setAlert={this.setAlert}AlerStatus={this.state.AlerStatus} alertContent={this.state.alertContent}></AlertInfo>
        <Layout>
        <Route exact path="/" render={props =>
      <React.Fragment>
     <ProductListContainer setAlert={(e) => this.setAlert(e)}  ></ProductListContainer>
        <SidebarContainer ></SidebarContainer>
        </React.Fragment>
          } />
          <Route exact path="/product-detail/:id" render={props =>
   
     <ShopDetailContainer props={props}    ></ShopDetailContainer>
       
          } />
          <Route exact path="/shop-info" render={props =>
   
            <ShopInfo></ShopInfo>
     
        } />
            <Route exact path="/checkoutsuccess" render={props =>
        <CheckOutSuccess></CheckOutSuccess>
      
          } />
        </Layout>
        <Route exact path="/cart" render={props =>
        <PrivateRouter
        ><CartTemplateContainer  >
          </CartTemplateContainer>
          </PrivateRouter>
      
          } />
             <Route exact path="/login" render={props =>
        <Login></Login>
      
          } />
          <Route exact path="/checkout" render={props =>
        <CheckoutContainer></CheckoutContainer>
      
          } />
         
        <Footer></Footer>
        
    </div>
    </Router>
    
    )
  }
}



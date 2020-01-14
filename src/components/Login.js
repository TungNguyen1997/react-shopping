import React, { Component } from 'react'
import firebase from 'firebase'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail:'',
            txtPass:'',
            
        }
      }

    login = async (e) => {
        e.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword(this.state.txtEmail,this.state.txtPass)
            console.log('====================================');
            await alert('DANG NHAP THANH CONG');
            console.log('====================================');
        }
        catch{}
        
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        
        this.setState({
            [name] : value
        })
        
    }
    render() {
        return (
            <main>
  {/* breadcrumb-area-start */}
  <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="breadcrumb-text text-center">
            <h1>Login</h1>
            <ul className="breadcrumb-menu">
              <li><a href="index.html">home</a></li>
              <li><span>Login</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb-area-end */}
  {/* login Area Strat*/}
  <section className="login-area pt-100 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="basic-login">
            <h3 className="text-center mb-60">Login From Here</h3>
            <form onSubmit = {(e) => this.login(e)}>
              <label htmlFor="name">Email Address <span>**</span></label>
              <input onChange = { (e) => {this.isChange(e)}}id="name" type="text" name="txtEmail" placeholder="Enter Username or Email address..." />
              <label htmlFor="pass">Password <span>**</span></label>
              <input  onChange = { (e) => {this.isChange(e)}} name="txtPass" id="pass" type="password" placeholder="Enter password..." />
              <div className="login-action mb-20 fix">
                <span className="log-rem f-left">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">Remember me!</label>
                </span>
                <span className="forgot-login f-right">
                  <a href="#ds">Lost your password?</a>
                </span>
              </div>
              <button type="submit"className="btn theme-btn-2 w-100">Login Now</button>
              <div className="or-divide"><span>or</span></div>
              <button className="btn theme-btn w-100">Register Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* login Area End*/}
</main>

        )
    }
}

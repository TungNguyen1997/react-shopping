import React, { Component } from 'react'
import firebase from  'firebase'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail:'',
            txtPass:''
        }
      }


    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        
        this.setState({
            [name] : value
        })
        
    }
    onSubmit =async(e) => {
        e.preventDefault()
        try{
         await firebase.auth().createUserWithEmailAndPassword(this.state.txtEmail, this.state.txtPass)
         console.log('DANG KY THANH CONG')
        }
        catch(error){
            console.log(error)
        }
       
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
            <h1>Register</h1>
            <ul className="breadcrumb-menu">
              <li><a href="index.html">home</a></li>
              <li><span>Register</span></li>
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
            <h3 className="text-center mb-60">Signup From Here</h3>
            <form onSubmit={(e) => this.onSubmit(e)}>
             
              <label htmlFor="email-id">Email Address <span>**</span></label>
              <input onChange={(event) => this.isChange(event)}id="email-id" type="text" name ="txtEmail" placeholder="Enter Username or Email address..." />
              <label htmlFor="pass">Password <span>**</span></label>
              <input  onChange={(event) => this.isChange(event)} name ="txtPass" id="pass" type="password" placeholder="Enter password..." />
              <div className="mt-10" />
              <button type ="submit" className="btn theme-btn-2 w-100">Register Now</button>
              <div className="or-divide"><span>or</span></div>
              <button className="btn theme-btn w-100">login Now</button>
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

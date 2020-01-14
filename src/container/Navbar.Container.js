import { connect } from "react-redux"

import Nav from "../components/Nav"

 

 const mapStateToProps = (store) => ({
     dataCartItem:store.CartItemReducer.dataCartItem,
 })
 
 const mapDispatchToProps = {
    
 }

export default connect(mapStateToProps,mapDispatchToProps)(Nav)
 
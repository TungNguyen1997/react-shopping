import { connect } from "react-redux"
import Checkout from "../components/Checkout"
 

 const mapStateToProps = (store) => ({
     dataCartItem:store.CartItemReducer.dataCartItem,
 })
 
 const mapDispatchToProps = {
    
 }

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
 
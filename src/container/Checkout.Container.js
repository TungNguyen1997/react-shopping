import { connect } from "react-redux"
import Checkout from "../components/Checkout"
 

 const mapStateToProps = (store) => ({
     dataCartItem:store.CartItemReducer.dataCartItem,
     final_price:store.CartTemplateReducer.final_price,

 })
 
 const mapDispatchToProps = {
    
 }

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
 
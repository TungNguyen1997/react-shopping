import { connect } from "react-redux"
import CartTemplate from "../components/CartTemplate"
import {deleteItem,addToCartRedux,plusItem,minusItem} from './../action/CartItem.action'
 

 const mapStateToProps = (store) => ({
    dataCartItem:store.CartItemReducer.dataCartItem,

 })
 
 const mapDispatchToProps = {
   deleteItem,
   plusItem,
   minusItem
 }

export default connect(mapStateToProps,mapDispatchToProps)(CartTemplate)
 
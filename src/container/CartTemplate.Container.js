import { connect } from "react-redux"
import CartTemplate from "../components/CartTemplate"
import {deleteItem,plusItem,minusItem} from './../action/CartItem.action'
import {sendTotalPrice} from './../action/CartTemplate.action'


 const mapStateToProps = (store) => ({
    dataCartItem:store.CartItemReducer.dataCartItem,

 })
 
 const mapDispatchToProps = {
   deleteItem,
   plusItem,
   minusItem,
   sendTotalPrice
 }

export default connect(mapStateToProps,mapDispatchToProps)(CartTemplate)
 
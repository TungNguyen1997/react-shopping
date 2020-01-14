import { connect } from "react-redux"
import Cart from "../components/Cart"
import {deleteItem} from './../action/CartItem.action'
 

 const mapStateToProps = (store) => ({
     dataCartItem:store.CartItemReducer.dataCartItem,
 })
 
 const mapDispatchToProps = {
    deleteItem
 }

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
 
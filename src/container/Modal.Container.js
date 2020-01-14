import { connect } from "react-redux"
import {deleteItem} from './../action/CartItem.action'
import Modal from "../components/Modal"
 

 const mapStateToProps = (store) => ({
    dataCartItem:store.CartItemReducer.dataCartItem,
 })
 
 const mapDispatchToProps = {
    deleteItem
 }

export default connect(mapStateToProps,mapDispatchToProps)(Modal)
 
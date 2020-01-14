import { connect } from "react-redux"
import {addToCartRedux} from './../action/CartItem.action'
import ProductItem from "../components/ProductItem"

 

 const mapStateToProps = (store) => ({
     dataCartItem:store.CartItemReducer.dataCartItem,
     dataRedux:store.ProductListReducer.data,
 })
 
 const mapDispatchToProps = {
    addToCartRedux
 }

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)
 
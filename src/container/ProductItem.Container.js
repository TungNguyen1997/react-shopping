import { connect } from "react-redux"
import {getProductId} from './../action/ProductItem.action'
import ProductItem from "../components/ProductItem"

 

 const mapStateToProps = (store) => ({
     dataCartItem:store.CartItemReducer.dataCartItem,
     dataRedux:store.ProductListReducer.data,
 })
 
 const mapDispatchToProps = {
    getProductId
 }

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)
 
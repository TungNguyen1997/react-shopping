import { connect } from "react-redux"
import {getShopDetailList,hideLoading} from './../action/ShopDetail.action'
import ShopDetail from "../components/ShopDetail"
import {addToCartRedux} from './../action/CartItem.action'
import {getProductRelatedList} from './../action/Related.action'


 const mapStateToProps = (store) => ({
     dataRedux:store.ShopDetailReducer.data,
     load:store.ShopDetailReducer.load,
     error:store.ShopDetailReducer.error,
     dataCartItem:store.CartItemReducer.dataCartItem,

 })
 
 const mapDispatchToProps = {
    getShopDetailList,
    addToCartRedux,
    hideLoading,
    getProductRelatedList
 }

export default connect(mapStateToProps,mapDispatchToProps)(ShopDetail)
 
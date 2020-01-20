import { connect } from "react-redux"
import {getShopDetailList,hideLoading,testData} from './../action/ShopDetail.action'
import ShopDetail from "../components/ShopDetail"
import {addToCartRedux} from './../action/CartItem.action'
import {getProductRelatedList,resetData} from './../action/Related.action'


 const mapStateToProps = (store) => ({
     dataRedux:store.ShopDetailReducer.data,
     load:store.ShopDetailReducer.load,
     dataCartItem:store.CartItemReducer.dataCartItem,
     dataRelated:store.ProductRelatedReducer.dataRelated,
     productId:store.ProductItemReducer.productId,

 })
 
 const mapDispatchToProps = {
    getShopDetailList,
    addToCartRedux,
    hideLoading,
    getProductRelatedList,
    resetData,
    testData
 }

export default connect(mapStateToProps,mapDispatchToProps)(ShopDetail)
 
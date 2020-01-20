import { connect } from "react-redux"
import ProductRelated from "../components/ProductRelated"
import {getProductRelatedList} from './../action/Related.action'
import {getProductId} from './../action/ProductItem.action'
import {getShopDetailList,testData} from './../action/ShopDetail.action'


 const mapStateToProps = (store) => ({
     dataRelated:store.ProductRelatedReducer.dataRelated,
     dataRedux:store.ShopDetailReducer.data,
 })
 
 const mapDispatchToProps = {
    getProductRelatedList,
    getProductId,
    getShopDetailList,
    testData
    
 }

export default connect(mapStateToProps,mapDispatchToProps)(ProductRelated)
 
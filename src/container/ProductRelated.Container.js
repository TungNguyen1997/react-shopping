import { connect } from "react-redux"
import ProductRelated from "../components/ProductRelated"
import {getProductRelatedList} from './../action/Related.action'


 const mapStateToProps = (store) => ({
     dataRelated:store.ProductRelatedReducer.dataRelated,
     dataRedux:store.ShopDetailReducer.data,
 })
 
 const mapDispatchToProps = {
    getProductRelatedList
 }

export default connect(mapStateToProps,mapDispatchToProps)(ProductRelated)
 
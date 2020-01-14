import { connect } from "react-redux"
import ProductList from "../components/ProductList"
import {getProductList,getSearchData} from './../action/ProductList.action'

 

 const mapStateToProps = (store) => ({
     dataRedux:store.ProductListReducer.data,
     load:store.ProductListReducer.load,
     error:store.ProductListReducer.error
 })
 
 const mapDispatchToProps = {
     getProductList,
     getSearchData
 }

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
 
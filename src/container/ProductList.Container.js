import { connect } from "react-redux"
import ProductList from "../components/ProductList"
import {getProductList,getSearchData,getProductList2} from './../action/ProductList.action'

 

 const mapStateToProps = (store) => ({
     dataRedux:store.ProductListReducer.data,
     load:store.ProductListReducer.load,
     error:store.ProductListReducer.error,
     searchText:store.ProductListReducer.text,
     total_page:store.ProductListReducer.total_page


 })
 
 const mapDispatchToProps = {
     getProductList,
     getSearchData,
     getProductList2
 }

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
 
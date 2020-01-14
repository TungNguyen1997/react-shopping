import { connect } from "react-redux"
import {getSortDataRequest,getSearchData} from './../action/ProductList.action'
import Sidebar from "../components/Sidebar"

 

 const mapStateToProps = (store) => ({
     dataRedux:store.ProductListReducer.data,
 })
 
 const mapDispatchToProps = {
    getSortDataRequest,
    getSearchData
 }

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
 
import { connect } from "react-redux"
import Loading from "../components/Loading"
 

 const mapStateToProps = (store) => ({
     Loading:store.ShopDetailReducer.loading,
 })
 
 const mapDispatchToProps = {
    
 }

export default connect(mapStateToProps,mapDispatchToProps)(Loading)
 
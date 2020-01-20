
import {GET_PRODUCT_ID}  from '../action/ProductItem.action'

var initialState={

    productId : '',
    
};

 const  ProductItemReducer = (state=initialState,action)=>
{
   switch(action.type)
   {
     
      case GET_PRODUCT_ID:
        
         return{
            ...state,
            productId:action.id
         }
        
      default:
         return state
   }
}

export default ProductItemReducer;
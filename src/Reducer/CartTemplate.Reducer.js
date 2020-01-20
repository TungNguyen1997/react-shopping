
import {GET_FINAL_PRICE}  from '../action/CartTemplate.action'

var initialState={

    final_price : null,
    
};

 const  CartTemplateReducer = (state=initialState,action)=>
{
   switch(action.type)
   {
     
      case GET_FINAL_PRICE:
        
         return{
            ...state,
            final_price:action.totalPrice
         }
        
      default:
         return state
   }
}

export default CartTemplateReducer;
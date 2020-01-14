
import {ADD_TO_CART,DELETE_ITEM,PLUS_ITEM,MINUS_ITEM}  from '../action/CartItem.action'

var initialState={

    dataCartItem : [],
    
};

 const  CartItemReducer = (state=initialState,action)=>
{
   switch(action.type)
   {
     
      case ADD_TO_CART:
         
         return{
            ...state,
            dataCartItem:action.data
         }
         case DELETE_ITEM:
            return{
               ...state,
               dataCartItem:action.data
            }
         case PLUS_ITEM:
            var key =action.key;
            var temp =[...state.dataCartItem]
            temp[key].quantity ++;
             return{
                ...state,
                dataCartItem:temp
             }
         case MINUS_ITEM:
            var key =action.key;
            var temp1 =[...state.dataCartItem]
          
            if(temp1[key].quantity  >= 1) {
               temp1[key].quantity --;
            }
            else if(temp1[key].quantity === 0) {
               
            }
            
            return{
               ...state,
               dataCartItem:temp1
            }
      default:
         return state
   }
}

export default CartItemReducer;
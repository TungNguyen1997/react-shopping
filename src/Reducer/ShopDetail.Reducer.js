
import {GET_SHOPDETAIL_FAIL,GET_SHOPDETAIL_REQUEST,GET_SHOPDETAIL_SUCCESS, HIDE_LOADING}  from '../action/ShopDetail.action'

var initialState={
loading:false,
data:[],

};

 const  ShopDetailReducer = (state=initialState,action)=>
{
   switch(action.type)
   {
      case GET_SHOPDETAIL_REQUEST:
         return {...state,
            loading:true,
         
      }
      case HIDE_LOADING:
         return {...state,
            loading:false,
         
      }
      case GET_SHOPDETAIL_SUCCESS:
      
          
         return {...state,
         load:false,
         data:action.data
         
      }
      case GET_SHOPDETAIL_FAIL:
         return {...state,
         load:false,
        error:action.error
         
      }
      default:
         return state
   }
}

export default ShopDetailReducer;
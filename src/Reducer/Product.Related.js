
import {GET_PRODUCTRELATED_SUCCESS,GET_PRODUCTRELATED_FAIL,RESET_DATA}  from '../action/Related.action'

var initialState={
    dataRelated:[]
};

 const  ProductRelatedReducer = (state=initialState,action)=>
{
   switch(action.type)
   {
      
    case GET_PRODUCTRELATED_SUCCESS:
      
        var temp = [...state.dataRelated];
        temp.push(action.data)
        return {...state,
        load:false,
        dataRelated:temp
        
     }
     case GET_PRODUCTRELATED_FAIL:
        return {...state,
      
     }
     case RESET_DATA:
        return {...state,
         dataRelated : []
      
     }
      
    
     
      default:
         return state
   }
}

export default ProductRelatedReducer;
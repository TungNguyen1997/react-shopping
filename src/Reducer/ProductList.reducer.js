
import {GET_PRODUCTLIST_FAIL,GET_PRODUCTLIST_REQUEST,GET_PRODUCTLIST_SUCCESS,GET_SEARCH_REQUEST,GET_SORTDATA_REQUEST}  from '../action/ProductList.action'

var initialState={
load:false,
data:[],
error:null,
text:'banh mi',
total_page:''
};

 const  ProductListReducer = (state=initialState,action)=>
{
   switch(action.type)
   {
      case GET_PRODUCTLIST_REQUEST:
         return {...state,
         load:false,
         
      }
      case GET_PRODUCTLIST_SUCCESS:
       
         console.log(action.data)

         return {...state,
         load:false,
         data:action.data.data,
         total_page :action.data.meta_data.total_page
         
      }
      case GET_PRODUCTLIST_FAIL:
         return {...state,
         load:false,
        error:action.error
         
      }
      case GET_SORTDATA_REQUEST:
         return{
            ...state,
            data:action.data
         }
      case GET_SEARCH_REQUEST:
         return{
            ...state,
            data:action.data.data,
            text:action.text,
            total_page :action.data.meta_data.total_page
            
         }
      default:
         return state
   }
}

export default ProductListReducer;
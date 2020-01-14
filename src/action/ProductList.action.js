import axios from 'axios'



export const  GET_PRODUCTLIST_SUCCESS='GET_PRODUCTLIST_SUCCESS';
export const  GET_PRODUCTLIST_FAIL='GET_PRODUCTLIST_FAIL';
export const  GET_PRODUCTLIST_REQUEST='GET_PRODUCTLIST_REQUEST';

export const  GET_SORTDATA_REQUEST='GET_SORTDATA_REQUEST';

export const  GET_SEARCH_REQUEST='GET_SEARCH_REQUEST';



export const getSortDataRequest = (data) => {
    return{
        type : GET_SORTDATA_REQUEST,
        data
    }
}

export const getSearchDataRequest = (data) => {
    return{
        type : GET_SEARCH_REQUEST,
        data
        
    }
}

export const getProductListSuccess = (data) => {
    return{
        type : GET_PRODUCTLIST_SUCCESS,
        data
    }
}

export const getProductListRequest = () => {
    return{
        type : GET_PRODUCTLIST_REQUEST,
    }
}

export const getProductListFail = (err) => {
    return{
        type : GET_PRODUCTLIST_FAIL,
        err
    }
}

export const getSearchData = (text) => {
    return async (dispatch)=>
    {
        
    try{
          const result=await axios(
              {
                  method:"GET",
                  url:`https://mapi.sendo.vn/mob/product/search?p={1}&q=${text}`
              }
            
          )
          dispatch(getSearchDataRequest(result.data.data))
    }
    catch(error)
    {
      dispatch(getProductListFail(error))
    }
    }
        
    
}

export const getProductList = () => {
    return async (dispatch)=>
    {
        dispatch(getProductListRequest());
    try{
          const result=await axios(
              {
                  method:"GET",
                  url:`https://mapi.sendo.vn/mob/product/cat/ao-so-mi-nam?p=1`
              }
            
          )
          dispatch(getProductListSuccess(result.data.data))
    }
    catch(error)
    {
      dispatch(getProductListFail(error))
    }
    }
        
    
}
import axios from 'axios'



export const  GET_SHOPDETAIL_SUCCESS='GET_SHOPDETAIL_SUCCESS';
export const  GET_SHOPDETAIL_FAIL='GET_SHOPDETAIL_FAIL';
export const  GET_SHOPDETAIL_REQUEST='GET_SHOPDETAIL_REQUEST';

export const  HIDE_LOADING='HIDE_LOADING';



export const getShopDetailSuccess = (data) => {
    return{
        type : GET_SHOPDETAIL_SUCCESS,
        data
    }
}

export const getShopDetailRequest = () => {
    return{
        type : GET_SHOPDETAIL_REQUEST,
    }
}
export const hideLoading = () => {
    return{
        type : HIDE_LOADING,
    }
}



export const getShopDetailFail = (err) => {
    return{
        type : GET_SHOPDETAIL_FAIL,
        err
    }
}

export const getShopDetailList = (id) => {
    return async (dispatch)=>
    {
        dispatch(getShopDetailRequest());
    try{
          const result=await axios(
              {
                  method:"GET",
                  url:`https://mapi.sendo.vn/mob/product/${id}/detail/`
              }
            
          )
         
          dispatch(getShopDetailSuccess(result.data))
          

    }
    catch(error)
    {
      dispatch(getShopDetailFail(error))
    }
    }
        
    
}
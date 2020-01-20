import axios from 'axios'
import Login from '../components/Login';



export const  GET_PRODUCTRELATED_SUCCESS='GET_PRODUCTRELATED_SUCCES';
export const  GET_PRODUCTRELATED_FAIL='GET_PRODUCTRELATED_FAIL';
export const  RESET_DATA='RESET_DATA';


export const getShopDetailSuccess = (data) => {
    return{
        type : GET_PRODUCTRELATED_SUCCESS,
        data
    }
}

export const resetData = (data) => {
    return{
        type :RESET_DATA,
        
    }
}

export const getShopDetailFail = (err) => {
    return{
        type : GET_PRODUCTRELATED_FAIL,
        err
    }
}

export const getProductRelatedList = (id) => {
    return async (dispatch)=>
    {
       
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
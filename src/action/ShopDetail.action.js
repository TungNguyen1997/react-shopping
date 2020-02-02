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
// export function getProductDetailById(id) {
//     return async(dispatch) => {
//         dispatch(productDetailRequestAction())
//         console.log("okkk22", id)
//         try {
//             const result = await axios({
//                 method: "GET",
//                 url: https://mapi.sendo.vn/mob/product/${id}/detail/
//             })

//             // const data = result
//             console.log(result.data, "sdf")


//             const relative_full = result.data.product_relateds.split(',').map(async elm => {
//                 try {
//                     const result = await axios({
//                         method: "GET",
//                         url: https://mapi.sendo.vn/mob/product/${elm}/detail/
//                     })
//                     return result.data

//                 } catch (error) {
//                     console.log(error)
//                 }
//             })

//             result.data.product_relateds = await Promise.all(relative_full).then(r => r.filter(x => x.id));
//             console.log(result.data, ">>>>>>>>>>>>>>>>")
//             dispatch(productDetailSuccessAction(result.data))
//         } catch (error) {
//             dispatch(productDetailFailAction(error))
//         }
//     }
// }

export const testData = (id) => {
    return async (dispatch) => {
        dispatch(getShopDetailRequest());
        try{
            const result = await axios({
                method:"GET",
                url:`https://mapi.sendo.vn/mob/product/${id}/detail/`
            })
            const dataRelated = result.data.product_relateds.split(",").map( async value => {
               const data =  await axios({
                    method:"GET",
                    url:`https://mapi.sendo.vn/mob/product/${value}/detail/`
                })
                return data.data
            });
            result.data.product_relateds = await Promise.all(dataRelated).then(arr => arr.filter(x => x.id));
            dispatch(getShopDetailSuccess(result.data))
            }
        catch (error) {
            dispatch(getShopDetailFail(error))


        }
    }
    
}
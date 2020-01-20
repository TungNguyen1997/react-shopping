
export const  GET_PRODUCT_ID='GET_PRODUCT_ID';





export const getProductId = (id) => {
    return{
        type : GET_PRODUCT_ID,
        id
    }
}


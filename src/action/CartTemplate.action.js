
export const  GET_FINAL_PRICE='GET_FINAL_PRICE';





export const sendTotalPrice = (totalPrice) => {
    return{
        type : GET_FINAL_PRICE,
        totalPrice
    }
}



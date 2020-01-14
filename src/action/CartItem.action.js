
export const  ADD_TO_CART='ADD_TO_CART';

export const  DELETE_ITEM='DELETE_ITEM';
export const  PLUS_ITEM='PLUS_ITEM';
export const  MINUS_ITEM='MINUS_ITEM';



export const addToCartRedux = (data) => {
    return{
        type : ADD_TO_CART,
        data
    }
}

export const minusItem = (key) => {
    return{
        type : MINUS_ITEM,
        key
    }
}


export const deleteItem = (data) => {
    return{
        type : DELETE_ITEM,
        data
    }
}

export const plusItem = (key) => {
    return{
        type : PLUS_ITEM,
        key
    }
}
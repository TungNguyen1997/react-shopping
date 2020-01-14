import {combineReducers} from 'redux' ;
import ProductListReducer from './ProductList.reducer';
import ShopDetailReducer from './ShopDetail.Reducer';
import CartItemReducer from './CartItem.Reducer';
import ProductRelatedReducer from './Product.Related';



const rootReducer = combineReducers({
    ProductListReducer : ProductListReducer,
    ShopDetailReducer : ShopDetailReducer,
    CartItemReducer:CartItemReducer,
    ProductRelatedReducer : ProductRelatedReducer
});
export default rootReducer;
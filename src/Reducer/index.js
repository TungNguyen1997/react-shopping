import {combineReducers} from 'redux' ;
import ProductListReducer from './ProductList.reducer';
import ShopDetailReducer from './ShopDetail.Reducer';
import CartItemReducer from './CartItem.Reducer';
import ProductRelatedReducer from './Product.Related';
import ProductItemReducer from './ProductItem.Reducer';
import CartTemplateReducer from './CartTemplate.Reducer';



const rootReducer = combineReducers({
    ProductListReducer : ProductListReducer,
    ShopDetailReducer : ShopDetailReducer,
    CartItemReducer:CartItemReducer,
    ProductRelatedReducer : ProductRelatedReducer,
    ProductItemReducer : ProductItemReducer,
    CartTemplateReducer : CartTemplateReducer
    
});
export default rootReducer;
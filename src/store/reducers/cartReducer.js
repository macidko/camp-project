import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItem: cartItems
}
ğ
export default function cartReducer(state = initialState, {type, payload}){
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItem.find(c => c.product.id === payload.id)
            break;
    
        default:
            break;
    }
}
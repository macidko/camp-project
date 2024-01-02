export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(course){
    return {
        type: ADD_TO_CART,
        payload: course
    }
}

export function removeFromCart(course){
    return {
        type: REMOVE_FROM_CART,
        payload: course
    }
}
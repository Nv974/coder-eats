import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_TO_CART,
    RESET_CART,
    SET_FINAL_PRICE,
} from '../actions/cart';

const initialState = {
    cart: [],
    cartId: 0,
    price: 0,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.product],
                cartId: state.cartId + 1,
            };

        case SET_FINAL_PRICE:
            return {
                ...state,
                price: action.finalPrice,
            };
        case DELETE_PRODUCT_TO_CART: {
            const newArr = state.cart.filter(cart => cart.id !== action.id);
            return {
                ...state,
                cart: newArr,
            };
        }
        case RESET_CART: {
            return {
                ...state,
                cart: [],
                cartId: 0,
                price: 0,
            };
        }
        default:
            return state;
    }
};

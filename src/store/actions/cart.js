// action type ADD_PRODUCT_TO_CART
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

// action creator addProductToCart
export const addProductToCart = product => ({
    type: ADD_PRODUCT_TO_CART,
    product: product,
});

// action type SET_FINAL_PRICE
export const SET_FINAL_PRICE = 'SET_FINAL_PRICE';

// action creator setFinalPrice
export const setFinalPrice = finalPrice => ({
    type: SET_FINAL_PRICE,
    finalPrice,
});

// action type DELETE_PRODUCT_TO_CART
export const DELETE_PRODUCT_TO_CART = 'DELETE_PRODUCT_TO_CART';

// action creator deleteProductToCart
export const deleteProductToCart = id => ({
    type: DELETE_PRODUCT_TO_CART,
    id,
});

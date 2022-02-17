import { createSlice } from "@reduxjs/toolkit";

const storageCart = JSON.parse(localStorage.getItem('storageCart')) || { items: [], totalQty: 0, totalPrice: 0 };
console.log(storageCart);

const cart = createSlice({
    name: 'cart',
    initialState: {
        ...storageCart,
        isShow: null
    },
    reducers: {
        showCart: (state) => {
            state.isShow = true;
        },
        hideCart: (state) => {
            state.isShow = false;
        },
        addItemCart: (state, action) => {
            state.items.push(action.payload);
            state.totalQty += action.payload.qty;
            state.totalPrice += action.payload.price;
        },
        removeItemCart: (state, action) => {
            state.totalQty -= state.items[action.payload].qty;
            state.totalPrice -= state.items[action.payload].price;
            state.items.splice(action.payload, 1);
        }
    }
})


const { reducer, actions } = cart;

export const { showCart, hideCart, addItemCart, removeItemCart } = actions;

export default reducer;
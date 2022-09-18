import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../../api/cartApi";

export const orderCart = createAsyncThunk(
  "/cart/orderCart",
  async (payload) => {
    const res = await cartApi.orderCart(payload);
    return res.data;
  }
);

const storageCart = JSON.parse(localStorage.getItem("storageCart")) || {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const cart = createSlice({
  name: "cart",
  initialState: {
    ...storageCart,
    isShow: null,
    isLoading: false,
  },
  reducers: {
    showCart: (state) => {
      state.isShow = true;
    },
    hideCart: (state) => {
      state.isShow = false;
    },
    addItemCart: (state, action) => {
      const indexTheSameItem = state.items.findIndex(
        (item) =>
          item.item._id === action.payload.item._id &&
          action.payload.size === item.size
      );
      if (indexTheSameItem >= 0) {
        state.items[indexTheSameItem].qty += action.payload.qty;
        state.items[indexTheSameItem].price += action.payload.price;
        state.totalQty += action.payload.qty;
        state.totalPrice += action.payload.price;
      } else {
        state.items.push(action.payload);
        state.totalQty += action.payload.qty;
        state.totalPrice += action.payload.price;
      }
    },
    removeItemCart: (state, action) => {
      state.totalPrice -= state.items[action.payload].price;
      state.totalQty -= state.items[action.payload].qty;
      state.items.splice(action.payload, 1);
    },
  },
  extraReducers: {
    [orderCart.pending]: (state) => {
      state.isLoading = true;
    },
    [orderCart.fulfilled]: (state) => {
      state.items = [];
      state.totalQty = 0;
      state.totalPrice = 0;
      state.isLoading = false;
      state.isShow = false;
    },
    [orderCart.rejected]: (state) => {
      state = {
        ...state,
        isLoading: false,
      };
    },
  },
});

const { reducer, actions } = cart;

export const { showCart, hideCart, addItemCart, removeItemCart } = actions;

export default reducer;

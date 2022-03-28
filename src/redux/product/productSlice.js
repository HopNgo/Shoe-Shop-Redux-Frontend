import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await productApi.getAll();
    console.log(res.data);
    return res.data;
  }
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (payload) => {
    try {
      const res = await productApi.addProduct(payload);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (payload) => {
    try {
      const res = await productApi.editProduct(payload);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (payload) => {
    try {
      const res = await productApi.deleteProduct(payload);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const product = createSlice({
  name: "product",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.list = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
    //--------------------------------------
    [addProduct.pending]: (state, action) => {
      state.status = "loading";
    },
    [addProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.list = [action.payload, ...state.list];
    },
    [addProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
    //--------------------------------------
    [editProduct.pending]: (state, action) => {
      state.status = "loading";
    },
    [editProduct.fulfilled]: (state, action) => {
      state.status = "success";
      const indexProductEditting = state.list.findIndex(
        (product) => product._id === action.payload._id
      );
      if (indexProductEditting >= 0) {
        state.list[indexProductEditting] = action.payload;
      }
    },
    [editProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
    //--------------------------------------
    [deleteProduct.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.list = state.list.filter(
        (product) => product._id !== action.payload._id
      );
    },
    [deleteProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const { reducer } = product;

export default reducer;

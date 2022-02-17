import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await productApi.getAll();
    console.log(res.data);
    return res.data;
})


const product = createSlice({
    name: 'product',
    initialState: {
        list: [],
        status: null
    },
    reducers: {

    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = "success";
            state.list = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.status = "failed";
        }
    }
})

const { reducer } = product;

export default reducer;
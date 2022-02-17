import { createSlice } from "@reduxjs/toolkit";


const overlay = createSlice({
    name: 'overlay',
    initialState: {
        isShow: false,
        imageUrl: ''
    },
    reducers: {
        showAndgetUrlImageOverlay: (state, action) => {
            state.isShow = true;
            state.imageUrl = action.payload;
        },
        hideOverlay: (state) => {
            state.isShow = false;
            state.imageUrl = '';
        }
    }
})

const { reducer, actions } = overlay;
export const { showAndgetUrlImageOverlay, hideOverlay } = actions;

export default reducer;
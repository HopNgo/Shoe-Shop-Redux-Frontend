import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userApi.signUp(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateNameUser = createAsyncThunk(
  "user/updateNameUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userApi.updateNameUser(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUsernameUser = createAsyncThunk(
  "user/updateUsernameUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userApi.updateUsernameUser(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updatePasswordUser = createAsyncThunk(
  "user/updatePasswordUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userApi.updatePasswordUser(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userApi.loadUser();
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await userApi.signIn(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialStateUser = JSON.parse(localStorage.getItem("rememberedAccount"));

console.log(initialStateUser);
const user = createSlice({
  name: "user",
  initialState: {
    currentUser: initialStateUser,
    isLoading: false,
    messageSuccess: "",
    messageError: "",
  },
  reducers: {
    logIn: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.messageError = "";
      state.messageSuccess = "";
    },
    setEmptyMessageSuccess: (state) => {
      state.messageSuccess = "";
    },
    changeTelephoneAction: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        telephone: action.payload.telephone,
      };
    },
    changeEmailAction: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        email: action.payload.email,
      };
    },
    changeAddressAction: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        address: action.payload.address,
      };
    },
  },
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.messageError = "";
      state.messageSuccess = action.payload.message;
    },
    [signUpUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageSuccess = "";
      state.messageError = action.payload.message;
    },
    [signInUser.pending]: (state, action) => {
      state.isLoading = true;
      state.messageError = "";
      state.messageSuccess = "";
      state.currentUser = null;
    },
    [signInUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.messageError = "";
      const { accessToken, ...other } = action.payload;
      state.currentUser = other;
    },
    [signInUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageSuccess = "";
      state.messageError = action.payload.message;
      state.currentUser = null;
    },
    [loadUser.pending]: (state, action) => {
      state.isLoading = true;
      state.messageError = "";
      state.messageSuccess = "";
      state.currentUser = null;
    },
    [loadUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.messageError = "";
      state.messageSuccess = "";
      console.log(action.payload);
      state.currentUser = {
        userId: action.payload._doc._id,
        name: action.payload._doc.name,
        username: action.payload._doc.username,
        email: action.payload._doc.email,
        isAdmin: action.payload._doc.isAdmin,
        avatarUrl: action.payload.avatarUrl,
      };
    },
    [loadUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageError = "";
      state.messageSuccess = "";
      state.currentUser = null;
      console.log(action.payload);
    },
    [updateNameUser.pending]: (state, action) => {
      state.isLoading = true;
      state.messageSuccess = "";
    },
    [updateNameUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.messageSuccess = "* Bạn đã cập nhật tên quản trị thành công";
      state.currentUser = { ...state.currentUser, name: action.payload.name };
    },
    [updateNameUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [updateUsernameUser.pending]: (state, action) => {
      state.isLoading = true;
      state.messageSuccess = "";
    },
    [updateUsernameUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.messageSuccess = "* Bạn đã cập nhật tên tài khoản thành công";
      state.currentUser = {
        ...state.currentUser,
        username: action.payload.username,
      };
    },
    [updateUsernameUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageSuccess = "";
    },
    [updatePasswordUser.pending]: (state, action) => {
      state.isLoading = true;
      state.messageSuccess = "";
    },
    [updatePasswordUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.messageSuccess = "* Bạn đã cập nhật mật khẩu thành công";
    },
    [updatePasswordUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.messageSuccess = "";
    },
  },
});

const { reducer, actions } = user;

export const {
  logOut,
  logIn,
  changeTelephoneAction,
  changeAddressAction,
  changeEmailAction,
  setEmptyMessageSuccess,
} = actions;

export default reducer;

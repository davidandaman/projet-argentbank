import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../datas/connexion-api";

export const getUserDatas = createAsyncThunk("auth/getUserDatas", async () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const request = await Axios.post("/profile", headers);
  try {
    const response = await request.data.body;
    return response;
  } catch (error) {
    return error;
  }
});

export const updateUserDatas = createAsyncThunk(
  "auth/updateUserDatas",
  async (formData, { dispatch }) => {
    const request = await Axios.put("/profile", formData);
    try {
      const response = await request.data.body;
      dispatch(setUserDatas(response));
      return response;
    } catch (error) {
      return error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDatas: null,
    rememberMe: false,
    isLogged: false,
    loading: false,
    error: null,
  },
  reducers: {
    setUserDatas: (state, action) => {
      state.userDatas = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    setisLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDatas.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDatas.fulfilled, (state, action) => {
        state.loading = false;
        state.userDatas = action.payload;
        state.isLogged = true;
      })
      .addCase(getUserDatas.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const { setUserDatas, setRememberMe, setisLogged } = authSlice.actions;
export default authSlice.reducer;

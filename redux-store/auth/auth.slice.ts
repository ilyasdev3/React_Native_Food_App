import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserTypes } from "./auth.types";
import axiosInstance from "../../config/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: IUserTypes = {
  name: "",
  email: "",
  password: "",
  token: "",
  error: "",
  isActivityInProgress: false,
  message: "",
  user: {
    email: "",
    name: "",
    phone: "",
    address: "",
  },
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: IUserTypes, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().post("/auth/register", user);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: IUserTypes, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().post("/auth/login", user);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.email = "";
      state.password = "";
      state.token = "";
      state.error = "";
      state.isActivityInProgress = false;
      state.message = "";
      state.user = {
        email: "",
        name: "",
        phone: "",
        address: "",
      };
    },
    errorCleanUp: (state) => {
      state.error = "";
    },

    messageCleanUp: (state) => {
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });
    builder.addCase(registerUser.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isActivityInProgress = false;

      state.message = action.payload.message;
      state.token = action.payload.token;
      state.user = action.payload.user;
      const token = action.payload.token;
      const user = action.payload.user;
      AsyncStorage.setItem("FOOD_APP_USER", JSON.stringify(user));
      AsyncStorage.setItem("FOOD_APP_TOKEN", JSON.stringify(token));
    });
    builder.addCase(loginUser.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = action.payload;
    });
  },
});

export const { resetUser, errorCleanUp, messageCleanUp } = authSlice.actions;

export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserTypes } from "./user.types";
import axiosInstance from "../../config/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: IUserTypes = {
  user: {
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
  },
  token: "",
  error: "",
  isActivityInProgress: false,
  message: "",
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (user: IUserTypes, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().get("/user/user");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

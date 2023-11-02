import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProductState } from "./product.types";
import axiosInstance from "../../config/axiosConfig";

const initialState: IProductState = {
  isActivityInProgress: false,
  id: "",
  error: {},
  message: "",
  products: [],
  product: {
    _id: "",
    name: "",
    description: "",
    image: "",
  },
};

export const getProductList = createAsyncThunk(
  "product/getProductList",
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get("/product/get-products");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (product: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get(
        `/product/product/${product?.id}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: IProductState, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().post(
        "/product/add-product",
        product
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: IProductState, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().put(
        `/product/update-product/${product?.id}`,
        product
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (product: IProductState, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().delete(
        `/product/delete-product/${product?.id}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.id = "";
      state.error = {};
      state.message = "";
      state.products = [];
      state.product = {
        _id: "",
        name: "",
        description: "",
        image: "",
      };
    },
    errorCleanUp: (state) => {
      state.error = {};
    },
    messageCleanUp: (state) => {
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
      console.log("====================================");
      console.log(action.payload.products);
      console.log("====================================");
      state.isActivityInProgress = false;
      state.products = action.payload.products;
      state.message = action.payload.message;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      state.isActivityInProgress = false;
      state.error = action.payload;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isActivityInProgress = false;
      state.product = action.payload.product;
      state.message = action.payload.message;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isActivityInProgress = false;
      state.error = action.payload;
    });
    builder.addCase(addProduct.pending, (state) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isActivityInProgress = false;
      state.error = action.payload;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.isActivityInProgress = false;
      state.error = action.payload;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isActivityInProgress = false;
      state.error = action.payload;
    });
  },
});

export const { resetProduct } = productSlice.actions;
export default productSlice.reducer;

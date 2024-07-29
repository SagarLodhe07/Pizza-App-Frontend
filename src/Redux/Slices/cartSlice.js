import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosIntance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  cartsData: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartDetails.fulfilled, (state, action) => {
      state.cartsData = action?.payload?.data?.data;
    });
  },
});
export default cartSlice.reducer;

export const removeFromCart = createAsyncThunk(
  "/cart/removeProduct",
  async (productID) => {
    try {
      const response = axiosIntance.post(`/carts/remove/${productID}`);
      toast.promise(response, {
        loading: "Removing Product from Cart",
        success: "Removed successfully",
        error: "Something went wrong can't Remove Product ",
      });
      const apiResponse = await response;
      return apiResponse;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
);
export const addToCart = createAsyncThunk(
  "/cart/addProduct",
  async (productId) => {
    try {
      const response = axiosIntance.post(`/carts/add/${productId}`);
      toast.promise(response, {
        loading: "Adding Product to the Cart",
        success: "Added successfully",
        error: "Something went wrong can't Add Product ",
      });
      const apiResponse = await response;
      return apiResponse;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
);
export const getCartDetails = createAsyncThunk("/cart/getDetails", async () => {
  try {
    const response = axiosIntance.get("/carts");
    toast.promise(response, {
      loading: "fetching Cart",
      success: "Fetched successfully",
      error: "Something went wrong can't Fetched Cart ",
    });
    const apiResponse = await response;
    return apiResponse;
  } catch (error) {
    console.log(error.response);
    if (error?.response?.status ===404) {
      toast.error('Please Login to view cart')
      return{
        isUnauthorized:true
      }
    }
    toast.error("Something went wrong");
  }
});

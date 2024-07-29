import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosIntance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  ordersData: null,
};

export const placeOrder = createAsyncThunk("/order/placeOrder", async () => {
  try {
    const response = axiosIntance.post('/orders');
    toast.promise(response, {
      loading: "Creating Order",
      success: "Created Order successfully",
      error: "Something went wrong can't create order",
    });
    const apiResponse = await response;
    console.log(apiResponse);
    return apiResponse;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
});
const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(placeOrder.fulfilled,(state,action)=>{
        state.ordersData = action?.payload?.data
    })
   
  },
});

export default OrderSlice.reducer




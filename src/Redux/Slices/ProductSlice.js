import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosIntance from "../../Helpers/axiosInstance";

const initialState = {
  productData: [],
};

export const getAllproducts = createAsyncThunk("/products/getAll", async () => {
  try {
    const products = axiosIntance.get("/product");
    toast.promise(products, {
      loading: "Loading all products",
      success: "Products loaded successfully",
      error: "Something went wrong can't load products  ",
    });
    const apiResponse = await products;
    return apiResponse;
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong')
  }
});
export const getProductDetails = createAsyncThunk("/product/getProduct", async (id) => {
  try {
    const product = axiosIntance.get(`/product/${id}`);
    toast.promise(product, {
      loading: "Loading  Product",
      success: "Product loaded successfully",
      error: "Something went wrong can't load product ",
    });
    const apiResponse = await product;
    return apiResponse;
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong')
  }
});
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers:((builder)=>{
        builder.addCase(getAllproducts.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.productData = action?.payload?.data?.data
        })
  })
});

export default productSlice.reducer;

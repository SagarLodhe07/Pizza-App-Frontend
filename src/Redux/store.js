import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import ProductSlice from "./Slices/ProductSlice";
import cartSlice from "./Slices/cartSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    product: ProductSlice,
    cart:cartSlice
  },
  devTools: true,
});

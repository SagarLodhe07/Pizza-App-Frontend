import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import ProductSlice from "./Slices/ProductSlice";
import cartSlice from "./Slices/cartSlice";
import OrderSliceReducer from "./Slices/OrderSlice"

export const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    product: ProductSlice,
    cart: cartSlice,
    order:OrderSliceReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
  
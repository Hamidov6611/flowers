import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./productSlice/ProductSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

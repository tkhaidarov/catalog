import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "@/lib/data";
import { IProductsState } from "@/types/types";

const initialState: IProductsState = {
  visibleCount: 3,
  products: allProducts,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    showMore(state) {
      state.visibleCount += 3;
    },
  },
});

export const { showMore } = productsSlice.actions;
export default productsSlice.reducer;

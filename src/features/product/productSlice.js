import { createSlice } from "@reduxjs/toolkit"

import axios from "axios"

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.isError = action.payload
    },
  },
})

export const { setProducts, setLoading, setError } = ProductSlice.actions

export const selectProducts = (state) => state.product.products
export const selectLoading = (state) => state.product.isLoading
export const selectError = (state) => state.product.isError

// make a async fun to fetch the rpoduct data
export const fetchProducts = () => async (dispatch) => {
  const apiUrl = process.env.REACT_APP_API + "/products"
  try {
    dispatch(setLoading(true))
    const response = await axios.get(apiUrl)

    dispatch(setProducts(response.data))
  } catch (error) {
    dispatch(setError(error.message))
    console.log(error.message)
  } finally {
    dispatch(setLoading(false))
  }
}

export default ProductSlice.reducer

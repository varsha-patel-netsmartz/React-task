import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ApiService from "../services"

const initialState = {}

export const dataFetcher = createAsyncThunk(
  "dataFetcher",
  async (data, thunkAPI) => {
    try {
      const response = await ApiService.get('https://jsonplaceholder.typicode.com/comments')
      return thunkAPI.fulfillWithValue(response)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const DataFetcherSlice = createSlice({
  name: "dataFetcher",
  initialState,
  reducers: {
    [dataFetcher.pending]: (state, action) => {
      // console.log(state, action)
    },
    [dataFetcher.fulfilled]: (state, action) => {
      // console.log(state, action)
      state.push(action.payload)
    },
    [dataFetcher.rejected]: (state, action) => {
      // console.log(state, action)
    },
  },
})

export default DataFetcherSlice.reducer
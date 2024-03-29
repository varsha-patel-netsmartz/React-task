import { configureStore } from '@reduxjs/toolkit'
import DataFetcherSlice from '../slices/dataFetcher';

const reducer = {
  login: DataFetcherSlice
}

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store;
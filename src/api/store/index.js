import { configureStore } from '@reduxjs/toolkit'
import DataFetcherSlice from '../slices/dataFetcher';
import CounterSlice from '../slices/counterSlice';

const reducer = {
  login: DataFetcherSlice,
  counter: CounterSlice
}

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store;
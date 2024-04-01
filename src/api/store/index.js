import { configureStore } from '@reduxjs/toolkit'
import DataFetcherSlice from '../slices/dataFetcher';
import CounterSlice from '../slices/counterSlice';
import TodoSlice from '../slices/todoSlice';

const reducer = {
  login: DataFetcherSlice,
  counter: CounterSlice,
  todo: TodoSlice
}

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store;
import { configureStore } from '@reduxjs/toolkit'

const reducer = {
}

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store;
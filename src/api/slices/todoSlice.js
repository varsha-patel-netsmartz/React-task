import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    item: {}
}

const TodoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addItem: (state, data) => {
        state.list.push(data.payload)
    },
    deleteItem: (state, index) => {
        state.list.splice(index.payload, 1)
    },
    editItem: (state, item) => {
        state.item = state.list.filter(val => val.id === item.payload.id)[0]
    },
    searchItem: (state, item) => {
        state.list = state?.list?.filter(val => val.title.match(item.payload.title))
    }
  },
})
export const { addItem, deleteItem, editItem, searchItem } = TodoSlice.actions;

export default TodoSlice.reducer
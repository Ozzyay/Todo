import { createSlice } from "@reduxjs/toolkit";

const existingData = localStorage.getItem("todo");
let initialState;

if (existingData) {
  let prevState = JSON.parse(existingData);
  initialState = prevState;
} else {
  initialState = {
    todo: [],
  };
}

const TodoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addItem: (state, item) => {
      state.todo.push(item.payload);
      const jsonData = JSON.stringify(state);
      localStorage.setItem("todo", jsonData);
    },
    removeItem(state, item) {
      state.todo = state.todo.filter(
        (elem) => elem.title !== item.payload.title
      );
      const jsonData = JSON.stringify(state);
      localStorage.setItem("todo", jsonData);
    },
    editItem(state, item) {
      const index = state.todo.findIndex(
        (elem) => (elem.title = item.payload.prev.title)
      );
      state.todo[index] = item.payload.new;
      const jsonData = JSON.stringify(state);
      localStorage.setItem("todo", jsonData);
    },
  },
});

export const TodoActions = TodoSlice.actions;
export const todoReducer = TodoSlice.reducer;
export default TodoSlice;

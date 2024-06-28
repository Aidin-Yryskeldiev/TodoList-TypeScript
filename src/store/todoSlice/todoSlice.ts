import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "./todoThunk";
import { Todo } from "../../types";

interface TodoState {
	todos: Todo[];
	editTodo: Todo | null;
	deleteId: number | null;
}

const initialState: TodoState = {
	todos: [],
	editTodo: null,
	deleteId: null,
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setEditTodo: (state, action) => {
			state.editTodo = action.payload;
		},
		setDeleteId: (state, action) => {
			state.deleteId = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.todos = action.payload;
			})
			.addCase(addTodo.fulfilled, (state, action) => {
				state.todos.push(action.payload);
			})
			.addCase(deleteTodo.fulfilled, (state, action) => {
				state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			})
			.addCase(updateTodo.fulfilled, (state, action) => {
				const index = state.todos.findIndex(
					(todo) => todo.id === action.payload.id
				);
				if (index !== -1) {
					state.todos[index] = action.payload;
				}
			});
	},
});

export const { setEditTodo, setDeleteId } = todoSlice.actions;
export default todoSlice.reducer;

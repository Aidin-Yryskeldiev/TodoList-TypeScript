import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../types";

const API_URL = "https://fac6ed3aa497bb0b.mokky.dev/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
	const response = await axios.get<Todo[]>(API_URL);
	return response.data;
});

export const addTodo = createAsyncThunk(
	"todos/addTodo",
	async (todoText: string) => {
		const newTodo: Todo = {
			id: Date.now(),
			text: todoText,
			completed: false,
		};
		const response = await axios.post<Todo>(API_URL, newTodo);
		return response.data;
	}
);

export const deleteTodo = createAsyncThunk(
	"todos/deleteTodo",
	async (id: number) => {
		await axios.delete(`${API_URL}/${id}`);
		return id;
	}
);

export const updateTodo = createAsyncThunk(
	"todos/updateTodo",
	async (updatedTodo: Todo) => {
		const response = await axios.patch<Todo>(
			`${API_URL}/${updatedTodo.id}`,
			updatedTodo
		);
		return response.data;
	}
);

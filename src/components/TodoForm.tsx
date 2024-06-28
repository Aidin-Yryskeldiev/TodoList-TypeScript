import React from "react";
import { TextField, Button } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/todoSlice/todoThunk";

const TodoForm: React.FC = () => {
	const dispatch = useAppDispatch();

	const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const todoText = (event.target as any).todoText.value;
		if (todoText.trim() !== "") {
			dispatch(addTodo(todoText));
			(event.target as any).todoText.value = "";
		}
	};

	return (
		<form onSubmit={handleAddTodo} style={{ marginBottom: "20px" }}>
			<TextField name="todoText" label="Добавьте задачу" fullWidth />
			<Button type="submit" style={{ marginTop: "10px" }}>
				Добавить задачу
			</Button>
		</form>
	);
};

export default TodoForm;

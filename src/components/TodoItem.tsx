import React from "react";
import { ListItem, ListItemText, Checkbox, Button } from "@mui/material";
import { Todo } from "../types";
import { useAppDispatch } from "../store/hooks";
import { updateTodo } from "../store/todoSlice/todoThunk";
import { setEditTodo, setDeleteId } from "../store/todoSlice/todoSlice";

interface TodoItemProps {
	todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const dispatch = useAppDispatch();

	const handleToggleComplete = () => {
		const updatedTodo = { ...todo, completed: !todo.completed };
		dispatch(updateTodo(updatedTodo));
	};

	const handleEditTodo = () => {
		dispatch(setEditTodo(todo));
	};

	const handleDeleteTodo = () => {
		dispatch(setDeleteId(todo.id));
	};

	return (
		<ListItem>
			<Checkbox checked={todo.completed} onChange={handleToggleComplete} />
			<ListItemText
				primary={todo.text}
				style={{ textDecoration: todo.completed ? "line-through" : "none" }}
			/>
			<Button onClick={handleEditTodo}>Изменить</Button>
			<Button onClick={handleDeleteTodo}>Удалить</Button>
		</ListItem>
	);
};

export default TodoItem;

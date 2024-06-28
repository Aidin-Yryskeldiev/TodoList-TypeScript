import React, { useEffect } from "react";
import { List } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchTodos } from "../store/todoSlice/todoThunk";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector((state) => state.todos.todos);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	return (
		<List>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</List>
	);
};

export default TodoList;

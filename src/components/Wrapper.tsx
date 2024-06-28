import React from "react";
import { Container } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Edit from "./Edit";
import Delete from "./Delete";

const Wrapper: React.FC = () => {
	return (
		<Container>
			<TodoForm />
			<TodoList />
			<Edit />
			<Delete />
		</Container>
	);
};

export default Wrapper;

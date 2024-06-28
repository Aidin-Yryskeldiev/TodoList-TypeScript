import React from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateTodo } from "../store/todoSlice/todoThunk";
import { setEditTodo } from "../store/todoSlice/todoSlice";

const Edit: React.FC = () => {
	const dispatch = useAppDispatch();
	const editTodo = useAppSelector((state) => state.todos.editTodo);
	const [editText, setEditText] = React.useState("");

	React.useEffect(() => {
		if (editTodo) {
			setEditText(editTodo.text);
		}
	}, [editTodo]);

	const handleSaveEdit = () => {
		if (editTodo) {
			const updatedTodo = { ...editTodo, text: editText };
			dispatch(updateTodo(updatedTodo));
			dispatch(setEditTodo(null));
		}
	};

	return (
		<Dialog
			open={Boolean(editTodo)}
			onClose={() => dispatch(setEditTodo(null))}>
			<DialogTitle>Изменить</DialogTitle>
			<DialogContent>
				<TextField
					fullWidth
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => dispatch(setEditTodo(null))}>Отмена</Button>
				<Button onClick={handleSaveEdit}>Ок</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Edit;

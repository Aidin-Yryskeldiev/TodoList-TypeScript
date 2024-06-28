import React from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	DialogContentText,
	Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteTodo } from "../store/todoSlice/todoThunk";
import { setDeleteId } from "../store/todoSlice/todoSlice";

const Delete: React.FC = () => {
	const dispatch = useAppDispatch();
	const deleteId = useAppSelector((state) => state.todos.deleteId);

	const handleDelete = () => {
		if (deleteId !== null) {
			dispatch(deleteTodo(deleteId));
			dispatch(setDeleteId(null));
		}
	};

	return (
		<Dialog
			open={Boolean(deleteId)}
			onClose={() => dispatch(setDeleteId(null))}>
			<DialogTitle>Подтверждения удаления</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Вы действительно хотите удалить задачу ?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => dispatch(setDeleteId(null))}>Отмена</Button>
				<Button onClick={handleDelete}>Удалить</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Delete;

import { useState } from "react";

export interface Board {
	name: string;
	id: string;
}

export type UpdateBoardName = (id: string, newName: string) => void;
export type AddBoard = () => void;

export const useBoards = () => {
	const [boards, setBoards] = useState<Board[]>(
		[
			{name: "board 1", id: crypto.randomUUID()},
			{name: "board 2", id: crypto.randomUUID()},
			{name: "board 3", id: crypto.randomUUID()}
		]
	);

	const [editingBoardId, setEditingBoardId] = useState<string | null>(null);

	const addBoard: AddBoard = () => {
		const newBoard: Board = {name: "New Board", id: crypto.randomUUID()};
		const newBoards = [newBoard, ...boards];
		setBoards(newBoards);
		setEditingBoardId(newBoard.id);
	};

	const updateBoardName: UpdateBoardName = (id, newName) => {
			const newBoards = boards.map((board) => board.id === id ? {...board, name: newName} : board);
			setBoards(newBoards);
			setEditingBoardId(null);
	};

	return {
		boards,
		editingBoardId,
		addBoard,
		updateBoardName
	};
}
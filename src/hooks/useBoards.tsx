import { useState } from "react";
import type { Board } from "../types";

export type UpdateBoardName = (id: string, newName: string) => void;
export type AddBoard = () => void;
export type SetCurrentBoard = (currentBoard: Board) => void;

export const useBoards = () => {
	const [boards, setBoards] = useState<Board[]>(
		[
			{name: "board 1", id: crypto.randomUUID()},
			{name: "board 2", id: crypto.randomUUID()},
			{name: "board 3", id: crypto.randomUUID()}
		]
	);

	const [editingBoardId, setEditingBoardId] = useState<string | null>(null);
	const [currentBoard, setCurrentBoard] = useState<Board | null>(null);

	const addBoard: AddBoard = () => {
		const newBoard: Board = {name: "New Board", id: crypto.randomUUID()};
		setBoards([newBoard, ...boards]);
		setEditingBoardId(newBoard.id);
		setCurrentBoard(newBoard);
	};

	const updateBoardName: UpdateBoardName = (id, newName) => {
		const newBoards = boards.map((board) => board.id === id ? {...board, name: newName} : board);
		setBoards(newBoards);
		setEditingBoardId(null);
		if (currentBoard?.id === id) setCurrentBoard({ ...currentBoard, name: newName });
	};

	return {
		boards,
		editingBoardId,
		currentBoard,
		setCurrentBoard,
		addBoard,
		updateBoardName,
	};
}
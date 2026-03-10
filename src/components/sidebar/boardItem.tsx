import type { Board, UpdateBoardName } from "../../hooks/useBoards";
import { useEffect, useRef } from "react";

type BoardItemProps = {
	board: Board;
	isEditing: boolean;
	onUpdateBoardName: UpdateBoardName;
}

export const BoardItem = ({board, isEditing, onUpdateBoardName}: BoardItemProps) => {
	const boardNameRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		if (isEditing && boardNameRef.current)
		{
			boardNameRef.current.focus();
			boardNameRef.current.select();
		}
	}, [isEditing]);
	return (
		<li key={board.id} className="bg-white text-black p-2 rounded-md">
			{isEditing
			? <input
				ref={boardNameRef}
				defaultValue={board.name}
				onBlur={(e) => {
					onUpdateBoardName(board.id, e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter")
						onUpdateBoardName(board.id, e.currentTarget.value);
				}}/>
			: <button>
				<p>{board.name}</p>
			</button>}
		</li>
	)
}
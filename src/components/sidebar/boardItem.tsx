import type { Board } from "../../types";
import type { UpdateBoardName, SetCurrentBoard} from "../../hooks/useBoards";
import { useEffect, useRef } from "react";

type BoardItemProps = {
	board: Board;
	isEditing: boolean;
	isActive: boolean;
	onUpdateBoardName: UpdateBoardName;
	onSetCurrentBoard: SetCurrentBoard;
}

export const BoardItem = ({ board, isEditing, isActive, onUpdateBoardName, onSetCurrentBoard}: BoardItemProps) => {
	const boardNameRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (isEditing && boardNameRef.current) {
			boardNameRef.current.focus();
			boardNameRef.current.select();
		}
	}, [isEditing]);

	return (
		<li>
			{isEditing ? (
				<input
					ref={boardNameRef}
					defaultValue={board.name}
					className="w-full bg-white/10 text-white text-sm px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-white/30 truncate"
					onBlur={(e) => onUpdateBoardName(board.id, e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") onUpdateBoardName(board.id, e.currentTarget.value);
					}}
				/>
			) : (
				<button
					onClick={() => (onSetCurrentBoard(board))}
					className={"w-full text-left text-sm text-gray-400 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors truncate " +
					(isActive ? "text-white bg-white/15 font-bold" : "")}>
					{board.name}
				</button>
			)}
		</li>
	);
};

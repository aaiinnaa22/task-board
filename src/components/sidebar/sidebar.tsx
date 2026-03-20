import type { Board } from "../../types";
import type { UpdateBoardName, AddBoard, SetCurrentBoard } from "../../hooks/useBoards";
import { BoardItem } from "./boardItem";
import { PlusIcon } from "@heroicons/react/20/solid";

type SidebarProps = {
	onAddBoard: AddBoard;
	boards: Board[];
	onUpdateBoardName: UpdateBoardName;
	editingBoardId: string | null;
	onSetCurrentBoard: SetCurrentBoard;
	currentBoard: Board | null;
}

export const Sidebar = ({ onAddBoard, boards, onUpdateBoardName, editingBoardId, onSetCurrentBoard, currentBoard }: SidebarProps) => {
	return (
		<div className="h-full w-52 shrink-0 bg-black flex flex-col py-4 px-3">
			<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">Boards</p>
			<ul className="flex flex-col gap-0.5 flex-1">
				{boards.map((board) => (
					<BoardItem
						key={board.id}
						board={board}
						isEditing={editingBoardId === board.id}
						isActive={currentBoard?.id === board.id}
						onUpdateBoardName={onUpdateBoardName}
						onSetCurrentBoard={onSetCurrentBoard}
					/>
				))}
			</ul>
			<button
				className="flex items-center gap-2 text-sm text-gray-500 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
				onClick={onAddBoard}
			>
				<PlusIcon className="h-4 w-4 shrink-0" />
				<span>Add board</span>
			</button>
		</div>
	);
};

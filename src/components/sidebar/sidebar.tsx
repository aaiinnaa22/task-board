import type { Board, UpdateBoardName, AddBoard } from "../../hooks/useBoards";
import { BoardItem } from "./boardItem";

type SidebarProps = {
	onAddBoard: AddBoard;
	boards: Board[];
	onUpdateBoardName: UpdateBoardName;
	editingBoardId: string | null;
}

export const Sidebar = ({onAddBoard, boards, onUpdateBoardName, editingBoardId}: SidebarProps) => {

	return (
		<div className="h-full p-3 bg-black flex flex-col justify-between">
			<ul className="flex flex-col gap-3">
				{boards.map((board) => (
					<BoardItem
						board={board}
						isEditing={editingBoardId === board.id}
						onUpdateBoardName={onUpdateBoardName}/>
				))}
			</ul>
			<button className="bg-white rounded-md text-black p-2"
				onClick={onAddBoard}>
				<div className="flex gap-2 items-center">
					<p className="font-bold text-lg">+</p>
					<p>add board</p>
				</div>
			</button>
		</div>
	)
}
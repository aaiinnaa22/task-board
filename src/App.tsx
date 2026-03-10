import { Board } from "./components/board/board"
import { Sidebar } from "./components/sidebar/sidebar"
import { Topbar } from "./components/topbar"
import { useBoards } from "./hooks/useBoards"


function App() {
	const {
		boards,
		editingBoardId,
		addBoard,
		updateBoardName
	} = useBoards();

	return (
		<div className="w-dvw h-dvh flex flex-col">
			<Topbar/>
			<div className="flex flex-1">
				<Sidebar
					onAddBoard={addBoard}
					onUpdateBoardName={updateBoardName}
					boards={boards}
					editingBoardId={editingBoardId}/>
				<div className="flex-1">
				<Board/>
				</div>
			</div>
		</div>
	)
}

export default App

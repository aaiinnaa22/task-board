import { TaskBoard } from "./components/board/taskBoard"
import { Sidebar } from "./components/sidebar/sidebar"
import { Topbar } from "./components/topbar"
import { useBoards } from "./hooks/useBoards"


function App() {
	const {
		boards,
		editingBoardId,
		currentBoard,
		setCurrentBoard,
		addBoard,
		updateBoardName,
	} = useBoards();

	return (
		<div className="w-dvw h-dvh flex flex-col">
			<Topbar/>
			<div className="flex flex-1">
				<Sidebar
					onAddBoard={addBoard}
					onUpdateBoardName={updateBoardName}
					boards={boards}
					editingBoardId={editingBoardId}
					onSetCurrentBoard={setCurrentBoard}
					currentBoard={currentBoard}/>
				<div className="flex-1">
					{currentBoard
						? <TaskBoard currentBoard={currentBoard}/>
						: <div className="w-full h-full flex items-center justify-center">
							<h2 className="font-bold text-xl text-gray-400">Welcome to TaskBoard!</h2>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default App

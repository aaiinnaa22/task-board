import { Board } from "./components/board/board"
import { Sidebar } from "./components/sidebar"
import { Topbar } from "./components/topbar"

function App() {

	return (
		<div className="w-dvw h-dvh flex flex-col">
			<Topbar/>
			<div className="flex flex-1">
				<Sidebar/>
				<div className="flex-1">
				<Board/>
				</div>
			</div>
		</div>
	)
}

export default App

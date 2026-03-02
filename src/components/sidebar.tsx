export const Sidebar = () => {
	const testBoards = [{name: "board 1"}, {name: "board 2"}, {name: "board 3"}];
	return (
		<div className="h-full p-3 bg-black">
			<ul className="flex flex-col gap-3">
				{testBoards.map((board) => (
					<li className="bg-white text-black p-2 rounded-md">
						<button>
							<p>{board.name}</p>
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
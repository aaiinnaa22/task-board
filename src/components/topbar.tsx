

export const Topbar = () => {
	return (
		<div className="sticky top-0 bg-black text-white flex justify-between p-5 items-center">
			<h1 className="font-bold">TaskBoard</h1>
			<div className="flex gap-5 items-center">
				<p>profile</p>
				<p>settings</p>
				<button className="bg-white rounded-md text-black p-2">
					create new board
				</button>
			</div>
		</div>
	)
}
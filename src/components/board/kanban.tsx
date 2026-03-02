export const Kanban = () => {
	return (
		<div className="grid grid-cols-3 h-full">
			<div className="border-r-3">
				<p className="border-b-3 text-center font-bold">to do</p>
				<div className="flex flex-col gap-1 p-2">
					<div className="bg-black rounded-md text-white">to do 1</div>
					<div className="bg-black rounded-md text-white">to do 2</div>
				</div>
			</div>
			<div className="border-r-3">
				<p className="border-b-3 text-center font-bold">in progress</p>
				<div className="flex flex-col gap-1 p-2">
					<div className="bg-black rounded-md text-white">prog 1</div>
				</div>
			</div>
			<div>
				<p className="border-b-3 text-center font-bold">done</p>
				<div className="flex flex-col gap-1 p-2">
					<div className="bg-black rounded-md text-white">done 1</div>
					<div className="bg-black rounded-md text-white">done 2</div>
					<div className="bg-black rounded-md text-white">done 3</div>
				</div>
			</div>
		</div>
	)
}
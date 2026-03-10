import { Kanban } from "./kanban"
import { UsersIcon } from "@heroicons/react/20/solid"

export const Board = () => {
	return (
		<div className="p-3 w-full h-full grid grid-cols-[1fr_8fr_1fr] grid-rows-[1fr_8fr_1fr]">
			<div className="col-start-3 flex justify-end">
				<UsersIcon className="h-9 p-1 rounded-full bg-black text-white"/>
			</div>
			<div className="col-start-2 row-start-2">
				<Kanban/>
			</div>
			<div className="row-start-3 col-start-3 flex justify-end">
				<button className="h-12 w-12 p-1 rounded-full bg-black">
					<span className="text-white font-bold text-xl text-center">+</span>
				</button>
			</div>
		</div>
	)
}
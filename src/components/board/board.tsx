import { Kanban } from "./kanban"

export const Board = () => {
	return (
		<div className="p-3 w-full h-full grid grid-cols-[1fr_8fr_1fr] grid-rows-[1fr_8fr_1fr]">
			<div className="col-start-3">
				<h2>members</h2>
			</div>
			<div className="col-start-2 row-start-2">
				<Kanban/>
			</div>
			<div className="row-start-3 col-start-3">
				<button>
					add
				</button>
			</div>
		</div>
	)
}
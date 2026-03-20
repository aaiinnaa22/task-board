import { useState } from "react"
import { Kanban } from "./kanban"
import { UsersIcon } from "@heroicons/react/20/solid"
import { AddTaskModal } from "../../modals/addTaskModal"
import type { Task } from "../../types"

export const Board = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([
		{name: "to do 1", status: "to do", assignees: []},
		{name: "to do 2", status: "to do", assignees: []},
		{name: "prog 1", status: "in progress", assignees: []},
		{name: "done 1", status: "done", assignees: []},
		{name: "done 2", status: "done", assignees: []},
		{name: "done 3", status: "done", assignees: []},
	]);

	const addTask = (task: Task) => {
		setTasks([...tasks, task]);
	};

	return (
		<div className="relative p-3 w-full h-full grid grid-cols-[1fr_8fr_1fr] grid-rows-[1fr_8fr_1fr]">
			<div className="col-start-3 flex justify-end">
				<UsersIcon className="h-9 p-1 rounded-full bg-black text-white"/>
			</div>
			<div className="col-start-2 row-start-2">
				<Kanban tasks={tasks}/>
			</div>
			<div className="row-start-3 col-start-3 flex justify-end">
				<button
					className="h-12 w-12 p-1 rounded-full bg-black"
					onClick={() => setIsModalOpen(true)}
				>
					<span className="text-white font-bold text-xl text-center">+</span>
				</button>
			</div>
			{isModalOpen && (
				<AddTaskModal
					onClose={() => setIsModalOpen(false)}
					onAddTask={addTask}
				/>
			)}
		</div>
	)
}
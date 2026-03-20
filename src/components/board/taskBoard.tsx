import { useState } from "react"
import { Kanban } from "./kanban"
import { UsersIcon, PlusIcon } from "@heroicons/react/20/solid"
import { AddTaskModal } from "../../modals/addTaskModal"
import type { Task} from "../../types"
import type { Board } from "../../types"

type TaskBoardProps =
{
	currentBoard: Board;
}

export const TaskBoard = ({currentBoard}: TaskBoardProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [members] = useState<string[]>(["Alice", "Bob", "Carol"]);
	const [tasks, setTasks] = useState<Task[]>([
		{ name: "to do 1", description: "", status: "to do", assignees: [] },
		{ name: "to do 2", description: "", status: "to do", assignees: [] },
		{ name: "prog 1", description: "", status: "in progress", assignees: [] },
		{ name: "done 1", description: "", status: "done", assignees: [] },
		{ name: "done 2", description: "", status: "done", assignees: [] },
		{ name: "done 3", description: "", status: "done", assignees: [] },
	]);

	const addTask = (task: Task) => {
		setTasks([...tasks, task]);
	};

	return (
		<div className="relative flex flex-col w-full h-full bg-white">
			<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
				<h2 className="font-semibold text-gray-800">{currentBoard.name}</h2>
				<button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors">
					<UsersIcon className="h-4 w-4" />
					<span>Team</span>
				</button>
			</div>
			<div className="flex-1 p-6 overflow-auto">
				<Kanban tasks={tasks} />
			</div>
			<button
				className="absolute bottom-6 right-6 h-11 w-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
				onClick={() => setIsModalOpen(true)}
			>
				<PlusIcon className="h-5 w-5" />
			</button>
			{isModalOpen && (
				<AddTaskModal
					onClose={() => setIsModalOpen(false)}
					onAddTask={addTask}
					members={members}
				/>
			)}
		</div>
	);
};

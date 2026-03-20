import { useState } from "react";
import { XMarkIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import type { Task } from "../types";

type AddTaskModalProps = {
	onClose: () => void;
	onAddTask: (task: Task) => void;
}

export const AddTaskModal = ({ onClose, onAddTask }: AddTaskModalProps) => {
	const [name, setName] = useState("");
	const [status, setStatus] = useState<Task["status"]>("to do");
	const [assignees, setAssignees] = useState<string[]>([]);
	const [assigneeInput, setAssigneeInput] = useState("");

	const addAssignee = () => {
		const trimmed = assigneeInput.trim();
		if (trimmed && !assignees.includes(trimmed)) {
			setAssignees([...assignees, trimmed]);
		}
		setAssigneeInput("");
	};

	const removeAssignee = (name: string) => {
		setAssignees(assignees.filter((a) => a !== name));
	};

	const handleSubmit = () => {
		if (!name.trim()) return;
		onAddTask({ name: name.trim(), status, assignees });
		onClose();
	};

	return (
		<div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
			<div className="bg-white rounded-xl p-6 w-96 flex flex-col gap-4 shadow-xl">
				<div className="flex justify-between items-center">
					<h2 className="font-bold text-lg">Add Task</h2>
					<button onClick={onClose}>
						<XMarkIcon className="h-5 w-5 text-gray-500 hover:text-black" />
					</button>
				</div>

				<div className="flex flex-col gap-1">
					<label className="text-sm font-medium">Task name</label>
					<input
						className="border rounded-md p-2 text-sm outline-none focus:ring-2 focus:ring-black"
						placeholder="Enter task name..."
						value={name}
						onChange={(e) => setName(e.target.value)}
						onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
						autoFocus
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label className="text-sm font-medium">Status</label>
					<select
						className="border rounded-md p-2 text-sm outline-none focus:ring-2 focus:ring-black"
						value={status}
						onChange={(e) => setStatus(e.target.value as Task["status"])}
					>
						<option value="to do">To do</option>
						<option value="in progress">In progress</option>
						<option value="done">Done</option>
					</select>
				</div>

				<div className="flex flex-col gap-1">
					<label className="text-sm font-medium">Assign people</label>
					<div className="flex gap-2">
						<input
							className="border rounded-md p-2 text-sm flex-1 outline-none focus:ring-2 focus:ring-black"
							placeholder="Enter a name..."
							value={assigneeInput}
							onChange={(e) => setAssigneeInput(e.target.value)}
							onKeyDown={(e) => { if (e.key === "Enter") addAssignee(); }}
						/>
						<button
							onClick={addAssignee}
							className="bg-black text-white rounded-md px-3 flex items-center"
						>
							<UserPlusIcon className="h-4 w-4" />
						</button>
					</div>
					{assignees.length > 0 && (
						<div className="flex flex-wrap gap-2 mt-1">
							{assignees.map((a) => (
								<span
									key={a}
									className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-sm"
								>
									{a}
									<button onClick={() => removeAssignee(a)}>
										<XMarkIcon className="h-3 w-3 text-gray-500 hover:text-black" />
									</button>
								</span>
							))}
						</div>
					)}
				</div>

				<button
					onClick={handleSubmit}
					disabled={!name.trim()}
					className="bg-black text-white rounded-md p-2 font-medium disabled:opacity-40"
				>
					Add Task
				</button>
			</div>
		</div>
	);
};

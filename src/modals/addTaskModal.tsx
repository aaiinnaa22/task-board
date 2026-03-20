import { useState } from "react";
import { XMarkIcon, CheckIcon } from "@heroicons/react/20/solid";
import type { Task, Status } from "../types";

type AddTaskModalProps = {
	onClose: () => void;
	onAddTask: (task: Task) => void;
	members: string[];
}

const statusOptions: { value: Status; label: string; background: string; ring: string }[] = [
	{ value: "to do",       label: "To Do",       background: "bg-slate-400",   ring: "ring-slate-400" },
	{ value: "in progress", label: "In Progress", background: "bg-amber-400",   ring: "ring-amber-400" },
	{ value: "done",        label: "Done",        background: "bg-emerald-400", ring: "ring-emerald-400" },
];

export const AddTaskModal = ({ onClose, onAddTask, members }: AddTaskModalProps) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState<Status>("to do");
	const [assignees, setAssignees] = useState<string[]>([]);

	const toggleAssignee = (member: string) => {
		setAssignees((prev) =>
			prev.includes(member) ? prev.filter((a) => a !== member) : [...prev, member]
		);
	};

	const handleSubmit = () => {
		if (!name.trim()) return;
		onAddTask({ name: name.trim(), description: description.trim(), status, assignees });
		onClose();
	};

	return (
		<div
			className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10"
			onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
		>
			<div className="bg-white rounded-2xl w-105 shadow-2xl flex flex-col overflow-hidden">

				{/* Header */}
				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
					<h2 className="font-semibold text-gray-900">New Task</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md p-1 transition-colors">
						<XMarkIcon className="h-4 w-4" />
					</button>
				</div>

				{/* Body */}
				<div className="flex flex-col gap-5 px-6 py-5">

					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Task name</label>
						<input
							className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-all placeholder:text-gray-300"
							placeholder="What needs to be done?"
							value={name}
							onChange={(e) => setName(e.target.value)}
							onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
							autoFocus
						/>
					</div>

					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</label>
						<textarea
							className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition-all placeholder:text-gray-300 resize-none"
							placeholder="Add more details..."
							rows={3}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</label>
						<div className="flex gap-2">
							{statusOptions.map((opt) => (
								<button
									key={opt.value}
									onClick={() => setStatus(opt.value)}
									className={"flex items-center gap-2 flex-1 px-3 py-2 rounded-lg border text-sm transition-all " + (
										status === opt.value
											? `border-transparent ring-2 ${opt.ring} bg-gray-50 font-medium text-gray-900`
											: "border-gray-200 text-gray-500 hover:bg-gray-50"
									)}
								>
									<span className={`h-2 w-2 rounded-full shrink-0 ${opt.background}`} />
									{opt.label}
								</button>
							))}
						</div>
					</div>

					{members.length > 0 && (
						<div className="flex flex-col gap-1.5">
							<label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Assignees</label>
							<div className="flex flex-col gap-1">
								{members.map((member) => {
									const selected = assignees.includes(member);
									return (
										<button
											key={member}
											onClick={() => toggleAssignee(member)}
											className={"flex items-center justify-between px-3 py-2 rounded-lg border text-sm transition-all " +
												(selected
													? "border-transparent ring-2 ring-black/10 bg-gray-50 text-gray-900 font-medium"
													: "border-gray-200 text-gray-500 hover:bg-gray-50"
											)}
										>
											<div className="flex items-center gap-2">
												<div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
													{member[0]}
												</div>
												{member}
											</div>
											{selected && <CheckIcon className="h-4 w-4 text-gray-700" />}
										</button>
									);
								})}
							</div>
						</div>
					)}
				</div>

				{/* Footer */}
				<div className="flex items-center justify-end gap-2 px-6 py-4 bg-gray-50 border-t border-gray-100">
					<button
						onClick={onClose}
						className="px-4 py-2 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
					>
						Cancel
					</button>
					<button
						onClick={handleSubmit}
						disabled={!name.trim()}
						className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
					>
						Add Task
					</button>
				</div>
			</div>
		</div>
	);
};

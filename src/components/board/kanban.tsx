import type { Task, Status } from "../../types";


interface StatusStyle {
	status: Status;
	background: string;
	border: string;
}


const statusStyles: StatusStyle[] = [
	{status: "to do", background: "bg-slate-400", border: "border-l-slate-400"},
	{status: "in progress", background: "bg-amber-400", border: "border-l-amber-400"},
	{status: "done", background: "bg-emerald-400", border: "border-l-emerald-400"}
];

const Column = ({ status, tasks }: { status: Status; tasks: Task[] }) => {
	const filtered = tasks.filter((t) => t.status === status);
	const currentStyle = statusStyles.find((s) => s.status === status)!

	return (
		<div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-3 min-h-0">
			<div className="flex items-center justify-between px-1">
				<div className="flex items-center gap-2">
					<span className={"h-2 w-2 rounded-full shrink-0 " + currentStyle.background} />
					<span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{currentStyle.status}</span>
				</div>
				<span className="text-xs text-gray-400 font-medium tabular-nums">{filtered.length}</span>
			</div>
			<ul className="flex flex-col gap-2">
				{filtered.map((item) => (
					<li
						key={item.name}
						className={"bg-white rounded-lg p-3 shadow-sm border-l-4 hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-2 " + currentStyle.border}
					>
						<p className="text-sm font-medium text-gray-800">{item.name}</p>
						{item.description && (
							<p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{item.description}</p>
						)}
						{item.assignees.length > 0 && (
							<div className="flex items-center">
								{item.assignees.map((a, i) => (
									<div
										key={a}
										title={a}
										style={{ zIndex: item.assignees.length - i, marginLeft: i === 0 ? 0 : "-6px" }}
										className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-600 relative"
									>
										{a[0]}
									</div>
								))}
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export const Kanban = ({ tasks }: { tasks: Task[] }) => {
	return (
		<div className="grid grid-cols-3 gap-4 h-full">
			<Column status="to do" tasks={tasks} />
			<Column status="in progress" tasks={tasks} />
			<Column status="done" tasks={tasks} />
		</div>
	);
};

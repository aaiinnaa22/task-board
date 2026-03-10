type Status = "to do" | "in progress" | "done";

interface Task {
	name: string;
	status: Status;
}

export const Kanban = () => {
	const tasks: Task[] = [
		{name: "to do 1", status: "to do"},
		{name: "to do 2", status: "to do"},
		{name: "prog 1", status: "in progress"},
		{name: "done 1", status: "done"},
		{name: "done 2", status: "done"},
		{name: "done 3", status: "done"},
	];
	const filteredList = (byStatus: Status) =>
	{
		 const list: Task[] = tasks.filter((task) => (task.status === byStatus));
		 const ul = list.map((item) =>
		 	<li>
				<p className="bg-black rounded-md text-white p-2">{item.name}</p>
			</li>);
		return (ul);
	};
	return (
		<div className="grid grid-cols-3 h-full">
			<div className="border-r-3">
				<p className="border-b-3 text-center font-bold">to do</p>
				<ul className="flex flex-col gap-2 p-2">
					{filteredList("to do")}
				</ul>
			</div>
			<div className="border-r-3">
				<p className="border-b-3 text-center font-bold">in progress</p>
				<ul className="flex flex-col gap-2 p-2">
					{filteredList("in progress")}
				</ul>
			</div>
			<div>
				<p className="border-b-3 text-center font-bold">done</p>
				<ul className="flex flex-col gap-2 p-2">
					{filteredList("done")}
				</ul>
			</div>
		</div>
	)
}
export type Status = "to do" | "in progress" | "done";

export interface Board {
	name: string;
	id: string;
}

export interface Task {
	name: string;
	status: Status;
	assignees: string[];
}

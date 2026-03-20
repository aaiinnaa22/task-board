export type Status = "to do" | "in progress" | "done";

export interface Board {
	name: string;
	id: string;
	members?: string[];
}

export interface Task {
	name: string;
	description: string;
	status: Status;
	assignees: string[];
}

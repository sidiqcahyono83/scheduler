export type Job = {
	id: number;
	title: string;
	category: string;
	division: string;
	isDone: boolean;
	timeStart?: Date;
	timeEnd?: Date;
};
export const dataJobs: Job[] = [
	{
		id: 1,
		title: "Repair",
		category: "usual",
		division: "technician",
		isDone: false,
	},
	{
		id: 2,
		title: "Splicing",
		category: "urgent",
		division: "staff",
		isDone: true,
	},
	{
		id: 3,
		title: "Teach",
		category: "soon",
		division: "staff",
		isDone: true,
		timeStart: new Date("2024-05-22 19:30"),
		timeEnd: new Date("2024-05-22 21:30"),
	},
];

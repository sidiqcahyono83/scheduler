import { useLoaderData, LoaderFunctionArgs, Link } from "react-router-dom";

import { getJob } from "../storage/jobs";
import { Button, Label, Select, TextInput } from "flowbite-react";

export async function loader({ params }: LoaderFunctionArgs) {
	const idParam = Number(params.jobId);
	const job = await getJob(idParam);
	return { job };
}

export function EditJobRoute() {
	const { job } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	if (!job) {
		return <p>Job not found.</p>;
	}

	return (
		<div className="w-4/5 mx-auto">
			<h1 className="text-4xl font-bold mb-4">{job.title}</h1>
			<form className="flex max-w-md flex-col gap-4">
				<div>
					<div className="mb-2 block">
						<Label htmlFor="tittle" value="Job Title" />
					</div>
					<TextInput
						id="tittle"
						type="text"
						name="tittle"
						placeholder="name@flowbite.com"
						defaultValue={job.title}
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="Category" value="Job Category" />
					</div>
					<TextInput
						id="Category"
						type="text"
						name="category"
						defaultValue={job.category}
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="division" value="Job Division" />
					</div>
					<TextInput
						id="division"
						type="text"
						name="division"
						defaultValue={job.division}
						required
					/>
				</div>
				<div className="flex gap-2 col-span-2">
					<div className="mb-2 block">
						<Label htmlFor="timeStart" value="Job Time Start" />
					</div>
					<TextInput
						id="timeStart"
						type="text"
						name="timeStart"
						defaultValue={job.timeStart}
						required
					/>
					<div className="mb-2 gap-2 col-span-2">
						<Label htmlFor="timeStart" value="Job Time Start" />
					</div>
					<TextInput
						id="timeStart"
						type="text"
						name="timeStart"
						defaultValue={job.timeStart}
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="isDone" value="Job Division" />
					</div>
					<Select id="isDone" required>
						<option value={true}>Done</option>
						<option value={false}>In Progres</option>
					</Select>
				</div>

				<Button type="submit">Edit</Button>
				<Button color="warning">
					<Link to="/jobs">Back</Link>
				</Button>
			</form>
		</div>
	);
}

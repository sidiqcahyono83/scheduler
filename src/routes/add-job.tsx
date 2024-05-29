import localforage from "localforage";
import { Job } from "../data/jobs";
import { Link } from "react-router-dom";

export function AddJobRoute() {
  const saveNewJob = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newJob: Job = {
      id: length + 1,
      title: formData.get("title")?.toString() || "Untitled",
      category: formData.get("category")?.toString() || "Uncategorized",
      divisi: formData.get("divisi")?.toString() || "Teknik",
      isDone: false,
      timeStart: new Date("2024-05-22 08:30"),
      timeEnd: new Date("2024-05-22 14:30")
    };

    const updatedJobs = [...jobsState, newJob];
    setJobs(updatedJobs);
    localforage.setItem("jobs", updatedJobs);
  };

  return (
    <div>
      <div className="my-2 dark:text-white">
        <h1 className="text-4xl font-bold my-4 mb-4">Add Job</h1>
        <form onSubmit={saveNewJob} className="mx-auto">
          <div className="form-control my-2 items-center">
            <label htmlFor="title" className="font-normal text-2xl my-4">
              Title Job :
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="mx-10 rounded-md text-2xl text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
          </div>
          <div className="form-control my-2">
            <label htmlFor="category" className="font-normal text-2xl my-4">
              Category Job :
            </label>
            <input
              type="text"
              name="category"
              id="category"
              className="mx-10 rounded-md  text-2xl text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
          </div>
          <div className="form-control my-2">
            <label htmlFor="divisi" className="font-normal text-2xl my-4">
              Divisi :
            </label>
            <input
              type="text"
              name="divisi"
              id="divisi"
              className="mx-10 rounded-md text-2xl text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
          </div>
          <div className="form-control my-2">
            <label htmlFor="timeStart" className="font-normal text-2xl my-4">
              Time Start :
            </label>
            <input
              type="date"
              name="timeStart"
              id="timeStart"
              className="mx-10 rounded-md text-2xl text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
          </div>
          <div className="form-control my-2">
            <label htmlFor="timeEnd" className="font-normal text-2xl my-4">
              Time Start :
            </label>
            <input
              type="date"
              name="timeEnd"
              id="timeEnd"
              className="mx-10 rounded-md text-2xl text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-4 py-2 mx-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link to="/jobs">Save</Link>
          </button>
          <button
            type="reset"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg w-full sm:w-auto px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

import { JobType } from "../../../data/datajob";
import { getTimeString } from "../../../utils/datetime";

export function JobItem({ job }: { job: JobType }) {
  const timeStart = getTimeString(job.timeStart);
  const timeEnd = getTimeString(job.timeEnd);

  return (
    <div className="flex  justify-between">
      <div className="flex gap-5">
        <p className="">{job.jobs}</p>
        {timeStart && timeEnd && (
          <p>
            <time dateTime={timeStart} className="text-green-500">
              {timeStart}
            </time>
            <span>-</span>
            <time dateTime={timeEnd} className="text-red-500">
              {timeEnd}
            </time>
          </p>
        )}
      </div>

      <p>
        {job.divisions} {job.isDone ? "✅" : "❓"}
      </p>
    </div>
  );
}

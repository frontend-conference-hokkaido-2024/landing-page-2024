import Job from "./components/Job";
import { JOB_BOARD_SECTION_DATA } from "./data/constants";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-12 place-items-center">
        {JOB_BOARD_SECTION_DATA.map((jobData, index) => <Job {...jobData} key={index} />)}
      </div>
    </>
  );
}

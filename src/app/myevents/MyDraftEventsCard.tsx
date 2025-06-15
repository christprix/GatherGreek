import Link from "next/link";
import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function DraftCard({ event }: any) {
  // const getTags = event.tags.map((e: any) => {
  //   return (
  //     <button
  //       key={e}
  //       className="bg-base-300 hover:bg-base-200 rounded-xl p-1 m-1"
  //     >
  //       {e.replace(/_/g, " ").toLowerCase()}
  //     </button>
  //   );
  // });
  return (
    <div className="p-3">
      <Link href={`/create_event/community_form?template=${event.id}`}>
        <div className="card card-compact bg-base-100 h-[23rem] md:w-96 w-96 shadow-xl">
          <figure className="">
            <img src={event.imagePath} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div>{event.title}</div>
            </h2>
            <div className="flex flex-wrap gap-2 text-sm text-white">
              <span className="bg-red-500 px-3 py-1 text-white rounded-full">
                Draft
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

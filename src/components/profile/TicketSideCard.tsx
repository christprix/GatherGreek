import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import TicketModal from "./TicketModal";

export default function TicketSideCard({ ticket }: any) {
  const isUsed = ticket.status === "used";

  return (
    // <div className="card card-side bg-base-100 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 m-2 rounded-xl overflow-hidden max-h-44">
    <div
      className={`relative card card-side bg-base-100 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 m-2 rounded-xl overflow-hidden max-h-44 ${
        isUsed ? "opacity-80 grayscale" : ""
      }`}
    >
      {/* ✅ Used Ticket Banner */}
      {isUsed && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
          USED
        </div>
      )}
      {/* Event Image */}
      <figure className="">
        <img
          src={ticket.event.imagePath}
          alt={ticket.event.title || "Event Image"}
          className="w-32 h-full object-cover"
        />
      </figure>

      {/* Event Info */}
      <div className="card-body p-3 flex flex-col justify-between">
        {/* Title */}
        <h2 className="card-title text-base font-semibold text-gray-800 leading-tight line-clamp-2">
          {ticket.event.title}
        </h2>
        {/* Date */}
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="w-3 h-3 mr-1 text-primary"
          />
          <span>
            {dateFormat(ticket.event.eventDate, "dddd, mmmm dS, yyyy")}
          </span>
        </div>

        {/* Location */}
        <div className="text-sm text-gray-600 mt-1 line-clamp-1">
          📍 {ticket.event.address1}, {ticket.event.city}
        </div>

        {/* View Ticket Button */}
        <div className="mt-3">
          {isUsed ? (
            <button
              disabled
              className="btn btn-sm bg-gray-300 text-gray-600 cursor-not-allowed w-full"
            >
              Ticket Already Used
            </button>
          ) : (
            <TicketModal ticket={ticket} />
          )}
        </div>
      </div>
    </div>
  );
}

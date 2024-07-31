import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserCard({ user }: any) {
  return (
    <div className="card m-1 w-full hover:bg-base-200 card-side bg-base-100 border p-3">
      <figure className="rounded-lg p-2 min-w-16">
        <div className="btn ring btn-circle">
          <div className="w-10 rounded-full border contents">
            <FontAwesomeIcon icon={faUser} className="size-6" />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="text-xs flex flex-col">
          <h2 className="card-title flex flex-row">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-sm">{user?.organization}</p>
        </div>
        <button className="btn btn-primary">View Events</button>
      </div>
    </div>
  );
}

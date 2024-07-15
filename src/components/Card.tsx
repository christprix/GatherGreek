import Avatar from "./Avatar";
import sigmalogo from "/public/Sigmalogo.png";
import qstomp from "/public/qstomp.jpg";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavoluteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";

export default function Card({ event }: any) {
  return (
    <div className="p-3">
      <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
        <figure className="h-72">
          <img src={event.imagePath} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{event.title}</h2>
          <p>{event.eventDate}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
          <div>
            <div className="flex flex-row justify-between">
              <div className="w-12">
                <Avatar></Avatar>
              </div>
              <button className="btn btn-primary">Get Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

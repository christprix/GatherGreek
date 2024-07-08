import greekstep from "/public/greekstep-p01.jpg";
import Avatar from "./Avatar";
export default function Card() {
  return (
    <div className="p-3">
      <div className="card card-compact bg-base-100 w-72 shadow-xl">
        <figure>
          <img src={greekstep.src} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Xi Chi Sigma Step Show
            <div className="w-12">
              <Avatar></Avatar>
            </div>
          </h2>
          <p>Saturday July 29th 8:00pm</p>
          <p>1 Amb Dr NW, Atlanta, GA 30313</p>
          <p>From $1.00</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
}

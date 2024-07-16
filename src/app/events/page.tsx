import Cardlist from "@/components/Cardlist";
import greekstep from "/public/greekstep-p01.jpg";
import sigmavolunteer from "/public/sigmavolunteer.jpg";
import sgrhoevent from "/public/sgrhoevent.jpg";
import sigmabrotherhood from "/public/sigmabrotherhood.jpg";
import qstomp from "/public/qstomp.jpg";

const events = [
  {
    title: "Xi Chi Sigma Step Show",
    location: "1 Amb Dr NW, Atlanta, GA 30313",
    description: "From $1.00",
    imagePath: greekstep.src,
    eventDate: "Saturday July 29th 8:00pm",
    id: 1,
  },
  {
    title: "Feed the homeless Community Event",
    location: "1755 Sandy Ln, Douglasville, GA 30134",
    description: "From $0.00",
    imagePath: sigmavolunteer.src,
    eventDate: "Thursday August 2nd 11:00am",
    id: 2,
  },
  {
    title: "Omega Psi Phi BBQ and performance",
    location: "6700 Church St, Douglasville, GA 30134",
    description: "From $5.00",
    imagePath: qstomp.src,
    eventDate: "Monday July 18th 10am",
    id: 3,
  },
  {
    title: "Sghro Community Service Event",
    location: "6700 Church St, Douglasville, GA 30134",
    description: "From $1.00",
    imagePath: sgrhoevent.src,
    eventDate: "Sunday July 17th 10am",
    id: 4,
  },
  {
    title: "Brotherhood Event",
    location: "6700 Church St, Douglasville, GA 30134",
    description: "From $15.00",
    imagePath: sigmabrotherhood.src,
    eventDate: "Sunday July 17th 12am",
    id: 5,
  },
];

export default function Page() {
  return (
    <>
      <div className="border-t border-blue-100 flex flex-col">
        <div className="m-4 text-3xl">Events For You</div>
        <div className="mx-4">Douglasville, Georgia</div>
        <div className="flex justify-center">
          <form action="">
            <label htmlFor="event-date">Date: </label>
            <input
              type="datetime-local"
              name="event-date"
              id="event-date"
              className="border"
            />
          </form>
        </div>
      </div>
      <div className="flex justify-center md:justify-start flex-wrap">
        <Cardlist events={events} className="max-h-80"></Cardlist>
      </div>
      <div className="m-4 text-3xl">Popular Groups in Your Area</div>
      <div className="m-5 flex overflow-x-auto justify-around">
        {/* turn into component */}
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 min-w-48 shadow-xl m-2">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xi Chi Sigma</h2>
            <p className="text-xs">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Events</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

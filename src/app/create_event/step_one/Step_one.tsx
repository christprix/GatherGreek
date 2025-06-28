import Link from "next/link";

export default function StepOne() {
  return (
    <div className="flex md:flex-row flex-col md:justify-center  items-center space-y-4 p-4 md:space-y-0 md:space-x-4">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1749599213/production/pexels-nappy-935985_ooyzvf.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Start from scratch</h2>
          <p>
            Make your event the way you want it! Add event info, tickets, and
            pictures to make your event pop!
          </p>
          <div className="card-actions justify-end">
            <Link
              href={"/create_event/community_form"}
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img
            src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1749599212/production/pexels-rsekoua-2402239_bxqdnn.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Use a Template</h2>
          <p>
            Fast-track your event creation by copying a previous event you made
            or use one of our templates.
          </p>
          <div className="card-actions justify-end">
            <Link
              href={"/create_event/step_one/templates"}
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import blackparty from "/public/blackparty.jpg";
import Link from "next/link";
export default async function Page() {
  return (
    <>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col-reverse">
          <div className="flex flex-col md:flex-row md:w-full md:justify-around">
            <div className="card bg-base-100 image-full w-96 shadow-xl">
              <figure>
                <img src={blackparty.src} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Create an Event</h2>
                <p>
                  Events for the whole community. Choose from Social events,
                  classes, politics and more!
                </p>
                <div className="card-actions justify-end">
                  <Link
                    href={"/create_event/step_one"}
                    className="btn btn-primary"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold">Connect your Community</div>
            <p className="py-6">
              Whether you're planning a fundraiser, social gathering, or
              community service event, our easy-to-use interface makes it simple
              to create and manage your events. Join us in strengthening our
              bonds, fostering community spirit, and making a positive impact
              together
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

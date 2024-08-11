import blackparty from "/public/blackparty.jpg";
import Link from "next/link";
import sigmabrotherhood from "/public/sigmabrotherhood.jpg";
export default async function Page() {
  return (
    <>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={blackparty.src}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="text-5xl font-bold">Connect your Community</div>
            <p className="py-6">
              Whether you're planning a fundraiser, social gathering, or
              community service event, our easy-to-use interface makes it simple
              to create and manage your events. Join us in strengthening our
              bonds, fostering community spirit, and making a positive impact
              together
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <Link href={"/create_event/community_form"} className="">
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                  <figure>
                    <img src={blackparty.src} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Community Events</h2>
                    <p>
                      Events for the whole community. Choose from Social events,
                      classes, politics and more!
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={"/create_event/verified_form"}
                className="my-1 md:my-0"
              >
                <div className="card bg-base-100 image-full w-96 shadow-md">
                  <figure>
                    <img src={sigmabrotherhood.src} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Divine 9 Events</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

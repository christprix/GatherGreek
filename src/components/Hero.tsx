import alphastep from "/public/alphastep.jpg";
import sigmastep from "/public/greekstep-p01.jpg";
import SearchBar from "./Search";
import Link from "next/link";
import blackbasketball from "/public/blackbasketball.jpg";

export default function Hero() {
  return (
    <div
      className="hero lg:min-h-96 min-h-96"
      style={{
        backgroundImage: `url(${blackbasketball.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content flex-col lg:flex-row-reverse lg:justify-between">
        {/* <img src={sigmastep.src} className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div className="max-w-md">
          <h1 className="mb-1 md:text-3xl text-2xl font-bold">
            Welcome to Greek Gather
          </h1>
          <p className="mb-1 text-sm md:text-base">
            Your destination for organizing and discovering a wide range of
            events, from political forums and educational workshops to financial
            seminars and entertainment gatherings. Greek Gather simplifies event
            creation and management, empowering you to connect with fellow
            members and other Greek organizations.
          </p>
          <Link
            href={"/events"}
            className="btn btn-primary flex lg:display-inline my-3 items-center"
          >
            Find Your Next Event
          </Link>
        </div>
        {/* <div className="md:hidden">
            <SearchBar></SearchBar>
          </div> */}
      </div>
    </div>
    // <div
    //   className="hero bg-base-200 min-h-screen"
    //   style={{
    //     backgroundImage: `url(${sigmastep.src})`,
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <img src={sigmastep.src} className="max-w-sm rounded-lg shadow-2xl" />
    //     <div>
    //       <h1 className="text-5xl font-bold">Box Office News!</h1>
    //       <p className="py-6">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
  );
}

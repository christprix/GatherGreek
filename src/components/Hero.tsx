import alphastep from "/public/alphastep.jpg";
import Search from "./Search";

export default function Hero() {
  return (
    <div
      className="hero lg:min-h-96 min-h-96"
      style={{
        backgroundImage: `url(${alphastep.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-4xl text-3xl font-bold">
            Where Greeks Come Together
          </h1>
          <p className="mb-5">Find your next event</p>
          <button className="btn btn-primary hidden md:inline-flex">
            Find Your Next Event
          </button>
          <div className="md:hidden">
            <Search></Search>
          </div>
        </div>
      </div>
    </div>
  );
}

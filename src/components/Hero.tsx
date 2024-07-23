import alphastep from "/public/alphastep.jpg";
import sigmastep from "/public/greekstep-p01.jpg";
import SearchBar from "./Search";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="hero lg:min-h-96 min-h-96"
      style={{
        backgroundImage: `url(${sigmastep.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-4xl text-3xl font-bold">
            Where Greeks Come Together
          </h1>
          <p className="mb-5">Join the Community</p>
          <Link
            href={"/events"}
            className="btn btn-primary hidden md:inline-flex"
          >
            Find Your Next Event
          </Link>
          <div className="md:hidden">
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </div>
  );
}

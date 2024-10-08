import alphastep from "/public/alphastep.jpg";
import sigmastep from "/public/greekstep-p01.jpg";
import SearchBar from "./Search";
import Link from "next/link";
import blackbasketball from "/public/blackbasketball.jpg";

export default function Hero({ image }: any) {
  return (
    <div
      className="hero lg:min-h-96 min-h-96"
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-65"></div>
      <div className="hero-content text-white flex-col lg:flex-row-reverse lg:justify-between">
        {/* <img src={sigmastep.src} className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div className="max-w-md">
          <h1 className="mb-1 md:text-3xl text-2xl text-center font-bold">
            Welcome to Greek Gather
          </h1>
          <p className="mb-1 text-sm text-center m-3 md:text-base">
            Search for divine nine Events or Choosing a category
          </p>
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
}

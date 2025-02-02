import SearchBar from "./Search";

export default function Hero({ image }: any) {
  return (
    <div
      className="hero lg:min-h-96 min-h-96"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-65"></div>
      <div className="hero-content text-white flex-col lg:flex-row-reverse lg:justify-between">
        {/* <img src={sigmastep.src} className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div className="max-w-md">
          <h1 className="mb-1 md:text-3xl text-2xl text-center font-bold">
            Welcome to Gather Greek
          </h1>
          <p className="mb-1 text-sm text-center m-3 md:text-base">
            Search for D9 Events by name or choose a category
          </p>
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
}

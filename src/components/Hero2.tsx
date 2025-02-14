export default function Hero2({ image }: any) {
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
          <h2 className="mb-1 md:text-3xl text-2xl text-center font-bold">
            What is Greek Connect?
          </h2>
          <div className="mb-1 text-sm text-center m-3 md:text-base flex md:flex-row flex-wrap justify-center">
            <div className="m-2">
              <div className="border-2 w-24 text-center rounded-full ring-offset-2">
                <div>Create</div>
              </div>
            </div>
            <div className="m-2">
              <div className="border-2 w-24 text-center rounded-full ring-offset-2">
                <div>Connect</div>
              </div>
            </div>
            <div className="m-2">
              <div className="border-2 w-24 text-center rounded-full ring-offset-2">
                <div>Community</div>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Your destination for organizing and discovering a wide range of
            events, from political forums and educational workshops to financial
            seminars and entertainment gatherings. Gather Greek simplifies event
            creation and management, empowering you to connect with fellow
            members and other Greek organizations.
          </p>
        </div>
      </div>
    </div>
  );
}

import blackpeople2 from "/public/blackpeople2.jpg";
export default function ProfileCard({ event }: any) {
  return (
    <>
      <div className="card bg-base-100 min-w-48 shadow-xl m-2">
        <figure className="px-10 pt-10">
          <img src={blackpeople2.src} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{event.title}</h2>
          <p className="text-xs">{event.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Event</button>
          </div>
        </div>
      </div>
    </>
  );
}

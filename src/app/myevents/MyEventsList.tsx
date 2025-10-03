import MyEventsCard from "./MyEventsCard";

export default async function Cardlist({ events }: any) {
  const eventsList = events.map((e: any) => {
    if (e.active) {
      return <MyEventsCard event={e} key={e.id}></MyEventsCard>;
    }
  });

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        {eventsList}
      </div>
    </>
  );
}

import MyEventsCard from "./MyEventsCard";

export default async function Cardlist({ events }: any) {
  const eventsList = events.map((e: any) => {
    return <MyEventsCard event={e} key={e.id}></MyEventsCard>;
  });
  return (
    <>
      <div className="md:flex flex-wrap">{eventsList}</div>
    </>
  );
}

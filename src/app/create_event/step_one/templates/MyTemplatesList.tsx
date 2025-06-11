import MyEventsCard from "./MyTemplatesCard";

export default async function Cardlist({ events }: any) {
  const eventsList = events.map((e: any) => {
    return <MyEventsCard event={e} key={e.id}></MyEventsCard>;
  });

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        {eventsList}
      </div>
    </>
  );
}

import MyDraftEventsCard from "./MyDraftEventsCard";

export default async function DraftCardlist({ events }: any) {
  const eventsList = events.map((e: any) => {
    return <MyDraftEventsCard event={e} key={e.id}></MyDraftEventsCard>;
  });

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        {eventsList}
      </div>
    </>
  );
}

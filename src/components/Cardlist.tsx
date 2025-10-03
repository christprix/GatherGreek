import Card from "./Card";

export default async function Cardlist({ events }: any) {
  const eventsList = events.map((e: any) => {
    if (e.active) {
      return <Card event={e} key={e.id}></Card>;
    }
  });
  return (
    <>
      <div className="md:flex flex-wrap">{eventsList}</div>
    </>
  );
}

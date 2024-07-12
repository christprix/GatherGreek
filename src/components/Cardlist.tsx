import Card from "./Card";

export default function Cardlist({ events }: any) {
  const eventsList = events.map((e: any) => {
    return <Card event={e} key={e.id}></Card>;
  });

  return <>{eventsList}</>;
}

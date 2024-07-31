import SideCard from "./SideCard";

export default async function SideCardlist({ events }: any) {
  const eventsList = events.map((e: any) => {
    return <SideCard event={e} key={e.id}></SideCard>;
  });

  return <>{eventsList}</>;
}

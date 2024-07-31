import SideCard from "./SideCard";
import prisma from "@/lib/prisma";

export default async function SideCardlist({ events }: any) {
  const eventsList = events.map((e: any) => {
    return <SideCard event={e} key={e.id}></SideCard>;
  });

  return <>{eventsList}</>;
}

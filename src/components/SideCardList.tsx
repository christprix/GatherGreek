import SideCard from "./SideCard";
import prisma from "@/lib/prisma";

export default async function SideCardlist() {
  const dbevents = await prisma.event.findMany();
  const eventsList = dbevents.map((e: any) => {
    return <SideCard event={e} key={e.id}></SideCard>;
  });

  return <>{eventsList}</>;
}

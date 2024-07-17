import Card from "./Card";
import prisma from "@/lib/prisma";

export default async function Cardlist() {
  const dbevents = await prisma.event.findMany();
  const eventsList = dbevents.map((e: any) => {
    return <Card event={e} key={e.id}></Card>;
  });

  return (
    <>
      <div className="md:flex flex-wrap">{eventsList}</div>
    </>
  );
}

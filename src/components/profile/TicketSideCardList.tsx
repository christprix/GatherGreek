import TicketSideCard from "./TicketSideCard";

export default async function TicketSideCardlist({ tickets }: any) {
  const ticketsList = tickets.map((e: any) => {
    return <TicketSideCard ticket={e} key={e.id}></TicketSideCard>;
  });

  return <>{ticketsList}</>;
}

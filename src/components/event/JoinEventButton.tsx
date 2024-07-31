"use client";
import prisma from "@/lib/prisma";

export default async function JoinEventButton({ userId, eventId }: any) {
  function handleClick() {
    console.log(userId, eventId);
  }
  //   const addUserToEvent = await prisma.user.update({
  //     where: { id: userId },
  //     data: {
  //       events: {
  //         connect: eventId,
  //       },
  //     },
  //   });
  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        Attend this Event
      </button>
    </>
  );
}

"use server";
import prisma from "@/lib/prisma";
import { any, z } from "zod";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { console } from "inspector";

export async function verifyTicket(qrCodeData: string, eventId: string) {
  try {
    // CHECK IF THERE IS A TICKETS
    if (!qrCodeData) {
      return { success: false, message: "Ticket does not show any data" };
    }
    // CHECK IF THE TICKET EXISTS IN DATABASE

    const ticket = await prisma.ticket.findUnique({
      where: {
        qrCodeData: qrCodeData,
      },
      include: {
        event: {
          select: {
            title: true,
            id: true,
          },
        },
      },
    });
    // RETURN IF IT DOES NOT EXIST
    if (!ticket) {
      return { success: false, message: "Invalid ticket" };
    }
    // RETURN IF TICKET IS NOT FOR THIS EVENT
    if (ticket.event.id != eventId) {
      return {
        success: false,
        message: "This ticket is not for this event" + eventId,
      };
    }
    // RETURN IF TICKET IS ALREADY USED
    // IF IT EXISTS UPDATE TO USED
    if (ticket.status === "paid") {
      await prisma.ticket.update({
        where: {
          id: ticket.id,
        },
        data: {
          status: "used",
        },
      });
      return {
        success: true,
        name: ticket.name ?? "Unknown User",
        event: ticket.event?.title ?? "Unknown Event",
      };
    }

    if (ticket.status === "used") {
      return { success: false, message: "Ticket has been verified!" };
    }
    return {
      success: true,
      name: ticket.name ?? "Unknown User",
      event: ticket.event?.title ?? "Unknown Event",
    };
  } catch (error) {
    console.error("❌ Error verifying ticket:", error);
    return {
      success: false,
      message: "An unexpected error occurred while verifying the ticket",
    };
  }
}

export async function findEvent(id: string) {
  const dbevent = await prisma.event.findUnique({
    where: {
      id: id,
    },
  });
  return dbevent;
}

export async function findDraftEvent(id: string) {
  const dbevent = await prisma.draftEvent.findUnique({
    where: {
      id: id,
    },
  });
  return dbevent;
}

export async function findEventsbySearch(query: any) {
  const dbevents = await prisma.event.findMany({
    where: {
      OR: [
        {
          description: {
            search: query.replace(/[\s\n\t]/g, "_"),
          },
        },
        {
          title: {
            search: query.replace(/[\s\n\t]/g, "_"),
          },
        },
      ],
    },
    include: {
      author: {
        select: {
          isVerified: true,
          organization: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  return dbevents;
}

export async function findAllEvents() {
  const dbevents = await prisma.event.findMany({
    include: {
      author: {
        select: {
          isVerified: true,
          organization: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  return dbevents;
}

export async function findAllEventsByTag(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tags: {
        hasEvery: [tag],
      },
    },
    include: {
      author: {
        select: {
          isVerified: true,
          organization: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  return dbevents;
}

export async function findUserInfo(id: string) {
  const dbuser = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });
  return dbuser;
}

export async function findMyEvents(id: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      authorId: id,
    },
  });
  return dbevents;
}

export async function findMyTickets(id: string) {
  const dbTickets = await prisma.ticket.findMany({
    where: {
      userId: id,
    },
    select: {
      qrCodeData: true,
      status: true,
      event: {
        select: {
          title: true,
          eventDate: true,
          address1: true,
          city: true,
          imagePath: true,
          id: true,
        },
      },
    },
  });
  return dbTickets;
}

export async function findMyDraftEvents(id: string) {
  const dbevents = await prisma.draftEvent.findMany({
    where: {
      authorId: id,
    },
  });
  return dbevents;
}

export async function findMyEventsbyId(id: string) {
  const dbevents = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      User_Scheduled_Events: {
        select: { id: true },
      },
    },
  });
  return dbevents;
}

export async function findScheduledEvents(id: string) {
  const dbevents = await prisma.user.findMany({
    where: {
      id: id,
    },
    select: {
      User_Scheduled_Events: true,
    },
  });
  return dbevents;
}

export async function findAllUsers() {
  const dbUsers = await prisma.user.findMany();
  return dbUsers;
}

export async function addUserToEvent(
  userId: string,
  eventId: string,
  eventSeats: number
) {
  {
    const newSeats = eventSeats - 1;
    const connectUserToEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        Users_going_to_event: {
          connect: {
            id: userId,
          },
        },
        totalSeats: newSeats,
      },
    });
    revalidatePath(`/`, "layout");
    return connectUserToEvent;
  }
}

export async function addImageToEvent(eventId: string, imageId: string) {
  const addImagetoEvent = await prisma.event.update({
    where: { id: eventId },
    data: {
      imagePath: imageId,
    },
  });
  return addImagetoEvent;
}

// CREATE USER SCHEMA AND FUNCTION
const schema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Must be more than 2 characters" })
    .max(15, { message: "Must be less than 15 characters" }),
  lastname: z
    .string()
    .min(2, { message: "Must be more than 2 characters" })
    .max(15, { message: "Must be less than 15 characters" }),
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .email(),
  password: z
    .string()
    .min(8, { message: "Must be more than 8 characters" })
    .max(20, { message: "Must be less than 20 characters" }),
  organization: z.string(),
});

export async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    organization: formData.get("greek affiliation"),
    email: formData.get("email"),
    chapter: formData.get("chapter"),
    university: formData.get("university"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    const errors: string[] = [];
    console.log(validatedFields.error.issues);
    validatedFields.error.issues.map((error) => {
      errors.push(error.path.toString().toUpperCase() + ": " + error.message);
    });
    console.log(errors);
    // TODO SET UP ERROR MESSAGING SYSTEM
  }

  // Mutate data
  const hashed = await hash(formData.get("password") as string, 10);
  let emailcheckerarray = [];
  const emailchecker = await prisma.user.findUnique({
    where: {
      email: formData.get("email") as string,
    },
  });

  if (emailchecker) {
    console.log("no unique email");
    redirect("/signup?message=emailnotunique");
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        email: formData.get("email") as string,
        password: hashed,
        firstName: formData.get("firstname") as string,
        lastName: formData.get("lastname") as string,
        organization: formData.get("greek affiliation") as string,
        chapter: formData.get("chapter") as any,
        university: formData.get("university") as any,
      },
    });
    console.log(newUser);
  } catch (error: any) {
    console.log("something went wrong");
    // redirect("/profile?message=bad");
  }
  redirect("/profile?message=newuser");
}

export async function updateEvent(eventid: string, formData: FormData) {
  console.log(formData);
  const eventtime = formData.get("event_time") as string;
  const eventdate = formData.get("eventDate");
  const datetime = eventdate + "T" + eventtime + "Z";
  const formattedDate = new Date(datetime as string);
  let urleventlink;
  try {
    const newEvent = await prisma.event.update({
      where: {
        id: eventid,
      },
      data: {
        title: formData.get("event_title") as string,
        description: formData.get("event_description") as string,
        // tags: [formData.get("event_type") as string],
        location: "America",
        address1: formData.get("address-1") as string,
        address2: formData.get("address-2") as string,
        city: formData.get("city") as string,
        state: formData.get("state") as string,
        zipcode: formData.get("zipcode") as string,
        time: formData.get("event_time") as string,
        priceInCents: formData.get("event_cost") as string,
        // imagePath: image,
        eventDate: formattedDate as Date,
        // totalSeats: formattedSeats as number,
      },
    });
    console.log(newEvent);
    urleventlink = newEvent;
  } catch (error: any) {
    console.error("Prisma create event Error ;", error.message);
    redirect("/myevents?message=error");
  }
  redirect(`/myevents/${urleventlink.id}`);
}

// export async function updateDraftEvent(
//   user: string,
//   eventid: string,
//   imagePath: string,
//   formData: FormData
// ) {
//   console.log(formData);
//   const eventtime = formData.get("event_time") as string;
//   const eventdate = formData.get("eventDate");
//   let datetime = "";
//   let formattedDate;
//   const formattedSeats = Number(formData.get("total_seats"));
//   if (eventdate && eventtime) {
//     formattedDate = new Date(datetime as string);
//     datetime = eventdate + "T" + eventtime + "Z";
//   }

//   try {
//     const newEvent = await prisma.draftEvent.update({
//       where: {
//         id: eventid,
//       },
//       data: {
//         title: formData.get("event_title") as string,
//         description: formData.get("event_description") as string,
//         // tags: [formData.get("event_type") as string],
//         location: "America",
//         address1: formData.get("address-1") as string,
//         address2: formData.get("address-2") as string,
//         city: formData.get("city") as string,
//         state: formData.get("state") as string,
//         zipcode: formData.get("zipcode") as string,
//         time: formData.get("event_time") as string,
//         imagePath: imagePath,
//         eventDate: formattedDate as Date,
//         totalSeats: formattedSeats as number,
//       },
//     });
//     console.log(newEvent);
//   } catch (error: any) {}
//   redirect(`/myevents/`);
// }

export async function createEvent(
  user: string,
  eventId: string,
  imagePath: string,
  formData: FormData
) {
  console.log(formData);
  let image = "";
  if (imagePath === "") {
    image =
      "https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png";
  } else {
    image = imagePath;
  }
  const eventdate = formData.get("eventDate");
  const formattedDate = new Date(eventdate as string);
  const formattedSeats = Number(formData.get("total_seats"));
  // const isthisaDraft = await prisma.draftEvent.findUnique({
  //   where: {
  //     id: eventId,
  //   },
  // });
  const user_organization = await prisma.user.findUnique({
    where: { id: user },
    select: {
      organization: true,
    },
  });
  console.log(user_organization);
  try {
    const newEvent = await prisma.event.create({
      data: {
        title: formData.get("event_title") as string,
        description: formData.get("event_description") as string,
        tags: [
          // formData.get("event_type") as string,
          user_organization?.organization as string,
        ],
        location: "America",
        address1: formData.get("address-1") as string,
        address2: formData.get("address-2") as string,
        city: formData.get("city") as string,
        state: formData.get("state") as string,
        zipcode: formData.get("zipcode") as string,
        imagePath: image,
        eventDate: formattedDate as Date,
        totalSeats: formattedSeats as number,
        time: formData.get("event_time") as string,
        // TODO CHANGE PRICE TO NUMBER
        priceInCents: formData.get("event_cost") as string,
        authorId: user as any,
      },
    });
    if (eventId) {
      await prisma.draftEvent.delete({
        where: { id: eventId },
      });
    }
  } catch (error: any) {
    console.error("An error occurred:", error);
  }
  redirect("/profile");
}

export async function createDraftEvent(
  user: string,
  eventId: string,
  imagePath: string,
  formData: FormData
) {
  // Check if Event Id exists
  // if not make it a random 1
  let draftEventId;
  if (eventId === undefined) {
    draftEventId = "1";
  } else {
    draftEventId = eventId;
  }

  // Check if image exists
  // if not make it equal default image
  let image = "";
  if (imagePath === "" || imagePath === null) {
    image =
      "https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png";
  } else {
    image = imagePath;
  }

  // Format the date
  const eventdate = formData.get("eventDate");
  let formattedDate;
  if (eventdate === "") {
    formattedDate = new Date();
  } else {
    formattedDate = new Date(eventdate as string);
  }
  // console.log(formattedDate);
  // FORMAT SEATS
  const seats = formData.get("total_seats");
  let formattedSeats;
  if (seats === "") {
    formattedSeats = 0;
  } else {
    formattedSeats = Number(formData.get("total_seats"));
  }
  // console.log(formattedSeats);
  // TODO USE FUNCTION BELOW TO CONVERT PRICE TO NUMBER
  // const formattedPrice = Number(formData.get("eventCost"))
  try {
    const saveDraftEvent = await prisma.draftEvent.upsert({
      where: {
        id: draftEventId as string,
      },

      update: {
        title: formData.get("event_title") as string,
        description: formData.get("event_description") as string,
        tags: [formData.get("event_type") as string],
        location: "America",
        address1: formData.get("address-1") as string,
        address2: formData.get("address-2") as string,
        city: formData.get("city") as string,
        state: formData.get("state") as string,
        zipcode: formData.get("zipcode") as string,
        imagePath: image,
        eventDate: formattedDate as Date,
        totalSeats: formattedSeats as number,
        time: formData.get("event_time") as string,
        // TODO CHANGE PRICE TO NUMBER
        priceInCents: formData.get("event_cost") as string,
      },

      create: {
        title: formData.get("event_title") as string,
        description: formData.get("event_description") as string,
        tags: [formData.get("event_type") as string],
        location: "America",
        address1: formData.get("address-1") as string,
        address2: formData.get("address-2") as string,
        city: formData.get("city") as string,
        state: formData.get("state") as string,
        zipcode: formData.get("zip") as string,
        imagePath: image,
        eventDate: formattedDate as Date,
        totalSeats: formattedSeats as number,
        time: formData.get("event_time") as string,
        // TODO CHANGE PRICE TO NUMBER
        priceInCents: formData.get("event_cost") as string,
        authorId: user as any,
      },
    });
    console.log(saveDraftEvent);
    redirect("/myevents");
  } catch (error: any) {
    revalidatePath("/", "layout");
    redirect("/myevents");
  }
}

export async function deleteEventPrisma(eventid: string) {
  console.log(eventid);
  const deleteEvent = await prisma.event.delete({
    where: { id: eventid },
  });
  // return deleteEvent;
  revalidatePath("/", "layout");
}

export async function deleteDraftEventPrisma(eventid: string) {
  const deleteEvent = await prisma.draftEvent.delete({
    where: { id: eventid },
  });
  // return deleteEvent;
  revalidatePath("/myevents");
}

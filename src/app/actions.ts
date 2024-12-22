"use server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { hash } from "bcrypt";
import { log } from "console";

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
});

export async function createUser(formData: FormData) {
  console.log(formData);
  const validatedFields = schema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
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
  try {
    const newUser = await prisma.user.create({
      data: {
        email: formData.get("email") as string,
        password: hashed,
        firstName: formData.get("firstname") as string,
        lastName: formData.get("lastname") as string,
      },
    });
    console.log(newUser);
  } catch (error) {
    console.log("something went wrong");
  }
  return console.log("user creation attempted");
}

export async function createEvent(user: string, formData: FormData) {
  const eventdate = formData.get("eventDate");
  console.log(formData);
  const formattedDate = new Date(eventdate as string);
  // console.log(formattedDate);
  const formattedSeats = Number(formData.get("total_seats"));
  // console.log(formattedSeats);
  // TODO USE FUNCTION BELOW TO CONVERT PRICE TO NUMBER
  // const formattedPrice = Number(formData.get("eventCost"))
  const newEvent = await prisma.event.create({
    data: {
      title: formData.get("event_title") as string,
      description: formData.get("event_description") as string,
      tags: [formData.get("event_type") as string],
      location: "America",
      imagePath:
        "https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png",
      eventDate: formattedDate as Date,
      totalSeats: formattedSeats as number,
      // TODO CHANGE PRICE TO NUMBER
      priceInCents: formData.get("event_cost") as string,
      authorId: user as any,
    },
  });
  console.log(newEvent);
  try {
    console.log("tried");
  } catch (err) {
    console.log("didn't work");
  }
}

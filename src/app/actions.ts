"use server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { hash } from "bcrypt";

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

export async function verifyUser() {
  // VERIFY A USER
}

export async function addUserToEvent(userId: string, eventId: string) {
  const connectUserToEvent = await prisma.event.update({
    where: { id: eventId },
    data: {
      Users_going_to_event: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return connectUserToEvent;
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

export async function createUser(prevState: any, formData: FormData) {
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
    return {
      message: errors,
    };
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
  } catch (error) {
    console.log(error);
  }
  return {
    message: ["Thanks for signing up!"],
  };
}

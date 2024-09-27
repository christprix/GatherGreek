"use server";
import prisma from "@/lib/prisma";
import { Tag } from "@prisma/client";

export async function findEvents(query: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      description: {
        search: query.replace(/[\s\n\t]/g, "_"),
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

export async function findEventsService(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tags: {
        has: Tag.COMMUNITY_SERVICE,
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

export async function findEventsOther(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tags: {
        has: Tag.OTHER,
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
// CREATE ORG SEARCH
// export async function findEventsByOrg(org: string) {
//   const dbevents = await prisma.event.findMany({
//     where: {
//       author: {
//         organization: Oranization
//       },
//     },
//     include: {
//       author: {
//         select: {
//           isVerified: true,
//           organization: true,
//           firstName: true,
//           lastName: true,
//         },
//       },
//     },
//   });
//   return dbevents;
// }

export async function findEventsSocial(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tags: {
        has: Tag.SOCIAL,
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

export async function findEventsGovernment(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tags: {
        has: Tag.GOVERNMENT,
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

export async function findEventsEducation(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tags: {
        has: Tag.EDUCATION,
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

export async function findEventsEconomics(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tags: {
        has: Tag.ECONOMICS,
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

export async function addImageToEvent(eventId: string, imageId: string) {
  const addImagetoEvent = await prisma.event.update({
    where: { id: eventId },
    data: {
      imagePath: imageId,
    },
  });
  return addImagetoEvent;
}

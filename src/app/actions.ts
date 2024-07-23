import prisma from "@/lib/prisma";
import { Tag } from "@prisma/client";

export async function findEvents(query: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      title: {
        search: query.replace(/[\s\n\t]/g, "_"),
      },
    },
  });
  return dbevents;
}

export async function findEventsService(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tag: Tag.COMMUNITY_SERVICE,
    },
  });
  return dbevents;
}

export async function findEventsOther(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tag: Tag.OTHER,
    },
  });
  return dbevents;
}

export async function findEventsSocial(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tag: Tag.SOCIAL,
    },
  });
  return dbevents;
}

export async function findEventsGovernment(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tag: Tag.GOVERNMENT,
    },
  });
  return dbevents;
}

export async function findEventsEducation(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tag: Tag.EDUCATION,
    },
  });
  return dbevents;
}

export async function findEventsEconomics(tag: string) {
  const dbevents = await prisma.event.findMany({
    where: {
      tag: Tag.ECONOMICS,
    },
  });
  return dbevents;
}

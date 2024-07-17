import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { faker } from "@faker-js/faker";

// const seedevents = [
//   {
//     title: "Xi Chi Sigma Step Show",
//     location: "1 Amb Dr NW, Atlanta, GA 30313",
//     description: "From $1.00",
//     imagePath: greekstep.src,
//     eventDate: "Saturday July 29th 8:00pm",
//     id: 1,
//   },
//   {
//     title: "Feed the homeless Community Event",
//     location: "1755 Sandy Ln, Douglasville, GA 30134",
//     description: "From $0.00",
//     imagePath: sigmavolunteer.src,
//     eventDate: "Thursday August 2nd 11:00am",
//     id: 2,
//   },
//   {
//     title: "Sghro Community Service Event",
//     location: "6700 Church St, Douglasville, GA 30134",
//     description: "From $1.00",
//     imagePath: sgrhoevent.src,
//     eventDate: "Sunday July 17th 10am",
//     id: 3,
//   },
// ];

const fakedate = faker.date.future();

console.log(fakedate);
const prisma = new PrismaClient();
async function main() {
  const password = await hash("test", 11);
  const chris = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      firstName: "Chris",
      lastName: "St. Prix",
      organization: "PhiBetaSigma",
      password,
      events: {
        create: [
          {
            title: "Xi Chi Sigma Step Show",
            description: "From $1.00",
            priceInCents: "0.00",
            imagePath: "greekstep",
            location: "1 Amb Dr NW, Atlanta, GA 30313",
            eventDate: faker.date.future(),
            totalSeats: 2,
            tag: "SOCIAL",
          },
        ],
      },
    },
  });
  const coolio = await prisma.user.upsert({
    where: { email: "test2@test.com" },
    update: {},
    create: {
      email: "test2@test.com",
      firstName: "coolio",
      lastName: "stprix",
      organization: "AlphaPhiAlpha",
      password,
      events: {
        create: [
          {
            title: "Feed the homeless Community Event",
            location: "1755 Sandy Ln, Douglasville, GA 30134",
            description: "From $0.00",
            priceInCents: "0.00",
            imagePath: "greekstep",
            eventDate: fakedate,
            totalSeats: 2,
            tag: "COMMUNITY_SERVICE",
          },
        ],
      },
    },
  });
  const charlisa = await prisma.user.upsert({
    where: { email: "test3@test.com" },
    update: {},
    create: {
      email: "test3@test.com",
      firstName: "charlisa",
      lastName: "jackson",
      organization: "ZetaPhiBeta",
      password,
      events: {
        create: [
          {
            title: "Sgrho Community Service Event",
            location: "6700 Church St, Douglasville, GA 30134",
            description: "blue",
            priceInCents: "$1.00",
            imagePath: "greekstep",
            eventDate: faker.date.future(),
            totalSeats: 3,
            tag: "COMMUNITY_SERVICE",
          },
        ],
      },
    },
  });
  const Eric = await prisma.user.upsert({
    where: { email: "test4@test.com" },
    update: {},
    create: {
      email: "test4@test.com",
      firstName: "Eric",
      lastName: "jackson",
      organization: "OmegaPsiPhi",
      password,
      events: {
        create: [
          {
            title: "Omega Psi Phi BBQ and performance",
            location: "6700 Church St, Douglasville, GA 30134",
            description: "Dogs",
            priceInCents: "$1.00",
            imagePath: "greekstep",
            eventDate: faker.date.future(),
            totalSeats: 3,
            tag: "SOCIAL",
          },
        ],
      },
    },
  });
  const Jessica = await prisma.user.upsert({
    where: { email: "test5@test.com" },
    update: {},
    create: {
      email: "test5@test.com",
      firstName: "Jessica",
      lastName: faker.person.lastName(),
      organization: "SigmaGammaRho",
      password,
      events: {
        create: [
          {
            title: "Sghro Financial Literacy Class",
            location: "6700 Church St, Douglasville, GA 30134",
            description: "A bunch of Financial literacy stuff",
            priceInCents: "$0.00",
            imagePath: "greekstep",
            eventDate: faker.date.future(),
            totalSeats: 10,
            tag: "ECONOMICS",
          },
        ],
      },
    },
  });

  console.log({ chris, coolio, Eric, Jessica });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

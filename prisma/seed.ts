import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { faker } from "@faker-js/faker";
import { log } from "console";
// import greekstep from "../public/greekstep-p01.jpg";
// import sigmavolunteer from "../public/sigmavolunteer.jpg";
// import sgrhoevent from "../public/sgrhoevent.jpg";

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
// const prisma = new PrismaClient();
// async function main() {
//   const password = await hash("test", 11);
//   const chris = await prisma.user.upsert({
//     where: { email: "test@test.com" },
//     update: {},
//     create: {
//       email: "test@test.com",
//       firstName: "chris",
//       lastName: "stprix",
//       password,
//       events: {
//         create: [
//           {
//             title: "Xi Chi Sigma Step Show",
//             description: "From $1.00",
//             imagePath: "greekstep",
//             location: "1 Amb Dr NW, Atlanta, GA 30313",
//             eventDate: faker.date.future(),
//             totalSeats: 2,
//           },
//         ],
//       },
//     },
//   });
//   const coolio = await prisma.user.upsert({
//     where: { email: "test2@test.com" },
//     update: {},
//     create: {
//       email: "test2@test.com",
//       firstName: "coolio",
//       lastName: "stprix",
//       password,
//       events: {
//         create: [
//           {
//             title: "Feed the homeless Community Event",
//             location: "1755 Sandy Ln, Douglasville, GA 30134",
//             description: "From $0.00",
//             imagePath: "greekstep",
//             eventDate: fakedate,
//             totalSeats: 2,
//           },
//         ],
//       },
//     },
//   });
//   const charlisa = await prisma.user.upsert({
//     where: { email: "test3@test.com" },
//     update: {},
//     create: {
//       email: "test3@test.com",
//       firstName: "charlisa",
//       lastName: "jackson",
//       password,
//       events: {
//         create: [
//           {
//             title: "Sghro Community Service Event",
//             location: "6700 Church St, Douglasville, GA 30134",
//             description: "From $1.00",
//             imagePath: "greekstep",
//             eventDate: faker.date.future(),
//             totalSeats: 3,
//           },
//         ],
//       },
//     },
//   });

//   console.log({ chris, coolio });
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

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
      isAdmin: true,
      password,
      events: {
        create: [
          {
            title: "Xi Chi Sigma Step Show",
            description:
              "Get ready for an unforgettable evening at the Xi Chi Sigma Step Show, where the fraternity's members will showcase their impressive stepping skills. This high-energy performance will feature synchronized routines, rhythmic beats, and an electrifying atmosphere. Come and cheer on the talented participants as they demonstrate unity, precision, and creativity on stage.",
            short_description:
              "Experience an electrifying performance as members of Xi Chi Sigma showcase their incredible stepping skills, featuring synchronized routines and rhythmic beats.",
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
            description:
              "Join us for a heartwarming initiative to support our community's less fortunate at the Feed the Homeless Community Event. Volunteers will come together to prepare and distribute meals, offering nourishment and kindness to those in need. It's a wonderful opportunity to make a difference and show compassion to our neighbors.",
            short_description:
              "Join us to prepare and distribute meals, offering nourishment and support to our homeless neighbors in a compassionate and caring environment.",
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
            description:
              "The Sgrho Community Service Event is a day dedicated to giving back and making a positive impact. Join the Sigma Gamma Rho Sorority as they lead various service projects aimed at improving our community. Whether it's cleaning up local parks, organizing donation drives, or helping out at local shelters, your participation will contribute to a better and brighter community for all.",
            short_description:
              "Participate in various service projects led by Sigma Gamma Rho Sorority, aimed at improving our community and making a positive impact.",
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
            description:
              "Enjoy a day of delicious food and lively entertainment at the Omega Psi Phi BBQ and Performance. This event promises a feast of mouth-watering BBQ dishes, prepared with love and care. In addition to the great food, attendees will be treated to performances showcasing the fraternity's talents, making it a perfect blend of culinary delights and cultural expression.",
            short_description:
              "Enjoy delicious BBQ and live performances by Omega Psi Phi, blending great food with vibrant entertainment for a memorable day.",
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
            description:
              "Empower yourself with essential financial knowledge at the Sgrho Financial Literacy Class. This informative session, hosted by Sigma Gamma Rho Sorority, will cover key topics such as budgeting, saving, investing, and managing debt. Whether you're just starting on your financial journey or looking to refine your skills, this class offers valuable insights to help you achieve financial stability and success.",
            priceInCents: "$0.00",
            imagePath: "greekstep",
            short_description:
              "Enhance your financial knowledge with practical advice on budgeting, saving, and investing, empowering you to achieve financial stability and success.",
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

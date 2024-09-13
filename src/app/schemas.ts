import z from "zod";

export const FormDataSchema = z.object({
  title: z.string().min(1, "Please enter a title for your event"),
  description: z
    .string()
    .min(1, "Please tell us what your event is about")
    .max(200, "Must be less than 200 characters"),
  tag: z.any(),
  location: z.string(),
  eventDate: z.date(),
  priceInCents: z.string(),
  totalSeats: z.number(),
  // TODO change image path to cloudinary id
  imagePath: z.string(),
  short_description: z
    .string()
    .min(1, "Give a short description of your event")
    .max(50, "Must be less than 50 characters"),
});

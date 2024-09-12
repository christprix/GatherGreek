import z from "zod";

export const stepOneSchema = z.object({
  title: z.string().min(1, "Please enter a title for your event"),
  description: z
    .string()
    .min(1, "Please tell us what your event is about")
    .max(200, "Must be less than 200 characters"),
  tag: z.any(),
});

export const stepTwoSchema = z.object({
  location: z.string(),
  eventDate: z.date(),
});

export const stepThreeSchema = z.object({
  priceInCents: z.string(),
  totalSeats: z.number(),
});

export const stepFourSchema = z.object({
  imagePath: z.string(),
  short_description: z
    .string()
    .min(1, "Give a short description of your event")
    .max(50, "Must be less than 50 characters"),
});

export const eventFormSchema = z.object({
  ...stepOneSchema.shape,
  ...stepTwoSchema.shape,
  ...stepThreeSchema.shape,
  ...stepFourSchema.shape,
});

export const eventFormInitialValuesSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  short_description: z.string().optional(),
  priceInCents: z.string().optional(),
  imagePath: z.string().optional(),
  location: z.string().optional(),
  eventDate: z.date().optional(),
  totalSeats: z.number().optional(),
  tag: z.any().optional(),
});

export type eventFormType = z.infer<typeof eventFormSchema>;
export type eventFormInitialValuesType = z.infer<
  typeof eventFormInitialValuesSchema
>;

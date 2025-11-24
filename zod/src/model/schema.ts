import z from "zod";

// primitive data type

const stringSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean();
const dateSchema = z.boolean();

const result = stringSchema.parse("Hello");
const objectSchema = z.object({
  name: z.string,
  age: z.number,
  address: z.string,
  isStudent: z.boolean,
});

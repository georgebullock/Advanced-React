/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
// eslint-disable-next-line prettier/prettier
import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { User } from "./schemas/Users";

const databaseURL = process.env.DATABASE_URL;
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 7,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    // TODO: Add data seeding
  },
  lists: createSchema({
    User,
  }),
  ui: {
    isAccessAllowed: () => true,
  },
});

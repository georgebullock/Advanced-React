/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
// eslint-disable-next-line prettier/prettier
import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { Product } from "./schemas/Products";
import { User } from "./schemas/Users";
import { ProductImage } from "./schemas/ProductImage";
import { insertSeedData } from "./seed-data";

const databaseURL = process.env.DATABASE_URL;
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 7,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },

    db: {
      adapter: "mongoose",
      url: databaseURL,
      async onConnect(keystone) {
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystone);
        }
      },
    },

    lists: createSchema({
      User,
      Product,
      ProductImage,
    }),

    ui: {
      isAccessAllowed: ({ session }) => {
        console.log("session: ", session);
        return !!session?.data;
      },
    },

    session: withItemData(statelessSessions(sessionConfig), {
      // Note: This is a GraphQL query 🤯
      User: "id name email",
    }),
  })
);

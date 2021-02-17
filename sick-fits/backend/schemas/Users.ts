/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
// eslint-disable-next-line prettier/prettier
import { list } from "@keystone-next/keystone/schema";
import { text, password } from "@keystone-next/fields";

export const User = list({
  // TODO: add access
  // TODO: add ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO: add roles, cars, orders
  },
});

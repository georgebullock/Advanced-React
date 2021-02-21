/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quotes */
// eslint-disable-next-line prettier/prettier
import { integer, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Product = list({
  // TODO:
  // access
  // fields
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    status: select({
      options: [
        { label: "draft", value: "DRAFT" },
        { label: "available", value: "UNAVAILABLE" },
        { label: "unavailable", value: "UNAVAILABLE" },
      ],
      defaultValue: "DRAFT",
    }),
    price: integer(),
  },
});

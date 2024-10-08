import { PrismaClient } from "@/node_modules/.prisma/client";
import schema from "@/prisma/json-schema/json-schema.json";
import { createHandler } from "@premieroctet/next-admin/appHandler";
 
const { run } = createHandler({
  apiBasePath: "/api/admin",
  prisma: new PrismaClient(),
  schema,
  /*options*/
});
 
export { run as DELETE, run as GET, run as POST };
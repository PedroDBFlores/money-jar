import { NextAdmin, PageProps } from "@premieroctet/next-admin";
import { getNextAdminProps } from "@premieroctet/next-admin/appRouter";
import { PrismaClient } from "@/node_modules/.prisma/client";
import schema from "@/prisma/json-schema/json-schema.json";
import "@/styles.css" // .css file containing tailiwnd rules
 
export default async function AdminPage({
  params,
  searchParams,
}: PageProps) {
  const props = await getNextAdminProps({
    params: params.nextadmin,
    searchParams,
    basePath: "/admin",
    apiBasePath: "/api/admin",
    prisma: new PrismaClient(),
    schema,
    /*options*/
  });
 
  return (
      <NextAdmin {...props} />
  );
}
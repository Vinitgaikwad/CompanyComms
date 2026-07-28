// src/middlewares/prisma.ts
import { createMiddleware } from "hono/factory";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const prismaMiddleware = createMiddleware<{
	Bindings: { DATABASE_URL: string };
	Variables: { prisma: PrismaClient };
}>(async (c, next) => {
	const adapter = new PrismaPg({ connectionString: c.env.DATABASE_URL });
	c.set("prisma", new PrismaClient({ adapter }));
	await next();
});

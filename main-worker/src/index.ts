// src/index.ts
import { Hono } from "hono";
import { prismaMiddleware } from "./utils/prisma";
import { orgRouter } from "./api/routes/org.router";
import { errorHandler } from "./global/middlewares/errorHandler";

const app = new Hono();
app.use("*", prismaMiddleware);
app.route("/org", orgRouter);
app.onError(errorHandler)
export default app;

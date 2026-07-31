// src/index.ts
import { Hono } from "hono";
import { prismaMiddleware } from "./utils/prisma";
import { orgRouter } from "./api/routes/org.router";
import { errorHandler } from "./global/middlewares/errorHandler";
import { userRouter } from "./api/routes/user.router";

const app = new Hono();
app.use("*", prismaMiddleware);
app.route("/org", orgRouter);
app.route("/user", userRouter)
app.onError(errorHandler)
export default app;

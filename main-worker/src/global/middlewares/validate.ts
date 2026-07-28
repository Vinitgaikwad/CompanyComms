// src/middlewares/validate.ts
import { createMiddleware } from "hono/factory";
import type { z } from "zod";
import type { AppContext } from "../../types/context";

export const validateBody = <T extends z.ZodType>(schema: T) =>
	createMiddleware<AppContext>(async (c, next) => {
		const body = await c.req.json();
		const result = schema.safeParse(body);

		if (!result.success) {
			return c.json({ error: "Validation failed", details: result.error.flatten() }, 400);
		}

		c.set("data", result.data);
		await next();
	});

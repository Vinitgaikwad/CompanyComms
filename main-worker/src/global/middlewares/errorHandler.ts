import { Context } from "hono";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { ZodError } from "zod";

export class AppError extends Error {
	public readonly errorCode: ContentfulStatusCode;

	constructor(message: string, errorCode: ContentfulStatusCode) {
		super(message);

		this.name = "AppError";
		this.errorCode = errorCode;
	}
}

export function errorHandler(err: Error, c: Context) {
	console.log(err);
	if (err instanceof AppError) {
		return c.json(
			{
				message: err.message,
			},
			err.errorCode
		);
	}

	if (err instanceof ZodError) {
		return c.json({
			message: err.message,
			issues: err.issues
		},
			400
		);
	}

	return c.json(
		{
			message: "Internal Server Error",
		},
		500
	);
}

export function logError(err: Error) {
	console.error(err);
}

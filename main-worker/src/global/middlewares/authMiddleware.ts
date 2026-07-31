import { Context } from "hono";
import { Jwt } from "hono/utils/jwt";
import { AppError } from "./errorHandler";

export async function verifyAuth(c: Context) {
	try {
		const auth = c.req.header("authentication");
		if (!auth) {
			throw new AppError("Invalid Auth!", 401)
		}
		const decode = Jwt.verify(auth, c.env.SECRET, "ES256");
		c.set('decoded', decode)
	} catch (error) {
		throw error
	}
}

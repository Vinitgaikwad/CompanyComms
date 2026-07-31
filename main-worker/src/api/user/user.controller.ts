import { Context } from "hono";
import { signIn, signUp } from "./user.service";

export async function handleUserSignUp(c: Context) {
	try {
		const prisma = c.get('prisma')
		const data = c.get('data')
		if (await signUp(prisma, data)) {
			c.json({
				succuss: "Account Created Succussuly"
			})
		}
	} catch (error) {
		throw error
	}
}

export async function handleUserSignIn(c: Context) {
	try {
		const prisma = c.get('prisma')
		const data = c.get('data')
		const token = await signIn(prisma, data, c.env.SECRET);
		c.json({
			token: `Bearer ${token}`
		})
	} catch (error) {
		throw error
	}
}

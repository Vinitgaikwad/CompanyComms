import z from "zod"
import { Role } from "../../generated/prisma/enums";

export const signUpZod = z.object({
	name: z.string().nonempty(),
	email: z.email(),
	password: z.string().nonempty().min(8),
	phoneNumber: z.string().max(10).min(10),
	role: z.enum(Role),
	orgId: z.int(),
	positionId: z.int()
});


export type SignUpInputs = z.infer<typeof signUpZod>

export const signInZod = z.object({
	email: z.email(),
	password: z.string().min(8)
});

export type SignInputs = z.infer<typeof signInZod>

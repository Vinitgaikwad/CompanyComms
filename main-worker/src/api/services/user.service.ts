import { PrismaClient } from "../../generated/prisma/client";
import { SignInputs, SignUpInputs } from "../schema.ts/user.schema";
import { AppError } from "../../global/middlewares/errorHandler";
import { Jwt } from "hono/utils/jwt";
import bycrypt from "bcryptjs"


export async function signUp(prisma: PrismaClient, details: SignUpInputs) {
	try {
		const { password, ...restDetails } = details
		const hashpassword = await bycrypt.hash(password, 10)
		await prisma.user.create({
			data: {
				...restDetails,
				hashpassword: hashpassword
			}
		});
		return true
	} catch (error) {
		throw error
	}
}

export async function signIn(prisma: PrismaClient, creds: SignInputs, secret: string) {
	try {

		const userDetails = await prisma.user.findFirst({
			where: {
				email: creds.email,
			}
		});
		if (userDetails === null) {
			throw new AppError("Incorrect Creds!", 404)
		}
		const verifyHash = await bycrypt.compare(creds.password, userDetails.hashpassword);

		if (!verifyHash) {
			throw new AppError("Incorrect Password!", 404)
		}

		return Jwt.sign({
			userid: userDetails.id,
			role: userDetails.role,
			orgId: userDetails.orgId,
			positionId: userDetails.positionId
		},
			secret,
			"ES256"
		);
	} catch (error) {
		throw error
	}
}



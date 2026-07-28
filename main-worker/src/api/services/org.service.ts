import { PrismaClient } from "../../generated/prisma/client";
import { OrgType, PartialOrg } from "../schema.ts/org.schema";

export async function createOrg(prisma: PrismaClient, orgDetails: OrgType) {
	try {
		return await prisma.organization.create({
			data: orgDetails
		});
	} catch (error) {
		throw error
	}
}

export async function updateOrg(prisma: PrismaClient, id: number, orgDetails: PartialOrg) {
	try {
		return await prisma.organization.update({
			where: {
				id: id
			},
			data: orgDetails
		});
	} catch (error) {
		throw error
	}
}

export async function getOrgDetails(prisma: PrismaClient, id: number) {
	try {
		return await prisma.organization.findUnique({
			where: {
				id
			}
		});
	} catch (error) {
		throw error
	}
}


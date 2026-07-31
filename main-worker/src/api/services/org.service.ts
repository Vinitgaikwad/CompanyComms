import { PrismaClient, Role } from "../../generated/prisma/client";
import { OrgType, PartialOrg } from "../schema.ts/org.schema";

export async function createOrg(prisma: PrismaClient, data: { orgDetails: OrgType, ownerCred: any }) {
	try {
		const orgDetails = await prisma.organization.create({
			data: data.orgDetails
		});

		const positions = prisma.position.createMany({
			data: [
				{
					pname: "Owner",
					rights: "owner of company",
					orgId: orgDetails.id
				},
				{
					pname: "head of markating",
					rights: "handles marketing team",
					orgId: orgDetails.id
				},
				{
					pname: "head of finance",
					rights: "handles ",
					orgId: orgDetails.id
				},
				{
					pname: "head of sales",
					rights: "handles ",
					orgId: orgDetails.id
				},
				{
					pname: "CEO",
					rights: "handles company",
					orgId: orgDetails.id
				},
			]
		});

		await prisma.user.create({
			data: {
				name: data.ownerCred.name,
				email: data.ownerCred.password,
				hashpassword: data.ownerCred.hashpassword,
				phoneNumber: data.ownerCred.phoneNumber,
				role: Role.Owner,
				orgId: orgDetails.id,
				positionId: 1
			}
		});

		return { orgDetails, positions }
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


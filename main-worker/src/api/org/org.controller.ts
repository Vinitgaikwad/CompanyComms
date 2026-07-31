import { Context } from "hono";
import { createOrg, getOrgDetails, updateOrg } from "./org.service";

export async function handleCreateOrg(c: Context) {
	try {
		const data = c.get('data');
		const prisma = c.get("prisma");
		const orgDetails = await createOrg(prisma, data)
		return c.json({
			orgDetails
		});
	} catch (error) {
		throw error
	}
}

export async function handleUpdateOrg(c: Context) {
	try {
		const { id, data } = c.get('data')
		const prisma = c.get('prisma')
		const updatedOrg = await updateOrg(prisma, id, data)
		return c.json({
			updatedOrg
		});
	} catch (error) {
		throw error
	}
}

export async function handleGetOrgDetails(c: Context) {
	try {
		const data: number = c.get('data');
		const prisma = c.get('prisma')
		const getOrg = await getOrgDetails(prisma, data);
		return c.json({
			getOrg
		});
	} catch (error) {
		throw error
	}
}

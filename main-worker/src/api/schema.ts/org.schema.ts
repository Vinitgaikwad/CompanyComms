import z from "zod"
export const orgSchema = z.object({
	orgName: z.string().min(4).max(40).nonempty(),
	orgDescription: z.string().max(400).nonempty()
});

export const updateOrgParam = orgSchema.partial();
export const id = z.int();

export type OrgType = z.infer<typeof orgSchema>
export type PartialOrg = z.infer<typeof orgSchema>

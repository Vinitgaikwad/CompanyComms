import { Hono } from "hono";

import { handleCreateOrg, handleUpdateOrg } from "../controllers/org.controller";
import { validateBody } from "../../global/middlewares/validate";
import { id, orgSchema, updateOrgParam } from "../schema.ts/org.schema";

const orgRouter = new Hono()

orgRouter.put('/create-org', validateBody(orgSchema), handleCreateOrg);
orgRouter.put('/update-org', validateBody(updateOrgParam), handleUpdateOrg)
orgRouter.put('/get-org', validateBody(id), handleUpdateOrg)

export { orgRouter }

import { Hono } from "hono";

import { handleCreateOrg, handleUpdateOrg } from "./org.controller";
import { validateBody } from "../../global/middlewares/validate";
import { id, orgSchema, updateOrgParam } from "./org.schema";
import { verifyAuth } from "../../global/middlewares/authMiddleware";

const orgRouter = new Hono()

orgRouter.put('/create-org', validateBody(orgSchema), handleCreateOrg);
orgRouter.put('/update-org', verifyAuth, validateBody(updateOrgParam), handleUpdateOrg) // verify auth before
orgRouter.put('/get-org', verifyAuth, validateBody(id), handleUpdateOrg)

export { orgRouter }

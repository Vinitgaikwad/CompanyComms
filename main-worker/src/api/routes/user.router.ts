import { Hono } from "hono";
import { handleUserSignUp } from "../controllers/user.controller";
import { signInZod, signUpZod } from "../schema.ts/user.schema";
import { validateBody } from "../../global/middlewares/validate";

const userRouter = new Hono()

userRouter.put("/sign-up", validateBody(signUpZod), handleUserSignUp)
userRouter.put("/sign-in", validateBody(signInZod), handleUserSignUp)

export { userRouter }

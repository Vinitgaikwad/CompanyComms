import { Hono } from "hono";
import { handleUserSignUp } from "./user.controller";
import { signInZod, signUpZod } from "./user.schema";
import { validateBody } from "../../global/middlewares/validate";

const userRouter = new Hono()

userRouter.put("/sign-up", validateBody(signUpZod), handleUserSignUp)
userRouter.put("/sign-in", validateBody(signInZod), handleUserSignUp)

export { userRouter }

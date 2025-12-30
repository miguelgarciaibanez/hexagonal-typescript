import express from "express";

import { userController } from "../../../infrastructure/dependencies";

const userRouter = express.Router();
userRouter.get("/", userController.run.bind(userController));

userRouter.post("/:id/welcome", userController.run.bind(userController));

export { userRouter };

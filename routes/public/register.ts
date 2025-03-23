import { Router } from "express";
import userController from "../../controllers/user.js";

const registerRouter = Router();

registerRouter.post("/", userController.createUser);

export default registerRouter;

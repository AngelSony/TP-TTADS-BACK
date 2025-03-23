import { Router } from "express";
import userController from "../../controllers/user.js";

const adminUserRouter = Router();

adminUserRouter.get("/",userController.getAllUsers);
adminUserRouter.post("/", userController.createUser);
adminUserRouter.get("/:id",userController.getUserById);
adminUserRouter.delete("/:id",userController.deleteUserById);
adminUserRouter.put("/:id",userController.updateUserById);
adminUserRouter.put("/activate/:id",userController.activateUserById);

export default adminUserRouter;

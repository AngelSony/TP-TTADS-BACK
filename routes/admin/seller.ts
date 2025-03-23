import { Router } from "express";
import sellerController from "../../controllers/user.js";

const adminSellerRouter = Router();

adminSellerRouter.get("/", sellerController.getAllUsers);
adminSellerRouter.post("/", sellerController.createUser);
adminSellerRouter.get("/:id", sellerController.getUserById);
adminSellerRouter.delete("/:id", sellerController.deleteUserById);
adminSellerRouter.put("/:id", sellerController.updateUserById);

export default adminSellerRouter;

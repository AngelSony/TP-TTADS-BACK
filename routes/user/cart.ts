import { Router } from "express";
import cartController from "../../controllers/cart.js";

export const userCartRouter = Router();


userCartRouter.get("/",cartController.getCart);
userCartRouter.post("/",cartController.create);

export default userCartRouter;

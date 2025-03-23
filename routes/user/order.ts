import { Router } from "express";
import OrderController from "../../controllers/order.js";

export const userOrderRouter = Router();

userOrderRouter.post("/",OrderController.createOrder);

export default userOrderRouter;

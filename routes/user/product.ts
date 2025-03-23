import { Router } from "express";
import ProductController from "../../controllers/product.js";


export const userProductRouter = Router();

userProductRouter.get("/", ProductController.getAllProducts);
userProductRouter.get("/:id", ProductController.getProductById);

export default userProductRouter;

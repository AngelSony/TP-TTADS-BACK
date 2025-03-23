import { Router } from "express";
import ProductController from "../../controllers/product.js";

//import ProductController from '../controllers/product.js'

export const sellerProductRouter = Router();

sellerProductRouter.get("/", ProductController.getAllProducts);
sellerProductRouter.post("/", ProductController.createProduct);
sellerProductRouter.get("/:id", ProductController.getProductById);
sellerProductRouter.delete("/:id", ProductController.deleteProductById);
sellerProductRouter.put("/:id", ProductController.updateProductById);

export default sellerProductRouter;

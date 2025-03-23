import { Router } from "express";
import sellerProductRouter from "./product.js";
import { isSeller } from "../../middlewares/auth_middleware.js";

const sellerRoutes = Router();

sellerRoutes.use("/product",sellerProductRouter);

export default sellerRoutes;
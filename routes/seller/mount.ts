import { Router } from "express";
import sellerProductRouter from "./product.js";

const sellerRoutes = Router();

sellerRoutes.use("/product", sellerProductRouter);

export default sellerRoutes;
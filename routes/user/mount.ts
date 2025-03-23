import { Router } from "express";
import userCartRouter from "./cart.js";
import userOrderRouter from "./order.js";
import userCategoryRouter from "./category.js";
import userProductRouter from "./product.js";
import userReviewRouter from "./review.js";

const userRoutes = Router();

userRoutes.use("/cart", userCartRouter);
userRoutes.use("/order", userOrderRouter);
userRoutes.use("/category", userCategoryRouter);
userRoutes.use("/product", userProductRouter);
userRoutes.use("/review", userReviewRouter);

export default userRoutes;
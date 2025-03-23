import { Router } from "express";
import adminCategoryRouter from "./category.js";
import adminDiscountRouter from "./discount.js";
import adminPaymentTypeRouter from "./payment_type.js";
import adminSellerRouter from "./seller.js";
import adminUserRouter from "./user.js";

const adminRoutes = Router();


adminRoutes.use("/category", adminCategoryRouter);
adminRoutes.use("/discount", adminDiscountRouter);
adminRoutes.use("/payment_type", adminPaymentTypeRouter);
adminRoutes.use("/seller", adminSellerRouter);
adminRoutes.use("/users", adminUserRouter);

export default adminRoutes;
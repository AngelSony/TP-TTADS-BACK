import { Router } from "express";

import DiscountController from "../../controllers/discount.js";

export const adminDiscountRouter = Router();

adminDiscountRouter.get("/", DiscountController.getAllDiscounts);
adminDiscountRouter.post("/", DiscountController.createDiscount);
adminDiscountRouter.get("/:id", DiscountController.getDiscountById);
adminDiscountRouter.delete("/:id", DiscountController.deleteDiscountById);
adminDiscountRouter.put("/:id", DiscountController.updateDiscountById);

export default adminDiscountRouter;

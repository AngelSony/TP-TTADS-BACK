import { Router } from "express";

import CategoryController from "../../controllers/category.js";

export const adminCategoryRouter = Router();

adminCategoryRouter.get("/", CategoryController.getAllCategories);
adminCategoryRouter.post("/", CategoryController.createCategory);
adminCategoryRouter.get("/:id", CategoryController.getCategoryById);
adminCategoryRouter.delete("/:id", CategoryController.deleteCategoryById);
adminCategoryRouter.put("/:id", CategoryController.updateCategoryById);

export default adminCategoryRouter;

import { Router } from "express";

import CategoryController from "../../controllers/category.js";

export const userCategoryRouter = Router();

userCategoryRouter.get("/", CategoryController.getAllCategories);
userCategoryRouter.get("/:id", CategoryController.getCategoryById);

export default userCategoryRouter;

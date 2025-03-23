import { Router } from "express";

import ReviewController from "../../controllers/review.js";

export const userReviewRouter = Router();

userReviewRouter.get("/", ReviewController.getAllReviews);
userReviewRouter.post("/", ReviewController.createReview);
userReviewRouter.get("/:id", ReviewController.getReviewById);
userReviewRouter.delete("/:id", ReviewController.deleteReviewById);
userReviewRouter.patch("/:id", ReviewController.updateReviewById);

export default userReviewRouter;

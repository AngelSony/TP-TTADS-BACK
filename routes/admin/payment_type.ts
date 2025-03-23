import { Router } from "express";

import PaymentTypeController from "../../controllers/payment_type.js";

export const adminPaymentTypeRouter = Router();

adminPaymentTypeRouter.get("/", PaymentTypeController.getAllPaymentTypes);
adminPaymentTypeRouter.post("/", PaymentTypeController.createPaymentType);
adminPaymentTypeRouter.get("/:id", PaymentTypeController.getPaymentTypeById);
adminPaymentTypeRouter.delete("/:id", PaymentTypeController.deletePaymentTypeById);
adminPaymentTypeRouter.patch("/:id", PaymentTypeController.updatePaymentTypeById);

export default adminPaymentTypeRouter;

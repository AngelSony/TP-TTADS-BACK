import { Router } from "express";
import adminRoutes from "./admin/mount.js";
import userRoutes from "./user/mount.js";
import sellerRoutes from "./seller/mount.js";
import publicRoutes from "./public/mount.js";
import { isAdmin, isSeller, isUser } from "../middlewares/auth_middleware.js";

const apiRouter = Router();


apiRouter.use("/admin", isAdmin,adminRoutes);
apiRouter.use("/user",isUser, userRoutes);
apiRouter.use ("/seller", isSeller,sellerRoutes);
apiRouter.use ("/public", publicRoutes);

export default apiRouter;
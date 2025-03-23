import { Router } from "express";
import loginRouter from "./login.js";
import registerRouter from "./register.js";

const publicRoutes = Router();

publicRoutes.use("/login", loginRouter);
publicRoutes.use("/register", registerRouter);

export default publicRoutes;
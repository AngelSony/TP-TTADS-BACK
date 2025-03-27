//dotenv
import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express"; // require -> commonJS
// import { corsMiddleware } from './middlewares/cors.js'
// eslint-disable-next-line no-unused-vars
import cors from "cors";
import connectDB from "./config/database.js";

import "./config/env.js";
import apiRouter from "./routes/mount.js";


connectDB();

const app = express();

app.use(json());
app.use(cors());

app.use("/api", apiRouter)

// app.use(corsMiddleware())
app.disable("x-powered-by");

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});

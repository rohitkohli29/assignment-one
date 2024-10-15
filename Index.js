import dotenv from "dotenv";
dotenv.config();

import express from "express";
import serviceRoutes from "./src/routes/service.routes.js";
import { connectDB } from "./src/config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// *** connect to database ***
connectDB();

app.use(express.json());

// *** api routes  **
app.use("/api", serviceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT number ${PORT}`);
});

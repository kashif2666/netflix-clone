import express from "express";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";

import { connectDB } from "./config/db.js";
import { ENV_VARS } from "./config/envVars.js";
import { protectRoute } from "./middleware/protectRoute.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); // will allow us to parse body
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
  connectDB();
});

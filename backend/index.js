import express from "express";
import cors from "cors";
import UserRoutes from "./routes/UserRoutes.js";
import NewsRoutes from "./routes/newsRouter.js";
import coon from "./db/coon.js";

coon();

const app = express();

//config json response

app.use(express.json());

//solve cors
app.use(
  cors({
    // origin: process.env.FRONTEND_URL || "http://localhost:3000"
    origin: "*",
  })
);

//public folder for images ;

//Routes

app.use("/users", UserRoutes);

app.use("/newsletters", NewsRoutes);

app.listen(5000, function () {
  console.log("Servidor Online!!");
});

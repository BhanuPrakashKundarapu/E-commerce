import express from "express";
// const express =require("express")
// const color=require("colors")
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectdb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"

// const dotenv=require('dotenv');
// const morgan=require('morgan');
// const connectdb =require("./config/db")
// const 
// config env
dotenv.config();
// database config
connectdb();

const app = express();
// middle ware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-commerce</h1>");
});

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `server Running ${process.env.DEV_MODE} on http://localhost:${PORT}`.bgRed
      .white
  );
});

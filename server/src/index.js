import express from "express";
import http from "http";
import dotenv from "dotenv";
import { PORT } from "./constants.js";
dotenv.config({path: "./.env"});

const app = express();

const httpServer = http.createServer(app);

httpServer.listen(PORT, ()=>{
    console.log("Bridge Server is running on port ", PORT);
})

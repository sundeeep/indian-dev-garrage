import express from "express";
import http from "http";
import dotenv from "dotenv";
import { PORT } from "./constants.js";
dotenv.config({path: "./.env"});
import {Server as SocketServer} from "socket.io";
import cors from "cors";
import os from "os";


const app = express();

const httpServer = http.createServer(app);

const socketIO = new SocketServer({
    cors: '*'
})

socketIO.attach(httpServer);

httpServer.listen(PORT, ()=>{
    console.log("Bridge Server is running on port ", PORT);
})

import express from "express";
import "dotenv/config";
import cors from "cors"
import { connectTomongo } from "./config/db";
import usersController from "./cotrollers/userController";
import adminController from "./cotrollers/admin";
import candidatesController from "./cotrollers/candidates";
import votesController  from "./cotrollers/votes";
import http from 'http'
import { Server } from "socket.io";
import { startConnection } from "./Sockets/io";

const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = http.createServer(app)
export const io = new Server(httpServer, { cors: { origin: "*",methods:"*" } })
io.on('connection',startConnection)
connectTomongo()

app.use(express.json());

app.use(cors())

app.use("/api/users", usersController);

app.use("/api/admin", adminController);

app.use("/api/votes", votesController);

app.use("/api/candidates", candidatesController);

httpServer.listen(PORT, () => {
  console.log(`Server started, Visit "http://localhost:${PORT}"`);
});
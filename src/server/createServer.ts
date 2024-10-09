import http from "http";
import express, { Express, Request, Response } from "express";
import { Server as SocketServer, Socket } from "socket.io";
import socketController from "../socket/socketController";

const createServer: Express = express();

createServer.get("/", (req: Request, res: Response): Response<string> => {
  return res.status(200).send("Server Online!");
});

createServer.use((req: Request, res: Response): Response<string> => {
  return res.status(404).send("404 - Not Found");
});

const mainServer = http.createServer(createServer);
const io = new SocketServer(mainServer, {
  cors: {
    origin: "*",
  },
});

io.use((socket: Socket, next) => {
  const jwtKey = socket.handshake.headers["jwt-token"];

  if (jwtKey === "manusiaapi") {
    next();
  } else {
    next(new Error("Authentication error: Invalid JWT token"));
  }
});

io.on("connection", async (socket: Socket) => {
  socketController(io, socket);
});

io.of("/pokemon").on("connection", async (socket: Socket) => {
  socket.emit("pokemon", "KAMU MASUK KE POKEMON");
  console.log("MASUK KE POKEMON");
});

export default mainServer;

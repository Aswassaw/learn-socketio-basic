import { Server as SocketServer, Socket } from "socket.io";

// const users: { name: string; age: number }[] = [];
// let count = 0;

export default function socketController(
  io: SocketServer,
  socket: Socket
): void {
  console.log(`Client with ID ${socket.id} connected!`);

  // socket.on("greeting", () => {
  //   socket.emit("greeting", "GOOD MORNING BASTARD!!!");
  // });

  // socket.on("addUser", (data: { name: string; age: number }) => {
  //   if (data.name && data.age) {
  //     if (!users.map((user) => user.name).includes(data.name)) {
  //       users.push(data);
  //       socket.emit("addUser", "DONE");
  //     }

  //     socket.emit("addUser", "FAILED: DATA CONFLICT");
  //   } else {
  //     socket.emit("addUser", "FAILED: BAD REQUEST");
  //   }
  // });

  // socket.on("getUsers", () => {
  //   socket.emit("getUsers", users);
  // });

  // // timeout
  // socket.on("hei", () => {
  //   socket.timeout(4000).emit(
  //     "ho",
  //     "Human",
  //     111,
  //     {
  //       name: "DANDI",
  //     },
  //     // acknowledgement
  //     (err: any, res: any) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log(res);
  //       }
  //     }
  //   );
  // });

  // socket.on("cobaAck", () => {
  //   socket.emit("cobaAck", "ANDRY", "BAGAS", () => {
  //     console.log("MANUSIA API");
  //   });
  // });

  // socket.on("ping", () => {
  //   setInterval(() => {
  //     socket.volatile.emit("ping", `PING: ${count++}`);
  //   }, 1000);
  // });

  // socket.on("sent-radio", () => {
  //   // mengirim broadcast (kecuali ke pengirim)
  //   // socket.broadcast.emit("radio", "Welcome Modafaka!");

  //   // mengirim broadcast (termasuk ke pengirim)
  //   io.emit("radio", "Welcome Modafaka!");
  // });

  // socket.on("feeling-allwithme", (name, emotion) => {
  //   io.emit(
  //     "feeling-allwithme",
  //     `My name is ${name}, and I am feeling ${emotion}`
  //   );
  // });

  // socket.on("feeling-allexceptme", (name, emotion) => {
  //   socket.broadcast.emit(
  //     "feeling-allexceptme",
  //     `My name is ${name}, and I am feeling ${emotion}`
  //   );
  // });

  // socket.once("sekali", () => {
  //   console.log("HANYA SEKALI SAJA");
  //   socket.emit("sekali", "KAMU BERUNTUNG");
  // });

  // const cb = () => {
  //   console.log("MY EVENT");
  // };

  // socket.on("my event", cb);

  // socket.on("stop my event", () => {
  //   socket.off("my event", cb);
  // });

  // socket.on("stop all my event", () => {
  //   socket.removeAllListeners();
  // });

  // socket.on("disconnect", () => {
  //   console.log(`Client with ID ${socket.id} disconnected!`);
  // });

  // socket.onAny((eventName, ...args) => {
  //   console.log(`(${socket.id}) Event ${eventName} received with args:`, args);
  // });

  // socket.onAnyOutgoing((eventName, ...args) => {
  //   console.log(`(${socket.id}) Outgoing event ${eventName} with args:`, args);
  // });

  console.log(socket.handshake);

  // socket.on("myname", (name: string) => {
  //   throw new Error(name + " GOBLOK");
  // });

  socket.on("join", () => {
    socket.join("room");
    // socket.leave("room");
    socket.emit("join", "SUCCESS JOIN");
  });

  socket.on("room-info", () => {
    socket.emit("room-info", io.sockets.adapter.rooms.get("room"));
    console.log("MY ROOM: " + socket.rooms);
    console.log(io.sockets.adapter.rooms.get("room"));
  });
}

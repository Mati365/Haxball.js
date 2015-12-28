import io from "socket.io-client";

export default class Client {
  constructor() {
    let socket = io.connect("ws://localhost:3000");
    socket.emit("setNick", "kutas321", data => {
      socket.emit("createRoom", {
          name: "kupa"
        , password: ""
      });
      setTimeout(function() {
        socket.emit("listRooms", data => {
          console.log(data);
        });
      }, 200);
    });
  }
}
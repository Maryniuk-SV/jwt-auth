import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { User } from "./../models/user.model";

@Injectable({
  providedIn: "root"
})
export class SocketIOService {
  users = this.socket.fromEvent<User[]>("users");
  user = this.socket.fromEvent<User>("user");
  error = this.socket.fromEvent<any>("error");

  constructor(private socket: Socket) {}

  getUsers() {
    this.socket.emit("getUsers");
  }

  addUser(model) {
    this.socket.emit("addUser", model);
  }

  removeUser(id) {
    this.socket.emit("removeUser", id);
  }


}

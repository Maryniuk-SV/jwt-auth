import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { UserService } from "../../service/user.service";
import { SocketIOService } from "../../service/socket-io.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  userList: any[] = [];

  constructor(
    private userService: UserService,
    private socketService: SocketIOService
  ) {}

  ngOnInit() {
    this.formInit();
    this.socketService.users.subscribe(users => {
      this.userList = [...users];
    });
    this.socketService.user.subscribe(user => {
      this.getUsers();
    });
    this.socketService.error.subscribe(err => {
      console.log("Something went wrong :( ", err);
    });
  }

  formInit() {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl()
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.addUser(this.userForm.value);
    }
  }

  addUser(model) {
    // this.userService.addUser(model).subscribe(addedRes => {
    //   console.log("addedRes: ", addedRes);
    // });
    this.socketService.addUser(model);
    this.userForm.reset();
  }

  getUsers() {
    // this.userService.getUsers().subscribe((res: any) => {
    //   this.userList = res;
    //   console.log(res);
    // });
    this.socketService.getUsers();
  }

  deleteUser(user) {
    // this.userService.removeUser(user._id).subscribe(removed => {
    //   console.log("removed: ", removed);
    // });
    this.socketService.removeUser(user._id);
  }
}

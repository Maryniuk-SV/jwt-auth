import { Component, OnInit } from "@angular/core";
// import { MenuItem } from "primeng/api";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  items: any[];

  ngOnInit() {
    this.items = [
      {
        label: "Users",
        icon: "pi pi-fw pi-file"
      },
      {
        label: "Add User",
        icon: "pi pi-fw pi-pencil"
      },
      {
        label: "Help",
        icon: "pi pi-fw pi-question"
      },
      {
        label: "Actions",
        icon: "pi pi-fw pi-cog"
      },
      { separator: true },
      {
        label: "Quit",
        icon: "pi pi-fw pi-times"
      }
    ];
  }
}

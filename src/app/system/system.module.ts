import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";

import { UsersComponent } from "./components/users/users.component";
import { SystemComponent } from "./system.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  imports: [CommonModule, SystemRoutingModule, SharedModule],
  declarations: [UsersComponent, SystemComponent, HeaderComponent]
})
export class SystemModule {}

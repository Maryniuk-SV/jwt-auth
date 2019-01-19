import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./components/users/users.component";
import { SystemComponent } from "./system.component";

const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "users" },
      { path: "users", component: UsersComponent },
      { path: "**", redirectTo: "users" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}

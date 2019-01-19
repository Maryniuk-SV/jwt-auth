import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { UserService } from "./system/service/user.service";
import { SocketIOService } from "./system/service/socket-io.service";

const config: SocketIoConfig = {
  url: "http://localhost:8888",
  options: {}
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [UserService, SocketIOService],
  bootstrap: [AppComponent]
})
export class AppModule {}

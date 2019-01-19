import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { AuthService } from "./auth/services/auth.service";
import { UserService } from "./system/service/user.service";
import { SocketIOService } from "./system/service/socket-io.service";
import { JwtInterceptor } from "./auth/services/jwt-interceptor";

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    UserService,
    SocketIOService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

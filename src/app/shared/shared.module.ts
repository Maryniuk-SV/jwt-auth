import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";

import { HttpClientModule } from "@angular/common/http";

const imports = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  InputTextModule,
  ButtonModule,
  HttpClientModule,

];

@NgModule({
  imports: [...imports],
  declarations: [],
  exports: [...imports]
})
export class SharedModule {}

import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.regForm = new FormGroup({
      name: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.regForm.value);

    if (this.regForm.valid) {
      this.router.navigate(["auth/login"]);
    }
  }
}

import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.regForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.regForm.valid) {
      const regModel = this.regForm.value;
      this.authService.registration(regModel).subscribe((registrated: any) => {
        if (registrated.success) {
          this.router.navigate(["auth/login"]);
        }
      });
    }
  }
}

import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit  {
  form: FormGroup;
  private formSubmitAttempt: boolean

  constructor(public fb: FormBuilder, private authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // isFieldInvalid(field: string) {
  //   return (
  //     (!this.form.get(field).valid && this.form.get(field).touched) ||
  //     (this.form.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }

  login() {
    // const user = {email: this.email, password: this.password}
    // this.userService.login(user).subscribe(
    //   data => {
    //     this.userService.setToken(data.token);
    //     this.router.navigateByUrl("/home");
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   }
      
    // );
    
  }
}

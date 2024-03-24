import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailDirective } from 'src/app/shared/validators/email.directive';
import { passwordsCompare } from 'src/app/shared/validators/passwords';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

  }

  emailDirectiveInstance = new EmailDirective();

  registerForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, this.emailDirectiveInstance.emailValidator()]],
    tel: [''],
    passwordGroup: this.formBuilder.group({
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
    }, {
      validators: [passwordsCompare('password', 'rePassword')]
    })
  });

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const { username, email, tel, passwordGroup: { password, rePassword } = {} } = this.registerForm.value;

    this.userService.register(username!, email!, tel!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/themes']);
    });

    //console.log(this.registerForm.value);
  }
}

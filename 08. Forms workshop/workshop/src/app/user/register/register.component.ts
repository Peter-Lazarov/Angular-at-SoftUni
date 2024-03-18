import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailDirective } from 'src/app/shared/validators/email.directive';
import { passwordsCompare } from 'src/app/shared/validators/passwords';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder) {

  }

  emailDirectiveInstance = new EmailDirective();

  registerForm = this.formBuilder.group({
    username: ['gosho', [Validators.required, Validators.minLength(4)]],
    email: ['gosho@gmail.com', [Validators.required, this.emailDirectiveInstance.emailValidator()]],
    tel: ['898282842'],
    passwordGroup: this.formBuilder.group({
      password: ['123456', [Validators.required]],
      rePassword: ['123456', [Validators.required]]
    },{
      validators: [passwordsCompare('password', 'rePassword')]
    })
  });

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);
  }
}


import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailDirective } from 'src/app/shared/validators/email.directive';

import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditMode: boolean = false;

  emailDirective = new EmailDirective();

  profileDetails: ProfileDetails = {
    username: 'John Doe',
    tel: '312-123-123',
    email: 'john.doe@gmail.com',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, this.emailDirective.emailValidator()]],
    tel: [''],
  });

  constructor(private fb: FormBuilder) {}

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    this.onToggle();
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.onToggle();
  }
}
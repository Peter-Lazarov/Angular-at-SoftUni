
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailDirective } from 'src/app/shared/validators/email.directive';

import { ProfileDetails } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{
  showEditMode: boolean = false;

  emailDirective = new EmailDirective();

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    tel: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, this.emailDirective.emailValidator()]],
    tel: [''],
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    const {username, email, tel} = this.userService.user!;

    this.profileDetails = {
      username, email, tel
    };

    this.form.setValue({
      username, email, tel
    });
  }

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.onToggle();
    });
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.onToggle();
  }
}

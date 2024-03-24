import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-theme-add',
  templateUrl: './theme-add.component.html',
  styleUrls: ['./theme-add.component.css']
})
export class ThemeAddComponent {

  constructor(private apiService: ApiService, private router: Router) {

  }

  addTheme(themeAddForm: NgForm) {
    if (themeAddForm.invalid) {
      return;
    }

    const { themeName, postText } = themeAddForm.value;
    this.apiService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes']);
    });

  }
  // themeAdd(event: Event, themeName: string, postText: string){
  //   event.preventDefault();
  //   this.apiService.createTheme(themeName, postText);

  // }
}

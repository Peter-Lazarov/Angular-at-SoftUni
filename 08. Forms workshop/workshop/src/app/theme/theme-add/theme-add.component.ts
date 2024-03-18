import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-theme-add',
  templateUrl: './theme-add.component.html',
  styleUrls: ['./theme-add.component.css']
})
export class ThemeAddComponent{
  addTheme(themeAddFormInClass: NgForm) {
    if (themeAddFormInClass.invalid) {
      return;
    }

    console.log(themeAddFormInClass.value);
  }

  // constructor(private apiService: ApiService){

  // }

  // themeAdd(event: Event, themeName: string, postText: string){
  //   event.preventDefault();
  //   this.apiService.createTheme(themeName, postText);
    
  // }
}

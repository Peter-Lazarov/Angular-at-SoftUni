import { Component} from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-theme-add',
  templateUrl: './theme-add.component.html',
  styleUrls: ['./theme-add.component.css']
})
export class ThemeAddComponent{
  constructor(private apiService: ApiService){

  }

  themeAdd(event: Event, themeName: string, postText: string){
    event.preventDefault();
    this.apiService.createTheme(themeName, postText);
    
  }
}

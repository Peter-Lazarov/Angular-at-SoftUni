import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-theme-current',
  templateUrl: './theme-current.component.html',
  styleUrls: ['./theme-current.component.css']
})
export class ThemeCurrentComponent implements OnInit{
  themeCurrent = {} as Theme;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      //console.log(data);
      
      const id = data['id'];

      this.apiService.getTheme(id).subscribe((theme) => {
        //console.log(theme);
        
        this.themeCurrent = theme;
      });
    })
  }
}

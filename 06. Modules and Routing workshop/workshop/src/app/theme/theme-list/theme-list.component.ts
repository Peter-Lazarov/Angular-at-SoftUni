import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit{
  themes: Theme[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      //console.log(themes);
      this.themes = themes;
      this.isLoading = false;
    });
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}

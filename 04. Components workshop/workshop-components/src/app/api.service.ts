import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes(){
    const api = environment.apiUrl;
    return this.http.get<Theme[]>(`${api}/themes`);
  }

  getPosts(limit?: number){
    const api = environment.apiUrl;
    let url = `${api}/posts`;
    if(limit){
      url += `?limit=${limit}`
    }

    return this.http.get<Post[]>(url);
  }
}

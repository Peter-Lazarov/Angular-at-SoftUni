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

  getThemes() {
    return this.http.get<Theme[]>(`${environment.apiUrl}/themes`);
  }

  getTheme(id: string){
    return this.http.get<Theme>(`${environment.apiUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    return this.http.post<Theme>(`/api/themes`, { themeName, postText })
  }

  getPosts(limit?: number) {
    const api = environment.apiUrl;
    let url = `${api}/posts`;
    if (limit) {
      url += `?limit=${limit}`
    }

    return this.http.get<Post[]>(url);
  }

}

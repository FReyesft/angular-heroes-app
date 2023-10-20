import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
import { enviroment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url: string = enviroment.URL
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.url}/heroes`)
  }
}

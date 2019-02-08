import { Injectable } from '@angular/core';

// Interfaces
import { Movies } from '../modelos/movies';

// Http

import { HttpClient, HttpParams } from '@angular/common/http';

// observables

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexApiMoviesService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/peliculas";


  getMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>(this.url);
  }

  insertMovie(movie: Movies):Observable<Movies>{
    return this.http.post<Movies>(this.url, movie);
  }

  deleteMovie(id): Observable<Movies>{
    return this.http.delete<Movies>(`${this.url}/${id}`);
  }

  getForId(id): Observable<Movies>{
    return this.http.get<Movies>(`${this.url}/${id}`);
  }

  updateMovie(movie: Movies): Observable<Movies>{
    return this.http.put<Movies>(`${this.url}/${movie.id}`,movie);
  }

}

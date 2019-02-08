import { Component, OnInit } from '@angular/core';

import { ConexApiMoviesService } from '../../servicios/conex-api-movies.service';

import { NgForm } from '@angular/forms';

import { Movies } from '../../modelos/movies';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css']
})
export class FormMoviesComponent implements OnInit {

  constructor(private moviesService: ConexApiMoviesService) { }

  modelMovies = new Movies();

  movies: Movies[];

  ngOnInit() {
    this.getMovies();
  }


  getMovies(){
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }


  insertMovie(event, form: NgForm){
    event.preventDefault();
    const newMovie: Movies = {
      nombre: this.modelMovies.nombre,
      director: this.modelMovies.director,
      clasificacion: this.modelMovies.clasificacion
    }
    this.moviesService.insertMovie(newMovie).subscribe(data => {
      this.movies.push(data as Movies);
    });
    form.resetForm();
  }

  deleteMovie(id){
    let c = confirm('Estás seguro?');

    if (c){
      const movies = this.movies;
      this.moviesService.deleteMovie(id).subscribe(data => {
        for(let i = 0; i < movies.length; i++) {
          if(movies[i].id == id) {
            movies.splice(i, 1);
          }
        }
      });
    } 
  }
}

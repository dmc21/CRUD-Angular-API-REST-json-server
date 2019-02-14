import { Component, OnInit } from '@angular/core';

import { ConexApiMoviesService } from '../../servicios/conex-api-movies.service';

import { NgForm } from '@angular/forms';

import { Movies } from '../../modelos/movies';

import { ToastrService } from 'ngx-toastr';

import { User } from '../../modelos/user';

import { Router } from '@angular/router';
@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css']
})
export class FormMoviesComponent implements OnInit {

  constructor(
    private moviesService: ConexApiMoviesService,
    private toast: ToastrService,
    private router: Router
    ) { }

  modelMovies = new Movies();

  movies: Movies[];

  user: string;

  ngOnInit() {
    
    if(localStorage.getItem('user-loged') == undefined){
      this.router.navigate(['/']);
    }else{
      this.getMovies();
      this.user = localStorage.getItem('user-loged');
    }
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
    this.toast.success('Insertado con éxito', 'Inserción');
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
      this.toast.success('Eliminado con éxito', 'Eliminación');
    } 
  }

  cerrarSesion(){
    localStorage.removeItem('user-loged');
    this.router.navigate(['']);
  }
}

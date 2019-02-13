import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Movies } from '../../modelos/movies';

import { ConexApiMoviesService } from '../../servicios/conex-api-movies.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {

  movie = new Movies();

  constructor(
    private moviesService: ConexApiMoviesService,
    private router: ActivatedRoute,
    private routerR: Router,
    private toast: ToastrService
    ) { }

  ngOnInit() {
    if(localStorage.getItem('user-loged') != undefined){
      let id =  this.router.snapshot.paramMap.get('id');
      this.moviesService.getForId(id).subscribe(data =>{
        this.movie = data;
        });
  }else{
    this.routerR.navigate(['/']);
  }
  }

  updateMovie(movie: NgForm){
    this.moviesService.updateMovie(this.movie).subscribe(data => {
    });
    movie.resetForm();
    this.routerR.navigate(['']);
    this.toast.success('Actualizado con éxito', 'Actualización');
  }

  volver(){
    this.routerR.navigate(['']);
  }

}

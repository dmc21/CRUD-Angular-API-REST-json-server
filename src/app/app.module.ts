import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EditMoviesComponent } from './componentes/edit-movies/edit-movies.component';
import { FormMoviesComponent } from './componentes/form-movies/form-movies.component';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: FormMoviesComponent},
  {path:'editar/:id', component: EditMoviesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EditMoviesComponent,
    FormMoviesComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

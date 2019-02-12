import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EditMoviesComponent } from './componentes/edit-movies/edit-movies.component';
import { FormMoviesComponent } from './componentes/form-movies/form-movies.component';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './componentes/login/login.component';

import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: FormMoviesComponent},
  {path:'admin/editar/:id', component: EditMoviesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EditMoviesComponent,
    FormMoviesComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

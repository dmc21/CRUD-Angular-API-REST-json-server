import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../servicios/login.service';

import { User } from '../../modelos/user';

//ngform

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myUser: User[];

  constructor(private login: LoginService, private router: Router, private toast:ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('user-loged') != undefined){
      this.router.navigate(['admin']);
    }
  }

  confirmLogin(formLogin: NgForm){

    this.login.confirmUser(formLogin.value.nickForm,formLogin.value.passForm).subscribe(data => {

      if(Object.keys(data).length == 1){
        localStorage.setItem('user-loged', formLogin.value.nickForm);
        this.router.navigate(['admin']);
      }else{
        this.toast.error('Usuario o contraseña incorrectos','Error Login');
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public email: string;
public password: string;

  constructor(private loginService: LoginService,public navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    this.loginService.loginMethod(this.email,Md5.hashStr(this.password)).subscribe(
      resultadosRest => {
        if(resultadosRest===null){
          Swal.fire({
            icon: 'error',
            title: 'Incorrect data',
          });
        }else{
          localStorage.setItem('username', resultadosRest.user);
          localStorage.setItem('email', resultadosRest.email);
          localStorage.setItem('ubication', resultadosRest.ubication);
          localStorage.setItem('token', resultadosRest.token);
          localStorage.setItem('iduser', resultadosRest.id);
          this.navCtrl.navigateRoot(['/home']);
        }
        }, error => {
        console.log(error);
        
        }
    );
  }

}

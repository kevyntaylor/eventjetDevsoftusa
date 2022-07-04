import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {
public IsAvailableSession : Boolean;
public username: string;
  constructor(public nav: NavController) {
    const  user = localStorage.getItem('username');
    if(user !== null && user !== undefined && user !== ''){
      this.username = user;
    }else{
      this.username = 'Guest';
    }
   }

  ngOnInit() {
    let user = localStorage.getItem('username');
    if(user != null && user != undefined && user != ""){
      this.IsAvailableSession = true;
    }else{
      this.IsAvailableSession = false;
    }
  }

  logout(){
    localStorage.removeItem('ubication');
    localStorage.removeItem('username');
    localStorage.removeItem('iduser');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.nav.navigateRoot(['/home']);
    window.location.reload();
  }

}

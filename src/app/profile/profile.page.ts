import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
name:string;
userId:string;
email:string;
ubication:string;
  constructor() { }

  ngOnInit() {
    this.name = localStorage.getItem('username');
    this.userId = localStorage.getItem('iduser');
    this.email = localStorage.getItem('email');
    this.ubication = localStorage.getItem('ubication');
  }

}

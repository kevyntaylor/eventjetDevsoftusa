import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import {Md5} from 'ts-md5/dist/md5';
import { RegistrarService } from '../service/registrar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
public sw: number;
public name: string;
public lastname: string;
public email: string;
public password: string;
public confirmpassword: string;
public country: string;
public city: string;
selectedFile: File;
  constructor(private registerService: RegistrarService,
    public navCtrl: NavController,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.sw = 1;
  }

  TipoClient(valor){
    this.sw = valor;
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('https://devsoftusa.com/api/upload.php', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        console.log(response);
        
      }
      );


  }

  registrar(){
    let obj = {
      id: 0,
      name: this.name,
      lastname: this.lastname,
      country: {
        country: "EEUU",
        id: 1
      },
      city: {
        city: "Tampa",
        country: {
          country: "EEUU",
          id: 1
        },
        id: 1
      },
      email: this.email,
      password: Md5.hashStr(this.password).toString()
    };

    if(Md5.hashStr(this.password) === Md5.hashStr(this.confirmpassword)){
      this.registerService.registerMethod(obj).subscribe(
        resultadosRest => {
          if(resultadosRest['id']>0){
            Swal.fire({
              icon: 'success',
              title: 'Registered user successfully',
            });
            this.navCtrl.navigateRoot(['/login']);
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Failed to register',
            });
          }                  
          }, error => {
          console.log(error);                  
          }
      );
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Password does not match',
      });
    }
  }

}

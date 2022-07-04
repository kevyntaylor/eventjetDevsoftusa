import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Md5 } from 'ts-md5';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { EventBoleteriaDTO } from '../dtos/event-boleteria-dto';
import { EventBoleteriaService } from '../service/event-boleteria.service';
@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.page.html',
  styleUrls: ['./register-event.page.scss'],
})
export class RegisterEventPage implements OnInit {
  selectedFile: File;
  selectedFile2: File;
  title : any;
  description : any;
  address : any;
  latitud : any;
  longitud : any;
  imagen : any;
  imagenBaner : any;
  dateEvent : any;
  typeEvent : any = 1;
  constructor(private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private httpClient: HttpClient,private registerService: EventBoleteriaService) { }

  ngOnInit() {
  }

  registerForm = this.formBuilder.group({
    tickets: this.formBuilder.array([])
  });

  get tickets(){
    return this.registerForm.get('tickets') as FormArray;
  }

  agregarBoleta(){
    const ticketsFormGroup  = this.formBuilder.group({
      title: '',
      price: 0,
      stock: 0
    });
    this.tickets.push(ticketsFormGroup);
  }

  removerTickets(indice: number) {
    this.tickets.removeAt(indice);
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];
  }

  onTypeEvent(event){
    this.typeEvent = event.target.value;
  }

  onFileChangedBaner(event){
    this.selectedFile2 = event.target.files[0];
  }

  onUpload() {
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    const uploadImageData2 = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData2.append('imageFile', this.selectedFile2, this.selectedFile2.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('https://devsoftusa.com/api/upload.php', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        console.log(response);   
      }
    );

    this.httpClient.post('https://devsoftusa.com/api/upload.php', uploadImageData2, { observe: 'response' })
      .subscribe((response) => {
        console.log(response); 
        //window.location.reload();  
      }
    );
  }

  registrarTypeTickets(eventId){
    let obj = this.registerForm.value['tickets'];
    let arr : EventBoleteriaDTO[] = [];
    for(let item in obj){
      let arrObj = {
        id : null,
        evento: {
          id: eventId
        },
        title: obj[item]['title'],
        stock: obj[item]['stock'],
        price: obj[item]['price']
      }
      arr.push(arrObj);
    }
    this.registerService.registerMethod(arr).subscribe(
      resultadosRest => {
        if(resultadosRest != null){
          
        }               
        }, error => {
        console.log(error);                  
        }
    );
  }

  registrar(){
    let obj ={
      date_event: this.dateEvent,
      descripcion: this.description,
      imagen: this.selectedFile.name,
      imagenbaner: this.selectedFile2.name,
      latitud: this.latitud,
      logitud:this.longitud,
      nombre: this.title,
      ubicacion:this.address,
      tipo_evento_id:this.typeEvent
    }
    this.httpClient.post('https://devsoftusa.com/api/saveEvents.php', JSON.stringify(obj), { observe: 'response' })
      .subscribe((response) => {
        if(response.status === 200){
          this.onUpload();
          this.registrarTypeTickets(response.body['evento']);
          Swal.fire({
            icon: 'success',
            title: 'Registered Event successfully',
          });
          this.navCtrl.navigateRoot(['/home']);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Failed to register',
          });
        }
      }
    );
  }

}

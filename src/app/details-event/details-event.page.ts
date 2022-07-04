import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { BoleteriaEventosService } from '../service/boleteria-eventos.service';

@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.page.html',
  styleUrls: ['./details-event.page.scss'],
})
export class DetailsEventPage implements OnInit {
  eventSelect : any;
  fecha:string;
  hora:string;
  boleterias: any[] = [];
  price:any[] = [];
  pago : any = 0;

  constructor(public navCtrl: NavController, 
    public boleteria : BoleteriaEventosService) { 
    }

  ngOnInit() {
    this.eventSelect = JSON.parse(localStorage.getItem('EventSelect'));
    this.fecha = this.eventSelect.dateEvent;
    this.fecha = this.fecha.substring(0,10);
    this.hora = this.eventSelect.dateEvent;
    this.hora = this.hora.substring(11,16);
      this.boleteria.getBoleteriaAll(this.eventSelect.id).subscribe(
        resultadosRest => {
            this.boleterias= resultadosRest;
            for(let x in this.boleterias){
              var options = '<option value="0">0</option>';
              for (let index = 1; index <= this.boleterias[x].stock; index++) {
                options += '<option value=' + index +'>' + index + '</option>';
              }
              console.log(options);
              this.boleterias[x].options = options;
            }
            console.log(this.boleterias);
            
          }, error => {
            console.log(error);
          }
      ); 
  }

  calcPrice(id,price,title,num){
    this.pago = 0;
    let obj = {
      id : id,
      title : title,
      cant : num.target.value,
      price : price
    }    
    for(let x in this.price){
      if(this.price[x].id == id){
        this.price.splice(parseInt(x),1);
      }
    }
    this.price.push(obj);
    for(let x in this.price){
      let suma = parseInt(this.price[x].price) * parseInt(this.price[x].cant);
      this.pago = this.pago + suma;
    }
    localStorage.setItem('pagos', this.pago);
  }

  checkout(){
    if(this.pago>0){
      localStorage.setItem('pagos', this.pago);
      localStorage.setItem('tickets', JSON.stringify(this.price));
    }else{
      localStorage.setItem('pagos', '0');
    }
    this.navCtrl.navigateRoot(['/checkout']);
  }

}

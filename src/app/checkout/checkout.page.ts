import { Component, OnInit } from '@angular/core';
declare var Stripe;
import { HttpClient } from "@angular/common/http";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  stripe = Stripe('pk_test_51KAzwrH87ea0XXPd4u86PHigxze3pTBvHlkS72IvikNdYA7LRge0wKXsGpcEarrMwFm3UIbjomSlUFK3BgtxLWIr00P22CRoP3');
  card: any;
  valorpago : string = '0';

  constructor(private http: HttpClient,private router: Router) {
  }

  ngOnInit() {
    let  user = localStorage.getItem('username');
    if(user === null || user == undefined || user === ''){
      console.log('test');
      
      this.router.navigate(['/login']);
    }
    this.setupStripe();
    this.valorpago = localStorage.getItem('pagos');
    if(this.valorpago=='' || this.valorpago== null){
      this.valorpago = '0'
    }
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          this.makePayment(result);
        }
      });
    });
  }

  makePayment(token) {
    var name = localStorage.getItem('username');
    var email = localStorage.getItem('email');
    var amount = localStorage.getItem('pagos')+'00';
    if(parseInt(amount)>0){
      this.http
      .post('https://nenalinda.com:7443/create-charge', {
          token: token.source.id,
          name: name,
          email:email,
          amount:amount
        })
        .subscribe(data => {
          if(data['charge']['status'] = 'succeeded'){
            let datos = {
              price:localStorage.getItem('pagos'),
              status: 'approed',
              cliente : localStorage.getItem('iduser'),
              shipping : '123',
              tax : '12'
            }
            this.valorpago = '0';
            this.router.navigate(['/mytickets']);
            Swal.fire('Transaction succesfull!', 'Your transaction has been aproved succesfully', 'success');
          }else{
            Swal.fire('Transaction Error!', 'Status: ' + data['charge']['status'], 'error');
          }
        });
    }
  }

}

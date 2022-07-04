import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  private urlRegistro = environment.apiurl + 'user';
  
  constructor(private http: HttpClient) { }

  registerMethod(body): Observable<any> {
		const url = `${this.urlRegistro}`;
		return this.http.post<any>(url, body, {
			headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')
		});
  }
}

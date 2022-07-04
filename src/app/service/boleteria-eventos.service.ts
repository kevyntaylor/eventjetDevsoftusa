import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BoleteriaEventosService {

  private urlEndpoint = environment.apiurl + 'evenTickets';
  
  constructor(private http: HttpClient) { }

  getBoleteriaAll(id): Observable<any> {
		const url = `${this.urlEndpoint}/`+id;
		return this.http.get<any>(url);
  }
}

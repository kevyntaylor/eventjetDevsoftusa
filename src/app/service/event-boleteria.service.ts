import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventBoleteriaService {
  private urlEndpoint = environment.apiurl + 'createBoleteria';
  
  constructor(private http: HttpClient) { }

  registerMethod(body): Observable<any> {
		const url = `${this.urlEndpoint}`;
		return this.http.post<any>(url, JSON.stringify(body), {
			headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
		});
  }
}

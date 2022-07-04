import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private urlEndpoint = environment.apiurl + 'eventos';
  
  constructor(private http: HttpClient) { }

  getEventsAll(): Observable<any> {
		const url = `${this.urlEndpoint}`;
		return this.http.get<any>(url);
  }


  getBanners(): Observable<any> {
		const url = `${this.urlEndpoint}/banners`;
		return this.http.get<any>(url);
  }

  getEventById(Id): Observable<any> {
		const url = `${this.urlEndpoint}/`+Id;
		return this.http.get<any>(url);
  }

}

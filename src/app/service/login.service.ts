import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserDTO } from '../dtos/user-dto';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlLogin = environment.apiurl + 'usertoken';
  
  constructor(private http: HttpClient) { }

  loginMethod(email, password): Observable<any> {
		const url = `${this.urlLogin}?email=${email}&password=${password}`;
		return this.http.get<UserDTO>(url);
  }
}

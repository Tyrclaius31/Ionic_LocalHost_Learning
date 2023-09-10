import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ConexionLocalhostService {
  urlUsuarios = "http://localhost/movil_php/obtenerUsuarios.php";
  headers: any;

  constructor(
    private http: HttpClient
  ){
    this.headers = new HttpHeaders();
    this.headers.append("Accept",'application/json');
    this.headers.append("Content-Type",'application(json');
    this.headers.append('Access-Control-Allow-Origin','*');
   }

   obtenerUsuarios(){
    let Headers = new HttpHeaders().set("Content-Type",'application/json');
    return this.http.get(`${this.urlUsuarios}`,{headers:Headers});
   }
}

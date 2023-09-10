import { Component } from '@angular/core';
import { ConexionLocalhostService } from '../services/conexion-localhost.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(private serviciolistado: ConexionLocalhostService){}
  listado: any = [];

  obtenerUsuarios(){

    this.serviciolistado.obtenerUsuarios().subscribe(
      (data) => {
        console.table(data);
        this.listado = data;
      }
    )
  };
};

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../model/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: Info = {};
  ready : boolean = false;

  equipo:any[] = [];

  constructor(private http: HttpClient) {
    // console.log('este es un servicio');
    this.cargarInfo();
    this.cargarEquipo();

  }

    private cargarInfo(){
          // Leer archivo json

    this.http.get('assets/data/data.json').subscribe((data:Info) => {
      this.ready = true;
      this.info = data;
      // console.log(this.info);
      
    })  
    }

    private cargarEquipo(){

      this.http.get('https://prueba-3726e.firebaseio.com/equipo.json').subscribe((equipo:any) => {
        this.ready = true;
        this.equipo = equipo;
        // console.log(this.equipo);
      })  

    }

}

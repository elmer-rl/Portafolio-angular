import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Producto} from './../model/producto'
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos :Producto[] = [];
  cargando :boolean= true;
  filtrado : Producto [] = [];

  constructor(private http: HttpClient) { 

    this.cargarProductos()
  }

  private cargarProductos(){

    return new Promise((resolve, reject)=> {
      
    this.http.get('https://prueba-3726e.firebaseio.com/productos_idx.json').subscribe((data:Producto[]) =>{
      this.productos = data;
      this.cargando =false;
      resolve();
    });
    });
  }

  obtenerProducto(id : string){
    
    return this.http.get(`https://prueba-3726e.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(term : string){
    if(this.productos.length == 0 ){
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar despeus de cargar los productos
        // Aplicar  filtro  

        this.filtrarProductos( term);

      })
    } else {
      // aplicar filtro
      this.filtrarProductos( term);


    }
  }

  private filtrarProductos(term : string){
    // console.log(this.productos);
    this.filtrado = [];

    term = term.toLocaleLowerCase();

    this.productos.forEach( prod =>{

      const titulolower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf( term ) >= 0 || titulolower.indexOf(term) >= 0) {
        this.filtrado.push( prod );
      }
    })
    
  }
}

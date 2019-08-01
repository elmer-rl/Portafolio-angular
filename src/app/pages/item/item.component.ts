import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoItem } from '../../model/producto-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  
  id :any =''
  prod : any =[];

  constructor(public route : ActivatedRoute, public getprod : ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametro => {
      this.id = parametro;      
    
    this.getprod.obtenerProducto(parametro['id']).subscribe((producto :any) =>{
      // console.log(producto);
      this.prod = producto;
    });
    })
  }

}

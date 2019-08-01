import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router : ActivatedRoute, public producto : ProductosService) { }

  ngOnInit() {
    this.router.params.subscribe((param)=>{
      // console.log(param['term']);

      this.producto.buscarProducto( param['term'] );
      // console.log(this.producto);
      
    })
  }
  

}

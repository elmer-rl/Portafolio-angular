import { Component, OnInit } from '@angular/core';
import { InfoService} from'../../services/info.service';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public info:InfoService, productos : ProductosService ) { 
     
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { InfoService} from'./services/info.service';
import { ProductosService } from './services/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';

  constructor(public info:InfoService,public producto :ProductosService ) { }
}

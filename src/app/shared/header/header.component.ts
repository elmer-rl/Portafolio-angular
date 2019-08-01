import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public info :  InfoService, private router : Router) { }

  ngOnInit() {
  }

  buscar(termino : string){
  
    if(termino.length <1){
      return;
    }  
      this.router.navigate(['/search', termino]);
    
  }

}

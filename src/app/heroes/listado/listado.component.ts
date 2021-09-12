import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string [] = ["Goku", "Vedita", "Blanck", "SpiderMan", "Batman", "Capitao América"];
  nombreheroeborrado: string = '';
  
  BorrarHeroe(){
    this.nombreheroeborrado =  this.heroes.shift() || '';
    console.log(this.nombreheroeborrado);

  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usua:string ="angular";
  pass:string = "123456"
  
  login(usuario:string,password:string){
    if(usuario == this.usua && password==this.pass){
      alert("Ingreso Exitoso");
    }else{
      alert("Ingreso no válido");
    }
  }
  
}

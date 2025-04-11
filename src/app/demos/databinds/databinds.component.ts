import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinds',
  imports: [CommonModule, FormsModule],
  templateUrl: 'databinds.component.html' 
})
export class DatabindsComponent {
  public contadorCliques: number = 0;
  public nome: string = "";

  adicionarClique() {
    this.contadorCliques++;
  }

  zerarContatod() {
    this.contadorCliques = 0;
  }

  keyUp(event: any) {
    //event.preventDefault();
    this.nome = event.target.value;
  }
}

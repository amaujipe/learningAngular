import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h2>La base es: <strong>{{ base }}</strong></h2>
    <button (click)="contador(-base)">-{{ base }}</button>
    <span>  {{ numero }}  </span>
    <button (click)="contador(base)">+{{ base }}</button>
  `
})

export class ContadorComponent {
  public titulo: string = 'Contador App';
  public numero: number = 0;
  public base: number = 5;

  contador( valor: number ): void {
    this.numero += valor;
  }
}


import { Component, OnInit } from '@angular/core';
import { PoButtonModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  onClick() {
    alert('Po Button!');
  }

  constructor(){}

  ngOnInit(): void {
  }

}

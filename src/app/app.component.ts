import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', icon: 'po-icon-home', shortLabel: 'Home', action: this.goHome.bind(this)},
    
    { label: 'Infográficos Interativos', icon: 'po-icon-chart-area', shortLabel: 'Interativos', 
      
      subItems: [ { label: "Crimes Violentos Letais e Mortes Violentas Intencionais", action: this.goMVI.bind(this)}, 
                  { label: 'Homicídios Dolosos', action: this.goHomicidios.bind(this)},
                  { label: 'Lesão Corporal Seguida de Morte', action: this.goLCSM.bind(this)},
                  { label: 'Outras Categorias',action: this.goOutras.bind(this) }
                ]
    },

    { label: 'Infográficos de Linha do Tempo', icon: 'po-icon-history', shortLabel: 'Tempo', 
      subItems: [ 
                  { label: 'Latrocínios e Mortes Violentas Intencionais', action: this.goLatrocinios.bind(this)}, 
                ]
    },
      
    //{ label: 'Anuário Brasileiro de Segurança Pública', icon: 'po-icon-book', shortLabel: 'ABSP', action: this.goABSP.bind(this) },
    
    { label: 'Base de Dados', icon: 'po-icon-doc-xls', shortLabel: 'Dados', action: this.goBases.bind(this) },]
    
    //{ label: 'Sobre', icon: 'po-icon-info', shortLabel: 'Sobre', action: this.goSobre.bind(this) }]
   
  

  private goHome() {
    this.router.navigateByUrl('/home');
  }

  private goABSP() {
    this.router.navigateByUrl('/anuario-brasileiro-de-segurança-publica');
  }

  private goHomicidios() {
    this.router.navigateByUrl('/homicidios-dolosos');
  }

  private goLatrocinios() {
    this.router.navigateByUrl('/latrocinios');
  }

  private goLCSM() {
    this.router.navigateByUrl('/lesao-corporal-seguida-de-morte');
  }

  private goMVI() {
    this.router.navigateByUrl('/mortes-violentas-intencionais');
  }

  private goOutras() {
    this.router.navigateByUrl('/outras-categorias');
  }

  private goBases() {
    this.router.navigateByUrl('/base-de-dados');
  }

  private goSobre() {
    this.router.navigateByUrl('/blog');
  }

  constructor(public router: Router) {}

}
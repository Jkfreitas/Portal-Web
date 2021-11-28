import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnuarioComponent } from './pages/ABSP/anuario.component';
import { HomicidiosDolososComponent } from './pages/homicidios-dolosos/homicidios-dolosos.component';
import { LatrociniosComponent } from './pages/latrocinios/latrocinios.component';
import { LcsmComponent } from './pages/lcsm/lcsm.component';
import { MviComponent } from './pages/mvi/mvi.component';
import { OutrasCategoriasComponent } from './pages/outras-categorias/outras-categorias.component';
import { BaseDeDadosComponent } from './pages/base-de-dados/base-de-dados.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EmbedVideo } from 'ngx-embed-video';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnuarioComponent,
    HomicidiosDolososComponent,
    LatrociniosComponent,
    LcsmComponent,
    MviComponent,
    OutrasCategoriasComponent,
    BaseDeDadosComponent,
    BlogComponent,
    TelaInicialComponent,
  ],
  imports: [
    EmbedVideo.forRoot(),
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([ 
  { path: '', component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'anuario-brasileiro-de-segurança-publica', component: AnuarioComponent },
  { path: 'homicidios-dolosos', component: HomicidiosDolososComponent },
  { path: 'latrocinios', component: LatrociniosComponent },
  { path: 'lesao-corporal-seguida-de-morte', component: LcsmComponent },
  { path: 'mortes-violentas-intencionais', component: MviComponent },
  { path: 'outras-categorias', component: OutrasCategoriasComponent },
  { path: 'base-de-dados', component: BaseDeDadosComponent },
  { path: 'blog', component: BlogComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

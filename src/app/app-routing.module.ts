import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './componente/barra/barra.component';
import { CardsComponent } from './componente/cards/cards.component';
import { TableComponent } from './componente/table/table.component';
import { InicioComponent } from './componente/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

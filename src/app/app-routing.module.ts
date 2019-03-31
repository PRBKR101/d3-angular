import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockVsTrendComponent } from './modules/stock-vs-trend/stock-vs-trend.component';

const routes: Routes = [
  {
    path: 'stocks-vs-trend',
    component: StockVsTrendComponent
  },
  {
    path: '',
    redirectTo : '/stocks-vs-trend',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

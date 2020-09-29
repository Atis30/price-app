import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplaypriceComponent } from './displayprice/displayprice.component';
import { PriceindexComponent } from './priceindex/priceindex.component';

const routes: Routes = [
  {
    path: '',
    component: PriceindexComponent,
  },
  {
    path: 'display',
    component: DisplaypriceComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

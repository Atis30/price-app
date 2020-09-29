import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceindexComponent } from '../priceindex/priceindex.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [PriceindexComponent],
  imports: [CommonModule, FormsModule],
  exports: [PriceindexComponent],
})
export class PriceindexModule {}
